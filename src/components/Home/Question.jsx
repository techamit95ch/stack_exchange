import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  NativeBaseProvider,
  Divider,
  Box,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
const Question = ({ question }) => {
  // let date = new Date(question.creation_date);
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      style={styles.questionStack}
      key={question.question_id}
    >
      <HStack style={styles.counterBody} space={2} alignItems="center">
        {question.answer_count ? (
          <>
            <Text style={{ color: 'grey', flex: 1 }}>
              {question.answer_count}
            </Text>
            <MaterialIcons
              name="question-answer"
              size={24}
              color="grey"
              style={{ flex: 1 }}
            />
          </>
        ) : (
          <Text fontSize="xxs" style={{ color: '#B20000' }}>
            {' '}
            No Answer Found
          </Text>
        )}
      </HStack>
      <VStack space={2} width="100%" style={styles.questionBody}>
        <Text noOfLines={2} isTruncated fontSize="sm" style={styles.text1}>
          {question.title}
        </Text>
        <HStack space={2} alignItems="center">
          {question.tags &&
            question.tags.map((item) => (
              <TouchableOpacity style={styles.tags} key={item}>
                <Text
                  noOfLines={3}
                  isTruncated
                  fontSize="xxs"
                  style={styles.text}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
        </HStack>
        <Text
          noOfLines={1}
          isTruncated
          fontSize="xxs"
          style={{ color: 'grey' }}
        >
          {question.last_activity_date &&
            moment(question.last_activity_date).fromNow()}
        </Text>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  questionStack: {
    height: 140,
    display: 'flex',
    // padding: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#b2bac2',
    // marginHorizontal: 5,
  },
  questionBody: {
    display: 'flex',
    flex: 8,
    padding: 5,
    marginHorizontal: 5,
    marginRight: 5,
  },
  counterBody: {
    display: 'flex',
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    backgroundColor: '#dadfe8',
    height: '100%',
    // marginTop: 5,
    // marginBottom: 5,
  },
  text: {
    color: '#005EB8',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    textAlign: 'center',
  },
  text1: {
    color: '#005EB8',
    flex: 1,
  },
  tags: {
    backgroundColor: '#dadfe8',
    padding: 5,
    display: 'flex',
    borderRadius: 2,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,

    alignItems: 'center',
  },
});
export default Question;
