import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
        />
  
          <View styles={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
          </View>


        <StyledButton type="primary" 
            content ={"Custom Order"} 
            onPress={()=> {
                console.warn("Custom Order Pressed!");  
            }}/>

            
        <StyledButton type="secondary" 
            content ={"Existing Inventory"} 
            onPress={()=> {
                console.warn("Existing Inventory Pressed!");  
            }}/>

        </View>
    );
};

export default CarItem;