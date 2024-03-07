import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AppStack from './src/navigation/stack/AppStack';

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
