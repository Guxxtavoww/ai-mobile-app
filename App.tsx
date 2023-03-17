import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_700Bold,
  NotoSans_800ExtraBold,
} from '@expo-google-fonts/noto-sans';

import { Loader } from '@components/index';
import Contexts from 'contexts';

const App: React.FC = () => {
  const [loadedFonts] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    NotoSans_800ExtraBold,
  });

  if (!loadedFonts) return <Loader />;

  return (
    <SafeAreaProvider>
      <Contexts>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </Contexts>
    </SafeAreaProvider>
  );
};

export default App;
