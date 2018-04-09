import React, { Component } from 'react'
import TodoList from '../containers/TodoList'
import { filter } from '../scripts/utils'

const withFilter = (wrappedComponent, key) => {
    return class extends Component {
        render() {
            const { todos } = this.props
            filteredTodos = filter[key](todos)
            console.log(todos)
            return <TodoList {...this.props} todos={filteredTodos} />
        }
    }
}

export default withFilter
