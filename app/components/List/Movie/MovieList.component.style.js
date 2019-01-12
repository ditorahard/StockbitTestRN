import {StyleSheet} from 'react-native';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;
// const SCREEN_HEIGHT = SCREEN_IMPORT.get('window').height,
// import theme from '../../styles/theme.style';
// import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
	roundedForm:{
		flex:1,
	},
	card:{
		flex:1
	},
	cardImage:{
		height: 200, 
		width: null, 
		flex: 1
	}
});