import React, { Component } from 'react';

class Members extends Component {
    
    state = {
        members : [
            { name: "Wayne Rooney", company: "DC United", status: "Active", updated:"7/07/2017", notes:"ManUtd highest scorer" },
            { name: "Ryan Giggs", company: "Manchester United", status: "Closed", updated:"11/01/2017", notes:"Most matches played" },
            { name: "Zlatan", company: "LA Galaxy", status: "Active", updated:"3/09/2018", notes:"Unique in his own league" },
            { name: "Messy", company: "Argentina", status: "Active", updated:"3/02/2022", notes:"Best Player of All Time. Period." }
          ],
        modalstyle:{
            display:"none"
        }  
    } 

    handleChange = () =>{
        const members = this.state.members;
        const currentstyle = this.state.modalstyle.display;
        if(currentstyle==="none"){
            this.setState({members:members,
                modalstyle:{display:"block"}
            });
        }

        if(currentstyle==="block"){
            this.setState({members:members,
                modalstyle:{display:"none"}
            });
        }
        
    }

    handleDelete = (val) =>{
        // console.log("name of the player:"+val.name);
        const updatedmembers = this.state.members.filter( m => m !== val);
        const style=this.state.modalstyle;
        this.setState({
            members:updatedmembers,
            modalstyle:style
        });
    }

    render() { 
        return (
        <div>
            <div class="first-row">
                <span id="dark">Team Members</span>
                <button id="addmembers" onClick={this.handleChange}>Add Members +</button>
            </div>
            <div id="myModal" class="modal" style={this.state.modalstyle}>
                <div class="modal-content">
                    <span class="close" onClick={this.handleChange}>&times;</span>
                    <h3 class="pullstart">Add Members</h3>
                    <form className="modalform">
                        <div class="pullstart">
                            <label>
                                Name
                            </label>
                        </div>
                        <div className="formgrp">
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="pullstart">
                            <label>
                                Company
                            </label>
                        </div>
                        <div className="formgrp">
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="pullstart">
                            <label>
                                Status
                            </label>
                        </div>
                        <div className="formgrp">
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="pullstart">
                            <label>
                                Notes
                            </label>
                        </div>
                        <div className="formgrp">
                            <input type="text" value={this.state.value} onChange={this.handleModalForm} />
                        </div>
                        <div class="formgrp">
                            <button id="btncancel" type='reset'>Cancel</button>
                            <button id='btnsave' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr id="myrules"/>
            <div id="dropdowns">
            
            </div>
            <div class="table">
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                        {this.state.members.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>Checkbox</td>
                                <td>{val.name}</td>
                                <td>{val.company}</td>
                                <td>{val.status}</td>
                                <td>{val.updated}</td>
                                <td>{val.notes}</td>
                                <td><button onClick={() => this.handleDelete(val)}>Delete</button></td>
                            </tr>
                        )
                        })}
                </table>
            </div>
        </div>
        );
    }
}
 
export default Members;