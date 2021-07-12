import { useCallback, useEffect, useRef } from 'react';

export const useClickOutsideListenerRef = (
  onClose: () => void,
  isOpen: boolean
) => {
  const ref = useRef(null);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target) && isOpen) {
        onClose?.();
      }
    },
    [ref.current, isOpen]
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [isOpen]);

  return ref;
};
