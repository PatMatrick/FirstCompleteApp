import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    };
    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goals"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
            <Button title="ADD" onPress={addGoalHandler}  />
            </View>
        </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
      },
      input: {
        flexDirection: "row",
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      button: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '60%',
      }
});


export default GoalInput;