import React, { Component } from 'react';

class Modal extends Component {
    state = {
        modalStyle:{
            display:"none"
        },
        newMember:{
            name:"",
            company:"",
            status:"",
            updated:"",
            notes:""
        }
      } 

      handleModalStyle = () =>{
        const currentstyle = this.state.modalStyle.display;
        if(currentstyle==="none"){
            this.setState({
                modalStyle:{display:"block"}
            });
            return;
        }

        if(currentstyle==="block"){
            this.setState({
                modalStyle:{display:"none"}
            });
        }    
    }

    handleChange =(e)=>{
        const newMember = {...this.state.newMember};
        newMember[e.currentTarget.id]=e.currentTarget.value;
        this.setState({newMember});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleSave(this.state.newMember);
        const modalStyle=this.state.modalStyle;
        const newMember = {
            name:"",
            company:"",
            status:"",
            updated:"",
            notes:""
        }
        this.setState({ modalStyle, newMember});
        //console.log("newmembers added :"+this.state.newMember);
    }
      
    render() { 
        return (
            <div class="container" >
                <div>
                    <span><h3>Team Members</h3></span>
                    <span><button type="submit" class="btn btn-primary" onClick={this.handleModalStyle}>Add Member +</button></span>
                </div>
                <div class="modal" style={this.state.modalStyle} >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Add new member's data</h5>
                            <span class="close" onClick={this.handleModalStyle}>&times;</span>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div class="mb-3">
                                    <label 
                                        for="name" 
                                        class="form-label"
                                    >
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="name" 
                                        value={this.state.newMember.name}
                                        onChange={this.handleChange}    
                                    />
                                </div>
                                <div class="mb-3">
                                    <label 
                                        for="company" 
                                        class="form-label"
                                    >
                                        Company
                                    </label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="company"
                                        value={this.state.newMember.company}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label 
                                        for="status" 
                                        class="form-label"
                                    >
                                        Status
                                    </label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="status"
                                        value={this.state.newMember.status}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label 
                                        for="notes" 
                                        class="form-label"
                                    >
                                        Notes
                                    </label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="notes"
                                        value={this.state.newMember.notes}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type="reset" id="buttonStyle" class="btn btn-outline-secondary">Reset</button>
                                <button type="submit" id="buttonStyle" class="btn btn-primary">Submit</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Modal;