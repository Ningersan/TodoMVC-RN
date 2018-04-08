import React, { Component } from 'react'
import { View, Text, TabBarIOS, StyleSheet, Platform } from 'react-native'
import TypeNew from '../components/TypeNew'
import Navigation from './Navigation'
import { filter } from '../scripts/utils'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            todos: [
                { text: '望不穿这暧昧的眼', isCompleted: false },
                { text: '终须都归还 无谓多贪', isCompleted: false },
                { text: '偏未晚', isCompleted: true },
                { text: '望不穿这暧昧的眼', isCompleted: false },
                { text: '终须都归还 无谓多贪', isCompleted: false },
                { text: '偏未晚', isCompleted: true },
            ],
            visibility: 'all',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleDelTodo = this.handleDelTodo.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleSetVisibility = this.handleSetVisibility.bind(this)
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
                        isCompleted: false,
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
                    isCompleted: !todo.isComplete,
                }
            }
            return todo
        })

        this.setState({ todos })
    }

    handleSetVisibility(visibility) {
        this.setState({
            visibility,
        })
    }

    getTodos() {
        const { visibility, todos } = this.state
        return filter[visibility](todos)
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
                <Navigation
                    todos={this.getTodos()}
                    onDeleteTodo={this.handleDelTodo}
                    onToggleTodo={this.handleToggle}
                    onSetVisibility={this.handleSetVisibility}
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
