import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, StyleSheet } from 'react-native'

const TypeNew = ({ value, onSaveText, onAddTodo, placeholder }) => (
    <TextInput
        style={styles.textBox}
        placeholder={placeholder}
        value={value}
        onChangeText={onSaveText}
        onSubmitEditing={onAddTodo}
    />
)

TypeNew.defaultProps = {
    placeholder: 'what need to be done',
}

TypeNew.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onSaveText: PropTypes.func,
    onAddTodo: PropTypes.func,
}

const styles = StyleSheet.create({
    textBox: {
        paddingLeft: 15,
        height: 65,
        fontSize: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
})

export default TypeNew
