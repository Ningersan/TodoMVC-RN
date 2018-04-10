import React, { Component } from 'react'
import { View, Text, TabBarIOS, StyleSheet } from 'react-native'
import TodoList from './TodoList'
import filterToComponent from './FilteredTodoList'

const tabs = [
    {
        key: 'all',
        icon: require('../../images/all.png'),
        title: 'All',
    },
    {
        key: 'active',
        icon: require('../../images/active.png'),
        title: 'Active',
    },
    {
        key: 'completed',
        icon: require('../../images/completed.png'),
        title: 'Completed',
    },
]

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectItem: 0,
        }
        this.handleJumpTo = this.handleJumpTo.bind(this)
    }

    handleJumpTo(tab, index) {
        this.setState({
            selectItem: index,
        })
        // this.props.onSetVisibility(tab.key)
    }

    renderTab(tab, index) {
        const { selectItem } = this.state
        const FilteredTodo = filterToComponent[tab.key]
        return (
            <TabBarIOS.Item
                {...tab}
                selected={index === selectItem}
                onPress={() => this.handleJumpTo(tab, index)}>
                <FilteredTodo {...this.props} />
            </TabBarIOS.Item>
        )
    }

    render() {
        return (
            <View style={styles.nav}>
                <TabBarIOS tintColor="#44c33a">
                    {tabs.map((tab, index) => this.renderTab(tab, index))}
                </TabBarIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        flex: 1,
    },
})

export default Navigation
