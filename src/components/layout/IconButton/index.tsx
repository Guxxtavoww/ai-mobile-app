import React, { useState, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  PressableProps,
} from 'react-native';

import { THEME } from 'styles/theme';

import { styles } from './styles';

type PropsFunction = (e?: GestureResponderEvent) => void | Promise<void>;

interface iIconButtonProps extends PressableProps {
  isLoading?: boolean;
  size?: 'primary_size' | 'secondary_size';
  iconName?: keyof typeof MaterialIcons.glyphMap;
  onPressIn?: PropsFunction;
  onPressOut?: PropsFunction;
}

const IconButton: React.FC<iIconButtonProps> = ({
  isLoading,
  size,
  onPressIn,
  onPressOut,
  iconName,
  ...rest
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnPressIn = useCallback(
    (e: GestureResponderEvent) => {
      setIsActive(true);
      if (onPressIn) onPressIn(e);
    },
    [onPressIn]
  );

  const handleOnPressOut = useCallback(
    (e: GestureResponderEvent) => {
      setIsActive(true);
      if (onPressOut) onPressOut(e);
    },
    [onPressOut]
  );

  return (
    <Pressable
      style={[
        styles.container,
        styles[size || 'primary_size'],
        isActive ? styles.active : styles.inative,
      ]}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={THEME.COLORS.GRAY_200} size="small" />
      ) : (
        <MaterialIcons
          name={iconName}
          size={size === 'primary_size' ? 24 : 32}
          color={THEME.COLORS.GRAY_300}
        />
      )}
    </Pressable>
  );
};

export default IconButton;
