import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';

import { THEME } from 'styles/theme';

import { styles } from './styles';

interface iButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

const Button: React.FC<iButtonProps> = ({ title, isLoading, ...rest }) => (
  <TouchableOpacity
    style={[styles.container, isLoading && styles.disabled]}
    activeOpacity={0.7}
    disabled={!!isLoading}
    {...rest}
  >
    {isLoading ? (
      <ActivityIndicator color={THEME.COLORS.GRAY_200} size="small" />
    ) : (
      <Text style={styles.title}>{title}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
