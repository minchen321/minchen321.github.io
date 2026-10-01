import { useEffect, useRef } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  'summary',
  'video[controls]',
  'audio[controls]',
  '[tabindex]',
].join(',');

export const getFocusableElements = (container) =>
  Array.from(container.querySelectorAll(FOCUSABLE)).filter((element) => {
    if (element.disabled || element.tabIndex < 0) return false;
    for (let node = element; node; node = node.parentElement) {
      const style = window.getComputedStyle(node);
      if (
        node.hidden ||
        node.hasAttribute('inert') ||
        node.getAttribute('aria-hidden') === 'true' ||
        style.display === 'none' ||
        style.visibility === 'hidden'
      )
        return false;
      if (node === container) break;
    }
    return true;
  });

export const useFocusTrap = (ref, enabled, onEscape, backgroundSelector) => {
  const escapeRef = useRef(onEscape);
  useEffect(() => {
    escapeRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    const container = ref.current;
    if (!enabled || !container) return;
    const trigger = document.activeElement;
    const focusFirst = () => {
      const target =
        container.querySelector('[data-autofocus]') ||
        getFocusableElements(container)[0] ||
        container;
      target.focus({ preventScroll: true });
    };
    focusFirst();

    const background = backgroundSelector
      ? Array.from(document.querySelectorAll(backgroundSelector))
      : [];
    const previousInert = background.map((element) =>
      element.getAttribute('inert')
    );
    background.forEach((element) => element.setAttribute('inert', ''));

    const handleFocus = (event) => {
      if (!container.contains(event.target)) focusFirst();
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        escapeRef.current();
      }
      if (event.key !== 'Tab') return;
      const items = getFocusableElements(container);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first) {
        event.preventDefault();
        container.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('focusin', handleFocus);
      background.forEach((element, index) => {
        if (previousInert[index] === null) element.removeAttribute('inert');
        else element.setAttribute('inert', previousInert[index]);
      });
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [ref, enabled, backgroundSelector]);
};
