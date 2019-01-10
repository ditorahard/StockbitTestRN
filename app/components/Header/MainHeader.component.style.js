import {StyleSheet} from 'react-native';
// import theme from '../../styles/theme.style';
// import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
	whiteHeader:{
		backgroundColor: "#ffffff",
		elevation:4,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: "grey",
		shadowOpacity: 0.5,
		shadowRadius: 10,
		marginBottom:3,
	},
	iconButton:{
		color:"#014BAD",
	},
	ajardiaLogo:{
		 flex: 1,
	     resizeMode: 'contain'
	},
	logoContainer:{
		height:20,
		paddingLeft:40
	},
});