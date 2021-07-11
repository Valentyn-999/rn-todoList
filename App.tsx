import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export type TodoType = {
    id: string,
    todoTitle: string
}

export default function App() {
    const [todos, setTodos] = useState<Array<TodoType>>([
        {id: "1", todoTitle: "fa"},
        {id: "2", todoTitle: "fa"},
        {id: "3", todoTitle: "fa"},
        {id: "4", todoTitle: "fa"},
        {id: "5", todoTitle: "fa"},
        {id: "6", todoTitle: "fa"},
        {id: "7", todoTitle: "fa"},
        {id: "8", todoTitle: "fa"},
        {id: "9", todoTitle: "fa"},
        {id: "10", todoTitle: "fa"},
        {id: "11", todoTitle: "fa"},

    ])

    const addTodo = (title: string): void => {
        const newTodo: TodoType = {
            id: Date.now().toString(),
            todoTitle: title
        }
        setTodos((prev) => [newTodo, ...prev])
    }

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter(todo => todo.id !== id))
    }


    return (
        <View>
            <Navbar title={"To-do App"}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    data={todos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Todo todo={item} onRemove={removeTodo}/>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});
