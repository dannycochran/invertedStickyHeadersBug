/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const sections = [
  {
    key: 'section1',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section1-${i}`
    }))
  }, {
    key: 'section2',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section2-${i}`
    }))
  }, {
    key: 'section3',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section3-${i}`
    }))
  }, {
    key: 'section4',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section4-${i}`
    }))
  }, {
    key: 'section5',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section5-${i}`
    }))
  }, {
    key: 'section6',
    data: Array(10).fill(null).map((u, i) => ({
      key: `section6-${i}`
    }))
  }
];

export default class App extends Component {
  renderItem = (info) => {
    console.log(info);
    return <View key={info.item.key} style={{
      backgroundColor: 'lightgrey',
      height: 50,
      width: '100%'
    }}><Text>{`List Item ${info.item.key}`}</Text></View>
  }

  renderSectionHeader = (info) => {
    return <View key={info.section.key} style={{
      backgroundColor: 'lightblue',
      height: 50,
      width: '100%'
    }}><Text>{`Section Header ${info.section.key}`}</Text></View>

  }

  render() {
    return (
      <SectionList sections={sections}
        inverted
        invertedStickyHeaders
        stickySectionHeadersEnabled
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}>
      </SectionList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
