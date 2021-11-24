// import React, {Component} from 'react';
// import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
// import DrowdownBelow from '../../assets/icons/DropdownBelow.svg';
// import DropdownUp from '../../assets/icons/DropdownUp.svg'
// import { Colors } from './colors';
// export default class Accordian extends Component{

//     constructor(props) {
//         super(props);
//         this.state = { 
//           data: props.data,
//           expanded : false,
//           menu :[
//             { 
//               title: 'Non Veg Biryanis', 
//               data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
//             },
//             { 
//               title: 'Pizzas',
//               data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
//             },
//             { 
//              title: 'Drinks',
//              data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
//             },
//             { 
//               title: 'Deserts',
//               data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
//             },
//           ]
//         }

//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental(true);
//         }
//     }
  
//   render() {

//     return (
//        <View>
//             <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
//                 <Text style={[styles.title]}>{this.props.title}</Text>
//                 {this.state.expanded?
//               <DrowdownBelow/>:
//               <DropdownUp/>  
//               }
//                 {/* <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30}  /> */}
//             </TouchableOpacity>
//             <View style={styles.parentHr}/>
//             {
//                 this.state.expanded &&
//                 <View style={styles.child}>
//                     <Text>{this.props.data}</Text>    
//                 </View>
//             }
            
//        </View>
//     )
//   }

//   onClick=(index)=>{
//     const temp = this.state.data.slice()
//     temp[index].value = !temp[index].value
//     this.setState({data: temp})
//   }

//   toggleExpand=()=>{
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     this.setState({expanded : !this.state.expanded})
//   }

// }

// const styles = StyleSheet.create({
//   title:{
//       fontSize: 14,
//       fontWeight:'bold',
//       color: Colors.DARKGRAY,
//   },
//   row:{
//       flexDirection: 'row',
//       justifyContent:'space-between',
//       height:56,
//       paddingLeft:25,
//       paddingRight:18,
//       alignItems:'center',
//       backgroundColor: Colors.CGRAY,
//   },
//   parentHr:{
//       height:1,
//       color: Colors.WHITE,
//       width:'100%'
//   },
//   child:{
//       backgroundColor: Colors.LIGHTGRAY,
//       padding:16,
//   }
  
// });


import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from './colors';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

 

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
        padding:16,
    }
    
});
