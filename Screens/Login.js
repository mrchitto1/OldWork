import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';

// Dimenstion constants.
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = props => {
  console.log('Props', props);
  // Geting values from Signup
  const [LoginEmail, setLoginEmail] = useState('');
  const [LoginPassword, setLoginPassword] = useState('');
  // const [counter, setCounter] = useState(0);

  // Handling Values from signup screen.
  useEffect(() => {
    let LoginData = props.route.params?.SignUpData.Email;
    console.log('email=', LoginData);
    setLoginEmail(LoginData);
    let PasswordData = props.route.params?.SignUpData.Password;
    console.log('Password=', PasswordData);
    setLoginPassword(PasswordData);
    // LoginAuth();
    // setCounter(counter + 1);
  }, [props]);
  // Handling LoginAuth Function.
  // useEffect(()=> {
  //   LoginAuth();
  //   console.log("login auth chala");
  // }, [counter])

  // Login Authentication on app opening with async storage.
  const [EmailAuth, setEmailAuth] = useState('');
  const [PasswordAuth, setPasswordAuth] = useState('');
  // Login Authentication on app opening with async storage function.
  const LoginAuth = async () => {
    let AuthKeys = await AsyncStorage.getItem('LoginKeys');
    let AuthValues = JSON.parse(AuthKeys);
    setEmailAuth(AuthValues.Email);
    setPasswordAuth(AuthValues.Password);
    if (EmailAuth === 0 && PasswordAuth === 0) {
      Alert.alert('Login Failed, No values found, SignUp');
    } else if (EmailAuth === LoginEmail && PasswordAuth === LoginPassword) {
      props.navigation.navigate('Details');
    } else {
      props.navigation.navigate('Login');
    }
  };
  // setting values to Async storage.
  let userEmail = props.route.params?.SignUpData.Email;
  let userPassword = props.route.params?.SignUpData.Password;
  const asyncS = () => {
    AsyncStorage.setItem(
      'LoginKeys',
      JSON.stringify({Email: userEmail, Password: userPassword}),
    );
  };

  const LoginButtonFunction = () => {
    if (LoginEmail === undefined && LoginPassword === undefined) {
      Alert.alert('Email & Password required, SignUp first!');
    } else if (LoginEmail === '' && LoginPassword === '') {
      Alert.alert('Email & Password is required');
    } else if (LoginEmail === '') {
      Alert.alert('Email is required');
    } else if (LoginPassword === '') {
      Alert.alert('Password is required');
    } else if (LoginEmail !== userEmail) {
      Alert.alert('Email not matched');
    } else if (LoginPassword !== userPassword) {
      Alert.alert('Password not matched');
    } else if (LoginEmail === userEmail && LoginPassword === userPassword) {
      props.navigation.navigate('Details');
      asyncS();
    } else {
      Alert.alert('Login Failed!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
          <Icon name="arrow-forward-circle-outline" size={30} color="#8800ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <Icon name="desktop-outline" size={80} color="#8800ff" />
        <Text style={styles.BoldText}>Welcome back!</Text>
        <Text style={styles.SimpleText}>
          Log in to your existant account of Q Allure
        </Text>
        <View style={styles.input}>
          <Icon name="person-outline" size={25} color="#8800ff" />
          <TextInput
            placeholder="Login"
            placeholderTextColor={'#8800ff'}
            keyboardType="email-address"
            style={styles.TextInputStyling}
            value={LoginEmail}
            onChangeText={txt => {
              setLoginEmail(txt);
            }}
          />
        </View>
        <View style={styles.input}>
          <Icon name="lock-closed-outline" size={25} color="#8800ff" />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#8800ff'}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.TextInputStyling}
            value={LoginPassword}
            onChangeText={txt => {
              setLoginPassword(txt);
            }}
          />
        </View>
      </View>
      <View style={styles.ForgotTextContainer}>
        <Text style={styles.ForgotTextStyling}>Forgot Password?</Text>
        <View style={styles.LoginButton}>
          <TouchableOpacity onPress={LoginButtonFunction}>
            <Text style={styles.LoginText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.connectStyling}>
        <Text style={styles.SimpleText2}>Or connect using</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity>
          <View style={styles.FacebookButton}>
            <Text style={styles.SimpleText3}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.GoogleButton}>
            <Text style={styles.SimpleText3}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.donotTextStyle}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButtonStyle}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.signupTextStyle}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  topContainer: {
    alignItems: 'flex-end',
    height: windowHeight / 18,
    paddingRight: 30,
    paddingTop: 20,
  },
  secondContainer: {
    alignItems: 'center',
    paddingTop: 100,
  },
  BoldText: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#262626',
  },
  SimpleText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'normal',
    color: 'gray',
  },
  input: {
    width: windowWidth / 1.1,
    height: windowHeight / 13,
    marginTop: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  TextInputStyling: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 15,
    width: windowWidth / 1.5,
    height: windowHeight / 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8800ff',
    paddingTop: 19,
    color: '#8800ff',
  },
  ForgotTextContainer: {
    alignItems: 'center',
  },
  ForgotTextStyling: {
    fontSize: 15,
    marginLeft: 250,
    marginTop: 20,
    color: '#8800ff',
  },
  LoginButton: {
    backgroundColor: '#8800ff',
    height: windowHeight / 18,
    width: windowWidth / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  LoginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  connectStyling: {
    marginTop: 30,
    alignItems: 'center',
  },
  SimpleText2: {
    marginTop: 40,
    fontSize: 15,
    fontWeight: 'normal',
    color: '#8800ff',
    marginTop: 10,
    alignContent: 'center',
  },
  ButtonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  FacebookButton: {
    backgroundColor: '#4267B2',
    height: windowHeight / 20,
    width: windowWidth / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  GoogleButton: {
    backgroundColor: 'red',
    height: windowHeight / 20,
    width: windowWidth / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  SimpleText3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  donotTextStyle: {
    fontSize: 15,
    color: '#8800ff',
  },
  signupButtonStyle: {
    fontSize: 15,
    marginLeft: 10,
  },
  signupTextStyle: {
    color: '#008cff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Login;
