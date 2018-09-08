import React from 'react'

import {
	Dimensions,
	Easing,
	Animated
} from 'react-native'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

//Components
import Home from '../components/home'
import SettingsPage from '../components/settings'
import LanguagesList from '../components/languages-list'
import Statistics from '../components/statistics'
import Rating from '../components/rating'
import Levels from '../components/levels'
import PlayLevel from '../components/play-level'
import BuyTips from '../components/buytips'

const { width, height } = Dimensions.get('window')

const MainRoute = StackNavigator({
	'Home':{
		screen:Home
	},
	'Settings':{
		screen:SettingsPage
	},
	'LanguagesList':{
		screen:LanguagesList
	},
	'Statistics':{
		screen:Statistics
	},
	'Rating':{
		screen:Rating
	},
	'Levels':{
		screen:Levels
	},
	'PlayLevel':{
		screen:PlayLevel
	},
	'BuyTips':{
		screen:BuyTips
	}
},{
	headerMode:'none',
    mode: 'card'
})

export default MainRoute


