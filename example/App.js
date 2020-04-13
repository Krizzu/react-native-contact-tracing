import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import ContactTracing from '../'

export default () => {
  useEffect(() => {
    ContactTracing.start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Supported: {JSON.stringify(ContactTracing.getConstants()["supported"])}</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
