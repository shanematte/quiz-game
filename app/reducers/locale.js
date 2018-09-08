//locale
import { locale } from '../locale/index'
const { en, ru } = locale

const initialState = {
	localization:ru
}

const localeApp = (state = initialState, action) => {

	switch(action.type){

		case 'CHANGE_LANGUAGE_RU' :
			return {
				...state,
				localization:ru
			}

		case 'CHANGE_LANGUAGE_EN' :
			return {
				...state,
				localization:en
			}

		default :
			return state

	}

}

export default localeApp