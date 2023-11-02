import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import color from "../../style/colors";

const ButtonReact = ({ title, isAtive, handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}>

            <View style={[styles.button, { borderColor: isAtive ? color.secondary : color.grayClear, backgroundColor: isAtive ? "#edf4f2" : "white" }]}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        height: 64,
        width: 64,
        borderStyle: "solid",
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        margin: "auto",
        fontWeight: '600',
    }
});

export default ButtonReact
