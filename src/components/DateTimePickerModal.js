import React from 'react';
import {Modal, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

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

const styles = StyleSheet.create({
  labelStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
