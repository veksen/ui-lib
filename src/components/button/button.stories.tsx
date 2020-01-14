import React from 'react';
import { ButtonsWrapper } from '../buttons-wrapper/buttons-wrapper.component';
import { Button, IButtonSize, IButtonVariant } from './button.component';

export default {
  title: 'Button',
};

const variants: IButtonVariant[] = ['main', 'emphasize', 'success', 'danger', 'reversed'];
const sizes: IButtonSize[] = ['xsmall', 'small', 'large'];

export const base = () => (
  <ButtonsWrapper vertical alignment="left">
    {sizes.map(size => (
      <>
        {variants.map(variant => (
          <Button size={size} variant={variant}>
            {size} regular
          </Button>
        ))}
      </>
    ))}
  </ButtonsWrapper>
);

export const ghost = () => (
  <ButtonsWrapper vertical alignment="left">
    {sizes.map(size => (
      <>
        {variants.map(variant => (
          <Button size={size} variant={variant} ghost>
            {size} ghost
          </Button>
        ))}
      </>
    ))}
  </ButtonsWrapper>
);

export const text = () => (
  <ButtonsWrapper vertical alignment="left">
    {sizes.map(size => (
      <>
        {variants.map(variant => (
          <Button size={size} variant={variant} text>
            {size} ghost
          </Button>
        ))}
      </>
    ))}
  </ButtonsWrapper>
);
