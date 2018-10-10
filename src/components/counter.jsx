import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: []
  // };
  // spl property in react component

  // this is one way of handling 'this' issue.
  // or binding event handlers
  // Second way is to use => operator .
  // => operator inherits this
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  render() {
    return (
      // We've used React.Fragment
      // just to avoid an extra <div>
      // tag which isn't doing anything !!
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please insert a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log("Increment Clicked", this.state.count);
  // };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //    conditional rendering
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
