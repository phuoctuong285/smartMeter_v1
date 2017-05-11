import React from 'react'
import autoBind from 'react-autobind'
import {Carousel,CarouselItem} from 'react-onsenui'
export default class CustomCarousel extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)
		this.state = {
			index:0
		}
	}
	setIndex(index) {
		this.setState({
			index:index
		})
	}
	handleChange(e) {
		this.setState({
			index:e.activeIndex
		})
	}
	handleChangeByArrow(type) {
		const {images} = this.props
		if(type == 'left') {
			this.setState((prevState,currentProps) => {
				return {
					index:prevState.index === 0 ? 0 : prevState.index - 1
				}
			})
		} else if(type == 'right') {
			this.setState((prevState,currentProps) => {
				return {
					index:prevState.index === images.length - 1 ? prevState.index : prevState.index + 1
				}
			})
		}
	}
	render() {
		const {images} = this.props
		return (
			<div className='custom-carousel' style={{position:'relative'}}>
				<Carousel style={{width:'100%',height:'200px'}} 
						swipeable autoScroll 
						overscrollable index={this.state.index}
						onPostChange={this.handleChange}>
					{
						images.map((image,index) => (
							<CarouselItem key={index}>
								<div className='align-center'>
									<img src={image} alt={`No Picture ${index}`} height='200'/>
								</div>
							</CarouselItem>
						))
					}
				</Carousel>

				<a className='left-carousel-control' onClick={this.handleChangeByArrow.bind(this,'left')}>
					<span className='glyphicon glyphicon-chevron-left'></span>
				</a>
				<a className='right-carousel-control' onClick={this.handleChangeByArrow.bind(this,'right')}>
					<span className='glyphicon glyphicon-chevron-right'></span>
				</a>

				<div className='dot-carousel-control'>
					{
						images.map((item,index) => (
							<span key={index} style={{cursor:'pointer'}} onClick={this.setIndex.bind(this,index)}>
								{
									this.state.index === index ? '\u25CF' : '\u25CB' 
								}
							</span>
						))
					}
				</div>
			</div>
		)
	}
}