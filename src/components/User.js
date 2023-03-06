import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const User = ({
  user_item,
  setModalVisible,
  setUser,
  userEdit,
  userDelete,
  setModalUser,
}) => {
  const {userName, userEmail, birthday} = user_item;
  return (
    <Pressable
      onLongPress={() => {
        setModalUser(true);
        setUser(user_item);
      }}>
      <View style={styles.content}>
        <Text style={styles.label}>Usuario:</Text>
        <Text style={styles.Text}>{userName}</Text>
        <Text style={styles.Text}>{userEmail}</Text>
        <Text>
          style={styles.date_b}
          {birthday}
        </Text>

        <View>
          {/**botón para editar usuario */}
          <Pressable
            style={[styles.btn, styles.btnEdit]}
            onLongPress={() => {
              setModalVisible(true);
              userEdit(id);
            }}>
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>

          {/**botón para eliminar un usuario */}
          <Pressable
            style={[styles.btn, styles.btnDelete]}
            onLongPress={() => userDelete(id)}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  date_b: {
    color: '#474151',
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#F59E0B',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});
