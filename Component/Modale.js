import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const Modale = props => {
  const {
    modalVisible,
    VisibilityOff,
    cardDataFetched,
    onPressDeleteCard,
    UpdateValues,
  } = props;
  // useStates for Modal data update.
  const [status, setStatus] = useState();
  const [post, setPost] = useState();
  const [name, setName] = useState();

  // UseEffect to handle props.
  useEffect(() => {
    setStatus(cardDataFetched?.Status);
    setPost(cardDataFetched?.Post);
    setName(cardDataFetched?.Name);
  }, [props]);

  // Modal Component:
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                borderColor: '#ffaa00',
                alignItems: 'center',
                height: 35,
                borderBottomWidth: 0.5,
              }}>
              <Text style={styles.modalText}>Edit Post</Text>
            </View>
            <View style={styles.TextInputContainer}>
              <View style={styles.TextinputStyling}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Status"
                  keyboardType="default"
                  placeholderTextColor="#ffffff"
                  value={status}
                  onChangeText={text => {
                    setStatus(text);
                  }}
                />
              </View>
              <View style={styles.TextinputStyling}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Post"
                  keyboardType="default"
                  placeholderTextColor="#ffffff"
                  value={post}
                  onChangeText={text => {
                    setPost(text);
                  }}
                />
              </View>
              <View style={styles.TextinputStyling}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Name"
                  keyboardType="default"
                  placeholderTextColor="#ffffff"
                  value={name}
                  onChangeText={text => {
                    setName(text);
                  }}
                />
              </View>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.ModalCloseButton}
                onPress={() => {
                  UpdateValues(status, post, name);
                }}>
                <Text style={styles.textStyling}>Update Post</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ModalCloseButton}
                onPress={onPressDeleteCard}>
                <Text style={styles.textStyling}>Delete Post</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ModalCloseButton}
                onPress={VisibilityOff}>
                <Text style={styles.textStyling}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
  },
  textStyling1: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
  },
  TextinputStyling: {},
  ModalOpenButton: {
    borderColor: '#ffaa00',
    borderWidth: 1,
    alignItems: 'center',
    height: 30,
    width: 120,
    backgroundColor: '#ffaa00',
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 2,
  },
  ModalCloseButton: {
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    height: 30,
    width: 95,
    backgroundColor: '#ffaa00',
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 2,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  modalView: {
    width: '95%',
    height: 330,
    backgroundColor: '#8800ff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffaa00',
  },
  TextInputContainer: {},
  input: {
    height: 50,
    width: '100%',
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#ffaa00',
    paddingLeft: 20,
    color: '#ffaa00',
    backgroundColor: '#00000050',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Modale;
