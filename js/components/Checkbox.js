import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const checkedIcon = require('../images/checked.png')
const uncheckedIcon = require('../images/unchecked.png')
const errorIcon = require('../images/error.png')

const Checkbox = ({ isChecked }) => {
    const icon = isChecked ? checkedIcon : uncheckedIcon
    return <Image style={styles.checkbox} source={icon} />
}

const styles = StyleSheet.create({
    checkbox: {
        marginLeft: 10,
        marginTop: 3,
    },
})

export default Checkbox
