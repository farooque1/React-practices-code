import React, { Component } from 'react'

export default class ClassComponet extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            number:0,
            date: new Date()}
            ;
            

        this.componentDidMount =()=> {
            console.log("Life Cycle method 1");
            // this.timerID = setInterval(
            //     () => this.tick(),
            //     1000
            // );

          }
          this.increment=()=>{
            //  const count = this.state.number + 1 ;
            //  console.log(count);
            this.setState({number:this.state.number + 1});
            console.log(this.state.number);
        }

          this.componentDidUpdate=()=>{
            console.log("update life cycle");
          }
        
          this.componentWillUnmount =()=> {
            console.log("Life Cycle method 3");
            // clearInterval(this.timerID);
          }
        
        //   this.tick =()=> {
        //     this.setState({
        //       date: new Date()
        //     });
        //   }
    }

    render() {        
    return (
      <div className='container my-5'>
        ClassComponet
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h1>Number {this.state.number}</h1>
        <button onClick={this.increment} className="btn btn-outline-primary">Click to Increment</button>
      </div>
    )
  }
}
