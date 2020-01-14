import React from 'react';
import * as SC from './buttons-wrapper.styles';

export interface IButtonsWrapperProps extends React.HTMLAttributes<HTMLElement> {
  vertical?: boolean;
  alignment?: 'center' | 'left' | 'right';
}

export const ButtonsWrapper: React.FC<IButtonsWrapperProps> = props => {
  const { children, ...restProps } = props;
  return <SC.ButtonsWrapperWrapper {...restProps}>{children}</SC.ButtonsWrapperWrapper>;
};
