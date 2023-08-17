import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {
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
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 16
              }}
              placeholder="Enter Your Email"
            />
          </View>
        </View>
        <View
          style={styles.viewStyleCss}
        >
          <AntDesign name="lock" size={24} color="black" />

          <TextInput secureTextEntry={true}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: 16
            }}
            placeholder="enter your Password"
          />
        </View>

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
  }
})

