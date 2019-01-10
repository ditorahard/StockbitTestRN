import React, { Component } from 'react'
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ProfileGraph.component.style.js';
import {
  PieChart,
} from 'react-native-chart-kit'

export default class ProfileGraph extends Component {
  render() {
  	const data = [
	  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
	  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
	  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
	  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
	  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
	]
	const chartConfig = {
	  backgroundGradientFrom: '#1E2923',
	  backgroundGradientTo: '#08130D',
	  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
	}
    return (
        <View style={styles.graphContainer}>
	        <PieChart
			  data={data}
			  width={220}
			  height={220}
			  chartConfig={chartConfig}
			  accessor="population"
			  backgroundColor="transparent"
			  paddingLeft="15"
			/>	
	    </View>
    );
  }
}

ProfileGraph.propTypes = {
  abc: PropTypes.func,
};