import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	ScrollView,
	Linking,
	Alert
} from 'react-native'
import { connect } from 'react-redux'
import packSounds from '../config/music'
import _ from 'underscore'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'

const { width, height } = Dimensions.get('window')

class SettingsPage extends Component {
	constructor(props){
		super(props)

	}
	backScreen(){
		this.playSoundTap()
		return this.props.navigation.goBack()
	}
	changeSound(){
		this.playSoundTap()
		
		this.props.changeSound(!this.props.config.sound)
	}
	changeMusic(){
		this.playSoundTap()

		this.props.changeMusic(!this.props.config.music)

		if(this.props.config.music){
			packSounds.musicAmbient.pause()
		}else{
			packSounds.musicAmbient.play()
		}

	}
	changeLanguage(){
		this.playSoundTap()

		let { localization } = this.props.locale
		return this.props.navigation.navigate('LanguagesList', {
			localization:localization
		})
	}
	openMarket(){
		this.playSoundTap()

		return Linking.openURL('https://play.google.com/store/apps/developer?id=ASIRA+MEDIA+CO+LTD.')
	}
	buyTips(){
		this.playSoundTap()
		return this.props.navigation.navigate('BuyTips')
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
	onLogout(){
		console.log("Logged out.")
		this.props.facebookLoginSave()
	}
	render(){

		let { localization } = this.props.locale
		let { sound, music, languages, language, facebookLogin, facebookType } = this.props.config

		let selectLanguage = _.where(languages, {
			slug:language
		})

		return(
			<View style={styles.mainView}>

				<View style={styles.headerView}>
					<TouchableOpacity onPress={this.backScreen.bind(this)} style={styles.buttonBack}>
						<Image source={require('../media/back.png')} style={styles.buttonBackImage}/>
					</TouchableOpacity>
					<Text allowFontScaling={false} style={styles.textHeader}>{ localization.settings }</Text>
				</View>

				<View style={styles.contentView}>
					<ScrollView>

						<View style={styles.sectionSetting}>
							<TouchableOpacity onPress={this.changeSound.bind(this)} style={styles.sectionSettingButton}>
								
								{
									sound ? <Image style={styles.sectionSettingButtonBorder} source={require('../media/Rectangle_blue.png')}/> : <Image style={styles.sectionSettingButtonBorder} source={require('../media/Rectangle_red.png')}/>
								}
								
								{
									sound ? <Image style={styles.sectionSettingButtonImageTrue} source={require('../media/Ellipse_blue.png')}/> : <Image style={styles.sectionSettingButtonImageFalse} source={require('../media/Ellipse_red.png')}/>
								}

							</TouchableOpacity>
							<Text style={styles.sectionSettingTitle}>{ localization.sound }</Text>
						</View>

						<View style={styles.sectionSetting}>
							<TouchableOpacity onPress={this.changeMusic.bind(this)} style={styles.sectionSettingButton}>
								
								{
									music ? <Image style={styles.sectionSettingButtonBorder} source={require('../media/Rectangle_blue.png')}/> : <Image style={styles.sectionSettingButtonBorder} source={require('../media/Rectangle_red.png')}/>
								}
								
								{
									music ? <Image style={styles.sectionSettingButtonImageTrue} source={require('../media/Ellipse_blue.png')}/> : <Image style={styles.sectionSettingButtonImageFalse} source={require('../media/Ellipse_red.png')}/>
								}

							</TouchableOpacity>
							<Text style={styles.sectionSettingTitle}>{ localization.music }</Text>
						</View>

						<TouchableOpacity onPress={this.changeLanguage.bind(this)} style={styles.buttonLanguage}>
							
							<Image style={styles.flugStyle} source={selectLanguage[0].flag}/>
							<Text style={styles.flugStyleTitle}>{ selectLanguage[0].title }</Text>
							<Image style={styles.bottomArrow} source={require('../media/bottom-arrow.png')} />

						</TouchableOpacity>

						<TouchableOpacity onPress={this.buyTips.bind(this)} style={styles.adButton}>
							<Image source={require('../media/but_yellow.png')} style={styles.adButtonImage}/>
							<Text style={styles.adButtonText}>{ localization.hints }</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.adButton}>
							<Image source={require('../media/but_yellow.png')} style={styles.adButtonImage}/>
							<Text style={styles.adButtonText}>{ localization.removeAd }</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={this.openMarket.bind(this)} style={styles.adButton}>
							<Image source={require('../media/but_yellow.png')} style={styles.adButtonImage}/>
							<Text style={styles.adButtonText}>{ localization.otherGames }</Text>
						</TouchableOpacity>

						{
							facebookLogin.length > 0 ?
								<View style={styles.mainViewFacebook}>
									<Text style={styles.mainViewFacebookTitle}>Facebook</Text>
									<View style={styles.mainViewFacebookContent}>
										<Image style={styles.mainViewFacebookContentAvatar} source={{uri:facebookLogin[1].profile.picture.data.url}}/>
										<View style={styles.mainViewFacebookContentInfo}>
											<Text style={styles.mainViewFacebookContentInfoName}>{facebookLogin[1].profile.first_name}</Text>
											<Text style={styles.mainViewFacebookContentInfoEmail}>{facebookLogin[1].profile.email}</Text>
										</View>
									</View>

									<FBLogin
									    buttonView={<TouchableOpacity onPress={this.onLogout.bind(this)}><Text>{ localization.logout }</Text></TouchableOpacity>}
									    ref={(fbLogin) => { this.fbLogin = fbLogin }}
									    loginBehavior={FBLoginManager.LoginBehaviors.Native}
									    permissions={["email","user_friends", "public_profile"]}
									    onLogout={this.onLogout.bind(this)}
									/>

								</View>
							:
								<View></View>
						}

					</ScrollView>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainViewFacebookContentInfoName:{
		fontWeight:'bold',
		fontSize:18,
		color:'rgba(0,0,0,1)'
	},
	mainViewFacebookContentInfoEmail:{
		fontWeight:'bold',
		fontSize:13,
		color:'rgba(0,0,0,0.5)'
	},	
	mainViewFacebookContentInfo:{
		flexDirection:'column',
		alignItems:'flex-start',
		justifyContent:'center'
	},
	mainViewFacebookContentAvatar:{
		width:50,
		height:50,
		resizeMode:'cover',
		marginRight:15
	},
	mainViewFacebookContent:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		marginTop:5,
		marginBottom:5
	},
	mainViewFacebookTitle:{
		fontSize:18,
		color:'rgba(0,0,0,0.8)',
	},
	mainViewFacebook:{
		width:width-30,
		borderRadius:5,
		backgroundColor:'rgba(0,0,0,0.05)',
		padding:10,
		marginLeft:15,
		marginTop:15,
		marginBottom:25
	},
	adButtonText:{
		color:'#000',
		fontSize:24,
		zIndex:10,
		position:'relative',
		fontFamily:'Montserrat-Bold'
	},
	adButtonImage:{
		width:'100%',
		height:'100%',
		position:'absolute',
		top:0,
		left:0,
		zIndex:1,
		resizeMode:'contain'
	},
	adButton:{
		width:width-30,
		marginLeft:15,
		marginTop:15,
		height:80,
		position:'relative',
		justifyContent:'center',
		alignItems:'center'
	},
	bottomArrow:{
		width:15,
		height:15,
		opacity:0.6,
		resizeMode:'contain'
	},
	flugStyleTitle:{
		color:'#fff',
		fontSize:22,
		fontFamily:'Montserrat-Bold'
	},
	flugStyle:{
		width:65,
		height:45,
		resizeMode:'contain'
	},
	buttonLanguage:{
		paddingRight:10,
		paddingLeft:10,
		width:width-30,
		marginLeft:15,
		height:80,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		backgroundColor:'#2f80ed',
		borderRadius:8,
		overflow:'hidden'
	},
	sectionSettingButtonImageTrue:{
		width:35,
		height:35,
		right:0,
		resizeMode:'contain',
		position:'absolute',
		zIndex:10
	},
	sectionSettingButtonImageFalse:{
		width:35,
		height:35,
		resizeMode:'contain',
		position:'absolute',
		zIndex:10
	},	
	sectionSettingTitle:{
		fontSize:19,
		fontFamily:'Montserrat-Bold',
	},
	sectionSettingButtonBorder:{
		width:'100%',
		height:'100%',
		resizeMode:'contain',
		position:'absolute',
		zIndex:1
	},
	sectionSettingButton:{
		width:65,
		height:35,
		position:'relative',
		marginRight:10
	},
	sectionSetting:{
		width:width,
		height:50,
		marginBottom:10,
		flexDirection:'row',
		paddingLeft:15,
		paddingRight:15,
		alignItems:'center'
	},
	contentView:{
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
	headerView:{
		width:width,
		height:60,
		marginBottom:20,
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
		config:state.config,
		locale:state.localeApp
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeSound:(status)=>{

			const changeSound = ()=>{
				return dispatch({
					type:'CHANGE_STATUS_SOUND',
					sound:status
				})
			}

			changeSound()

		},
		changeMusic: (status) => {

			const changeMusic = ()=>{
				return dispatch({
					type:'CHANGE_STATUS_MUSIC',
					music:status
				})
			}

			changeMusic()

		},
		facebookLoginSave:()=>{

			return dispatch({
				type:'FACEBOOK_LOGIN',
				facebookLogin:[]
			})

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)