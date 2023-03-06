import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
export const Formpractice = ({modalVisibleP, setModalVisibleP}) => {
  const {value, setValue} = React.useState('Nombre');
  const capturaValor = () => {
    console.log(event.target.value);
  };
  return (
    <SafeAreaView>
      <Modal visible={modalVisibleP} animationType="slide">
        <View style={styles.content}>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput
              styles={styles.input}
              editable
              value={value}
              onChangeText={capturaValor}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput styles={styles.input} editable multiline></TextInput>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0069A3',
    flex: 1,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  input: {
    height: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    fontFamily: 'Fira Sans',
    marginTop: 30,
  },
});
