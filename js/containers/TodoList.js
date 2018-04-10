import React from 'react'
import { View, FlatList, ScrollView, StyleSheet } from 'react-native'
import TodoItem from '../components/TodoItem'
import withFilter from '../HOC/withFilter'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => (
    <ScrollView>
        <FlatList
            data={todos}
            renderItem={({ item, index }) => (
                <TodoItem
                    key={item.id}
                    todo={item}
                    onToggle={() => onToggleTodo(item.id)}
                    onDelete={() => onDeleteTodo(item.id)}
                />
            )}
            keyExtractor={(item, index) => index}
        />
    </ScrollView>
)

export default TodoList
