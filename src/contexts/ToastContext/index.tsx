import { createContext, useContext, useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { FCWithChildren } from 'types';
import { ToastMessage } from '@components/index';

import { iToastContextProps } from './types';

const ToastContext = createContext<iToastContextProps>(
  {} as iToastContextProps
);

export const ToastProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [isToastRendering, setIsToastRendering] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const toast: iToastContextProps['toast'] = useCallback((message, _props) => {
    setToastMessage(message);

    setIsToastRendering(true);

    setInterval(() => {
      setIsToastRendering(false);
    }, 800);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {isToastRendering ? <ToastMessage message={toastMessage} /> : null}
    </ToastContext.Provider>
  );
};

export function useToast(): iToastContextProps {
  const context = useContext(ToastContext);

  if (context) {
    Alert.alert('Usagem inválida');
    throw new Error('Usagem inválida');
  }

  return context;
}
