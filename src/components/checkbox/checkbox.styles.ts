import styled from 'styled-components';
// import color from '../../design/color';
import fontFamily from '../../design/fontFamily';

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
  line-height: 20px;
  font-family: ${fontFamily.button};
  font-weight: 500;
  position: relative;

  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const Box = styled.div`
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  background: #ddd;
  border-radius: 4px;
  border: 4px solid #ddd;
  margin-right: 8px;

  &:hover {
    background: #aaa;
  }

  ${CheckboxWrapper}.is-selected & {
    background: #000;
  }
`;
