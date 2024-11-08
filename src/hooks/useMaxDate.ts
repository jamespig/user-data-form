import { useCallback } from 'react';

export const useMaxDate = () => {
  const getMaxDate = useCallback(() => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() - 1);
    return maxDate.toISOString().split('T')[0];
  }, []);

  return getMaxDate();
};