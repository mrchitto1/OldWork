import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Modale from './Modale';

const Card = props => {
  const {res, onPressCard} = props;

  // Card Component
  
    return (
      <View style={styles.Container}>
        <View>
          <TouchableOpacity onPress={onPressCard}>
            <Text style={styles.StatusTextStyling}>
              Ordered Status: {res.Status}
            </Text>
            <Text style={styles.PostTextStyling}>{res.Post}</Text>
            <Text style={styles.NameTextStyling}>Ordered by: {res.Name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );

};

const styles = StyleSheet.create({
  Container: {
    height: 100,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10,
    padding: 20,
    justifyContent: 'center',
    borderLeftColor: '#ffaa00',
    borderLeftWidth: 5,
  },
  StatusTextStyling: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffaa00',
  },
  PostTextStyling: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    color: 'black',
  },
  NameTextStyling: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    color: '#016e75',
  },
});

export default Card;
