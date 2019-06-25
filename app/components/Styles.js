import { StyleSheet } from "react-native";

export default (Styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
  },
	sectionOne:{
		height: "80%",
		width: "100%",
		display:"flex",
		flexDirection:"row"
	},
	sectionTwo:{
		height: "100%",
		width: "100%",
	},
	poster:{
		height:"100%",
		width:"40%",
	},
	textContainer:{
		height:"100%",
		width:"60%",
	},
	tittelContainer:{
		height:"30%",
		width:"100%",
		alignItems:"center",
		justifyContent:"center"
	},
	seprater:{
		height:1,
		width:"100%",
		backgroundColor:"black"
	},
	overviewContainer: {
		width:"100%",
		height:"70%",
	},
	reactionContainer:{
		width:"100%",
		height:"20%",
		display:"flex",
		flexDirection:"row",
	},
	likeSubContainer: {
		height:"100%",
		width:"50%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"#F5FCFF"
	},
	dislikeContainer:{
		height:"100%",
		width:"50%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"#F5FCFF"
	},
	text:{
		fontSize:15,
	},
	posterSize:{
		height:"100%",
		width:"100%",
	},
	tittelSize: {
		fontSize:20,
	},
	overviewSize:{
		padding:10
	}
}));
