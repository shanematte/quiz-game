import React, { Component } from 'react'

import {
	View,
	Text,
	ScrollView,
	Alert,
	StyleSheet,
	Dimensions,
	Image,
	TouchableOpacity,
	StatusBar,
	AppState
} from 'react-native'

import packSounds from '../config/music'

import appsFlyer from 'react-native-appsflyer'

import {FBLogin, FBLoginManager} from 'react-native-facebook-login'

import { connect } from 'react-redux'
import axios from 'axios'
import _ from 'underscore'

//components
import Loader from './helpers/loader'
import Splash from './helpers/splash'
import Header from './helpers/header'

const { width, height } = Dimensions.get('window')

class Home extends Component {

	constructor(props){
		super(props)

		this.state = {
			clickButton:true,
			localization:{},
			facebookLogin:false,
			statusTipsFacebook:false
		}

	}

	componentDidMount(){

		let that = this

		setTimeout(()=>{
			that.props.splashStatus(false)
		}, 1500)

		AppState.addEventListener('change', that._handleAppStateChange.bind(this))

		/*if (Platform.OS === 'ios') {
			options.appId = "123456789";
		}*/

		appsFlyer.initSdk({
			devKey: "46d2g4jRs8MmpHnmM6ZSfM",
			isDebug: false			
		}, (result) => {

			console.log(result)

		}, (error) => {
			console.error(error)
		})

		appsFlyer.trackEvent('Вход в игру', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

	}

	componentWillMount(){

		let that = this

		setTimeout(()=>{
			that.playMusicBackground()
		}, 300)

	}

	_handleAppStateChange(){

		let { music } = this.props.config

		if(AppState.currentState == 'background'){

			packSounds.musicAmbient.pause()

		}else if(AppState.currentState == 'active'){		

			music ? this.playMusicBackground() : packSounds.musicAmbient.pause()

		}

	}

	playMusicBackground(){

		let { music } = this.props.config

		if(music){

			packSounds.musicAmbient.setNumberOfLoops(-1)
			packSounds.musicAmbient.setVolume(0.4)
			packSounds.musicAmbient.play()

		}

	}

	goToPage(page){
		this.playSoundTap()
		return this.props.navigation.navigate(page)

	}

	goToLevels(){

		appsFlyer.trackEvent('screen_levels', {
			screen:'screen levels'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

		this.playSoundTap()		
		return this.props.navigation.navigate('Levels')
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

	loginFacebook(){
		this.playSoundTap()


	}

	goToShop(){
		this.playSoundTap()

		this.buyTips()
	}

	buyTips(){
		this.playSoundTap()
		return this.props.navigation.navigate('BuyTips')
	}

    onLogin(data){

    	let { facebookStatus } = this.props.config

      	console.log("Logged in!")
      	console.log(data)
      	this.props.facebookLoginSave(data)
      	this.statusChangeStateFacebook(data.type)
      	this.props.statusTipsFacebook()

		appsFlyer.trackEvent('FACEBOOK авторизация прошла успешно', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

      	if(facebookStatus === false){
      		this.setState({
      			statusTipsFacebook:true
      		})
      		this.props.updateTipsFacebook(10)
      	}

    }
    onLogout(){
      	console.log("Logged out.")

		appsFlyer.trackEvent('FACEBOOK завершение сеанса', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

    }
    onLoginFound(data){
      	console.log("Existing login found.")
      	console.log(data)
      	this.statusChangeStateFacebook(data.type)
    }
    onLoginNotFound(){
      	console.log("No user logged in.")
    }
    onCancel(){
      	console.log("User cancelled.")

		appsFlyer.trackEvent('FACEBOOK пользователь отменил авторизацию', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

    }
    onPermissionsMissing(data){
      	console.log("Check permissions!")
      	console.log(data)
    }

    statusChangeStateFacebook(type){

    	if(type == "success"){
	    	this.setState({
	    		facebookLogin:true
	    	})
	    	this.props.facebookTypeSave(true)
	    }else{
	    	this.setState({
	    		facebookLogin:false
	    	})
	    	this.props.facebookTypeSave(false)
	    }

    }

    closeModalTips(){
    	this.setState({
    		statusTipsFacebook:!this.state.statusTipsFacebook
    	})	
    }

	render(){

		let { nameApp, facebookStatus } = this.props.config
		let { localization } = this.props.locale
		let { facebookLogin, statusTipsFacebook } = this.state

		return(
			<View style={styles.mainViewHome}>
				<Splash/>
				<Loader/>
				<View style={styles.viewContent}>

					{
						statusTipsFacebook ?
							<View style={styles.modalView}>
								
								<View style={styles.modalContent}>

									<Text style={styles.modalContentTitle}>{ localization.facebookTips }</Text>

									<View style={styles.buttonsEventTest}>

										<TouchableOpacity onPress={this.closeModalTips.bind(this)} style={styles.eventButtonModalNo}>
											<Text style={styles.eventButtonModalText}>Ok</Text>
										</TouchableOpacity>

									</View>

								</View>

							</View>
						:
							<View></View>
					}

					<Image style={styles.logoImage} source={require('../media/quiz_logo.png')}/>

					<TouchableOpacity onPress={this.goToLevels.bind(this)} style={styles.buttonPlay}>
						<Image style={styles.buttonPlayImage} source={require('../media/but_igrat.png')}/>
						<Text allowFontScaling={false} style={styles.buttonPlayText}>{ localization.playButton }</Text>
					</TouchableOpacity>

					<View style={styles.mainButtonsHomeTop}>
						<TouchableOpacity style={styles.mainOthersButtons} onPress={this.goToShop.bind(this)}>
							<Image style={styles.buttonImageHomeTop} source={require('../media/coin_big.png')}/>
							<Text style={styles.mainOthersButtonText}>{ localization.shop } { facebookLogin }</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.mainOthersButtons} onPress={this.loginFacebook.bind(this)}>
							<FBLogin
							    buttonView={<Image style={styles.buttonImageHomeTop} source={require('../media/facebook.png')}/>}
							    ref={(fbLogin) => { this.fbLogin = fbLogin }}
							    loginBehavior={FBLoginManager.LoginBehaviors.Native}
							    permissions={["email","user_friends", "public_profile"]}
							    onLogin={this.onLogin.bind(this)}
							    onLoginFound={this.onLoginFound.bind(this)}
							    onLoginNotFound={this.onLoginNotFound.bind(this)}
							    onLogout={this.onLogout.bind(this)}
							    onCancel={this.onCancel.bind(this)}
							    onPermissionsMissing={this.onPermissionsMissing.bind(this)}
							/>
							<Text style={styles.mainOthersButtonText}>{ localization.login }</Text>
						</TouchableOpacity>

					</View>

					<View style={styles.bottomListButtons}>
						
						<TouchableOpacity style={styles.buttonEvent} onPress={this.goToPage.bind(this, 'Statistics')}>
							<Image style={styles.buttonEventImage} source={require('../media/stat.png')}/>
							<Text allowFontScaling={false} style={styles.buttonEventText}>{ localization.statistics }</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonEvent} onPress={this.goToPage.bind(this, 'Rating')}>
							<Image style={styles.buttonEventImage} source={require('../media/rating.png')}/>
							<Text allowFontScaling={false} style={styles.buttonEventText}>{ localization.rating }</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonEvent} onPress={this.goToPage.bind(this, 'Settings')}>
							<Image style={styles.buttonEventImage} source={require('../media/settings.png')}/>
							<Text allowFontScaling={false} style={styles.buttonEventText}>{ localization.settings }</Text>
						</TouchableOpacity>

					</View>

				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainOthersButtonText:{
		fontSize:17,
		marginTop:7,
		color:'rgba(0,0,0,0.78)',
		textAlign:'center'
	},
	mainOthersButtons:{
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'
	},
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
	buttonsEventTest:{
		width:'80%',
		flexDirection:'row',
		justifyContent:'center',
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
	buttonImageHomeTop:{
		width:44,
		height:44,
		resizeMode:'contain'
	},
	mainButtonsHomeTop:{
		marginTop:40,
		width:width/2,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	buttonEventImage:{
		width:35,
		height:35,
		resizeMode:'contain'
	},
	buttonEventText:{
		textAlign:'center',
		marginTop:5,
		fontSize:13,
		fontFamily:'Montserrat-SemiBold',
		color:'rgba(0,0,0,0.37)',
		opacity:0.5
	},
	buttonEvent:{
		width:width/3,
		height:70,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'column'
	},
	bottomListButtons:{
		width:width,
		height:70,
		position:'absolute',
		bottom:0,
		left:0,
		zIndex:10,
		flexDirection:'row'
	},
	buttonPlayText:{
		textAlign:'center',
		zIndex:10,
		color:'#fff',
		fontFamily:'Montserrat-Medium',
		fontSize:27
	},
	buttonPlayImage:{
		position:'absolute',
		width:'100%',
		height:'100%',
		top:0,
		left:0,
		resizeMode:'contain'
	},
	buttonPlay:{
		width:'70%',
		height:70,
		position:'relative',
		justifyContent:'center',
		alignItems:'center',
		zIndex:100
	},
	logoImage:{
		width:'60%',
		height:240,
		resizeMode:'contain',
		marginBottom:20,
		position:'relative',
		zIndex:100
	},
	mainViewHome:{
		width:width,
		height:height,
		backgroundColor:'#fff'
	},
	viewContent:{
		width:width,
		height:height,
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		position:'relative'
	}
})

const mapStateToProps = (state) => {
	return {
		config:state.config,
		locale:state.localeApp
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		splashStatus:(status)=>{
			dispatch({
				type:'SPASHSCREEN',
				splashStatus:status
			})
		},
		loadingStatus:(status)=>{
			dispatch({
				type:'LOADING',
				loading:status
			})
		},
		facebookLoginSave:(data)=>{

			let mainUserInfo = []

			mainUserInfo.push({
				credentials:data.credentials
			})

			mainUserInfo.push({
				profile:data.profile
			})

			return dispatch({
				type:'FACEBOOK_LOGIN',
				facebookLogin:mainUserInfo
			})

		},
		statusTipsFacebook:()=>{
			return dispatch({
				type:'FACEBOOK_STATUS'
			})
		},
		facebookTypeSave:(status)=>{
			return dispatch({
				type:'FACEBOOK_TYPE',
				facebookType:status
			})
		},
		updateTipsFacebook:(tips)=>{
			return dispatch({
				type:'TIPS_FOR_FACEBOOK',
				tips:tips
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
