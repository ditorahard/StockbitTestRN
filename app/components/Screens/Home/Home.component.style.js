import {StyleSheet} from 'react-native';
import SCREEN_IMPORT from 'Dimensions';
  
const SCREEN_HEIGHT = SCREEN_IMPORT.get('window').height;

export default StyleSheet.create({
	container: {
	    padding:20,
	    height:SCREEN_HEIGHT
	},
	imageModal:{
		flex:1,
		height:400,
	},
	modalText:{
		color:'#FFFFFF'
	}
});