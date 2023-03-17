import {
  Modal as ReactNativeModal,
  ModalProps,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

import { THEME } from 'styles/theme';
import { FCWithChildren } from 'types';

import { styles } from './styles';

const BlurViewAnimated = Animated.createAnimatedComponent(BlurView);

interface iModalProps extends ModalProps {
  title: string;
  onClose: () => void | Promise<void>;
}

const Modal: FCWithChildren<iModalProps> = ({
  title,
  onClose,
  children,
  ...rest
}) => (
  <ReactNativeModal transparent {...rest}>
    <BlurViewAnimated style={styles.overlay} entering={FadeIn} intensity={4}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={24}
              color={THEME.COLORS.GRAY_400}
            />
          </TouchableOpacity>
        </View>
        {children ? children : null}
      </View>
    </BlurViewAnimated>
  </ReactNativeModal>
);

export default Modal;
