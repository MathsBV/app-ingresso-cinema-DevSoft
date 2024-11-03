import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
      <Button
        title="Tela de login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 800
  },
});

export default HomeScreen;