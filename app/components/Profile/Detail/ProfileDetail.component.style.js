import {StyleSheet} from 'react-native';
// import theme from '../../styles/theme.style';
// import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
	profile:{
		flex:1,
		backgroundColor:"#014BAD",
		color:"#ffffff",
		paddingBottom:25
	},
	profileImage:{
		width: 100, 
		height: 100,
		borderRadius:50
	},
	profileName:{
		marginTop:10,
		fontSize:23,
		color:'white',
	},
	nameContainer:{
		alignItems:'center',
	},
	imageContainer:{
		paddingTop:20,
		alignItems:'center',
	},
	centerContainer:{
		alignItems:'center',
	},
	detailContainer:{
		marginTop:10,
		flexDirection:'row',
		flexWrap:'wrap',
		alignItems:'center',
	},
	detailContent:{
		marginRight:20,
	},
	profileDetail:{
		color:'white',
	},
});