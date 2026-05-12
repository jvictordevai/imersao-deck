import { useEffect } from 'react';

interface KeyboardNavOptions {
  onNext: () => void;
  onPrev: () => void;
  onFirst?: () => void;
  onLast?: () => void;
  onFullscreen?: () => void;
  onPrint?: () => void;
  onOverview?: () => void;
  enabled?: boolean;
}

const NEXT_KEYS = new Set(['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter', 'n']);
const PREV_KEYS = new Set(['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace', 'p']);

export function useKeyboardNav({
  onNext,
  onPrev,
  onFirst,
  onLast,
  onFullscreen,
  onPrint,
  onOverview,
  enabled = true,
}: KeyboardNavOptions): void {
  useEffect(() => {
    if (!enabled) return;

    const handler = (e: KeyboardEvent) => {
      // Avoid hijacking when user typing in inputs
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (NEXT_KEYS.has(e.key)) {
        e.preventDefault();
        onNext();
      } else if (PREV_KEYS.has(e.key)) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        onFirst?.();
      } else if (e.key === 'End') {
        e.preventDefault();
        onLast?.();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onFullscreen?.();
      } else if ((e.key === 'p' || e.key === 'P') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        onPrint?.();
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'Escape') {
        if (e.key === 'Escape') {
          // overview is toggled with O; Escape only closes if open
          onOverview?.();
        } else {
          e.preventDefault();
          onOverview?.();
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onNext, onPrev, onFirst, onLast, onFullscreen, onPrint, onOverview, enabled]);
}
