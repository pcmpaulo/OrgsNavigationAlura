import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import EmployersPage from "./src/pages/Employers";
import BasketPage from "./src/pages/Basket";
import employers from "./src/mocks/employers";
import basket from "./src/mocks/basket";


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/*<EmployersPage />*/}
      <BasketPage
        employer={employers.list[1]}
        items={basket.items}
        details={basket.details}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
