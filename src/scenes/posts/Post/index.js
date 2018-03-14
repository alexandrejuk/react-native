import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Post extends Component {

  render() { 
    return ( 
      <View style={styles.container}>
        <Text style={styles.postTitle}>I'm a Title of Post</Text>
        <Text style={styles.postDescription}>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book.
        </Text>
      </View>
     )
  }
}
