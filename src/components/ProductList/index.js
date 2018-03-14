import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Product from './Product';

import styles from './styles';

class ProductList extends Component {
    state = { 
      products: [
        {
          id: 1,
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$50,00',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFkbZ45iV4BCX3O4ddBueQTMWSoNu19w9rzqudr-sLHHPRtum',
        },
        {
          id: 2,
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$70,00',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFkbZ45iV4BCX3O4ddBueQTMWSoNu19w9rzqudr-sLHHPRtum',
        },
        {
          id: 3,
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$120,00',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFkbZ45iV4BCX3O4ddBueQTMWSoNu19w9rzqudr-sLHHPRtum',
        },
        {
          id: 4,
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$120,00',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFkbZ45iV4BCX3O4ddBueQTMWSoNu19w9rzqudr-sLHHPRtum',
        }
      ]
    }


  render() { 
    return ( 
      <View style={styles.container}>
        { this.state.products.map(product => 
          <Product key={product.id} product={product} /> 
        )}
      </ View>
     )
  }

}

export default ProductList;