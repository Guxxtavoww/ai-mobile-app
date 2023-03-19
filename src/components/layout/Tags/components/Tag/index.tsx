import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

import { styles } from './styles';

interface iTagProps extends TouchableOpacityProps {
  title: string;
}

const Tag: React.FC<iTagProps> = ({ title, ...rest }) => (
  <TouchableOpacityAnimated
    style={styles.container}
    entering={FadeIn}
    exiting={FadeOut}
    layout={Layout}
    {...rest}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacityAnimated>
);

export default Tag;
