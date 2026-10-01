import React from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ModalSurface, ModalCloseButton } from './styles';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import CloseIcon from './close-icon.svg';

export const Modal = ({
  children,
  className,
  label,
  closeCategory = 'cta',
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

  React.useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const close = () => {
    if (closeTimer.current !== null) return;
    if (reducedMotion) {
      onClose();
      return;
    }
    setIsClosing(true);
    closeTimer.current = window.setTimeout(onClose, exitDuration);
  };

  useFocusTrap(dialogRef, true, close, '#root');

  return createPortal(
    <ModalSurface
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      className={`${className || ''} animate__animated ${
        isClosing ? exitAnimation : enterAnimation
      }`}
      style={{ '--animate-duration': `${isClosing ? exitDuration : 500}ms` }}
    >
      <ModalCloseButton
        type="button"
        onClick={close}
        aria-label="Close dialog"
        data-category={closeCategory}
      >
        <img src={CloseIcon} alt="" />
      </ModalCloseButton>
      {children}
    </ModalSurface>,
    document.body
  );
};
