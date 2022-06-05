import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Linking} from 'react-native';

const App = () => {
  const [number, setNumber] = React.useState('');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navHeader}>Number Buddy</Text>
        </View>
        <View style={styles.inputSec}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={text => {
              setNumber(text);
            }}
            placeholder="Enter your Number*"
            value={number}
          />
          <View style={styles.button}>
            <Button
              disabled={number.length >= 10 ? false : true}
              color={'#25D366'}
              style={styles.buttonr}
              title="Chat!"
              onPress={() => {
                Linking.openURL('https://wa.me/' + '+91' + number);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright &copy; 2022</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '95%',
    flex: 1,
  },
  navbar: {
    height: 70,
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  navHeader: {color: 'white', fontSize: 20, letterSpacing: 1.5},
  inputSec: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  button: {
    width: '80%',
  },
  footer: {
    height: '5%',
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'white',
    letterSpacing: 2,
  },
});
