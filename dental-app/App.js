import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Appointment from "./components/Group";
import SectionTitle from "./components/SectionTitle";

const DATA = [
  {
    title: "11 сентября",
    data: [
      {
        diagnosis: "пульпит",
        time: "12:30",
        active: true,
        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
    ],
  },
  {
    title: "14 сентября",
    data: [
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "12:30",

        user: {
          fullname: "Дарья Гологуцкая",
          avatar:
            "https://sun9-69.userapi.com/impg/G5gULWk1DyDA1W5o4gmeByFxRr7JVzDvPRPhew/g0EKk51lndw.jpg?size=100x0&quality=88&crop=387,255,515,515&sign=ef6811fd88feab0e54aafc6fadb1ce97&ava=1",
        },
      },
      {
        diagnosis: "пульпит",
        time: "14:30",
        user: {
          fullname: "Вадим Привалов",
          avatar:
            "https://sun9-20.userapi.com/impf/c856128/v856128529/333d0/ZIaiLyP9sDY.jpg?size=100x0&quality=88&crop=464,346,666,666&sign=73883cc6b5b200c9002fe2c877876d79&ava=1",
        },
      },
    ],
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={40} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  position: absolute;
  bottom: 25px;
  right: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 2.5px;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
