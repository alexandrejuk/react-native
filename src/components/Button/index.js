import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ children, style }) => (
  <TouchableOpacity style={[
    styles.container, 
    style,
    ]} >
    <Text style={[
      styles.text,
      ]}>{children}</Text>
  </ TouchableOpacity>
)

export default Button;