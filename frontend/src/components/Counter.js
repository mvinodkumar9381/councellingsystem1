import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
    increment()
    {
        // this.setState({
          //   count:this.state.count+1
            
       //  } ,()=>console.log("callblack vlaue = "+this.state.count))
        // console.log(this.state.count)
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
   incrementFive()
   {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()

   }
  render() {
    return (
    <div>
        <center>
            <h1>
                counter :{this.state.count}
            </h1>
            <button onClick={()=>this.incrementFive()}>increment</button>
        </center>
    </div>
    )
  }
}

export default Counter