import React, { Component } from 'react'
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'underscore'
import packSounds from '../config/music'

const { width, height } = Dimensions.get('window')

class Statistics extends Component {

	constructor(props){
		super(props)

		this.state = {
			modal:false
		}
	}

	backScreen(){
		this.playSoundTap()
		
		return this.props.navigation.goBack()
	}

	resetGame(){
		this.playSoundTap()

		this.setState({
			modal:!this.state.modal
		})

		return this.props.resetGame()
	}

	closeModal(){
		this.playSoundTap()

		this.setState({
			modal:!this.state.modal
		})	
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

		let { localization } = this.props.locale
		let { levels } = this.props
		let { modal } = this.state

		let doneLevels = _.where(levels.levels, {
			coins:true
		})

		return(
			<View style={styles.mainView}>

				{
					modal ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								<Text style={styles.modalContentTitle}>{ localization.textResetGame }</Text>

								<View style={styles.buttonsEvent}>

									<TouchableOpacity onPress={this.resetGame.bind(this)} style={styles.eventButtonModalYes}>
										<Text style={styles.eventButtonModalText}>{ localization.yes }</Text>
									</TouchableOpacity>

									<TouchableOpacity onPress={this.closeModal.bind(this)} style={styles.eventButtonModalNo}>
										<Text style={styles.eventButtonModalText}>{ localization.no }</Text>
									</TouchableOpacity>

								</View>

							</View>

						</View>
					:
						<View></View>

				}

				<View style={styles.header}>
					<TouchableOpacity onPress={this.backScreen.bind(this)} style={styles.buttonBack}>
						<Image source={require('../media/back.png')} style={styles.buttonBackImage}/>
					</TouchableOpacity>
					<Text allowFontScaling={false} style={styles.textHeader}>{ localization.statistics }</Text>
				</View>

				<View style={styles.mainContent}>
					<ScrollView>

						<View style={styles.sectionStat}>
							<Text style={styles.sectionTitle}>{ localization.levelscompleted }:</Text>
							<Text style={styles.sectionText}>{ `${ levels.levelsDone } / ${levels.levels.length}` }</Text>
						</View>

						<View style={styles.sectionStat}>
							<Text style={styles.sectionTitle}>{ localization.guessedassignments }:</Text>
							<Text style={styles.sectionText}>{ `${ levels.tasksDone } / ${levels.levels.length * 10}` }</Text>
						</View>

						<TouchableOpacity onPress={this.closeModal.bind(this)} style={styles.resetButton}>
							<Image style={styles.resetButtonImage} source={require('../media/but_sbros.png')}/>
							<Text style={styles.resetButtonText}>{ localization.resetText }</Text>
						</TouchableOpacity>

					</ScrollView>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	eventButtonModalText:{
		fontSize:20,
		fontFamily:'Montserrat-ExtraBold',
		color:'#fff'
	},
	eventButtonModalYes:{
		width:'45%',
		height:65,
		borderWidth:4,
		borderColor:'#fff',
		borderRadius:32,
		backgroundColor:'#f57878',
		justifyContent:'center',
		alignItems:'center'
	},
	eventButtonModalNo:{
		width:'45%',
		height:65,
		borderWidth:4,
		borderColor:'#fff',
		borderRadius:32,
		backgroundColor:'#fad514',
		justifyContent:'center',
		alignItems:'center'
	},
	buttonsEvent:{
		width:'80%',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	modalContentTitle:{
		color:'#fff',
		marginBottom:25,
		textAlign:'center',
		fontSize:23,
		fontFamily:'Montserrat-ExtraBold'
	},
	modalContent:{
		width:width-70,
		paddingTop:45,
		paddingBottom:45,
		backgroundColor:'#2f80ed',
		borderWidth:11,
		borderColor:'#fff',
		borderRadius:21,
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		padding:15
	},
	modalView:{
		width:width,
		height:height,
		position:'absolute',
		top:0,
		left:0,
		zIndex:1000,
		backgroundColor:'rgba(0,0,0,0.18)',
		justifyContent:'center',
		alignItems:'center'
	},
	resetButtonText:{
		color:'#fff',
		fontFamily:'Montserrat-ExtraBold',
		textAlign:'center',
		position:'relative',
		zIndex:10,
		fontSize:22
	},
	resetButtonImage:{
		width:'100%',
		height:'100%',
		position:'absolute',
		zIndex:1,
		resizeMode:'contain'
	},
	resetButton:{
		width:width-30,
		marginLeft:15,
		marginTop:35,
		height:80,
		position:'relative',
		justifyContent:'center',
		alignItems:'center'
	},
	sectionText:{
		fontSize:19,
		fontWeight:'bold',
		fontFamily:'Montserrat-ExtraBold',
		color:'#fff'
	},
	sectionTitle:{
		fontSize:17,
		color:'#fff',
		fontFamily:'Montserrat-ExtraBold',
		marginRight:10
	},
	sectionStat:{
		width:width-30,
		marginLeft:15,
		backgroundColor:'#2f80ed',
		borderRadius:7,
		marginBottom:15,
		paddingTop:20,
		paddingBottom:20,
		paddingRight:10,
		paddingLeft:10,
		flexDirection:'row',
		borderWidth:5,
		borderColor:'#fff'
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
		height:height,
		position:'relative'
	}
})

const mapStateToProps = (state) => {
	return {
		config:state.config,
		locale:state.localeApp,
		levels:state.levels
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetGame:()=>{
			return dispatch({
				type:'RESET_GAME'
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

