import { StyleSheet } from 'react-native';

import { THEME } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    miHeight: 64,
    maxHeight: 64,
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLORS.PRIMARY,
  },
  title: {
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.SIZE.MD,
  },
  disabled: {
    opacity: 0.5,
  },
});
