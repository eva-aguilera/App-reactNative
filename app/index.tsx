import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[error, setError] = React.useState('');
    
    const handlerPasswordChange = (text: string) => {
        setPassword(text);
    }
    const handlerEmailChange = (text: string) => {
        setEmail(text);
    }   
 const handlerLogin = () => {
    if (password !== '1234') {
        setError('Invalid password');
        return; 
    }

    setError('');

    router.push({
        pathname: '/(tabs)',
            params: {email}
    });
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={handlerEmailChange}   
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={handlerPasswordChange}
        secureTextEntry
        style={styles.input}
      />

      {/* <Text style={{ marginBottom: 20 }}>Email: {email}</Text>
      <Text style={{ marginBottom: 20 }}>Password: {password}</Text> */}

      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        {error ? <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
