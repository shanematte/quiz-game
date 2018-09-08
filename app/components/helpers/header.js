import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

class Header extends Component {

	openDrawerButton(){
		let { navigate } = this.props
		return navigate('DrawerOpen')
	}

	goBack(){
		let { backPage } = this.props
		return backPage.goBack()	
	}

	render(){

		let { back } = this.props

		return(
			<View>
				<View style={styles.headerContent}>
					<View style={styles.headerContentView}>

						<TouchableOpacity onPress={this.openDrawerButton.bind(this)} style={styles.barMenuButton}>
							<Image style={styles.barMenuIcon} source={require('../../media/burger.png')}/>
						</TouchableOpacity>

						<Text style={styles.headerTitle}>{ this.props.headerTitle }</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContent:{
		width:width,
		height:70,
		position:'relative'
	},
	headerContentView:{
		position:'absolute',
		zIndex:10,
		width:width,
		height:50,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingRight:15,
		paddingLeft:15,
	},
	headerContentOverlay:{
		position:'absolute',
		zIndex:1,
		width:'100%',
		height:'100%'
	},
	headerContentOverlayImage:{
		width:'100%',
		height:50,
		resizeMode:'cover',
		position:'relative',
		zIndex:1
	},
	headerContentOverlayColor:{
		width:'100%',
		height:50,
		position:'absolute',
		top:0,
		left:0,
		zIndex:10,
		backgroundColor:'rgba(0,0,0,0.85)'
	},
	headerTitle:{
		color:'rgba(255,255,255,0.6)',
		fontSize:18
	},
	barMenuButton:{
		width:50,
		height:30
	},
	barMenuIcon:{
		width:30,
		height:'100%',
		tintColor:'rgba(255,255,255,0.7)',
		position:'absolute',
		top:0,
		left:0,
		resizeMode:'contain'
	}
})


export default Header