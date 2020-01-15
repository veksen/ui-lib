import React from 'react';
import classnames from 'classnames';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import * as SC from './select.styles';

export type ISelectSize = 'xsmall' | 'small' | 'large';

export interface ISelectOption {
  value: React.ReactText;
  text: React.ReactText;
}

export interface ISelectProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: ISelectSize;
  block?: boolean;
  disabled?: boolean;
  options: ISelectOption[];
}

export const Select: React.FC<ISelectProps> = ({ size = 'small', options, ...restProps }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [selected, setSelected] = React.useState<ISelectOption | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  useOnClickOutside(ref, () => setOpen(false));

  React.useEffect(() => {
    if (options.length) {
      setSelected(options[0]);
    }
  }, []);

  const selectOption = (option: ISelectOption) => {
    setOpen(false);
    setSelected(option);
  };

  const classNames = classnames(
    `of-size--${size}`,
    {
      'is-block': restProps.block,
      'is-open': open,
    },
    restProps.className
  );

  return (
    <SC.SelectWrapper className={classNames} {...restProps} ref={ref}>
      <SC.Selected onClick={() => setOpen(prevState => !prevState)}>
        {selected?.text}
        <SC.Arrow />
      </SC.Selected>
      {options.length ? (
        <SC.Options>
          {options
            .filter(({ value }) => value !== selected?.value)
            .map(option => (
              <SC.Option
                key={option.value}
                onClick={() => {
                  selectOption(option);
                }}
              >
                {option.text}
              </SC.Option>
            ))}
        </SC.Options>
      ) : null}
    </SC.SelectWrapper>
  );
};
