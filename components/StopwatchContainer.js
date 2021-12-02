import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function StopwatchContainer () {
  const [state, setState] = useState({ min: 0, sec: 0, msec: 0, start: false })
  function handleToggle () {
    setState({start : !state.start})
    console.log(state)
    handleStart()
  }
  function handleStart () {
    if (state.msec !== 99) {
      setState({
        msec: state.msec + 1
      })
    } else if (state.sec !== 59) {
      setState({
        msec: 0,
        sec: ++state.sec
      })
    } else {
      setState({
        msec: 0,
        sec: 0,
        min: ++state.min
      })
    }
  }
  let padToTwo = number => (number <= 9 ? `0${number}` : number)
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.child}>{padToTwo(state.min) + ' : '}</Text>
        <Text style={styles.child}>{padToTwo(state.sec) + ' : '}</Text>
        <Text style={styles.child}>{padToTwo(state.msec)}</Text>
      </View>

      <View style={styles.buttonParent}>
        <Pressable style={styles.button} onPress={handleToggle}>
          <Text style={styles.buttonText}>
            {!state.start ? 'Start' : 'Stop'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 80,
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: '.5%',
    paddingBottom: '.5%'
  },

  child: {
    fontSize: 40,
    color: 'black'
  },

  buttonParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '12%'
  },

  button: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    borderRadius: 20,
    height: 60
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center'
  },
  
  container:{
    paddingTop: 40
  }
})
