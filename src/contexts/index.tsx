import { FCWithChildren } from 'types';
import { ComposeProviders } from '@components/index';

import { ToastProvider } from './ToastContext';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProviders with={[ToastProvider]}>{children}</ComposeProviders>
);

export default Contexts;
