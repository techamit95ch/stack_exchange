import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  HStack,
  Flex,
  Center,
  Heading,
  Button,
  Box,
  Spacer,
  IconButton,
  Icon,
} from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
const HeaderBar = ({ setSearchButton }) => {
  return (
    <HStack style={styles.headerBox}>
      <Heading size="md" style={styles.heading}>
        Stack Exchange
      </Heading>
      <TouchableOpacity
        onPress={() => {
          setSearchButton(true);
        }}
      >
        <Icon
          style={styles.icon}
          size="md"
          as={<EvilIcons name="search" size="24" />}
          color="#005EB8"
        />
      </TouchableOpacity>
    </HStack>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerBox: {
    // marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.0,

    elevation: 4,
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
  },
  heading: {
    marginTop: 10,
    color: '#005EB8',
    flex: 5,
  },
  icon: {
    marginTop: 10,
    // marginLeft: 190,
    flex: 1,
  },
});
