import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.icon}> ? </Text>
    <Text style={styles.title}>Profile</Text>
    <Text style={styles.icon}>+</Text>
  </ View>
)

export default Header;