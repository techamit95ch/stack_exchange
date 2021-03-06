import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import ListComponent from '../components/Home/ListComponent';
import useQuestionHook from '../hooks/useQuestionHook';
import SearchBar from '../components/Home/SearchBar';
import HeaderBar from '../components/Home/HeaderBar';

const HomeScreen = ({ navigation }) => {
  const [searchButton, setSearchButton] = useState(false);
  const [question_id, setQuestionId] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchApi, questionResults, questionError] = useQuestionHook();

  // useEffect(() => {}, [searchButton, question_id, query]);
  const searchQuestion = () => {
    // setQuestionPage(1);
    setPage(1);
    searchApi(query, page);
    // console.log('from searchQuestion');
  };
  const nextPageQuestion = () => {
    setPage(page + 1);
    searchApi(query, page);
  };
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar
            style="dark"
            barStyle="default"
            animated={true}
            showHideTransition="fade"
            backgroundColor="white"
          />

          {!searchButton ? (
            <HeaderBar setSearchButton={setSearchButton} />
          ) : (
            <SearchBar
              setSearchButton={setSearchButton}
              setQuery={setQuery}
              searchQuery={searchQuestion}
              query={query}
            />
          )}

          <>
            <ListComponent
              data={questionResults}
              setQuestionId={setQuestionId}
              nextPageQuestion={nextPageQuestion}
              searchQuestion={searchQuestion}
              navigation={navigation}
            />
          </>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
