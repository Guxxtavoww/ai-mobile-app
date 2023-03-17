import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '@styles/theme';
import { FCWithChildren } from 'types';

import { styles } from './styles';

interface iHeaderProps {
  title: string;
}

const Header: FCWithChildren<iHeaderProps, true> = ({ children, title }) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.7}>
      <MaterialIcons
        name="arrow-back-ios"
        size={24}
        color={THEME.COLORS.GRAY_300}
      />
    </TouchableOpacity>
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
    {children}
  </View>
);

export default Header;
