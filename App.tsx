import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import {Form} from './src/components/Form';
import {User} from './src/components/User';
import RegisterForm from './src/components/RegisterForm';
import {Superhero} from './src/components/Superhero';
import {Formpractice} from './src/components/Formpractice';

function App(): JSX.Element {
  const [users, setusers] = useState([]);
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);
  const [modalVisibleForm2, setModalVisibleForm2] = useState(false);
  const [modalVisibleFormSH, setModalVisibleFormSH] = useState(false);
  const [modalVisibleP, setModalVisibleP] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>¡Hello Isabella!</Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please release me')}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Iniciar sesión</Text>
      </Pressable>
      {/* <Pressable
        onPress={() =>
          setTimeout(() => {
            setModalVisible2(true);
          }, 1000)
        }
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Mostrar Modal</Text>
      </Pressable>*/}

      <Pressable onPress={() => setModalVisibleP(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Botón Practice</Text>
      </Pressable>
      <Formpractice
        modalVisibleP={modalVisibleP}
        setModalVisibleP={setModalVisibleP}
      />

      <Pressable
        onPress={() => setModalVisibleFormSH(true)}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Botón SuperHero</Text>
      </Pressable>
      <Superhero
        modalVisibleFormSH={modalVisibleFormSH}
        setModalVisibleFormSH={setModalVisibleFormSH}
      />

      {/*<Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Registrar Usuario</Text>
      </Pressable>
      <Form
        modalVisibleForm={modalVisibleForm}
        setModalVisibleForm={setModalVisibleForm}
    />*/}

      {/* <Pressable
        onPress={() => setModalVisibleForm2(true)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Formulario de Registro</Text>
    </Pressable>*/}
      <Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Registrar Usuario</Text>
      </Pressable>
      <Form
        modalVisibleForm={modalVisibleForm}
        setModalVisibleForm={setModalVisibleForm}
        users={users}></Form>
      {users.length == 0 ? (
        <Text>No hay usuarios aún</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({item}) => {
            return <User user_item={user_item}></User>;
          }}
        />
      )}
      <RegisterForm
        modalVisibleForm2={modalVisibleForm2}
        setModalVisibleForm2={setModalVisibleForm2}
      />
      <Modal animationType="fade" visible={modalVisible2}>
        <Text>Mostrar por 3 segundos</Text>
      </Modal>
    </SafeAreaView>
  );
}

/* const onPressFunction = () => {
  console.log('Click');
}; */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  baseText: {
    fontSize: 25,
    /* Alinear Texto */
    textAlign: 'center',
    /* Negrilla */
    fontFamily: 'MountainsofChristmas-Regular',
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    backgroundColor: '#2437DA',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnStyleRed: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnStyleSH: {
    backgroundColor: '#4FF481',
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
});

export default App;
