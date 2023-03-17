import { forwardRef, memo } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { THEME } from '@styles/theme';

import { styles } from './styles';

interface iInputProps extends TextInputProps {
  name: string;
  hasMarginBottom?: boolean;
}

const Input = forwardRef<TextInput, iInputProps>((props, ref) => {
  const { name, hasMarginBottom, ...rest } = props;

  return (
    <TextInput
      id={name}
      ref={ref}
      style={[styles.container, hasMarginBottom && { marginBottom: 10 }]}
      placeholderTextColor={THEME.COLORS.GRAY_300}
      {...rest}
    />
  );
});

const MemorizedInput = memo(Input) as typeof Input;

export default MemorizedInput;
