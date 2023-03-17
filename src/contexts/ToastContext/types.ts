export interface iFunctionProps {
  type: 'success' | 'error';
}

export interface iToastContextProps {
  toast: (message: string, props?: iFunctionProps) => void;
}
