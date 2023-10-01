import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Lecture } from '../../util/Lecture';

export default function LectureBox(props: { lecture: Lecture }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.lectureInfoContainer}>
          <Text style={styles.lectureTitle}>{props.lecture.subjectTitle}</Text>
          <Text style={styles.classNumber}>{props.lecture.lecturer + "\t" + props.lecture.subjectID} ({props.lecture.lectureNumber})</Text>
          <View style={styles.thirdRow}>
            <Text style={styles.lectureCredit}>{props.lecture.credit}학점</Text>
            {
              props.lecture.extraInfo.includes("®") && 
              <Text style={[styles.lectureCredit, styles.lectureQualifications]}>수강반 제한</Text>
            }
            {
              props.lecture.language !== '한국어' && 
              <Text style={[styles.lectureCredit, styles.internationalLanguage]}>외국어 강의</Text>
            }
          </View>
        </TouchableOpacity>
        <View style={styles.lectureAddContainer}>
          <TouchableOpacity style={styles.iconBox}>
            <Text style={styles.addLectureText}>담기</Text>
            {/* <Image source={
              require('../../images/plus.png')
              }
              style={styles.icon}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  lectureInfoContainer: {
    width: "70%",
    padding: 10,
  },
  addLectureText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  extraInfo: {
    fontSize: 12,
    color: '#777',
    marginHorizontal: 10,
    marginBottom: 6,
  },

  lectureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginLeft: 3,
  },
  thirdRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lectureCredit: {
    width: 'auto',
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#eee',
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 10
  },
  lectureQualifications: {
    fontWeight: '600',
    backgroundColor: '#00a3cc',
    color: 'white',
  },
  internationalLanguage: {
    fontWeight: '600',
    backgroundColor: '#00cca3',
    color: 'white',
  },
  classNumber: {
    width: 'auto',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 10,
    marginLeft: 3,
    marginBottom: 6,
  },


  lectureAddContainer: {
    width: "30%",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
  },
  iconBox: {
    width: "80%",
    aspectRatio: 1.6,
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  icon: {
    height: "55%",
    width: "55%",
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});