import { useEffect } from 'react';
import { usePageTitle } from './usePageTitle';
import { trackPageView } from '../analytics';

export const usePageTracking = (title) => {
  usePageTitle(title);
  useEffect(() => {
    trackPageView(title);
  }, [title]);
};
