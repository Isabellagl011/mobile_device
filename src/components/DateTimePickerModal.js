import React from 'react';
import {Modal, SafeAreaView, Text, View} from 'react-native';

export const DateTimePickerModal = ({modalVisibleForm2}) => {
  return (
    <Modal animationType="fade" visible={modalVisibleForm2}>
      <SafeAreaView>
        <View>
          <Text>Hola</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
