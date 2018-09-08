import React, { Component } from 'react'
import {
	View,
	Text,
	Dimensions,
	ScrollView,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import packSounds from '../config/music'
import appsFlyer from 'react-native-appsflyer'

const { width, height } = Dimensions.get('window')

class BuyTips extends Component {
	constructor(props){
		super(props)

		this.state = {
			modalInfo:false,
			modalInfoDescription:''
		}
	}
	componentDidMount(){

		appsFlyer.initSdk({
			devKey: "46d2g4jRs8MmpHnmM6ZSfM",
			isDebug: false			
		}, (result) => {

			console.log(result)

		}, (error) => {
			console.error(error)
		})

	}
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
	buyTips(price, tips){

		this.playSoundTap()

		let { config } = this.props
		let { localization } = this.props.locale

		appsFlyer.trackEvent('Пользователь хотел купить '+tips+' подсказок за '+price+' монет', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

		if(config.gold >= price){
			this.setState({
				modalInfo:true,
				modalInfoDescription:localization.buyComplite
			})

			this.props.butTipsUpdate(price, tips)

		}else{
			this.setState({
				modalInfo:true,
				modalInfoDescription:localization.noGold
			})
		}

	}
	closeModal(){
		this.playSoundTap()
		
		this.setState({
			modalInfo:!this.state.modalInfo
		})
	}
	buyCoins(price, coins){
		this.playSoundTap()

		appsFlyer.trackEvent('Пользователь хотел купить '+coins+' монет за '+price+' USD', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

	}
	noAdsBuy(price){
		this.playSoundTap()

		appsFlyer.trackEvent('Пользователь хотел убрать рекламу за '+price+' USD', {
			screen:'home game screen'
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

	}
	render(){

		let { localization } = this.props.locale
		let { config } = this.props
		let { modalInfo, modalInfoDescription } = this.state

		return(
			<View style={styles.mainView}>

				{
					modalInfo ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								<Text style={styles.modalContentTitle}>{ modalInfoDescription }</Text>

								<View style={styles.buttonsEventTest}>

									<TouchableOpacity onPress={this.closeModal.bind(this)} style={styles.eventButtonModalNo}>
										<Text style={styles.eventButtonModalText}>Ok</Text>
									</TouchableOpacity>

								</View>

							</View>

						</View>
					:
						<View></View>

				}

				<View style={styles.header}>
					<View style={styles.headerSection}>
						<TouchableOpacity onPress={this.backScreen.bind(this)} style={styles.buttonBack}>
							<Image source={require('../media/back.png')} style={styles.buttonBackImage}/>
						</TouchableOpacity>
						<Text style={[styles.tipText, {top:-2}]}>{ localization.hints }</Text>
					</View>
					<View style={styles.headerSection}>
						<View style={styles.headerSectionContent}>
							<Image style={styles.imageTipHeader} source={require('../media/coin.png')}/>
							<Text style={styles.tipText}>{ config.gold }</Text>
						</View>
						<View style={styles.headerSectionContent}>
							<Image style={styles.imageTipHeader} source={require('../media/lamp_big.png')}/>
							<Text style={styles.tipText}>{ config.tips }</Text>
						</View>
					</View>
				</View>

				<View style={styles.mainContent}>
					<ScrollView showsVerticalScrollIndicator={false}>

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyCoins.bind(this, 0.99, 240)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/coin.png')}/>
								<Text style={styles.textTip}>240</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/buy_button.png')} />
								<Text style={styles.mainButtonPriceTextMain}>0.99 USD</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyCoins.bind(this, 2.99, 720)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/2coins.png')}/>
								<Text style={styles.textTip}>720</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/buy_button.png')} />
								<Text style={styles.mainButtonPriceTextMain}>2.99 USD</Text>
							</View>
							
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyCoins.bind(this, 5.99, 1340)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/3coins.png')}/>
								<Text style={styles.textTip}>1340</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/buy_button.png')} />
								<Text style={styles.mainButtonPriceTextMain}>5.99 USD</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyCoins.bind(this, 9.99, 2940)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/manycoins.png')}/>
								<Text style={styles.textTip}>2940</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/buy_button.png')} />
								<Text style={styles.mainButtonPriceTextMain}>9.99 USD</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.noAdsBuy.bind(this, 2.99)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/noads.png')}/>
								<Text style={styles.textTip}>NO ADS</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/buy_button.png')} />
								<Text style={styles.mainButtonPriceTextMain}>2.99 USD</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyTips.bind(this, 150, 10)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/lamp_big.png')}/>
								<Text style={styles.textTip}>10</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/but_yellow_mid.png')} />
								<Text style={styles.mainButtonPriceTextMain}>150</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyTips.bind(this, 450, 50)} style={styles.mainItemBuy}>

							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/lamp_big.png')}/>
								<Text style={styles.textTip}>50</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/but_yellow_mid.png')} />
								<Text style={styles.mainButtonPriceTextMain}>450</Text>
							</View>
							
						</TouchableOpacity>	

						<TouchableOpacity activeOpacity={0.7} onPress={this.buyTips.bind(this, 999, 100)} style={styles.mainItemBuy}>
							<View style={styles.mainItemBuyPriceText}>
								<Image style={styles.imageTip} source={require('../media/lamp_big.png')}/>
								<Text style={styles.textTip}>100</Text>
							</View>

							<View style={styles.mainButtonPriceText}>
								<Image style={styles.mainButtonPriceTextImage} source={require('../media/but_yellow_mid.png')} />
								<Text style={styles.mainButtonPriceTextMain}>999</Text>
							</View>
							
						</TouchableOpacity>				

					</ScrollView>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainButtonPriceTextMain:{
		position:'relative',
		zIndex:199,
		fontSize:24,
		color:'#fff'
	},
	mainButtonPriceTextImage:{
		width:'100%',
		height:'100%',
		position:'absolute',
		resizeMode:'contain'
	},
	mainButtonPriceText:{
		position:'relative',
		width:width/3,
		height:65,
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
	mainItemBuyPriceText:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	numberTipsText:{
		fontSize:80,
		marginBottom:7,
		textAlign:'center',
		fontFamily:'Montserrat-Bold',
		color:'#fff'
	},
	textTip:{
		color:'#000',
		fontSize:31,
		fontFamily:'Montserrat-Bold',
	},
	mainItemBuy:{
		width:width-30,
		marginLeft:15,
		padding:10,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
		marginTop:10,
		marginBottom:10
	},
	mainContent:{
		width:width,
		height:height-60
	},
	headerSectionContent:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	buttonBackImage:{
		width:23,
		height:23,
		resizeMode:'contain',
		tintColor:'#fff',
		opacity:.8
	},
	buttonBack:{
		width:40,
		height:60,
		justifyContent:'center',
		alignItems:'center'
	},
	tipText:{
		fontSize:22,
		fontFamily:'Montserrat-Bold',
		color:'#fff'
	},
	imageTip:{
		width:55,
		height:55,
		marginRight:7,
		marginLeft:7,
		resizeMode:'contain',
		position:'relative'
	},
	imageTipHeader:{
		width:35,
		height:35,
		marginRight:7,
		marginLeft:7,
		resizeMode:'contain',
		position:'relative'
	},
	mainView:{
		width:width,
		height:height,
		position:'relative'
	},
	header:{
		width:width,
		height:60,
		backgroundColor:'#2f80ed',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingRight:15
	},
	headerSection:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'

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
		butTipsUpdate:(gold, tips)=>{
			return dispatch({
				type:'BUY_TIPS',
				gold:gold,
				tips:tips
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTips)