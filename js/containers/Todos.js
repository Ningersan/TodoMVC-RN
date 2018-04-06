import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    Platform,
} from 'react-native'
import TypeNew from '../components/TypeNew'
import TodoItem from '../components/TodoItem'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { text: '望不穿这暧昧的眼', complete: false },
                { text: '终须都归还 无谓多贪', complete: false },
                { text: '偏未晚', complete: true },
            ],
            text: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }
    handleChange(text) {
        this.setState({ text })
    }
    handleAddTodo() {
        const isTypeEmpty = this.state.text.trim()
        if (isTypeEmpty) {
            this.setState(prewState => {
                const { todos, text } = prewState
                return {
                    todos: todos.concat({ text, complete: false }),
                    text: '',
                }
            })
        }
    }
    render() {
        const { todos, text } = this.state
        return (
            <View style={styles.todoApp}>
                <TypeNew
                    value={text}
                    onSaveText={this.handleChange}
                    onAddTodo={this.handleAddTodo}
                />
                <View>
                    {todos.map((todo, index) => (
                        <TodoItem key={index} todo={todo} />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoApp: {
        ...Platform.select({
            ios: {
                marginTop: 20,
            },
        }),
    },
})

export default Todos
