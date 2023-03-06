import React from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {Text} from 'react-native-paper';

export const Superhero = ({modalVisibleFormSH, setModalVisibleFormSH}) => {
  return (
    <SafeAreaView style={styles.content}>
      <Modal visible={modalVisibleFormSH}>
        <Pressable
          style={styles.btnClose}
          onPress={() => {
            setModalVisibleFormSH(false);
          }}>
          <Text style={styles.btn_close_text}>Back</Text>
        </Pressable>
        <Text style={styles.title}>
          {''}
          <Text style={styles.title_bold}>SuperHeroes Interface</Text>
        </Text>

        <Image source={require('./logo.png')}></Image>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  title_bold: {
    fontWeight: '900',
  },
  btn_close_text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnClose: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  content: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
});
