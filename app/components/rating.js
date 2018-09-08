import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'underscore'
import packSounds from '../config/music'

const { width, height } = Dimensions.get('window')

class Rating extends Component {
	backScreen(){
		this.playSoundTap()

		return this.props.navigation.goBack()
	}
	playSoundTap(){

		let { sound, volume } = this.props.config

		if(sound){

			packSounds.tap.setVolume(volume)
			packSounds.tap.play()

		}else{

			packSounds.tap.pause()

		}
	
	}	
	render(){

		let { ratings } = this.props.ratings
		let { localization } = this.props.locale

		return(
			<View style={styles.mainView}>

				<View style={styles.header}>
					<TouchableOpacity onPress={this.backScreen.bind(this)} style={styles.buttonBack}>
						<Image source={require('../media/back.png')} style={styles.buttonBackImage}/>
					</TouchableOpacity>
					<Text allowFontScaling={false} style={styles.textHeader}>{ localization.rating }</Text>
				</View>

				<View style={styles.mainContent}>
					<ScrollView>
						{
							ratings.map((item, index)=>{

								let searchLocale = _.where(localization.ratings, {
									search:item.search
								})

								return (
									<TouchableOpacity style={item.status ? styles.itemViewStyle : styles.itemViewStyleFalse}>
										{
											item.status ?
												<Image style={styles.imageItemStyle} source={require('../media/star.png')}/>
											:
												<Image style={styles.imageItemStyle} source={require('../media/lock.png')}/>
										}
										<Text style={styles.itemTextStyle}>{ searchLocale[0].title }</Text>
									</TouchableOpacity>
								)

							})
						}
					</ScrollView>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	imageItemStyle:{
		width:45,
		height:45,
		resizeMode:'contain',
		marginRight:18
	},
	itemTextStyle:{
		color:'#000',
		fontFamily:'Montserrat-Bold',
		fontSize:18
	},
	itemViewStyle:{
		width:width-30,
		marginLeft:15,
		borderWidth:5,
		marginTop:8,
		marginBottom:8,
		height:80,
		borderColor:'#2f80ed',
		borderRadius:9,
		padding:10,
		flexDirection:'row',
		alignItems:'center'
	},
	itemViewStyleFalse:{
		width:width-30,
		marginLeft:15,
		borderWidth:1,
		marginTop:8,
		opacity:0.18,
		marginBottom:8,
		height:80,
		borderColor:'#f57878',
		borderRadius:9,
		padding:10,
		flexDirection:'row',
		alignItems:'center'
	},
	mainContent:{
		width:width,
		height:height-60
	},
	textHeader:{
		color:'#2f80ed',
		fontFamily:'Montserrat-Bold',
		fontSize:22
	},
	buttonBackImage:{
		width:25,
		height:25,
		resizeMode:'contain'
	},
	buttonBack:{
		width:60,
		height:60,
		justifyContent:'center',
		alignItems:'center'
	},
	header:{
		width:width,
		height:60,
		flexDirection:'row',
		alignItems:'center'
	},
	mainView:{
		width:width,
		height:height
	}
})

const mapStateToProps = (state) => {
	return {
		ratings:state.rating,
		locale:state.localeApp,
		config:state.config
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)

