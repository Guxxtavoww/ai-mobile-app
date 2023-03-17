import { FC, ReactNode } from 'react';

export type Children = {
  children: ReactNode;
};

export type FCWithChildren<
  ComponentProps extends object = {},
  IsChildrenRequired extends boolean = false
> = FC<
  IsChildrenRequired extends true
    ? ComponentProps & Children
    : ComponentProps & Partial<Children>
>;
