import React, { Component } from 'react';
import Stars from './stars'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            rating:0
        }
    }
    handelchange = (event) => {
        this.setState({ keyword: event.target.value })
        this.props.searchname(event.target.value)
    }
    /*ratingHandelClick = (rating) => {
        this.setState({ rating })
        this.props.searchrating(rating)
        {console.log(rating) }
    }*/
    render() {
        return (<div className="nav-container">
            <input type="text" placeholder="Type movie name to search" onChange={this.handelchange} />
            <button>Search</button>
            <div className="abc">
            <span>Minimum Rating</span>
            <Stars  newsearchrating={this.props.searchrating}/>
            </div>
           
        </div>)
    }
}


export default Nav;
