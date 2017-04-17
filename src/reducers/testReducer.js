const testReducer = (state=[],action) => {
	switch(action.type) {
		case 'TEST_INCREMENT':
			return [
				...state,
				action.payload
			]
		case 'TEST_DECREMENT':
			return state.slice(0,state.length-1)
		default:
			return state 
	}
}

export default testReducer