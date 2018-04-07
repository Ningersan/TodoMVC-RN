import React from 'react'
import { View, FlatList, ScrollView, StyleSheet } from 'react-native'
import TodoItem from '../components/TodoItem'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => (
    <ScrollView>
        <FlatList
            data={todos}
            renderItem={({ item, index }) => (
                <TodoItem
                    key={index}
                    todo={item}
                    onToggle={() => onToggleTodo(index)}
                    onDelete={() => onDeleteTodo(index)}
                />
            )}
            keyExtractor={(item, index) => index}
        />
    </ScrollView>
)

export default TodoList
