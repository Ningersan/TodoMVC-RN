import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
} from 'react-native'
import TypeNew from '../components/TypeNew'
import TodoList from './TodoList'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            todos: [
                { text: '望不穿这暧昧的眼', complete: false },
                { text: '终须都归还 无谓多贪', complete: false },
                { text: '偏未晚', complete: true },
                { text: '望不穿这暧昧的眼', complete: false },
                { text: '终须都归还 无谓多贪', complete: false },
                { text: '偏未晚', complete: true },
                { text: '望不穿这暧昧的眼', complete: false },
                { text: '终须都归还 无谓多贪', complete: false },
                { text: '偏未晚', complete: true },
            ],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleDelTodo = this.handleDelTodo.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
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
                    todos: todos.concat({
                        text,
                        complete: false,
                    }),
                    text: '',
                }
            })
        }
    }

    handleDelTodo(index) {
        const todos = this.state.todos.filter(
            (todo, todoIndex) => index !== todoIndex
        )

        this.setState({ todos })
    }

    handleToggle(index) {
        const todos = this.state.todos.map((todo, todoIndex) => {
            if (index === todoIndex) {
                return {
                    ...todo,
                    complete: !todo.complete,
                }
            }
            return todo
        })

        this.setState({ todos })
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
                <TodoList
                    todos={todos}
                    onDeleteTodo={this.handleDelTodo}
                    onToggleTodo={this.handleToggle}
                />
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
