import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Tabs = () => (
  <View style={styles.container}>
    <Text style={[styles.icon, styles.active]}>Clone</Text>
    <Text style={styles.icon}>Search</Text>
    <View style={styles.main}>
      <Text style={styles.mainIcon}>plus</Text>
    </View>
    <Text style={styles.icon}>bell</Text>
    <Text style={styles.icon}>user</Text>
  </ View>
)

export default Tabs;