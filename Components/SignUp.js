import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
function SignUp() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field
  });
  const [matchPassword, setMatchPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [emailExists, setEmailExists] = useState(false);
  const [requiredFilled,setRequiredFilled]=useState(false)
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const validateEmail = (email) => {
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSignUp = async () => {
    if (formData.username === "" || formData.email === "" || formData.password === "") {
      setRequiredFilled(true); // Set a state variable to indicate that required fields are empty
      return; // Stop the registration process
    } else {
      setRequiredFilled(false); // Reset the state variable if all required fields are filled
    }
    if (!validateEmail(formData.email)) {
      setValidEmail(false);
      return; // Stop the registration process
    } else {
      setValidEmail(true);
    }
    if (formData.password !== formData.confirmPassword) {
      // Password and confirm password do not match
      setMatchPassword(false);
      console.log("Password and confirm password do not match");
      return; // Stop the registration process
    } else {
      setMatchPassword(true);
    }
  
    try {
      const response = await axios.post("https://backend-80j6.onrender.com/users", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      // Handle successful registration, e.g., show success message or navigate to another screen
      console.log(response.data);
      navigation.navigate("Login");
    } catch (error) {
      // Handle registration error, e.g., display error message
      console.error("Axios Error:", error.message);
    }


  };
  return (
    <View>
      <View style={styles.miniCircle}>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <View style={styles.backContainer}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow}
              />
              <Text style={styles.buttonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backgroundContainer}>
        <Text style={styles.account}>SignUp</Text>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={[styles.textInput, styles.marginInput]}
          onChangeText={(text) => handleInputChange("username", text)}

          // onChangeText={newText => setText(newText)}
          // defaultValue={text}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={[styles.textInput, styles.marginInput]}
          onChangeText={(text) => handleInputChange("email", text)}

          // onChangeText={newText => setText(newText)}
          // defaultValue={text}
        />
         {!validEmail && (
        <Text style={styles.matchPassword}>Invalid email format</Text>
      )}
   
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={[styles.textInput, styles.marginInput]}
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry={true}
          // onChangeText={newText => setText(newText)}
          // defaultValue={text}
        />
        <Text style={styles.title}>Confirm Password</Text>
        <TextInput
          style={[styles.textInput, styles.marginInput]}
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
          secureTextEntry={true}
          // onChangeText={newText => setText(newText)}
          // defaultValue={text}
        />
        {!matchPassword && (
          <Text style={styles.matchPassword}>password dont match</Text>
        )}
        {requiredFilled && (
          <Text style={styles.matchPassword}>All Field must be Filled</Text>
        )}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
        <Text
          style={styles.haveAccount}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Already have an account ? Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  miniCircle: {
    height: 150,
    width: 150,
    borderBottomRightRadius: 90,
    backgroundColor: "#A1C0CD",
    marginTop: 30,
  },
  back: {
    flex: 1,
    margin: 50,
    alignItems: "center", // Center the content horizontally
  },
  backContainer: {
    flexDirection: "row", // Arrange the arrow and text in a row
    alignItems: "center", // Align items vertically
  },
  arrow: {
    marginRight: 10, // Add some spacing between the arrow and text
  },
  buttonText: {
    fontSize: 18, // You can adjust the font size as needed
    color: "#fff",
  },
  backgroundContainer: {
    backgroundColor: "#6082AB",
    height: 600,
    width: 360,
    marginTop: 30,
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 250,
    height: 45,
    paddingLeft:20
  },
  marginInput: {
    marginLeft: 55,
    marginTop: 5,
  },
  account: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 130,
    marginTop: 20,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 58,
    marginTop: 18,
  },
  signupButton: {
    backgroundColor: "#fff",
    height: 40,
    width: 200,
    borderRadius: 20,
    marginLeft: 80,
    marginRight: 50,
    marginTop: 40,
  },
  signupText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    color: "#6082AB",
  },
  haveAccount: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  matchPassword: {
    color: "red",
    marginLeft: 65,
  },
});
export default SignUp;
