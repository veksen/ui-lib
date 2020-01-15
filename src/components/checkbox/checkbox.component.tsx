import React from 'react';
import classnames from 'classnames';
import * as SC from './checkbox.styles';

export type ICheckboxSize = 'xsmall' | 'small' | 'large';

export interface ICheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: ICheckboxSize;
  disabled?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ size = 'small', ...restProps }) => {
  const [selected, setSelected] = React.useState<boolean>(false);

  const toggle = () => {
    setSelected(prevState => !prevState);
  };

  const classNames = classnames(
    `of-size--${size}`,
    {
      'is-selected': selected,
    },
    restProps.className
  );

  return (
    <SC.CheckboxWrapper className={classNames} {...restProps} onClick={toggle}>
      <SC.Box />
      {restProps.children}
    </SC.CheckboxWrapper>
  );
};
