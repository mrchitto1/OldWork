import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Card = props => {
  console.log(props.response);
  let array = props.response;

  return (
    <View style={styles.Container}>
      <Text style={styles.StatusTextStyling}>Ordered Status: open</Text>
      <Text style={styles.PostTextStyling}>Usman</Text>
      <Text style={styles.NameTextStyling}>Ordered by: Usman</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 100,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 10,
    padding: 20,
    justifyContent: 'center',
  },
  StatusTextStyling: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  PostTextStyling: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  NameTextStyling: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Card;
