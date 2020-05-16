import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Layout from "../constants/Layout";
import { FontAwesome } from "@expo/vector-icons";

const SWIPER_HEIGHT = Layout.height;
const SWIPER_WIDTH = Layout.width;

const Container = styled.View`
  background-color: white;
  height: 180px;
  width: ${SWIPER_WIDTH - 130}px;
  margin-left: 20px;
  border-radius: 10px;
  border: #ecf0f1;
  box-shadow: 1px 1px 1px gray;
  justify-content: center;
`;

export default List = ({ list }) => {
  // 제품 정보페이지로 이동
  return (
    <View style={{ justifyContent: "center" }}>
      <Container>
        <View style={styles.listCon}>
          <View style={{ flex: 0.5 }}>
            <Image
              source={{
                uri: list.photo,
              }}
              style={{ width: 140, height: 140 }}
            ></Image>
          </View>
          <View
            style={{ flexDirection: "column", flex: 0.5, alignItems: "center" }}
          >
            {list.name.length < 8 ? (
              <Text style={styles.listTitle}>{list.name}</Text>
            ) : (
              <Text style={styles.listTitle2}>{list.name}</Text>
            )}
            {list.point ? (
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  size={16}
                  name={"star"}
                  color={"#F5B041"}
                  style={{ marginRight: 10 }}
                />
                <Text>{list.point}</Text>
                <Text> / 5 점</Text>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  size={16}
                  name={"star-o"}
                  color={"#F5B041"}
                  style={{ marginRight: 10 }}
                />
                <Text>0</Text>
                <Text> / 5 점</Text>
              </View>
            )}
          </View>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  listCon: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    // backgroundColor: "red",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listTitle2: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});