import { combineReducers } from 'redux'

import loading from './loading'
import config from './config'
import localeApp from './locale'
import rating from './rating'
import levels from './levels'

const reducers = (navReducers) => {
	return combineReducers({
		loading:loading,
		rating:rating,
		config:config,
		localeApp:localeApp,
		levels:levels,
		nav:navReducers
	})
}

export default reducers