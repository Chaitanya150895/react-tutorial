import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };
 
 renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
 }
 
    render() {
        return (
        <div>
        {this.state.tags.length === 0} <p>This is a another method to render a message</p>
        {this.state.tags.length === 0 && "Here we are using the logical && operator to render a message using boolean && string concept"}
        {this.renderTags()}
        </div>
        );
    }
} 
export default Counter;