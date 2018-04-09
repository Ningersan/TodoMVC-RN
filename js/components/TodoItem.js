import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Swipeout from 'react-native-swipeout'
import Checkbox from './Checkbox'

class TodoItem extends Component {
    render() {
        const { todo, onToggle, onDelete } = this.props
        const viewDisabledStyling = todo.isCompleted ? { opacity: 0.5 } : {}
        const labelCompletedStyling = todo.isCompleted
            ? { textDecorationLine: 'line-through' }
            : {}

        // Buttons
        const swipeoutBtns = [
            { text: 'delete', backgroundColor: 'red', onPress: onDelete },
        ]
        return (
            <Swipeout
                autoClose
                right={swipeoutBtns}
                backgroundColor={'transparent'}>
                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={onToggle}>
                    <View style={[styles.item, viewDisabledStyling]}>
                        <Checkbox isChecked={todo.isCompleted} />
                        <Text style={[styles.label, labelCompletedStyling]}>
                            {todo.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingRight: 60,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ededed',
    },
    label: {
        fontSize: 24,
        paddingBottom: 15,
        paddingTop: 1,
        marginLeft: 10,
    },
    viewDisabledStyling: {
        opacity: 0.5,
    },
})

export default TodoItem
