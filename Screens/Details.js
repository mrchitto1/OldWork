// In App.js in a new project
// State => Data => change => pAge => rebder => '' =>
// Props => Data => Not change => No Render => Static => Kill => Clear

// Tasks
// ***********************************
// 1 [Done]
// AsyncStorage => Data => Kill => Save => Find => Google => Search => Plugin
// AsyncStorage.setItem('Usman', JSON.stringify({NAME: 'usman', age: '26'}))
//  useEffect(() => {
//   fun()
// }, [])

// const fun = async () => {
//   let a = await AsyncStorage.getItem('Usman')
//   console.log('22222A', JSON.parse(a) )
// }
// ***********************************
// 2
// Add Card on Top
// 3
// Delete Card from Top
// 4
// Edit Card => Modal Open => TextInputs =>  Auto Save => Edit => Submit => Card => Change

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../Component/Card';
import Modale from '../Component/Modale';

// Windows Dimentions.
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Details = props => {
  // Dummy DataArray.
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
  // UseStates for managing card data (Add and Remove Buttons).
  const [dataArray, setDataArray] = useState(Data);
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // Modal Visibility.
  const [modalVisibility, SetModalVisibility] = useState(false);
  // Visibility off Function.
  const VisibilityOff = () => {
    SetModalVisibility(false);
    setCardData(null);
  };
  // one object data from array to Modal.
  const [cardData, setCardData] = useState(null);
  // UseEffect for card data handling.
  useEffect(() => {}, [count, countTwo]);
  // UseEffect for modal visibility handling.
  useEffect(() => {
    if (cardData) SetModalVisibility(true);
  }, [cardData]);
  // Data Add Function.
  const DataAdd = () => {
    let newArray = dataArray;
    newArray.unshift({
      Name: 'Enter Name',
      Post: 'Enter Post',
      Status: 'Enter Status',
    });
    setDataArray(newArray);
    setCount(count + 1);
  };
  // Data Remove Function.
  const DataRemove = () => {
    let newArray = dataArray;
    newArray.shift();
    setDataArray(newArray);
    setCountTwo(countTwo + 1);
  };
  // RenderItem for flatlist.
  const renderItem = ({item, index}) => {
    return (
      <Card
        res={item}
        onPressCard={() => {
          setCardData(dataArray[index]);
          setGetNameOfSelectedCard(dataArray[index].Name);
        }}
      />
    );
  };
  //useState for card deletion in Modal.
  const [getNameOfSelectedCard, setGetNameOfSelectedCard] = useState();
  // onPressDeleteCard Function.
  const onPressDeleteCard = ({item, index}) => {
    item = dataArray;
    let name = getNameOfSelectedCard;
    index = item.findIndex(object => {
      return object.Name === name;
    });
    if (index > -1) {
      item.splice(index, 1);
    }
    SetModalVisibility(false);
  };
  // Update function.
  const UpdateValues = (statusValue, postValue, nameValue) => {
    let item = dataArray;
    let name = getNameOfSelectedCard;
    let index = item.findIndex(object => {
      return object.Name === name;
    });
    if (index > -1) {
      item[index].Status = statusValue;
      item[index].Post = postValue;
      item[index].Name = nameValue;
    }
    SetModalVisibility(false);
  };

  const RemoveAuthKeys = async () => {
    try {
      AsyncStorage.setItem(
        'LoginKeys',
        JSON.stringify({Email: "0", Password: "0"}),
      );
      props.navigation.navigate('Login');
    } catch (e) {
      // error reading value
      Alert.alert(e);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TopMostContainer}>
        <TouchableOpacity onPress={RemoveAuthKeys} style={styles.LogoutButton}>
          <Icon name="rocket" size={30} color="#ffaa00" />
        </TouchableOpacity>
      </View>
      <View style={styles.TopContainer}>
        <TouchableOpacity onPress={DataAdd} style={styles.AddButton}>
          <Text style={styles.textStyling1}>+</Text>
        </TouchableOpacity>
        <Text style={styles.textStyling}>Invntory System</Text>
        <TouchableOpacity onPress={DataRemove} style={styles.RemoveButton}>
          <Text style={styles.textStyling1}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.BottomContainer}>
        <SafeAreaView style={{width: '100%', marginLeft: 10}}>
          <FlatList data={dataArray} renderItem={renderItem} />
        </SafeAreaView>
        <Modale
          modalVisible={modalVisibility}
          VisibilityOff={VisibilityOff}
          cardDataFetched={cardData}
          onPressDeleteCard={onPressDeleteCard}
          UpdateValues={UpdateValues}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  TopMostContainer: {
    backgroundColor: '#8800ff',
    height: windowHeight / 8,
    width: windowWidth / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoutButton: {
    marginBottom: 40
  },
  LogoutButtonImage: {
    height: 50,
    width: 50,
  },
  TopContainer: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    bottom: 0,
    height: windowHeight / 10,
    backgroundColor: '#ffaa00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 10,
    width: '95%',
    marginLeft: 8,
  },
  AddButton: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    height: 30,
    width: 30,
    backgroundColor: '#5cff87',
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 2,
  },
  RemoveButton: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    height: 30,
    width: 30,
    backgroundColor: '#ff5c69',
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 2,
  },
  BottomContainer: {
    backgroundColor: '#e3e3e3',
    marginTop: 45,
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

export default Details;
