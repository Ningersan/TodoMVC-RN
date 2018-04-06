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
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
})

// class TypeNew extends Component {
//     render() {
//         const { value, onSaveText, onAddTodo, placeholder } = this.props
//         return (
//             <TextInput
//                 placeholder={placeholder}
//                 value={value}
//                 onChangeText={onSaveText}
//                 onSubmitEditing={onAddTodo}
//             />
//         )
//     }
// }

export default TypeNew
