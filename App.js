import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import TabRouter from './src/router/TabRouter';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TabRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
