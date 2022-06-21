import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

// Dimenstion constants.
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Demo = props => {

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: '900'}}>Usman</Text>
      <Icon name="arrow-back-circle-outline" size={30} color="#8800ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Demo;
