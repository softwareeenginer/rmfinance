/*
        RMFinance  started by Mehmet Ali YILGIN.
    DESC: Mobile application that keeps financial status.
            SOFTWARE ENGINEER: Mehmet Ali YILGIN
*/

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from "native-base";
import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
