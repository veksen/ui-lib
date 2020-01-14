import styled, { css } from 'styled-components';
import space from '../../design/space';
import { IButtonsWrapperProps } from './buttons-wrapper.component';
import { ButtonWrapper as Button } from '../button/button.styles';

const alignment = (props: IButtonsWrapperProps) => {
  switch (props.alignment) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'center';
  }
};

export const ButtonsWrapperWrapper = styled.div<IButtonsWrapperProps>`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  align-items: ${props => (props.vertical ? alignment(props) : 'center')};
  justify-content: ${props => (!props.vertical ? alignment(props) : 'center')};

  ${Button} + ${Button} {
    ${props => {
      if (props.vertical) {
        return css`
          margin-top: ${space.sm};
        `;
      }

      return css`
        margin-left: ${space.sm};
      `;
    }}
  }
`;
