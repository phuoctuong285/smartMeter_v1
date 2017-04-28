import React from 'react'
import PropTypes from 'prop-types'
class CustomDatePicker extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
				{this.props.value}
			</button>			
		)
	}
}

CustomDatePicker.propTypes = {
	onClick:PropTypes.func,
	value:PropTypes.string
}

export default CustomDatePicker