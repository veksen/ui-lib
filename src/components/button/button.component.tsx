import React, { useMemo } from 'react';
import classnames from 'classnames';
import * as SC from './button.styles';

export type IButtonVariant = 'main' | 'emphasize' | 'success' | 'danger' | 'reversed';

export type IButtonSize = 'xsmall' | 'small' | 'large';

interface IBaseButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: IButtonVariant;
  size?: IButtonSize;
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  ghost?: boolean;
}

interface IButtonAsTextProps extends IBaseButtonProps {
  text: boolean;
  ghost: undefined;
}

interface IButtonAsGhostProps extends IBaseButtonProps {
  ghost: boolean;
  text: undefined;
}

export type IButtonProps = IBaseButtonProps | IButtonAsGhostProps | IButtonAsTextProps;

export const Button: React.FC<IButtonProps> = ({ variant = 'main', size = 'small', ...restProps }) => {
  const classNames = classnames(
    `of-variant--${variant}`,
    `of-size--${size}`,
    {
      'is-active': restProps.active,
      'is-ghost': restProps.ghost,
      'is-block': restProps.block,
    },
    restProps.className
  );

  const ButtonWrapper = useMemo(() => {
    if (restProps.hasOwnProperty('text')) {
      return SC.TextButtonWrapper;
    }

    return SC.BaseButtonWrapper;
  }, [restProps]);

  return (
    <ButtonWrapper className={classNames} {...restProps} disabled={restProps.disabled}>
      <SC.Inner>{restProps.children}</SC.Inner>
    </ButtonWrapper>
  );
};
