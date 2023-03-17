import { View, ActivityIndicator } from 'react-native';

import { THEME } from 'styles/theme';

import { styles } from './styles';

const Loader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator color={THEME.COLORS.PRIMARY} />
  </View>
);

export default Loader;
