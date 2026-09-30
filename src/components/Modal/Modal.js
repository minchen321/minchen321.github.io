import React from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ModalSurface, ModalCloseButton } from './styles';
import CloseIcon from './close-icon.svg';

const FOCUSABLE = [
  'a[href]',
  'button:not(:disabled)',
  'input:not(:disabled):not([type="hidden"])',
  'textarea:not(:disabled)',
  'select:not(:disabled)',
  '[tabindex="0"]',
].join(',');

export const Modal = ({
  children,
  className,
  label,
  onClose,
  enterAnimation = 'animate__fadeIn',
  exitAnimation = 'animate__fadeOut',
  exitDuration = 300,
}) => {
  const [isClosing, setIsClosing] = React.useState(false);
  const dialogRef = React.useRef(null);
  const closeTimer = React.useRef(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  useBodyScrollLock();

  React.useEffect(() => {
    const trigger = document.activeElement;
    dialogRef.current.querySelector('button').focus();
    return () => {
      window.clearTimeout(closeTimer.current);
      if (trigger?.isConnected) trigger.focus();
    };
  }, []);

  const close = () => {
    if (closeTimer.current !== null) return;
    if (reducedMotion) {
      onClose();
      return;
    }
    setIsClosing(true);
    closeTimer.current = window.setTimeout(onClose, exitDuration);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      close();
    }
    if (event.key !== 'Tab') return;
    const items = Array.from(
      dialogRef.current.querySelectorAll(FOCUSABLE)
    ).filter((element) => !element.closest('[hidden], [aria-hidden="true"]'));
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return createPortal(
    <ModalSurface
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={`${className || ''} animate__animated ${
        isClosing ? exitAnimation : enterAnimation
      }`}
      style={{ '--animate-duration': `${isClosing ? exitDuration : 500}ms` }}
    >
      <ModalCloseButton type="button" onClick={close} aria-label="Close dialog">
        <img src={CloseIcon} alt="" />
      </ModalCloseButton>
      {children}
    </ModalSurface>,
    document.body
  );
};
