import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage,
} from "react-native";
import styled from "styled-components";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    user_id: null,
  };

  componentDidMount = async () => {
    const post_id = await AsyncStorage.getItem("User"); // 문자열로 읽힘
    this.setState({ user_id: post_id });
  };

  postPhoto = async (photoUri) => {
    const { user_id } = this.state;
    console.log(photoUri);
    // let base_url = "http://192.168.0.119/Post_Image/Image.php";
    let base_url = "http://35.185.213.102:5000/predictPhoto";

    let uploadData = new FormData();
    uploadData.append("image", {
      // 원래는 file
      type: "image/jpg",
      uri: photoUri,
      name: "uploadimagetmp.jpg",
    });

    try {
      await axios({
        method: "post",
        url: base_url,
        data: uploadData,
      }).then((response) => {
        if (response.status) {
          Alert.alert("OK", "전송");
          console.log(response.data.label);
          const food_id = response.data.label;
          this.props.navigation.navigate("Detail", {
            Id: food_id,
            User: user_id,
          });
        } else {
          Alert.alert("Error", "전송실패");
        }
      });
    } catch (error) {
      Alert.alert("Error", "네트워크 에러");
      console.log(error);
    }
  };
  render() {
    const { navigation } = this.props;
    const photoUri = navigation.getParam("photoUri", "no");
    const width = navigation.getParam("width", 0);
    const height = navigation.getParam("height", 0);

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={{ uri: photoUri }}
          style={{
            width: width,
            height: height,
            borderRadius: 10,
            marginTop: 50,
          }}
        />

        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            backgroundColor: "#ff5122",
            marginTop: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => this.postPhoto(photoUri)}
        >
          <Text style={{ fontSize: 20, color: "white" }}>전송하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}