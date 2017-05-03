import React from 'react'
import autoBind from 'react-autobind'
import {Icon,Modal} from 'react-onsenui'
import PropTypes from 'prop-types'

class CustomLoading extends React.Component {
	constructor(props) {
		super(props)	
	}

	render() {
		return (
			<Modal isOpen={this.props.isLoading}>
				<section style={{margin:'16px'}}>
					<p style={{opacity:0.6}}>
						LOADING
					</p>
					<p>
						<Icon spin={this.props.isLoading} icon='md-spinner' size={this.props.size}/>
					</p>
				</section>
			</Modal>
		)
	}
}

CustomLoading.propTypes = {
	size:PropTypes.number,
	isLoading:PropTypes.bool
}
CustomLoading.defaultProps = {
	size:50,
	isLoading:false
}

export default CustomLoading