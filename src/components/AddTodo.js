import React,{useState} from "react";
import { SafeAreaView,TextInput,Button, StyleSheet } from "react-native";

const AddTodo=({submitHandler})=>{
    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <SafeAreaView>
            <TextInput style={styles.inputText} placeholder="New Todo..." onChangeText={changeHandler} />
            <Button color="coral" title="Add Todo" onPress={()=>submitHandler(text)} />
        </SafeAreaView>

    )
}



export default AddTodo;

const styles=StyleSheet.create({
    inputText: {
        marginBottom: 10,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,

    }

})