import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'underscore'
import packSounds from '../config/music'

const { width, height } = Dimensions.get('window')

class Levels extends Component {
	constructor(props){
		super(props)

		this.state = {
			modal:false
		}	
	}
	goToBack(){
		this.playSoundTap()

		return this.props.navigation.goBack()
	}
	loadLevel(level, index){
		this.playSoundTap()

		return this.props.navigation.navigate('PlayLevel', {
			level:level,
			index:index
		})
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
	buyTips(){
		this.playSoundTap()
		return this.props.navigation.navigate('BuyTips')
	}
	render(){

		let { levels, config } = this.props
		let { localization } = this.props.locale
		let { modal } = this.state

		return (
			<View style={styles.mainView}>

				{
					modal ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								<Text style={styles.modalContentTitle}>{ localization.closeLevel }</Text>

								<View style={styles.buttonsEvent}>

									<TouchableOpacity onPress={this.closeModal.bind(this)} style={styles.eventButtonModalNo}>
										<Text style={styles.eventButtonModalText}>ok</Text>
									</TouchableOpacity>

								</View>

							</View>

						</View>
					:
						<View></View>

				}
				
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<TouchableOpacity style={styles.buttonBack} onPress={this.goToBack.bind(this)}>
							<Image style={styles.buttonBackImage} source={require('../media/back.png')}/>
						</TouchableOpacity>
					</View>
					<View style={styles.headerRight}>
						<TouchableOpacity onPress={this.buyTips.bind(this)} style={styles.sectionIcons}>
							<Image style={styles.imageIcon} source={require('../media/coin.png')}/>
							<Text style={styles.textIcon}>{ config.gold }</Text>
						</TouchableOpacity>
						<View style={styles.sectionIcons}>
							<Image style={styles.imageIcon} source={require('../media/lamp_big.png')}/>
							<Text style={styles.textIcon}>{ config.tips }</Text>
						</View>
					</View>
				</View>

				<View style={styles.mainContent}>
					<ScrollView>
						{
							levels.levels.map((level, index)=>{

								let doneTasks = _.where(level.tasks, {
									taskDone:true
								})

								return (
									<TouchableOpacity onPress={level.done ? this.loadLevel.bind(this, level, index) : this.closeModal.bind(this, level, index)} key={index} style={level.done ? styles.levelTouchButton : styles.levelTouchButtonClose}>

										<View style={styles.topContentLevel}>
											<Text style={level.done ? styles.topContentLevelTitleTrue : styles.topContentLevelTitle}>{ localization.level } { level.id }</Text>

											{
												level.done ?
													<Image style={styles.topContentLevelImage} source={require('../media/play.png')}/>
												:
													<Image style={styles.topContentLevelImage} source={require('../media/lock.png')}/>
											}

										</View>

										{
											level.done ?

												<View>
													
													<Text style={styles.textDoneTasks}>{ `${localization.passed} ${doneTasks.length}/${level.tasks.length}` }</Text>

													<View style={styles.levelColorBlocks}>

														{
															level.tasks.map((task, indexTask)=>{
																return <View key={indexTask} style={task.taskDone ? styles.colorBlockDone : styles.colorBlock}></View>
															})
														}

													</View>

												</View>

											:
												<View>
													
													<Text style={styles.descriptionCloseLevel}>{ `${localization.levelCloseDescription} ${level.id - 1}` }</Text>

												</View>
										}

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
	descriptionCloseLevel:{
		fontSize:15,
		fontWeight:'bold',
		fontFamily:'Montserrat-SemiBold',
		opacity:0.6
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
	textDoneTasks:{
		marginBottom:8,
		fontFamily:'Montserrat-Bold',
		fontSize:15,
		opacity:0.7
	},
	colorBlock:{
		width:15,
		height:10,
		backgroundColor:'rgba(0,0,0,0.25)',
		borderRadius:2,
		marginRight:3,
	},
	colorBlockDone:{
		width:15,
		height:10,
		backgroundColor:'#fad514',
		borderRadius:2,
		marginRight:3,
	},
	levelColorBlocks:{
		width:'100%',
		flexDirection:'row'
	},
	topContentLevelImage:{
		width:33,
		height:33,
		resizeMode:'contain'
	},
	topContentLevelTitle:{
		fontSize:19,
		opacity:0.6,
		fontFamily:'Montserrat-Bold',
	},
	topContentLevelTitleTrue:{
		fontSize:19,
		color:'#2f80ed',
		fontFamily:'Montserrat-Bold',
	},
	topContentLevel:{
		marginBottom:4,
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	mainContent:{
		width:width,
		height:height-60
	},
	levelTouchButton:{
		width:width-20,
		marginLeft:10,
		marginTop:8,
		marginBottom:8,
		padding:8,
		borderWidth:2,
		borderColor:'#7daff4',
		borderRadius:8,
		position:'relative'
	},
	levelTouchButtonClose:{
		width:width-20,
		marginLeft:10,
		marginTop:8,
		marginBottom:8,
		padding:8,
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.1)',
		borderRadius:8,
		opacity:0.67,
		position:'relative'
	},
	textIcon:{
		fontSize:14,
		fontFamily:'Montserrat-Bold',
	},
	sectionIcons:{
		marginRight:15,
		flexDirection:'row'
	},
	imageIcon:{
		width:20,
		height:20,
		resizeMode:'contain',
		marginRight:5
	},
	buttonBackImage:{
		width:'100%',
		height:'100%',
		resizeMode:'contain'
	},
	buttonBack:{
		width:47,
		height:27,
		alignItems:'center',
		justifyContent:'center'
	},
	headerRight:{
		height:60,
		alignItems:'center',
		flexDirection:'row'
	},
	headerLeft:{
		height:60,
		alignItems:'center',
		justifyContent:'center'
	},
	header:{
		width:width,
		height:60,
		paddingRight:15,
		alignItems:'center',
		justifyContent:'space-between',
		flexDirection:'row'
	},
	mainView:{
		width:width,
		height:height,
		position:'relative'
	}
})

const mapStateToProps = (state) => {
	return {
		levels:state.levels,
		config:state.config,
		locale:state.localeApp
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Levels)