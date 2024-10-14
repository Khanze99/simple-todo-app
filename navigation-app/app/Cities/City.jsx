import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity
} from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'


class City extends React.Component {
    static navigationOptions = (props) => {
        const {city} = props.navagation.state.params
        return {
            title: city.city,
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                fontWeight: '400'
            }
        }
    }
    state = {
        name: '',
        info: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    
    addLocation = () => {
        if (this.state.city === '' || this.state.info === '') return
        const {city} = this.props.navigation.state.params
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        this.props.screenProps.addLocation(location, city)
        this.setState({name: '', info: ''})
    }
    render() {
        const {city} = this.props.navigation.state.params
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={[!city.locations.length && {flex: 1}]}>
                    <View style={[styles.locationsContainer, !city.locations.length && {flex: 1, justifyContent: 'center'}]}>
                        {!city.locations.length && <CenterMessage message='No locations for this city!'/>}
                        {
                            city.locations.map(
                                (item, index) => (
                                    <View key={index} style={styles.locationContainer}>
                                        <Text style={styles.locationName}>{item.name}</Text>
                                        <Text style={styles.locationInfo}>{item.info}</Text>
                                    </View>
                                )
                                )
                        }
                    </View>
                </ScrollView>
                <TextInput onChangeText={val => this.onChangeText('name', val)} placeholder='Location name'
                value={this.state.name} style={styles.input} placeholderTextColor='white'/>
                
                <TextInput onChangeText={val => this.onChangeText('info', val)} placeholder='Location Info'
                value={this.state.info} style={[styles.input, styles.input2]} placeholderTextColor='white'/>

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}