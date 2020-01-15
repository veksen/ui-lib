import styled from 'styled-components';
import color from '../../design/color';
import fontFamily from '../../design/fontFamily';
import { Triangle } from './triangle.icon';

export const SelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
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

  &.is-block {
    width: 100%;
  }

  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 21px;
  background: ${color.charcoal};
  color: #fff;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

export const Arrow = styled(Triangle)`
  margin-left: 8px;
  width: 11px;
`;

export const Options = styled.div`
  background: ${color.charcoal};
  color: #fff;
  border-radius: 3px;
  padding: 8px 0;
  opacity: 0;
  transition: opacity 0.3s, margin-top 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  margin-top: -30px;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 7px 18px rgba(0, 0, 0, 0.2);

  ${SelectWrapper}.is-open & {
    opacity: 1;
    margin-top: 4px;
    pointer-events: auto;
  }
`;

export const Option = styled.div`
  padding: 4px 21px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
