export const testIncrement = (obj) => {
	return {
		type:'TEST_INCREMENT',
		payload:{
			Id:obj.Id,
			Name:obj.Name,
			Age:obj.Age
		}
	}
}

export const testDecrement = () => {
	return {
		type:'TEST_DECREMENT'
	}
}