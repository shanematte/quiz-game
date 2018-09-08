import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	BackHandler,
	ScrollView,
	Alert
} from 'react-native'
import { connect } from 'react-redux'
import packSounds from '../config/music'
import _ from 'underscore'
import appsFlyer from 'react-native-appsflyer'

//ad
import { Appodeal } from 'react-native-appodeal'
Appodeal.initialize("4803d1bc3acd4a727afc32a8afc25cf2b3d483d586b86752", Appodeal.BANNER_TOP)

const { width, height } = Dimensions.get('window')

class PlayLevel extends Component {

	constructor(props){
		super(props)

		this.state = {
			nextLevel:1,
			modal:false,
			words:[],
			keyBoard:[],
			testModal:false,
			testModalDescription:'',
			corectPhoto:{},
			levelPass:false,
			timeOutPress:true,
			modalTips:false,
			modalTipsText:''
		}

		this.modalAsk = this.modalAsk.bind(this)
	}
	componentWillMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.modalAsk)
	}

	componentWillUnmount() {
	    BackHandler.removeEventListener('hardwareBackPress', this.modalAsk)
	}
	modalAsk(){
		this.playSoundTap()

		this.setState({
			modal:!this.state.modal
		})
		return true
	}
	componentDidMount(){

		let { level } = this.props.navigation.state.params
		let that = this

		let searchDoneTasks = _.where(level.tasks, {
			taskDone:true
		})

		appsFlyer.initSdk({
			devKey: "46d2g4jRs8MmpHnmM6ZSfM",
			isDebug: false			
		}, (result) => {

			console.log(result)

		}, (error) => {
			console.error(error)
		})

		Appodeal.show(Appodeal.BANNER_TOP, "initial_screen", (result) => {
			appsFlyer.trackEvent('Показ верхнего баннера с рекламой на экране игры', {
				title:'Включился показ баннера вверху экрана'
			}, (result) => {
					console.log(result)
			}, (error) => {
					console.error(error)
			})
		})

		appsFlyer.trackEvent('прохождение уровня номер '+level.id, {
			screen:'level',
			nameLevel:' level: '+level.id
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

		Appodeal.addEventListener('onBannerClicked', () => {
			
			appsFlyer.trackEvent('Клик по рекламе (верхний баннер на экране игры)', {
				screen:'level',
				nameLevel:' level: '+level.id,
				title:'Клик по банеру'
			}, (result) => {
					console.log(result)
			}, (error) => {
					console.error(error)
			})

		})

		mainSaveTask = 0

		console.log(searchDoneTasks.length, level.tasks.length)

		if(searchDoneTasks.length > 0 && searchDoneTasks.length < 10){
			mainSaveTask = searchDoneTasks.length + 1
		}else {
			mainSaveTask = 1
		}

		this.setState({
			nextLevel:mainSaveTask
		})

		setTimeout(()=>{
			that.updateArrayWord()
		}, 30)

	}
	updateArrayWord(){

		let { level } = this.props.navigation.state.params

		let searchTaskMain = _.where(level.tasks, {
			taskId:this.state.nextLevel
		})

		let updateWord = []
		let keyBoard = []

		searchTaskMain[0].answer.map((letter, index)=>{
			updateWord.push({
				letter:'',
				status:false,
				index:index
			})
		})

		searchTaskMain[0].Letters.map((letter, index)=>{
			keyBoard.push({
				letter:letter,
				index:index,
				status:true
			})
		})

		this.setState({
			words:updateWord,
			keyBoard:keyBoard
		})	

	}
	exitLevel(){

		let { level } = this.props.navigation.state.params

		this.playSoundTap()

		appsFlyer.trackEvent('Пользователь недоиграв уровень '+level.id+' вышел с него', {
			screen:'level',
			nameLevel:' level: '+level.id
		}, (result) => {
				console.log(result)
		}, (error) => {
				console.error(error)
		})

		Appodeal.hide(Appodeal.BANNER_BOTTOM)
		return this.props.navigation.goBack()
	}
	keyLetter(letter, index){

		this.playSoundTap()

		let { keyBoard, words, nextLevel } = this.state
		let { level } = this.props.navigation.state.params

		let searchTaskMain = _.where(level.tasks, {
			taskId:this.state.nextLevel
		})

		let searchAllLetters = _.where(words, {
			status:true
		})


		if(letter.status){

			if(searchAllLetters.length >= searchTaskMain[0].answer.length){

				this.testAnswer(index)

			}else{

				keyBoard[index].status = false

				let searchFirstCleanLetter = _.where(words, {
					status:false
				})

				words[searchFirstCleanLetter[0].index].letter = letter.letter
				words[searchFirstCleanLetter[0].index].status = true
				words[searchFirstCleanLetter[0].index].pressKeyLetter = index

				searchTaskMain = _.where(level.tasks, {
					taskId:this.state.nextLevel
				})

				searchAllLetters = _.where(words, {
					status:true
				})

				if(searchAllLetters.length >= searchTaskMain[0].answer.length){
					this.testAnswer(index)
				}

				this.setState({
					keyBoard:keyBoard,
					words:words
				})

			}

		}

	}
	testAnswer(pressKeyLetter){

		let that = this

		let { localization } = this.props.locale
		let { levelsDone, tasksDone } = this.props.levels

		let { keyBoard, words, nextLevel } = this.state
		let { level, index } = this.props.navigation.state.params

		let searchTaskMain = _.where(level.tasks, {
			taskId:this.state.nextLevel
		})

		let searchTaskMainPrev = _.where(level.tasks, {
			taskId:this.state.nextLevel
		})

		this.setState({
			corectPhoto:searchTaskMainPrev
		})

		let searchAllLetters = _.where(this.state.words, {
			status:true
		})

		let testWord = []

		searchAllLetters.map((letter)=>{
			testWord.push(letter.letter)
		})

		let testTwoArrays = _.isEqual(testWord, searchTaskMain[0].answer)

		let searchTaskIndex = _.findIndex(level.tasks, { taskId: this.state.nextLevel })

		if(testTwoArrays){

			that.props.compliteTask(index, searchTaskIndex)
			that.props.updateTasksDone()

			let numNextTask = 0

			if(this.state.nextLevel < level.tasks.length){

				numNextTask = this.state.nextLevel + 1

				searchTaskMain = _.where(level.tasks, {
					taskId:numNextTask
				})

				let updateWord = []
				let keyBoard = []

				let mainLetterIf = 0

				searchTaskMain[0].answer.map((letter, index)=>{
					updateWord.push({
						letter:'',
						status:false,
						index:index,
						pressKeyLetter:pressKeyLetter != undefined ? pressKeyLetter : undefined
					})
				})

				searchTaskMain[0].Letters.map((letter, index)=>{
					keyBoard.push({
						letter:letter,
						index:index,
						status:true
					})
				})

				that.setState({
					testModalDescription:localization.correct,
					testModal:true,
					nextLevel:numNextTask
				})

				setTimeout(()=>{
					that.setState({
						words:updateWord,
						keyBoard:keyBoard
					})
				},200)

			}else{

				let { levels } = this.props.levels

				let prevTaskMainForCoins = _.where(level.tasks, {
					taskId:this.state.nextLevel
				})

				if(level.coins){

					this.setState({
						testModalDescription:localization.endLevel,
						testModal:true,
						levelPass:true
					})

				}else{

					appsFlyer.trackEvent('уровень номер '+level.id+' пройден', {
						screen:'level',
						nameLevel:' level: '+level.id
					}, (result) => {
							console.log(result)
					}, (error) => {
							console.error(error)
					})

					that.props.compliteLevelMoney(50, 2)

					that.props.updateLevelsDone()

					if(tasksDone + 1 == 10){
						that.props.ratingOpenOne()
					}

					this.setState({
						testModalDescription:localization.endLevelCoins,
						testModal:true,
						levelPass:true
					})

				}

				if(index < levels.length - 1){
					that.props.compliteLevel(index + 1)
				}

				that.props.compliteLevelCoins(index)

			}	

		}else{

			this.setState({
				testModalDescription:localization.incorrect,
				testModal:true
			})

			let reUpdateWord = []
			let reKeyBoard = []

			searchTaskMain[0].answer.map((letter, index)=>{
				reUpdateWord.push({
					letter:'',
					status:false,
					index:index,
					pressKeyLetter:pressKeyLetter != undefined ? pressKeyLetter : undefined
				})
			})

			searchTaskMain[0].Letters.map((letter, index)=>{
				reKeyBoard.push({
					letter:letter,
					index:index,
					status:true
				})
			})

			that.setState({
				corectPhoto:{}
			})

			setTimeout(()=>{

				that.setState({
					words:reUpdateWord,
					keyBoard:reKeyBoard
				})

			},200)

		}

	}
	testModal(){
		this.playSoundTap()
		this.setState({
			testModal:!this.state.testModal
		})
	}
	endLevelEvent(){
		this.playSoundTap()
		Appodeal.hide(Appodeal.BANNER_BOTTOM)
		return this.props.navigation.goBack()
	}
	skipTask(){

		let that = this
		let { level, index } = this.props.navigation.state.params
		let { localization } = this.props.locale

		this.playSoundTap()

		if(this.state.timeOutPress){

			this.setState({
				timeOutPress:false
			})


			numNextTask = this.state.nextLevel + 1

			searchTaskMain = _.where(level.tasks, {
				taskId:numNextTask
			})

			let updateWord = []
			let keyBoard = []

			searchTaskMain[0].answer.map((letter, index)=>{
				updateWord.push({
					letter:'',
					status:false,
					index:index
				})
			})

			searchTaskMain[0].Letters.map((letter, index)=>{
				keyBoard.push({
					letter:letter,
					index:index,
					status:true
				})
			})

			that.setState({
				nextLevel:numNextTask
			})

			setTimeout(()=>{
				that.setState({
					words:updateWord,
					keyBoard:keyBoard
				})
			},200)


		}

		setTimeout(()=>{
			that.setState({
				timeOutPress:true
			})
		}, 1000)

	}
	goBackLevels(){

		let { level, index } = this.props.navigation.state.params

		this.playSoundTap()
		Appodeal.hide(Appodeal.BANNER_BOTTOM)

		return this.props.navigation.goBack()
	}
	removeLetters(){

		this.playSoundTap()

		let { level, index } = this.props.navigation.state.params

		let { words, keyBoard, nextLevel } = this.state
		let that = this

		let searchTaskMain = _.where(level.tasks, {
			taskId:nextLevel
		})

		let resetUpdateWord = []
		let resetKeyBoard = []

		searchTaskMain[0].answer.map((letter, index)=>{
			resetUpdateWord.push({
				letter:'',
				status:false,
				index:index
			})
		})

		searchTaskMain[0].Letters.map((letter, index)=>{
			resetKeyBoard.push({
				letter:letter,
				index:index,
				status:true
			})
		})

		that.setState({
			words:resetUpdateWord,
			keyBoard:resetKeyBoard
		})

	}
	hintLetter(){

		this.playSoundTap()

		let { level } = this.props.navigation.state.params
		let { nextLevel, words } = this.state
		let { config } = this.props
		let { localization } = this.props.locale

		if(config.tips > 0){

			let mainCountTips = config.tips - 1
			this.props.updateTips(mainCountTips)

			let searchTaskMain = _.where(level.tasks, {
				taskId:this.state.nextLevel
			})

			let searchRandomLetterIndex = _.random(0, searchTaskMain[0].answer.length-1)
			let searchNewLetter = searchTaskMain[0].answer[searchRandomLetterIndex]

			if(words[searchRandomLetterIndex].status == false){

				words[searchRandomLetterIndex].letter = searchNewLetter
				words[searchRandomLetterIndex].status = true
				words[searchRandomLetterIndex].pressKeyLetter = undefined


				let searchAllLettersAnswer = _.where(words, {
					status:true
				})

				this.setState({
					words:words
				})

				if(searchAllLettersAnswer.length == searchTaskMain[0].answer.length){

					this.testAnswer()

				}

			}

		}else{

			this.setState({
				modalTips:true,
				modalTipsText:localization.tipsEnded			
			})

		}

	}
	removeLetterMain(letter, index){

		this.playSoundTap()

		let { words, keyBoard } = this.state

		if(letter.letter != ''){

			if(letter.pressKeyLetter != undefined){
				keyBoard[letter.pressKeyLetter].letter = letter.letter
				keyBoard[letter.pressKeyLetter].status = true
			}

			words[index].letter = ''
			words[index].status = false

			this.setState({
				words:words,
				keyBoard:keyBoard
			})

		}

	}

	closeModalTips(){
		this.playSoundTap()
		this.setState({
			modalTips:false
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

		let { level } = this.props.navigation.state.params
		let { config } = this.props
		let { localization } = this.props.locale
		let { testModal, testModalDescription, modalTips, modalTipsText, nextLevel, corectPhoto, levelPass, modal, words, keyBoard } = this.state

		let searchTaskMain = _.where(level.tasks, {
			taskId:this.state.nextLevel
		})

		return (
			<View style={styles.mainView}>

				{
					modalTips ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								<Text style={styles.modalContentTitle}>{ modalTipsText }</Text>

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

				{
					modal ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								<Text style={styles.modalContentTitle}>{ localization.exitLevel }</Text>

								<View style={styles.buttonsEvent}>

									<TouchableOpacity onPress={this.exitLevel.bind(this)} style={styles.eventButtonModalYes}>
										<Text style={styles.eventButtonModalText}>{ localization.yes }</Text>
									</TouchableOpacity>

									<TouchableOpacity onPress={this.modalAsk} style={styles.eventButtonModalNo}>
										<Text style={styles.eventButtonModalText}>{ localization.no }</Text>
									</TouchableOpacity>

								</View>

							</View>

						</View>
					:
						<View></View>

				}

				{
					testModal ?
						<View style={styles.modalView}>
							
							<View style={styles.modalContent}>

								{
									Object.keys(corectPhoto).length > 0 ?
										<Image style={styles.correctImage} source={corectPhoto[0].fullPicture}/>
									: <View></View>
								}

								<Text style={styles.modalContentTitle}>{ testModalDescription }</Text>

								<View style={styles.buttonsEventTest}>

									<TouchableOpacity onPress={levelPass ? this.endLevelEvent.bind(this) : this.testModal.bind(this)} style={styles.eventButtonModalNo}>
										<Text style={styles.eventButtonModalText}>Ok</Text>
									</TouchableOpacity>

								</View>

							</View>

						</View>
					:
						<View></View>

				}

				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<TouchableOpacity style={styles.buttonBack} onPress={this.modalAsk.bind(this)}>
							<Image style={styles.buttonBackImage} source={require('../media/back.png')}/>
						</TouchableOpacity>
					</View>
					<View style={styles.headerRight}>
						{
							/*<TouchableOpacity onPress={this.buyTips.bind(this)} style={styles.sectionIcons}>
								<Image style={styles.imageIcon} source={require('../media/coin.png')}/>
								<Text style={styles.textIcon}>{ config.gold }</Text>
							</TouchableOpacity>*/
						}
						<View style={styles.sectionIcons}>
							<Image style={styles.imageIcon} source={require('../media/lamp_big.png')}/>
							<Text style={styles.textIcon}>{ config.tips }</Text>
						</View>
					</View>
				</View>

				<View style={styles.viewGame}>

					<ScrollView>

						<View style={styles.titleTaskView}>
							<Text style={styles.titleTaskText}>{ `${localization.task}  ${this.state.nextLevel}/${level.tasks.length}` }</Text>
						</View>

						<View style={styles.imageTask}>
							<Image style={styles.imageStyle} source={searchTaskMain[0].taskPicture} />
						</View>

						<View style={styles.wordsView}>
							{
								words.map((letter, index)=>{
									return (
										<TouchableOpacity onPress={this.removeLetterMain.bind(this, letter, index)} style={styles.letterStyle} key={index}>
											<Text style={styles.letterStyleText}>{ letter.letter }</Text>
										</TouchableOpacity>
									)
								})
							}
						</View>

						<View style={styles.toolsStyleBottom}>
							<TouchableOpacity onPress={this.removeLetters.bind(this)} style={styles.toolsStyleBottomButton}>
								<Image style={styles.imageButtonMainTools} source={require('../media/pencil.png')}/>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.hintLetter.bind(this)} style={styles.toolsStyleBottomButton}>
								<Image style={styles.imageButtonMainTools} source={require('../media/random.png')}/>
							</TouchableOpacity>
							{
								searchTaskMain[0].taskDone ?
									<TouchableOpacity onPress={level.tasks.length != searchTaskMain[0].taskId ? this.skipTask.bind(this) : this.goBackLevels.bind(this)} style={styles.toolsStyleBottomButtonText}>
										<Text style={styles.hintText}>{ localization.next }</Text>
									</TouchableOpacity>
								:
									<View></View>
							}
						</View>

						<View style={styles.lettersContent}>

							{
								keyBoard.map((letter, index)=>{
									return (
										<TouchableOpacity key={index} onPress={this.keyLetter.bind(this, letter, index)} style={styles.letterMainBlock}>
											{
												letter.status ?
													<Text style={styles.letterMainBlockTitle}>{ letter.letter }</Text>
												: <Text></Text>
											}
										</TouchableOpacity>
									)
								})
							}

						</View>

					</ScrollView>

				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	correctImage:{
		width:width/2,
		height:(width/2)-30,
		resizeMode:'contain',
		marginBottom:20
	},
	letterStyleText:{
		fontSize:24,
		fontFamily:'Montserrat-Bold',
		color:'#000'
	},
	letterMainBlockTitle:{
		fontSize:22,
		fontFamily:'Montserrat-Bold',
		color:'#fff'
	},
	letterMainBlock:{
		width:width/9,
		height:width/9,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		borderRadius:7,
		margin:3,
		backgroundColor:'#2f80ed'
	},
	letterMainBlockEnter:{
		width:(width/7)*2,
		height:width/7,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		borderRadius:7,
		margin:7,
		backgroundColor:'#23cc52'
	},
	lettersContent:{
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		width:width-30,
		marginLeft:15
	},
	imageButtonMainTools:{
		width:25,
		height:25,
		resizeMode:'contain'
	},
	hintText:{
		fontSize:17,
		fontFamily:'Montserrat-Bold',
	},
	toolsStyleBottomButton:{
		backgroundColor:'#dbba11',
		width:40,
		height:40,
		padding:7,
		margin:4,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.3)',
		borderRadius:7
	},
	toolsStyleBottomButtonText:{
		backgroundColor:'#dbba11',
		height:40,
		paddingLeft:20,
		paddingRight:20,
		margin:4,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.3)',
		borderRadius:7
	},
	toolsStyleBottom:{
		width:width-30,
		marginLeft:15,
		justifyContent:'center',
		alignItems:'center',
		marginTop:10,
		marginBottom:10,
		flexDirection:'row'
	},
	letterStyle:{
		width:35,
		height:35,
		padding:5,
		borderWidth:1,
		margin:2.4,
		borderColor:'rgba(0,0,0,0.4)',
		borderRadius:7,
		justifyContent:'center',
		alignItems:'center'
	},
	wordsView:{
		width:width-30,
		marginLeft:15,
		paddingLeft:10,
		paddingRight:10,
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	imageStyle:{
		width:width/2,
		height:width/2,
		resizeMode:'contain',
		borderRadius:10,
		borderWidth:7,
		borderColor:'#2f80ed'
	},
	imageTask:{
		width:width,
		marginBottom:10,
		justifyContent:'center',
		alignItems:'center'
	},
	titleTaskText:{
		fontFamily:'Montserrat-Bold',
		fontSize:20
	},
	titleTaskView:{
		width:width,
		marginBottom:7,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	viewGame:{
		width:width,
		height:height-60
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
	mainView:{
		width:width,
		height:height-50,
		marginTop:50
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
		compliteTask:(level, task)=>{
			return dispatch({
				type:'COMPLETE_TASK',
				level:level,
				task:task
			})
		},
		compliteLevel:(level)=>{
			return dispatch({
				type:'COMPLETE_LEVEL',
				level:level
			})
		},
		updateTips:(tips)=>{
			return dispatch({
				type:'UPDATE_TIPS',
				tips:tips
			})
		},
		compliteLevelMoney:(gold, tips)=>{
			return dispatch({
				type:'COMPLITE_LEVEL_MONEY',
				tips:tips,
				gold:gold
			})
		},
		compliteLevelCoins:(index)=>{
			return dispatch({
				type:'COMPLETE_COINS',
				index:index
			})
		},
		updateLevelsDone:()=>{
			return dispatch({
				type:'UPDATE_LEVELS_DONE'
			})
		},
		updateTasksDone:()=>{
			return dispatch({
				type:'UPDATE_TASKS_DONE'
			})
		},
		ratingOpenOne:()=>{
			return dispatch({
				type:'UPDATE_RATING_ONE'
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayLevel)