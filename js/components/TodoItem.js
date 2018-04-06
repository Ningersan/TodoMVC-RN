import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Checkbox from './Checkbox'

class TodoItem extends Component {
    render() {
        const { todo } = this.props
        const viewDisabledStyling = todo.complete ? { opacity: 0.5 } : {}
        return (
            <View style={[styles.item, viewDisabledStyling]}>
                <Checkbox isChecked={todo.complete} />
                <Text style={styles.label}>{todo.text}</Text>
            </View>
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
