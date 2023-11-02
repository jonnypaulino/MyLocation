import { StyleSheet, Switch, Text, View } from "react-native";
import color from "../../../style/colors";
import { useContext, useState } from "react";
import { AplicationContext } from "../../../context/context";

const IsAtive = () => {
    const { ative, setAtive } = useContext(AplicationContext)
    const toggleSwitch = () => setAtive(previousState => !previousState);
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.title}>
                    Status de serviço
                </Text>
                <Text style={styles.subtitle}>Serviço {ative ? "Ativo" : "Inativo"}</Text>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: color.grayClear }}
                thumbColor={ative ? color.secondary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={ative}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    title: {
        color: color.gray,
        fontSize: 16,
        fontWeight: '600',

    },
    subtitle: {
        color: color.gray,
        fontSize: 14,
        fontWeight: '400',

    },
    columnCenter: {
        justifyContent: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        padding: 32,
        justifyContent: "space-between"
    }
});

export default IsAtive;