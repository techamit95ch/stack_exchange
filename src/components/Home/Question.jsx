import React from 'react';
import { StyleSheet, View } from 'react-native';
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
const Question = ({ question, navigation }) => {
  // let date = new Date(question.creation_date);
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      style={styles.questionStack}
      key={question.question_id}
    >
      <>
        <VStack style={styles.counterBody} space={2} alignItems="center">
          <HStack space={2} alignItems="center">
            {question.question_score ? (
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {question.question_score}
                </Text>
                <MaterialIcons
                  name="score"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </>
            ) : (
              <Text fontSize="xxs" style={{ color: '#B20000' }}>
                {' '}
                No Score Found
              </Text>
            )}
          </HStack>
          <HStack space={2} alignItems="center">
            {question.answer_count ? (
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {question.answer_count}
                </Text>
                <MaterialIcons
                  name="question-answer"
                  size={20}
                  color="#b2bac2"
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
        </VStack>
      </>
      <VStack space={2} width="100%" style={styles.questionBody}>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate(`Question`, {
              question_id: question.question_id,
            });
          }}
        > */}
        <Text noOfLines={2} isTruncated fontSize="sm" style={styles.text1}>
          {question.title}
        </Text>
        {/* </TouchableOpacity> */}

        <HStack space={2} alignItems="center">
          {question.tags &&
            question.tags.map((item) => (
              <View style={styles.tags} key={item}>
                <Text
                  noOfLines={3}
                  isTruncated
                  fontSize="xxs"
                  style={styles.text}
                >
                  {item}
                </Text>
              </View>
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
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#b2bac2',
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
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
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
