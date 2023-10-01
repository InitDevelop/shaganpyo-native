import { View, StyleSheet } from 'react-native'
import React from 'react'
import Timetable from './timetable/Timetable'
import Search from './search/Search'

type propType = {
  currentState: number,
}

export default function Body(props: propType) {
  return (
    <View style={style.body}>
      {
        props.currentState === 0 &&
        <Timetable/>
      }
      {
        props.currentState === 1 &&
        <Search/>
      }
    </View>
  )
}

const style = StyleSheet.create({
  body: {
    height: "82%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
})