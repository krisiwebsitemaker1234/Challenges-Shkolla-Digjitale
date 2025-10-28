import React from "react";
import { View, Text, Stylesheet, Button, TouchableOpacity} from "react-native";


const touchOpacity = () => {
    return (
<TouchableOpacity
    onpress={() => console.log('touchableopacity is clicked')}
    style = {Stylesheet.touchableBtn}>
    <Text style = {Stylesheet.btnText}>
        Click Touchable Opacity Element
    </Text>
</TouchableOpacity>
    )
};

const style = Stylesheet.create({
    touchableBtn: {
        backgroundColor: "purple",
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnText: {
        color: "white",
        tetAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    }
});
