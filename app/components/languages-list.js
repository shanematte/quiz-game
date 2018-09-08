import React, { Component } from 'react'
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native'
import { connect } from 'react-redux'
import packSounds from '../config/music'

const { width, height } = Dimensions.get('window')

class LanguagesList extends Component {
	changeLanguage(language){
		this.playSoundTap()
		
		this.props.changeLanguage(language.slug)
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

		let { languages } = this.props.config
		let { localization } = this.props.navigation.state.params

		return (
			<View style={styles.mainView}>
				
				<View style={styles.header}>
					<Text style={styles.headerText}>{ localization.selectLanguage }</Text>
				</View>

				<View style={styles.mainContent}>
					<ScrollView>
						{
							languages.map((item, index)=>{
								return(
									<TouchableOpacity style={styles.buttonSelectLanguage} onPress={this.changeLanguage.bind(this, item)} key={index}>
										<Image style={styles.flugStyle} source={ item.flag }/>
										<Text style={styles.flugStyleTitle}>{ item.title }</Text>
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
	flugStyleTitle:{
		color:'#fff',
		fontSize:22,
		fontFamily:'Montserrat-Bold'
	},
	flugStyle:{
		width:65,
		height:45,
		marginRight:15,
		resizeMode:'contain'
	},
	buttonSelectLanguage:{
		width:width-20,
		height:68,
		marginLeft:10,
		marginBottom:7,
		borderWidth:5,
		borderColor:'#fff',
		borderRadius:8,
		backgroundColor:'#2f80ed',
		flexDirection:'row',
		alignItems:'center',
		paddingRight:10,
		paddingLeft:10
	},
	mainContent:{
		width:width,
		height:height-60
	},
	headerText:{
		fontSize:25,
		fontWeight:'bold',
		color:'#fff',
		fontFamily:'Montserrat-Bold',
	},
	mainView:{
		width:width,
		height:height
	},
	header:{
		width:width,
		paddingRight:15,
		paddingLeft:15,
		marginBottom:15,
		height:60,
		backgroundColor:'#2f80ed',
		justifyContent:'center',
		alignItems:'center'
	},
})

const mapStateToProps = (state) => {
	return {
		config:state.config
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeLanguage:(language) => {

			dispatch({
				type:'CHANGE_LANGUAGE',
				language:language
			})

			switch(language){

				case 'ru' :

					return dispatch({
						type:'CHANGE_LANGUAGE_RU'
					})

				case 'en' :

					return dispatch({
						type:'CHANGE_LANGUAGE_EN'
					})

				default :
					return

			}

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesList)