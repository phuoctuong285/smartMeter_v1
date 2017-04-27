import React from 'react'
import autoBind from 'react-autobind'

export default class CustomCellEdit extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)
		this.state = {
			textValue:props.defaultValue
		}

	}
	focus() {
			this.refs.inputRef.focus()
	}
	updateData() {
		this.props.onUpdate(this.state.textValue)
	}
	render() {
		return(
			<span>
				<textarea 
					ref='inputRef'
					className={(this.props.editorClass || '') + ' form-control editor edit-text'}
					style={{display:'inline-block',width:'100%'}}
					type='text'
					value={this.state.textValue}
					onKeyDown={this.props.onKeyDown}
					onChange={(e) => {
						this.setState({
							textValue:e.target.value
						})
					}}
				/>
				<br/>
				<button className='btn btn-info btn-md textarea-save-btn'
					onClick={this.updateData}>
					Save
				</button>
			</span>
		)
	}
		
}