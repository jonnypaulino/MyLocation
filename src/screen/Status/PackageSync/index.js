import { StyleSheet, Text, View } from "react-native";
import color from "../../../style/colors";

const PackageSync = ({ item, isSync }) => {
    const date = new Date(item.time.toString());
    const horas = date.getUTCHours();
    const minutos = date.getUTCMinutes();

    const time = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    return (
        <View style={styles.container}>
            <View style={{ height: 2, backgroundColor: color.grayClear, width: '100%', marginVertical: 8 }} />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>
                        Pacote ID: {item.id}
                    </Text>
                    <Text style={styles.time}>
                        {isSync ? "Sincronizado" : "Pendente"}
                    </Text>
                </View>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: color.gray,
        fontSize: 16,
        fontWeight: '600',
    },
    time: {
        color: color.gray,
        fontWeight: '500',

    }
});

export default PackageSync;
