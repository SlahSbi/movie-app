import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.newsearchrating(nextValue)
  }
 
  render() {
    
    return (                
      <div className="rating-container">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.props.val}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 export default Stars