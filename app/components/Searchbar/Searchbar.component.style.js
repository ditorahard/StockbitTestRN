import {StyleSheet} from 'react-native';
// import theme from '../../styles/theme.style';
// import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
	searchbar:{
		padding:5,
		// alignItems:'center',
		backgroundColor:'#FFFFFF',
		elevation:1,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: "grey",
		shadowOpacity: 0.5,
		shadowRadius: 10,
		marginBottom:3,
		marginTop:3,
	},
	searchbarContent:{
		// width:250,
	},
	searchInput:{
		fontSize:15,
	},
	whitetext:{
		color:'#FFFFFF',
		fontSize:20,
		fontWeight:'700',
	},
});