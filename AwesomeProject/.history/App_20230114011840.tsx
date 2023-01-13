/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {API_URL, API_TOKEN} from '@env';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Text>API URL: {API_URL}</Text>
      <Text>API Token: {API_TOKEN}</Text>
    </View>
  );
}

export default App;
