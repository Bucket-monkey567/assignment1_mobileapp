import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';


const AlertButton = () => {
    return(
        <TouchableOpacity onPress={() => Alert.alert("Alert Button pressed")}>
        <Text style={{ color: 'white', fontSize: 16 }}>Alert</Text>
        </TouchableOpacity>
    );
    
};

export default AlertButton;