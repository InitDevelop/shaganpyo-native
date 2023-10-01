import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

let times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
export const colors = [
  "#EC4E46",
  "#EC7946",
  "#ECB546",
  "#53B42C",
  "#0EAA94",
  "#13B5E7",
  "#1987E1",
  "#4656CE",
  "#8A57D5",
  "#BC61D9",
  "#E36DB0"
];

const borderColor = "#ccc";

// type propType = {
//   isMobile: boolean;
//   lectures: Lecture[];
//   subjHover: boolean;
//   mode: string;
//   timeSlots: TimeSlot[];
//   hoveredTimeSlots: TimeSlot[];
//   containsSaturday: boolean;
// }

export default function Timetable() {
  return (
    <View style={styles.table}>
      <View style={styles.dateRow}>
        <View style={styles.cornerCell}/>
        <View style={styles.dateCell}><Text style={styles.dateInnerText}>월</Text></View>
        <View style={styles.dateCell}><Text style={styles.dateInnerText}>화</Text></View>
        <View style={styles.dateCell}><Text style={styles.dateInnerText}>수</Text></View>
        <View style={styles.dateCell}><Text style={styles.dateInnerText}>목</Text></View>
        <View style={styles.dateCell}><Text style={styles.dateInnerText}>금</Text></View>
      </View>
      {
        times.map(
          time =>
          <View key={"timerow_" + time} style={styles.row}>
            <View style={styles.timeCell}>
              <Text style={styles.innerText}>{time}</Text>
            </View>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
          </View>
        )
      }
    </View>
  )
}


const styles = StyleSheet.create({
  table: {
    width: "95%",
    height: "95%",
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: borderColor,
  },
  dateRow: {
    flex: 0.5,
    flexDirection: 'row',
  },
  dateCell: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: borderColor,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  timeCell: {
    flex: 0.3,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: borderColor,
    backgroundColor: '#eee',
  },
  cornerCell: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: '#eee',
  },
  dateInnerText: {
    fontWeight: '600',
    color: '#777',
  },
  innerText: {
    textAlign: 'center',
    color: '#777',
  }
});