import { useEffect } from 'react';
import { AppState } from 'react-native';

export const useAppLifecycle = (onBackground: () => void) => {
  useEffect(() => {
    const sub = AppState.addEventListener('change', state => {
      if (state === 'background') {
        onBackground();
      }
    });

    return () => sub.remove();
  }, []);
};
