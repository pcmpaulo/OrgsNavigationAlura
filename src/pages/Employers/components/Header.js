import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';

import {loadHeader} from '../../../services/loadData';

class HeaderComponent extends React.Component {
  state = {
    header: {
      welcome: '',
      description: '',
    },
  };
  componentDidMount() {
    const headerResponse = loadHeader();
    this.setState({header: headerResponse});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.imageHeader} />
        <Text style={styles.helloText}>{this.state.header.welcome}</Text>
        <Text style={styles.phraseText}>{this.state.header.description}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imageHeader: {
    width: 70,
    height: 28,
  },
  helloText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  phraseText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default HeaderComponent;
