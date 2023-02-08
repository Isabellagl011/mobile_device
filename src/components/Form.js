import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

export const Form = ({ModalVisibleForm}) => {
  const [userName, setUserNanme] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const [age, setAge] = useState('');

  return (
    <Modal animationType="slide" visible={ModalVisibleForm}>
      <SafeAreaView>
        <ScrollView>
          <Text>Registro de nuevo usuario</Text>
          <View>
            <TextInput
              placeholder="Nombre de usuario"
              placeholderTextColor={'#203474'}
              value={userName}
              onChangeText={setUserNanme}></TextInput>

            <TextInput
              placeholder="Email del usuario"
              placeholderTextColor={'#203474'}
              value={email}
              onChangeText={setEmail}></TextInput>

            <TextInput
              placeholder="Edad de usuario"
              placeholderTextColor={'#203474'}
              value={age}
              onChangeText={setAge}></TextInput>

            <DatePicker
              onSelectedChange={date => setselectedDate(date)}></DatePicker>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
