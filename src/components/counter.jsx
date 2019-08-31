import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10,
        imageUrl: "https://picsum.photos/id/1084/536/354?grayscale"
    };

    style = {
        fontSize : 20,
        fontWeight : "bold"
    };

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="badge badge-secondary badge-sm">Increment</button>
        </div>
        );
    }

getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
return classes;
}

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;