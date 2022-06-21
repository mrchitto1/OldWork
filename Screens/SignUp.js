import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log(
    'Getting Sign up Values = ',
    name,
    email,
    phone,
    password,
    confirmPassword,
  );
  const CreateButton = () => {
    let object = {
      Name: name,
      Email: email,
      Phone: phone,
      Password: password,
      ConfirmPassword: confirmPassword,
    };
    console.log('object Sign up Values = ', object);
    if (name === '') {
      Alert.alert('Fill information in Name Field.');
    } else if (email === '') {
      Alert.alert('Fill information in Email Field.');
    } else if (phone === '') {
      Alert.alert('Fill information in Phone Field.');
    } else if (password === '') {
      Alert.alert('Fill information in Password Field.');
    } else if (confirmPassword === '') {
      Alert.alert('Fill information in Confirm Password Field.');
    } else {
      if (password === confirmPassword) {
        props.navigation.navigate('Login', {SignUpData: object});
      } else {
        Alert.alert('Password & Confirm password is not matched.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.mainContainer}>
      <View style={styles.BackButtonContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back-circle-outline" size={30} color="#8800ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#8800ff'}}>
          Let's Get Started!
        </Text>
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 15,
            color: 'black',
            marginTop: 7,
          }}>
          Create an account Q Allure to get all features
        </Text>
      </View>
      <View style={styles.TextInputContainer}>
        <View style={styles.TextInputStyle}>
          <Icon
            name="person-circle-outline"
            size={30}
            color="#8800ff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Name"
            placeholderTextColor={'#8800ff'}
            keyboardType="default"
            style={styles.input}
            onChangeText={txt => {
              setName(txt);
            }}
          />
        </View>
        <View style={styles.TextInputStyle}>
          <Icon
            name="mail-outline"
            size={30}
            color="#8800ff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={'#8800ff'}
            keyboardType="email-address"
            style={styles.input}
            onChangeText={txt => {
              setEmail(txt);
            }}
          />
        </View>
        <View style={styles.TextInputStyle}>
          <Icon
            name="call-outline"
            size={30}
            color="#8800ff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor={'#8800ff'}
            keyboardType="phone-pad"
            style={styles.input}
            onChangeText={txt => {
              setPhone(txt);
            }}
          />
        </View>
        <View style={styles.TextInputStyle}>
          <Icon
            name="lock-closed-outline"
            size={30}
            color="#8800ff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#8800ff'}
            keyboardType="default"
            style={styles.input}
            onChangeText={txt => {
              setPassword(txt);
            }}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.TextInputStyle}>
          <Icon
            name="lock-closed-outline"
            size={30}
            color="#8800ff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'#8800ff'}
            keyboardType="default"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={txt => {
              setConfirmPassword(txt);
            }}
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.CreateButton} onPress={CreateButton}>
          <Text style={styles.createTextStyling}>CREATE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.LoginHereContainer}>
        <Text style={styles.alreadyStyling}>Already have an account?</Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.loginHereStyling}>Login here</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#efefef',
    flex: 1,
  },
  BackButtonContainer: {
    marginTop: 30,
    marginLeft: 25,
  },
  HeaderContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  TextInputContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  BottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    fontSize: 15,
    width: windowWidth / 1.5,
    height: windowHeight / 22,
    borderBottomWidth: 1,
    borderBottomColor: '#8800ff',
    color: '#8800ff',
    marginLeft: 10,
    marginBottom: 15,
    paddingBottom: 0,
  },
  TextInputStyle: {
    width: windowWidth / 1.1,
    height: windowHeight / 13,
    marginTop: 15,
    borderRadius: 50,
    color: '#8800ff',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  CreateButton: {
    backgroundColor: '#8800ff',
    height: windowHeight / 18,
    width: windowWidth / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  createTextStyling: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  ButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  LoginHereContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  alreadyStyling: {
    fontSize: 15,
    color: '#8800ff',
  },
  loginHereStyling: {
    fontSize: 18,
    color: '#008cff',
    fontWeight: 'bold',
  },
});

export default SignUp;
