import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
    value : this.props.value        
    };

handleIncreament = (product) => {
   console.log(product);
    this.setState({ count: this.state.count + 1 });
};

    render() { 
        console.log('props', this.props);

        return (
        <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncreament () } 
            className="btn btn-secondary">
                Increament</button>
                <button onClick = {this.props.onDelete} className = "btn btn-danger m-2">Delete</button>
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