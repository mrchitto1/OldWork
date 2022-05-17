import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Card = props => {
  //   const [status, setStatus] = useState('');
  //   const [post, setPost] = useState('');
  //   const [name, setName] = useState('');
  let array = props.response;
  return array.map(res => {
    return (
      <View style={styles.Container}>
        <Text style={styles.StatusTextStyling}>
          Ordered Status: {res.Status}
        </Text>
        <Text style={styles.PostTextStyling}>{res.Post}</Text>
        <Text style={styles.NameTextStyling}>Ordered by: {res.Name}</Text>
      </View>
    );
  });
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
