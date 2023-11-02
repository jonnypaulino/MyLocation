import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AplicationProvider from './src/context/context';
import Home from './src/screen/Home';
import Router from './src/routes/router';

export default function App() {
  return (
    <View style={styles.container}>
      <AplicationProvider>
        <Router />
      </AplicationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
