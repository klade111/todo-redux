import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editItem} from '../redux/action/index'
import { Modal, Button } from 'antd';

class Edit extends Component {
  state = { visible: false , editedTitle:'' };

  showModal = () => {
    this.setState({
      visible: true,
      editedTitle:this.props.edited
    });
  };

  handleOk = e => {
    this.props.editItem(this.props.id,this.state.editedTitle)
    this.setState({
      visible: false,
    });
   
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
         {console.log(this.props.edited)}
        <Button type="primary" onClick={this.showModal}>
         edit
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
  <input value={this.state.editedTitle} onChange={(e)=>this.setState({editedTitle:e.target.value})}/>
        </Modal>
      </div>
    );
  }
}

export default connect(null,{editItem})(Edit)