import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';

import DatePicker from 'react-native-modern-datepicker';

export const Form = ({ModalVisibleForm}) => {
  const [userName, setUserNanme] = useState('Nombres(s):');
  const [lastName, setLastName] = useState('Apellidos(s):');
  const [email, setEmail] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const [age, setAge] = useState('Edad:');

  return (
    <Modal
      animationType="slide"
      visible={ModalVisibleForm}
      style={styles.modal}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.baseText}>Registro de usuario</Text>
          <View>
            <TextInput
              style={styles.labelStyle}
              placeholder="Nombre de usuario"
              placeholderTextColor={'#203474'}
              value={userName}
              onChangeText={setUserNanme}></TextInput>
            <TextInput
              style={styles.labelStyle}
              placeholder="Apellidos de usuario"
              placeholderTextColor={'#203474'}
              value={userName}
              onChangeText={setUserNanme}></TextInput>

            <TextInput
              style={styles.labelStyle}
              placeholder="Edad"
              placeholderTextColor={'#203474'}
              value={age}
              onChangeText={setAge}></TextInput>

            <DatePicker
              onSelectedChange={date => setselectedDate(date)}></DatePicker>

            <TextInput
              style={styles.labelStyle}
              placeholder="Email"
              placeholderTextColor={'#203474'}
              value={email}
              onChangeText={setEmail}></TextInput>
            <Pressable
              onPress={() => Alert.alert('Has cancelado el registro')}
              style={styles.btnStyle}>
              <Text style={styles.btnTxtStyle}>Guardar</Text>
            </Pressable>
            <Pressable
              onPress={() => Alert.alert('Has cancelado el registro')}
              style={styles.btnStyleRed}>
              <Text style={styles.btnTxtStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'MountainsofChristmas-Regular',
  },
  labelStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#C8DCFF',
    borderRadius: 10,
  },

  btnStyleRed: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    fontFamily: 'MountainsofChristmas-Regular',
  },
  btnStyle: {
    backgroundColor: '#2437DA',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    fontFamily: 'MountainsofChristmas-Regular',
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
