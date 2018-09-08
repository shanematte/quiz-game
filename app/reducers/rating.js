const initialState = {
	ratingAllCount:40,
	ratings:[{
		search:'task_one',
		status:false
	}]
}

const rating = (state = initialState, action) => {
	switch(action.type){

		case 'UPDATE_RATING_ONE' :

			state.ratings[0].status = true

			return state

		default :
			return state
	}
}

export default rating