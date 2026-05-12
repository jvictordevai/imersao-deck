import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import JSZip from 'jszip';

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;

export interface CapturedSlide {
  id: string;
  title: string;
  dataUrl: string;
}

interface CaptureOptions {
  onProgress?: (current: number, total: number, slideTitle: string) => void;
}

/**
 * Capture every slide rendered inside the export container into PNG data URLs.
 * Each slide must have `data-slide-export` attribute and `data-slide-id` attribute.
 */
export async function captureSlides(
  container: HTMLElement,
  opts: CaptureOptions = {},
): Promise<CapturedSlide[]> {
  const nodes = Array.from(container.querySelectorAll<HTMLElement>('[data-slide-export]'));
  const results: CapturedSlide[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const id = node.dataset.slideId ?? String(i + 1).padStart(2, '0');
    const title = node.dataset.slideTitle ?? `Slide ${id}`;

    opts.onProgress?.(i, nodes.length, title);

    const dataUrl = await toPng(node, {
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: 'oklch(10% 0.02 260)',
      style: {
        transform: 'none',
        margin: '0',
      },
    });

    results.push({ id, title, dataUrl });
  }

  opts.onProgress?.(nodes.length, nodes.length, 'Concluído');
  return results;
}

export async function exportPDF(slides: CapturedSlide[], filename = 'imersao-deck.pdf'): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [SLIDE_WIDTH, SLIDE_HEIGHT],
    compress: true,
    hotfixes: ['px_scaling'],
  });

  slides.forEach((slide, i) => {
    if (i > 0) pdf.addPage([SLIDE_WIDTH, SLIDE_HEIGHT], 'landscape');
    pdf.addImage(slide.dataUrl, 'PNG', 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT, undefined, 'FAST');
  });

  pdf.save(filename);
}

export async function exportZipPNG(slides: CapturedSlide[], filename = 'imersao-deck-slides.zip'): Promise<void> {
  const zip = new JSZip();

  slides.forEach((slide, i) => {
    const num = String(i + 1).padStart(2, '0');
    const safeTitle = slide.title.replace(/[^a-zA-Z0-9-]+/g, '-').toLowerCase();
    const base64 = slide.dataUrl.split(',')[1];
    zip.file(`${num}-${safeTitle}.png`, base64, { base64: true });
  });

  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
  triggerDownload(blob, filename);
}

export function exportSinglePNG(slide: CapturedSlide): void {
  const link = document.createElement('a');
  link.href = slide.dataUrl;
  link.download = `${slide.id}-${slide.title.replace(/[^a-zA-Z0-9-]+/g, '-').toLowerCase()}.png`;
  link.click();
}

function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
