import React, { Component } from 'react';

class MainContent extends Component {

    render() {
        return (
            <article>
               <h2>Welcome, {this.props.name}</h2>
            </article>
        );
    }

}


export default MainContent;