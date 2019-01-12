import {StyleSheet} from 'react-native';
import SCREEN_IMPORT from 'Dimensions';
  
const IMAGE_WIDTH = SCREEN_IMPORT.get('window').width*0.5;

export default StyleSheet.create({
	container: {
	    padding:20,
	},
	imageDetail:{
		width:IMAGE_WIDTH,
		height:200,
		marginBottom:20,
	},
});