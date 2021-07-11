import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Text, Alert} from 'react-native';

type PropsType = {
    onSubmit: (title: string) => void;
}

export const AddTodo: React.FC<PropsType> = ({onSubmit}) => {
    const [title, setTitle] = useState("")

    const pressHandler = () => {
        if (title.trim()) {
            onSubmit(title)
            setTitle("")
        } else {
            Alert.alert("Todo title should not be empty")
        }
    }

    return (
        <View >
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder={"Type title for you todo..."}
                    autoCorrect={false}
                    autoCapitalize={"sentences"}
                />
                <Button title={"Add"} onPress={pressHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        marginEnd: 10,
        padding: 10
    },
    errorMessage: {
        color: 'red'
    }
})