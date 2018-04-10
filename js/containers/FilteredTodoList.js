import TodoList from './TodoList'
import withFilter from '../HOC/withFilter'

// HOC component
export const AllTodoList = withFilter(TodoList, 'all')
export const ActiveTodoList = withFilter(TodoList, 'active')
export const CompletedTodoList = withFilter(TodoList, 'completed')

export default filterToComponent = {
    all: AllTodoList,
    active: ActiveTodoList,
    completed: CompletedTodoList,
}
