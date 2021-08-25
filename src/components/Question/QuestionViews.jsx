import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, VStack, HStack, Heading, Avatar, Divider } from 'native-base';

import moment from 'moment';
const QuestionViews = ({ question }) => {
  return (
    <>
      <VStack space={5} style={styles.questionStack}>
        <HStack
          space={5}
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-end"
          styles={styles.hStack}
        >
          {question.owner && (
            <Text noOfLines={1} isTruncated fontSize="sm">
              {question.owner.display_name}
            </Text>
          )}
          {question.owner && (
            <Avatar
              size="sm"
              source={{
                uri: question.owner.profile_image,
              }}
            ></Avatar>
          )}
        </HStack>
        <HStack
          justifyContent="flex-start"
          alignItems="center"
          styles={styles.hStack}
        >
          <Heading size="md" style={styles.heading}>
            {question.title}
          </Heading>
        </HStack>

        <HStack
          justifyContent="flex-start"
          space={12}
          alignItems="center"
          styles={styles.hStack}
        >
          {question.creation_date && (
            <Text
              noOfLines={1}
              isTruncated
              fontSize="xxs"
              style={{ color: 'grey' }}
            >
              {`Asked: ` + moment(question.creation_date).fromNow()}
            </Text>
          )}
          {question.last_activity_date && (
            <Text
              noOfLines={1}
              isTruncated
              fontSize="xxs"
              style={{ color: 'grey' }}
            >
              {`Active: ` + moment(question.last_activity_date).fromNow()}
            </Text>
          )}
          {question.view_count && (
            <Text
              noOfLines={1}
              isTruncated
              fontSize="xxs"
              style={{ color: 'grey' }}
            >
              {`Views: ${question.view_count}`}
            </Text>
          )}
        </HStack>

        <HStack space={2} alignItems="center" styles={styles.hStack}>
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

        {/* <VStack
          justifyContent="flex-start"
          space={5}
          alignItems="center"
          styles={styles.hStack}
        >
          {question.body && (
            <Text fontSize="xxs" style={{ color: '#2e3236' }}>
              {question.body}
            </Text>
          )}
          {question.excerpt && (
            <View style={styles.excerpt}>
              <Text fontSize="xxs" style={{ color: '#2e3236' }}>
                {question.excerpt}
              </Text>
            </View>
          )}
        </VStack> */}
        <Divider />
      </VStack>
    </>
  );
};

export default QuestionViews;

const styles = StyleSheet.create({
  questionStack: {
    // height: 240,
    display: 'flex',
    // backgroundColor: '#e6f0fa',
    backgroundColor: 'white',
    // borderBottomWidth: 0.3,
    // borderBottomColor: '#b2bac2',
    padding: 10,
    marginBottom: 10,
  },
  heading: {
    // marginLeft: 15,
    color: '#2e3236',
    flex: 1,
    // fontSize: 16,
    fontWeight: 'normal',
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
    // display: 'flex',
    borderRadius: 2,
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    // flexGrow: 1,
    // width: 'auto',
    // alignItems: 'center',

    alignSelf: 'flex-start',
  },
  hStack: {
    margin: 15,
  },
  excerpt: {
    backgroundColor: '#e6f0fa',
    padding: 5,
    display: 'flex',
    borderRadius: 2,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
  },
});
