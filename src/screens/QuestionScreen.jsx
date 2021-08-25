import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import QuestionViews from '../components/Question/QuestionViews';
import useAnswerHook from '../hooks/useAnswerHook';
import AnswerView from '../components/Question/AnswerView';

const QuestionScreen = ({ route, navigation }) => {
  const { question } = route.params;
  const [searchApi, results] = useAnswerHook();
  const [page, setPage] = useState(1);
  useEffect(() => {
    searchApi(question.question_id, page);
  }, [results]);
  const moreView = () => {
    setPage(page + 1);
    searchApi(question.question_id, page);
  };
  return (
    <>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <QuestionViews question={question} />
            <>
              <AnswerView data={results} moreView={moreView} />
            </>
          </SafeAreaView>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({});
