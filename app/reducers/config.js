const initialState = {
	firstname:'',
	nameApp:'Quiz',
	language:'ru',
	sound:true,
	music:true,
	volume:0.10,
	musicName:'bensound - november',
	gold:150,
	tips:5,
	facebookLogin:[],
	facebookStatus:false,
	facebookType:false,
	languages:[{
		slug:'ru',
		flag:require('../media/flugs/ru.png'),
		title:'Русский'
	},{
		slug:'en',
		flag:require('../media/flugs/en.png'),
		title:'English'
	}]
}

const config = (state = initialState, action) => {
	switch(action.type){

		case 'FACEBOOK_TYPE' :
			return {
				...state,
				facebookType:action.facebookType
			}

		case 'FACEBOOK_STATUS' :
			return {
				...state,
				facebookStatus:true
			}

		case 'FACEBOOK_LOGIN' :
			return {
				...state,
				facebookLogin:action.facebookLogin
			}

		case 'TIPS_FOR_FACEBOOK' :
			return {
				...state,
				tips:state.tips + action.tips
			}

		case 'BUY_TIPS' :
			return {
				...state,
				tips:state.tips + action.tips,
				gold:state.gold - action.gold
			}

		case 'COMPLITE_LEVEL_MONEY' :
			return {
				...state,
				tips:state.tips + action.tips,
				gold:state.gold + action.gold
			}	

		case 'UPDATE_TIPS' :
			return {
				...state,
				tips:action.tips
			}		

		case 'UPDATE_USER_FIRSTNAME' :
			return {
				...state,
				firstname:action.firstname
			}

		case 'CHANGE_STATUS_SOUND' :
			return {
				...state,
				sound:action.sound
			}

		case 'CHANGE_STATUS_MUSIC' :
			return {
				...state,
				music:action.music
			}

		case 'CHANGE_LANGUAGE' :
			return {
				...state,
				language:action.language
			}

		default :
			return state	

	}
}

export default config