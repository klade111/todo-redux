import React, { Component } from 'react'
import {addItem} from '../redux/action/index'
import {connect} from 'react-redux'

 class Add extends Component {
     state={
         item:''
     }
    render() {
        return (
            <div>
            <h2>To Do</h2>
            <input value={this.state.item} onChange={e=>{this.setState({item:e.target.value})}}/>
            <button onClick={()=>this.props.addItem(this.state.item)}>Add</button>
            </div>
        )
    }
}

// mapDispatchToProps : envoyer l item To reducer To push it in items array
// elle prends comme variable this.state.item: payload


export default connect(null,{addItem})(Add)   