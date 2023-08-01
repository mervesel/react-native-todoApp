import React from "react";
import { SafeAreaView,StyleSheet,Text } from "react-native";

const Header=()=>{
    return(
        <SafeAreaView style={styles.headerContainer}>
            <Text style={styles.headerText}>My Todos</Text>
            
        </SafeAreaView>

    )
}
export default Header;

const styles=StyleSheet.create({
    headerContainer: {
        backgroundColor: 'tomato',
        height: 100,
        padding: 20
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }

})