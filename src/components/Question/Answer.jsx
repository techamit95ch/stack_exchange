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
  Link,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { SimpleLineIcons } from '@expo/vector-icons';

const Answer = ({ answer }) => {
  return (
    <>
      <HStack
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        style={styles.questionStack}
        key={answer.answer_id}
        space={4}
      >
        <>
          <VStack style={styles.counterBody} space={2} alignItems="center">
            <HStack space={2} alignItems="center">
              <>
                <Text style={{ color: '#b2bac2', flex: 1 }}>
                  {answer.up_vote_count ? answer.up_vote_count : ``}
                </Text>
                <SimpleLineIcons
                  name="like"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text style={{ color: '#b2bac2', flex: 1 }}>
                {answer.down_vote_count ? answer.down_vote_count : ``}
              </Text>
              <SimpleLineIcons
                name="dislike"
                size={20}
                color="#b2bac2"
                style={{ flex: 1 }}
              />
            </HStack>
          </VStack>
        </>

        <VStack space={2} width="100%" style={styles.questionBody}>
          <HStack space={2} style={styles.answerBody}>
            <Text fontSize="xxs" style={styles.text2}>
              {answer.body_markdown
                ? answer.body_markdown.toString().trim()
                : ``}
            </Text>
          </HStack>
          <HStack space={1} flexDirection="row" justifyContent="flex-end">
            <Link
              _text={{
                color: 'blue.700',
              }}
              href={answer.link}
              isExternal
              mt={2}
              size="xsm"
            >
              More
            </Link>
          </HStack>
          <HStack space={2} alignItems="center">
            {answer.creation_date && (
              <Text
                noOfLines={1}
                isTruncated
                fontSize="xxs"
                style={{ color: 'grey' }}
              >
                {moment(answer.creation_date).fromNow()}
              </Text>
            )}
            {answer.owner && (
              <>
                <Text
                  noOfLines={1}
                  isTruncated
                  fontSize="xxs"
                  style={styles.text}
                >
                  {answer.owner.display_name}
                </Text>
                <Avatar
                  size="xs"
                  source={{
                    uri: answer.owner.profile_image,
                  }}
                >
                  SS
                </Avatar>
              </>
            )}
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Answer;

const styles = StyleSheet.create({
  questionStack: {
    // height: 150,
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
  text2: {
    color: '#535d75',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
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
  answerBody: {
    backgroundColor: '#e6f0fa',
    padding: 5,
    display: 'flex',
    borderRadius: 2,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
});
