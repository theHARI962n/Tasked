import React, { useState } from "react";
import { View, TextInput,Button,StyleSheet,Modal,Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image source={require('../assets/Images/goal.png')} style={styles.image}/>
        <TextInput placeholder="Tasks to Complete..." style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>

        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="ADD" color="#5e0acc" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
        <Button title="BACK" color="#f31282" onPress={props.onCancel} />
        </View>
    
        </View>
        
        </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 24,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
    
      textInput: {
        width: '80%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#311b6b',
        borderRadius: 6,
        borderWidth: 1,
        padding: 8,
        marginRight: 8  
      },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
      }
      

    });