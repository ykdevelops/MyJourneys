import React from 'react'
import { Text, View, StyleSheet, Button } from "react-native";
import StopwatchContainer from '../StopwatchContainer'
export default function StoppedSession(obj) {
    return (
        <View>
            <Text>Message</Text>
            <StopwatchContainer info={}/>
        </View>
    )
}