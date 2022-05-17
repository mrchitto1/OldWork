import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Button,
} from 'react-native';
import Card from '../OldWork/Component/Card';

const App = props => {
  let Data = [
    {
      Status: 'open',
      Post: 'Apple MAC 2022 repairing',
      Name: 'Ilyass',
    },
    {
      Status: 'in process',
      Post: 'Dell Model T1000 refurbished',
      Name: 'Geendi',
    },
    {
      Status: 'delivered',
      Post: 'Lenovo Model F10800 Selling',
      Name: 'Humza',
    },
    {
      Status: 'received',
      Post: 'HP Model M2000 Purchased',
      Name: 'Usman',
    },
    {
      Status: 'open',
      Post: 'ASUS Model P5000 repair',
      Name: 'Asfand',
    },
  ];

  const [dataArray, setDataArray] = useState(Data);
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  
  useEffect(() => {
    
  }, [count, countTwo]);

  const DataAdd = () => {
    let newArray = dataArray;
    newArray.unshift({Name: 'Usman', Post: 'HI USMAN', Status: 'HI STATUS'});
    setDataArray(newArray);
    setCount(count + 1);
  };

  const DataRemove = () => {
    let newArray = dataArray;
    newArray.shift();
    setDataArray(newArray);
    setCountTwo(countTwo + 1);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TopContainer}>
        <View>
          <TouchableOpacity
            onPress={DataAdd}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              alignItems: 'center',
              height: 30,
              width: 30,
              backgroundColor: '#5cff87',
              borderRadius: 10,
              paddingTop: 3,
              paddingRight: 2,
            }}>
            <Text style={styles.textStyling1}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textStyling}>Invntory System</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={DataRemove}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              alignItems: 'center',
              height: 30,
              width: 30,
              backgroundColor: '#ff5c69',
              borderRadius: 10,
              paddingTop: 3,
              paddingRight: 2,
            }}>
            <Text style={styles.textStyling1}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BottomContainer}>
        <SafeAreaView style={{width: '100%', marginLeft: 10}}>
          <ScrollView>
            <Card response={dataArray} />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  TopContainer: {
    height: '8%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'center',
  },
  BottomContainer: {
    backgroundColor: '#e3e3e3',
    flex: 1,
  },
  textStyling: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
  },
  textStyling1: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
  },
});

export default App;
