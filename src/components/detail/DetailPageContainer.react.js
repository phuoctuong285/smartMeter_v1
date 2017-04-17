import React from 'react'
import DetailPage from './DetailPage.react.js'

class DetailPageContainer extends React.Component {
	render() {
		return (
			<DetailPage {...this.props}/>
		)
	}
}

export default DetailPageContainer