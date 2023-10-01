import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LectureBox from '../global/LectureBox';
import { Lecture, blankLecture } from '../../util/Lecture';
import lectureData from "../../db/data232.json";
import { CheckRelatedLecture, accuracy } from '../global/CheckRelatedLecture';

export default function Search() {

  const [shownLectures, setShownLectures] = useState<Lecture[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [lectureDatabase, setLectureDatabase] = useState<Lecture[]>((lectureData as { subjects: Lecture[] }).subjects);
  const [focusedLecture, setFocusedLecture] = useState<string>('');

  useEffect(() => {
    setShownLectures(
      lectureDatabase.filter(
        (lect: Lecture) => {
          return ((searchText.replaceAll(" ", "").length > 1) && CheckRelatedLecture(searchText, lect)); }
      ).sort((a, b) => `${a.subjectID} ${a.lectureNumber}`.localeCompare(`${b.subjectID} ${b.lectureNumber}`))
      .sort((a, b) => (accuracy(searchText, b.subjectTitle, b.lecturer) - accuracy(searchText, a.subjectTitle, a.lecturer)))
    );
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='강좌명을 입력하세요.'
        onSubmitEditing={event => setSearchText(event.nativeEvent.text)}
        returnKeyType="search"
      />
      <ScrollView style={styles.scrollContainer}>
        {
          shownLectures.length < 500 &&
          shownLectures.map(
            lecture => 
            <LectureBox
              key={lecture.subjectID + "_" + lecture.lectureNumber}
              lecture={lecture}
            />
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "95%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  input: {
    height: "8%",
    marginBottom: '3%',
    borderWidth: 1,
    borderColor: "#777",
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontSize: 20,
    color: '#444'
  },
  scrollContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
  }
});