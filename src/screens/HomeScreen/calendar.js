import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Accordian from '../../../src2/Accordian'
import { Colors } from '../../../src2/Colors';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'טיפול פילינג',
        
          date:'ראשון 10/10/21 בשעה 10:30',
          namee:'לודמילה',
          data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        { 
          title: 'טיפול פילינג',
          date:'ראשון 17/10/21 בשעה 12:30',
          namee:'תמי',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
          title: 'טיפול פילינג',
          date:'ראשון 17/10/21 בשעה 12:30',
          namee:'תמי',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
          title: 'טיפול פילינג',
          date:'ראשון 17/10/21 בשעה 12:30',
          namee:'תמי',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
      ]
     }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{marginTop:'40%'}}>
        { this.renderAccordians() }
        </View>
      </ScrollView>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                date = {item.date}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  
  }
});