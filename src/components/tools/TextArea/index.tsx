import { forwardRef, memo, useMemo } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from 'styles/theme';

import { styles } from './style';

interface iTextArea extends TextInputProps {
  onClear?: () => void;
}

const TextArea = forwardRef<TextInput, iTextArea>((props, ref) => {
  const { onClear, value, editable, ...rest } = props;

  const canShowButton = useMemo(
    () => onClear && value && value?.length > 0,
    [onClear, value]
  );

  return (
    <View style={[styles.container, !editable && styles.disabled]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={THEME.COLORS.GRAY_300}
        multiline
        value={value}
        editable={editable}
        ref={ref}
        {...rest}
      />

      {canShowButton ? (
        <TouchableOpacity style={styles.clear} onPress={onClear}>
          <MaterialIcons name="close" size={16} color={THEME.COLORS.GRAY_300} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
});

const MemorizedTextArea = memo(TextArea) as typeof TextArea;

export default MemorizedTextArea;
