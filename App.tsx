import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import {myColors} from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#17171C' }]}>
      <StatusBar style="auto" />
        <Switch
          trackColor={{ false: myColors.gray, true: myColors.blue }}
          thumbColor={theme === 'light' ? myColors.white : myColors.dark}
          ios_backgroundColor={myColors.gray}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          value={theme === 'light'}
        />
      <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'myColos.light',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
