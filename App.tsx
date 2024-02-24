import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';
import { ConsultaScreen } from './src/screens/ConsultaScreen';

const App = () => {
  return (
      <SafeAreaView style={styles.backGround}>
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />
        <ConsultaScreen />
      </SafeAreaView>
  )
}

export default App;