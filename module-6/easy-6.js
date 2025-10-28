import React from "react";
import { View, Text, Stylesheet, Button, TouchableOpacity} from "react-native";

const ButtonDisplay = () => {
    return (
        <View>
        <Button 
        title="Click The Button"
        color="red"
        style = {Stylesheet.btnStyle}
        onPress={() => console.log('button is clicked', +counter, 'times')}
        />
        </View>
    );
};

const style = Stylesheet.create({
    btnStyle: {
        backgroundColor: "red",
        marginHorizontal: 20,
        marginVertical: 30,
        paddingHorizontal: 40,
        paddingVertical: 50,
    }
});

export default ButtonDisplay;