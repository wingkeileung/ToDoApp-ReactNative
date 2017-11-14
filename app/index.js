import React, { Component } from 'react'
import moment from 'moment'
import { Text, StyleSheet, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Card from './card'

const image = require('./wp.jpg');

export default class App extends Component {
    state = {
        note: '',
        notes: [],
    }

    handlePress() {
        if (this.state.note) {
            this.state.notes.push({
                note: this.state.note,
                date: moment().format("LLLL")
            })
            this.setState({notes: this.state.notes, note: ''})
        }
    }

    deleteNote(i){
        this.state.notes.splice(i, 1)
        this.setState({notes: this.state.notes})
    }

    render() {
        const notes = this.state.notes.map((note, i) => {
            return (
                    <Card
                    key={i}
                    keyVal={i}
                    note={note}
                    onPress={() => this.deleteNote(i)}/>
                )
        })
        return (
            <View style={styles.container}>
                <Image style={styles.imageBackground}
                    source = {image}>
                <View style={styles.header}>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', marginTop: 50, marginRight: '20%'}}
                    value = {this.state.note}
                    placeholder={'Enter your list here'}
                    onChangeText={(note) => this.setState({note})}/>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity onPress = {() => this.handlePress()}>
                        <Text style={{fontSize: 45, color: 'white'}}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style = { styles.content } >
                    <Text style={{fontSize: 25, backgroundColor: 'transparent'}}> To-Do List: </Text>
                    <ScrollView>
                        {notes}
                    </ScrollView>
                </View>
                <View style = { styles.footer } >
                    <Text style={{ color: 'white'}}>Simple to do list with React Native!</Text>
                    <Text style={{ color: 'white'}}>by Wing Kei Leung </Text>
                </View>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1.2,
        backgroundColor: '#FCEC0C',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 6,
        width: '100%'
    },
    footer: {
        flex: 0.7,
        backgroundColor: 'black',
        width: '100%'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 10
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

