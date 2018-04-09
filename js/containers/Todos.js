import React, { Component } from 'react'
import { View, Text, TabBarIOS, StyleSheet, Platform } from 'react-native'
import TypeNew from '../components/TypeNew'
import Navigation from './Navigation'
import { filter, guid } from '../scripts/utils'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            todos: [
                { id: guid(), text: '望不穿这暧昧的眼', isCompleted: false },
                { id: guid(), text: '终须都归还 无谓多贪', isCompleted: false },
                { id: guid(), text: '偏未晚', isCompleted: true },
                { id: guid(), text: '望不穿这暧昧的眼', isCompleted: false },
                { id: guid(), text: '终须都归还 无谓多贪', isCompleted: false },
                { id: guid(), text: '偏未晚', isCompleted: true },
            ],
            visibility: 'all',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleDelTodo = this.handleDelTodo.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        // this.handleSetVisibility = this.handleSetVisibility.bind(this)
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
                        id: guid(),
                        text,
                        isCompleted: false,
                    }),
                    text: '',
                }
            })
        }
    }

    handleDelTodo(id) {
        const todos = this.state.todos.filter(todo => id !== todo.id)

        this.setState({ todos })
    }

    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (id === todo.id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo
        })

        this.setState({ todos })
    }

    // handleSetVisibility(visibility) {
    //     this.setState({
    //         visibility,
    //     })
    // }

    // getTodos() {
    //     const { visibility, todos } = this.state
    //     return filter[visibility](todos)
    // }

    render() {
        const { todos, text } = this.state
        return (
            <View style={styles.todoApp}>
                <TypeNew
                    value={text}
                    onSaveText={this.handleChange}
                    onAddTodo={this.handleAddTodo}
                />
                <Navigation
                    todos={todos}
                    onDeleteTodo={this.handleDelTodo}
                    onToggleTodo={this.handleToggle}
                    // onSetVisibility={this.handleSetVisibility}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoApp: {
        ...Platform.select({
            ios: {
                flex: 1,
                marginTop: 20,
            },
        }),
    },
})

export default Todos
