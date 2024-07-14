import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { title } from '../../global/styles';
import { colors, parameters } from '../../global/styles';
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({ navigation }) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(null);
  const textInput2 = useRef(null);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>
          Sign-In
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>
          Please enter the email and password
        </Text>
        <Text style={styles.text1}>
          registered with your account
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder='Email'
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400}>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{ width: "80%" }}
            placeholder='Password'
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => { navigation.navigate("HomeScreen") }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}> Forgot Password ?</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          style={styles.SocialIcon}
          onPress={() => { }}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title='Sign In With Google'
          button
          type='google'
          style={styles.SocialIcon}
          onPress={() => { }}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={{ ...styles.text1 }}> New on FirstClassFastFood?</Text>
      </View>

      <View style={{ alignItems: "flex-end", marginHorizontal: 10 }}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    height: 50, // Added height
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 50, // Added height
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});