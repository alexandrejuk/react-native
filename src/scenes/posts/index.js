import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

import Post from './Post';
import styles from './styles';

export default class Posts extends Component {

  static navigationOptions = {
    title: 'Posts'
  }

  render() { 
    const { navigate } = this.props.navigation;
    return ( 
      <ScrollView style={styles.container}>
      <TouchableOpacity 
        onPress={() => { navigate('Profile') }}
        style={styles.profileButton}>
        <Text style={styles.profileButtonText}>My Profile</Text>
      </TouchableOpacity>
       <Post />
       <Post />
       <Post />       
       <Post />
       <Post />   
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />       
       <Post />
       <Post />   
       <Post />
       <Post />  
       <Post />
       <Post />
       <Post />       
       <Post />
       <Post />   
       <Post />
       <Post />     
      </ScrollView>
     )
  }
}
