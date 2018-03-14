import React from 'react';
import { View, Text, Image } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <Image 
      style={styles.avatar} 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10wlau5OeNue_w6HbglYrTLAae_IYELETagrFo2c1pEhlUsKu' }}
    />
     <View style={styles.profileInfo}>
      <Text style={styles.name}>Angelina Jolie</Text>
      <Text style={styles.bio}>Head de Programação na rocket seat fazendo live de layout</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Mensagem</Button>
        <Button>Seguir</Button>        
      </View>
     </ View>
  </ View>
)

export default SubHeader;