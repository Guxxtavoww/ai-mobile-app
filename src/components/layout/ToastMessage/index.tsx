import React from 'react';
import { Text } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';

import { styles } from './styles';

interface iToastMessageProps {
  message: string;
}

const ToastMessage: React.FC<iToastMessageProps> = ({ message }) => (
  <Animated.View
    style={styles.container}
    entering={SlideInUp.duration(700)}
    exiting={SlideOutUp.duration(700)}
  >
    <Text style={styles.text}>{message}</Text>
  </Animated.View>
);

export default ToastMessage;