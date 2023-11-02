import { Button, StyleSheet, Text, View } from "react-native"
import color from "../../../../../reactNative/src/style/colors";
import ButtonReact from "../../../../../reactNative/src/components/Button";
import { useContext } from "react";
import { AplicationContext } from "../../../context/context";

const Times = () => {
    const { time, setTime } = useContext(AplicationContext)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Intervalo de comunicação</Text>
            <View style={styles.row}>
                <ButtonReact title={"10s"} isAtive={time === 10} handlePress={() => setTime(10)} />
                <ButtonReact title={"5s"} isAtive={time === 5} handlePress={() => setTime(5)} />
                <ButtonReact title={"3s"} isAtive={time === 3} handlePress={() => setTime(3)} />
                <ButtonReact title={"1s"} isAtive={time === 1} handlePress={() => setTime(1)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32
    },
    title: {
        color: color.gray,
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    columnCenter: {
        justifyContent: "center"
    },
    row: {
        marginTop: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});


export default Times