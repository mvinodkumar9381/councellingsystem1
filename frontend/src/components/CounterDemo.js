import React, { Component } from 'react'

export class Counterdemo extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
    increament()
    {
        this.setState({
            count:this.state.count+1
            
       } ,()=>console.log("callblack vlaue = "+this.state.count))
        console.log(this.state.count)
      
    }
    
  render() {
    return (
    <div>
        <center>
            <h1>
                counter :{this.state.count}
            </h1>
            <button onClick={()=>this.increament()}>increament</button>
        </center>
    </div>
    )
  }
}

export default Counterdemo