import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeBaseProvider, Spinner } from 'native-base';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import QuestionViews from '../components/Question/QuestionViews';
// import useAnswerHook from '../hooks/useAnswerHook';
import AnswerView from '../components/Question/AnswerView';

const QuestionScreen = ({ route, navigation }) => {
  const { question } = route.params;

  return (
    <>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <QuestionViews question={question} />
            {question.answer_count && question.answer_count > 0 ? (
              <>
                <AnswerView data={question.answers} />
              </>
            ) : (
              <Spinner
                size="lg"
                color="danger.300"
                accessibilityLabel="Empty Answers"
              />
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({});
