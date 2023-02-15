import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  Pressable,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  TouchableOpacity,
} from 'react-native';

export const Form = ({
  modalVisibleForm,
  setModalVisibleForm,
  users,
  setusers,
}) => {
  const [id, setId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const handlerNewUser = () => {
    console.log('Adicionando un nuevo usuario');
    if ([userName, userEmail, birthday].includes('')) {
      Alert.alert('Alerta', 'Los campos son obligatorios', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    /**nuevo usuario 2  */
    const new_user2 = (userName, birthday);
    let dateFormat =
      birthday.getDate() +
      '/' +
      (birthday.getMonth() + 1) +
      '/' +
      birthday.getFullYear();

    /**Registrar usuario y actualizar si ya existe  */
    const newUser = {userName, lastName, userEmail, birthday, gender};
    newUser.birthday = dateFormat;
    if (users.find(element => element.userEmail === userEmail) != null) {
      const userLast = users.find(element => element.userEmail === userEmail);

      Alert.alert('Alerta', 'El usuario ya existe ', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);

      userLast.userName = newUser.userName;
      userLast.lastName = newUser.lastName;
      userLast.userEmail = newUser.userEmail;
      userLast.birthday = newUser.birthday;
      userLast.gender = newUser.gender;
    } else {
      newUser.id = users.length + 1;
      users.push(newUser);
    }
    setusers(users);
    console.log('Usuarios registrados en la App :');
    users.forEach(element => {
      console.log(element);
    });

    /**Limpieza de campos */
    setModalVisibleForm(!modalVisibleForm);
    setLastName('');
    setUserName('');
    setUserEmail('');
    setBirthday(new Date());
  };

  return (
    <Modal animationType="slide" visible={modalVisibleForm}>
      <Pressable
        style={styles.close_window}
        onPress={() => {
          setModalVisibleForm(false);
          setBirthday(new Date());
        }}>
        <Text style={styles.text_close_window}>Back</Text>
      </Pressable>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            User {''}
            <Text style={styles.subtitle}>register form</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor={'#203474'}
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            placeholderTextColor={'#203474'}
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#203474'}
            value={userEmail}
            onChangeText={setUserEmail}
          />

          <View style={styles.wrapper}>
            <Text style={styles.subtext}>Género:</Text>
            {['Masculino', 'Femenino'].map(genderSelect => (
              <View key={genderSelect} style={styles.genderStyle}>
                <Text style={styles.genderSelectTxtStyle}>{genderSelect}</Text>
                <TouchableOpacity
                  style={styles.outterRB}
                  onPress={() => setGender(genderSelect)}>
                  {gender === genderSelect && <View style={styles.innerRB} />}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Text style={styles.subtext}>Fecha de nacimiento:</Text>
          <DatePicker
            style={styles.content_date}
            date={birthday}
            locale="es"
            mode="date"
            onDateChange={date => setBirthday(date)}
          />
          <Pressable style={styles.btnUserAdd} onPress={handlerNewUser}>
            <Text style={styles.text_btnUserAdd}>Guardar</Text>
          </Pressable>
          <Pressable style={styles.btnUserCancel} onPress={handlerNewUser}>
            <Text style={styles.text_btnUserAdd}>cancelar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  content_date: {
    height: 130,
    width: 300,
    borderWidth: 1,
  },
  titleTxt: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  btnUserAdd: {
    marginVertical: 30,
    backgroundColor: '#1B5FDF',
    padding: 15,
    borderRadius: 10,
  },
  btnUserCancel: {
    marginVertical: 0.5,
    backgroundColor: '#FA2A24',
    padding: 15,
    borderRadius: 10,
  },
  text_btnUserAdd: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnStyle: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  close_window: {
    marginTop: 10,
    marginLeft: 341,
    alignItems: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: '#ff0000',
    borderRadius: 100,
    padding: 5,
  },
  text_close_window: {
    color: '#ffffff',
    marginEnd: 6,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  subtext: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'MountainsofChristmas-Regular',
  },
  innerRB: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#2437DA',
  },
  outterRB: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  genderStyle: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  genderSelectTxtStyle: {
    fontSize: 14,
    padding: 10,
  },
  viewPress: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
