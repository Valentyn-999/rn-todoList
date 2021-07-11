import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TodoType} from "../App";

type PropsType = {
    todo: TodoType,
    onRemove: (id: string) => void
}

export const Todo: React.FC<PropsType> = ({todo,onRemove}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => console.log("pressed", todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text>
                    {todo.todoTitle}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})