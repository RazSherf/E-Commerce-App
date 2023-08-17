import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center ', display: 'flex' }}>
          <Text style={styles.text}>Login In To Your Account</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={styles.viewStyleCss}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              onChange={(text) => setEmail(text)}
              value={email}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 16,
                fontSize: email ? 16 : 16
              }}
              placeholder="Enter Your Email"
            />
          </View>
        </View>
        <View
          style={styles.viewStyleCss}
        >
          <AntDesign name="lock" size={24} color="black" style={{ marginLeft: 8 }} />

          <TextInput secureTextEntry={true}
            onChange={(text) => setPassword(text)}
            value={password}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: 16,
              fontSize: password ? 16 : 16
            }}
            placeholder="Enter Your Password"
          />
        </View>
        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
          <Text>Keep Me Login</Text>
          <Text style={{ color: '#007FFF', fontWeight: 500 }}>Forgot Password?</Text>
        </View>
        <View style={{ marginTop: 80 }} />
        <Pressable style={styles.logButton}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: "bold" }} >Login</Text>
        </Pressable>
        <Pressable style={{marginTop:15}}>
          <Text style={{textAlign:'center',color:'gray',fontSize:16}}>Dont have account? Sign up </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex:1',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
    alignItems: 'center',
    display: 'flex'
  },
  textInput: {
    color: 'gray',
    marginVertical: 10,
    width: 300
  },
  viewStyleCss: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  logButton: {
    width: 200,
    backgroundColor: '#FEBE10',
    borderRadius: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15
  }
})

