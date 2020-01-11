import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteItem ,editItem} from'../redux/action/index'
import Edit from './editModal'
class List extends Component {
    state={
        editedtodo:''
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'column' }}>
                {this.props.array.map((el, i) => 
                <div>
                    <input value={el.title}/>
                    <button onClick={()=>this.props.deleteItem(el.id)}>Delete</button>
                    <Edit id={el.id} edited={el.title}/>
                </div>)}

            </div>
        )
    }
}
// array used in components list and items bring from store(reducer)
const mapStateToProps = state => {
    return { array: state.items }
}
// 1ere place est reserve pour mapStateToProps et
// la 2eme place est reserve pour mapDispatchToProps,,, donc pour utuliser mapDispatchToProps il 
//il faut declarer la premiere place comme "null"

export default connect(mapStateToProps,{deleteItem,editItem})(List)