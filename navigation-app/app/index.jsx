import React, { Component } from "react";

import Cities from "./Cities/Cities"
import City from "./Cities/City"
import AddCity from "./AddCity/AddCity"

import { colors } from './theme'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const CitiesStack = () => {
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: colors.primary}, headerTintColor: '#fff'}}>
        <Stack.Screen name="Cities" component={Cities}/>
        <Stack.Screen name="City" component={City}/>
    </Stack.Navigator>
}


const Tabs = ({screenProps}) => (
    <Tab.Navigator>
        <Tab.Screen name="CitiesNav" children={() => <CitiesStack screenProps={screenProps}/>}/>
        <Tab.Screen name="AddCity" children={() => <AddCity screenProps={screenProps}/>}/>
    </Tab.Navigator>
)

export default class App extends Component {
    state = {
        cities: []
    }

    addCity = (city) => {
        const cities = this.state.cities
        cities.push(city)
        this.setState({cities})
    }
    
    addLocation = (location, city) => {
        const index = this.state.cities.findIndex(item => {return item.id === city.id})
        const chosenCity = this.state.cities[index]
        chosenCity.locations.push(location)
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index + 1)
        ]
        this.setState({cities})
    }
    
    render() {
        return (
            <Tabs screenProps={{
                cities: this.state.cities, 
                addCity: this.addCity, 
                addLocation: this.addLocation}}/>
        )
    }
}

