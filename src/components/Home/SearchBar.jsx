import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  Input,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
  Stack,
} from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({ setSearchButton, setQuery, searchQuery, query }) => {
  //   console.log('From query', query);
  return (
    <Stack style={styles.headerBox} w="100%">
      <Input
        autoCorrect={false}
        value={query}
        style={styles.input}
        size="sm"
        onChange={(e) => setQuery(e.nativeEvent.text)}
        onEndEditing={searchQuery}
        InputLeftElement={
          <TouchableOpacity onPress={() => setSearchButton(false)}>
            <Icon
              as={<Ionicons name="ios-chevron-back-sharp" />}
              size="sm"
              m={2}
              _light={{
                color: '#005EB8',
              }}
              _dark={{
                color: '#B20000',
              }}
            />
          </TouchableOpacity>
        }
        placeholder="Search"
        _light={{
          placeholderTextColor: 'blueGray.400',
          color: 'blueGray.500',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
        variant="unstyled"
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    // marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.0,

    elevation: 4,
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
    // textColor: '#005EB8',
    height: 80,
  },
});
export default SearchBar;
