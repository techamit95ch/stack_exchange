import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Text, VStack, HStack, Avatar, Link } from 'native-base';

import moment from 'moment';
import { SimpleLineIcons } from '@expo/vector-icons';

const Answer = ({ answer }) => {
  return (
    <>
      {answer ? (
        <>
          <HStack
            w="100%"
            style={styles.questionStack}
            key={answer.answer_id}
            space={2}
          >
            <VStack style={styles.counterBody} space={2} alignItems="center">
              <HStack space={2} alignItems="center">
                <>
                  <Text style={{ color: '#b2bac2', flex: 1 }}>
                    {answer.up_vote_count ? answer.up_vote_count : `0`}
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
                  {answer.down_vote_count ? answer.down_vote_count : `0`}
                </Text>
                <SimpleLineIcons
                  name="dislike"
                  size={20}
                  color="#b2bac2"
                  style={{ flex: 1 }}
                />
              </HStack>
            </VStack>

            <VStack space={1} style={styles.questionBody}>
              <View
                space={1}
                style={styles.answerBody}
                space={5}
                justifyContent="flex-end"
              >
                <Text
                  fontSize="xxs"
                  style={styles.text2}
                  noOfLines={6}
                  isTruncated
                >
                  {answer.body_markdown.trim()}
                </Text>

                <Text
                  fontSize="xs"
                  style={{
                    color: '#005EB8',
                    alignSelf: 'flex-end',
                    marginHorizontal: 5,
                  }}
                  onPress={() => {
                    Linking.openURL(answer.link);
                  }}
                >
                  More
                </Text>
              </View>
              <HStack space={2} alignItems="center">
                {answer.owner && (
                  <>
                    <Text
                      noOfLines={1}
                      isTruncated
                      fontSize="xxs"
                      style={styles.text}
                    >
                      {answer.owner.display_name
                        ? answer.owner.display_name
                        : 'owner'}
                    </Text>
                    {answer.owner.profile_image ? (
                      <Avatar
                        size="xs"
                        source={{
                          uri: answer.owner.profile_image,
                        }}
                      ></Avatar>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </HStack>
            </VStack>
          </HStack>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Answer;

const styles = StyleSheet.create({
  questionStack: {
    // height: 150,
    display: 'flex',
    backgroundColor: 'white',
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#b2bac2',
    minHeight: 150,
    maxHeight: 150,
    // paddingBottom:
  },
  questionBody: {
    display: 'flex',
    flex: 8,

    marginRight: 15,
    paddingBottom: 10,
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
    minHeight: 90,
    maxHeight: 110,
  },
});
