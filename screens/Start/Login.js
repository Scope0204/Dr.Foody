import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  AsyncStorage, // 유저 정보 저장
} from "react-native";
import Logo from "../../components/Logo";
// import Form from "../../components/Form";
import axios from "axios"; // npm i axios@0.18.0

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_password: "",
    };
  }

  //   componentDidMount = async () => {
  //     const { user_name } = this.state;

  //     AsyncStorage.getItem("User", (err, result) => {
  //       //   console.log(result);
  //     });
  //     const a = await AsyncStorage.getItem("User");
  //     alert(a);
  //   };

  callLogin = () => {
    const { user_name } = this.state;
    const { user_password } = this.state;
    axios({
      method: "post",
      //   url: "http://15.164.224.142/api/app/User_Login.php",
      url: "http://192.168.0.3/User_Site/User_Login.php",

      headers: {
        //응답에 대한 정보
        Accept: "application/json", // 서버가 json 타입으로 변환해서 사용
        "Content-Type": "application/json;charset=utf-8",
      },
      data: {
        id: user_name,
        password: user_password,
      },
    })
      .then((response) => {
        console.log(response); // 로그인 유저 정보 다 끌고 옴
        if (response.data == "Data Matched") {
          //   AsyncStorage.setItem("User", JSON.stringify(response.data));
          this.props.navigation.navigate("Main", { User: user_name });
        } else {
          Alert.alert("Login Error", "다시입력해 주세요");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("name : ", user_name);
    console.log("pass : ", user_password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="ID"
            // placeholderTextColor="#ffffff"
            onChangeText={(user_name) => this.setState({ user_name })}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            // placeholderTextColor="#ffffff"
            onChangeText={(user_password) => this.setState({ user_password })}
          />

          <TouchableOpacity style={styles.button} onPress={this.callLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Text
            style={styles.signupBotton}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Signup
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fdcc1f",
    flex: 1,
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 16,
    flexDirection: "row",
    marginBottom: 50,
  },
  signupText: {
    // color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  signupBotton: {
    color: "#F58541",
    fontSize: 16,
    fontWeight: "bold",
  },

  //form

  formContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: 330,
    paddingVertical: 16,
    // backgroundColor: "rgba(255,255,255,255)",
    backgroundColor: "#FCF8F6",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    // color: "#ffffff",
    marginVertical: 10,
    borderColor: "#FCEAE0",
    borderWidth: 1,
  },
  button: {
    width: 330,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#F58541",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 12,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});
