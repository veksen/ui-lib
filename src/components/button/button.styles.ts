import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import color from '../../design/color';
import fontFamily from '../../design/fontFamily';
import { IButtonVariant, IButtonProps } from './button.component';

const padding = () => {
  return css`
    padding: 10px 14px;

    &.of-size--large {
      padding: 14px 18px;
    }

    &.of-size--xsmall {
      padding: 2px 5px;
    }
  `;
};

const fontSize = () => {
  return css`
    font-size: 16px;

    &.of-size--xsmall {
      font-size: 10px;
    }
  `;
};

const getColors = ({ variant }: { variant: IButtonVariant }) => {
  switch (variant) {
    case 'main':
      return {
        base: color.charcoal,
        active: color.charcoalDarker,
      };
    case 'emphasize':
      return {
        base: color.gold,
        active: color.goldDarker,
      };
    case 'success':
      return {
        base: color.success,
        active: color.successDarker,
      };
    case 'danger':
      return {
        base: color.danger,
        active: color.dangerDarker,
      };
    case 'reversed':
      return {
        base: '#fff',
        active: '#fff',
      };
  }
};

export const Inner = styled.div``;

function baseVariant(name: IButtonVariant) {
  const background = getColors({ variant: name });

  return css`
    background: ${background.base};
    border-color: ${background.base};
    color: ${name !== 'reversed' ? '#fff' : color.charcoal};

    &.is-ghost {
      background: transparent !important;
      color: ${background.base} !important;
    }

    &:hover,
    &:focus {
      background: ${background.active};
      border-color: ${background.active};
      box-shadow: 0 2px 5px ${transparentize(0.85, background.base)};

      &.is-ghost {
        box-shadow: 0 0 5px ${transparentize(0.85, background.base)},
          inset 0 0 7px ${transparentize(0.5, background.base)};
      }
    }
  `;
}

function textVariant(name: IButtonVariant) {
  const background = getColors({ variant: name });

  return css`
    background: transparent;
    color: ${background.base};
    border: 0;
    border-radius: 0;
    padding-bottom: 4px;
    margin-bottom: 8px;

    ${Inner} {
      border-bottom: 1px solid ${background.base};
    }

    &:hover,
    &:focus {
      color: ${background.active};
      margin-bottom: 7px;

      ${Inner} {
        border-color: ${background.active};
        border-bottom-width: 2px;
      }
    }
  `;
}

const baseButtonStyles = () => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 12px 14px;
  text-decoration: none;
  border-radius: 8px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
  ${fontSize()};
  line-height: 20px;
  font-family: ${fontFamily.button};
  font-weight: 500;

  &.is-block {
    width: 100%;
  }

  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const ButtonWrapper = styled.button<IButtonProps>`
  ${baseButtonStyles()};
  border: 2px solid;
  ${padding()};

  &.is-loud {
    text-transform: uppercase;
  }
`;

export const BaseButtonWrapper = styled(ButtonWrapper)`
  &.of-variant--main {
    ${baseVariant('main')};
  }

  &.of-variant--emphasize {
    ${baseVariant('emphasize')};
  }

  &.of-variant--success {
    ${baseVariant('success')};
  }

  &.of-variant--danger {
    ${baseVariant('danger')};
  }

  &.of-variant--reversed {
    ${baseVariant('reversed')};
  }
`;

export const TextButtonWrapper = styled(ButtonWrapper)`
  &.of-variant--main {
    ${textVariant('main')};
  }

  &.of-variant--emphasize {
    ${textVariant('emphasize')};
  }

  &.of-variant--success {
    ${textVariant('success')};
  }

  &.of-variant--danger {
    ${textVariant('danger')};
  }

  &.of-variant--reversed {
    ${textVariant('reversed')};
  }
`;
