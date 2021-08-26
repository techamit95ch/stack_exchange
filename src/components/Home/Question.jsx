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
  Avatar,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
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
      space={4}
    >
      <>
        <VStack style={styles.counterBody} space={2} alignItems="center">
          <HStack space={2} alignItems="center">
            {question.view_count ? (
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {question.view_count}
                </Text>
                <MaterialCommunityIcons
                  name="eye-outline"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </>
            ) : (
              <>
                {/* <MaterialIcons
                name="question-answer"
                size={20}
                color="#B20000"
                style={{ flex: 1 }}
              /> */}
              </>
            )}
          </HStack>
          <HStack space={2} alignItems="center">
            {question.up_vote_count ? (
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {question.up_vote_count}
                </Text>
                <SimpleLineIcons
                  name="like"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </>
            ) : (
              <>
                {/* <MaterialIcons
                name="question-answer"
                size={20}
                color="#B20000"
                style={{ flex: 1 }}
              /> */}
              </>
            )}
          </HStack>
          <HStack space={2} alignItems="center">
            {question.down_vote_count ? (
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {question.down_vote_count}
                </Text>
                <SimpleLineIcons
                  name="dislike"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </>
            ) : (
              <>
                {/* <MaterialIcons
                name="question-answer"
                size={20}
                color="#B20000"
                style={{ flex: 1 }}
              /> */}
              </>
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
              <>
                {/* <MaterialIcons
                name="question-answer"
                size={20}
                color="#B20000"
                style={{ flex: 1 }}
              /> */}
              </>
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
        <HStack space={2}>
          <Text noOfLines={2} isTruncated fontSize="sm" style={styles.text1}>
            {question.title}
          </Text>
        </HStack>
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
        <HStack space={2} alignItems="center">
          {question.creation_date && (
            <Text
              noOfLines={1}
              isTruncated
              fontSize="xxs"
              style={{ color: 'grey' }}
            >
              {moment(question.creation_date).fromNow()}
            </Text>
          )}
          {question.owner && (
            <>
              <Text
                noOfLines={1}
                isTruncated
                fontSize="xxs"
                style={styles.text}
              >
                {question.owner.display_name}
              </Text>
              <Avatar
                size="xs"
                source={{
                  uri: question.owner.profile_image,
                }}
              >
                SS
              </Avatar>
            </>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  questionStack: {
    height: 150,
    display: 'flex',
    backgroundColor: 'white',
    // borderBottomWidth: 0.3,
    // borderBottomColor: '#b2bac2',
    // borderTopWidth: 0.3,
    // borderTopColor: '#b2bac2',
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
    backgroundColor: '#e6f0fa',
    padding: 5,
    display: 'flex',
    borderRadius: 2,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'flex-start',

    alignItems: 'center',
  },
});
export default Question;
