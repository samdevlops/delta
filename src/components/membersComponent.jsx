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
        console.log("Button clicked");
        const members = this.state.members;
        console.log(members);
        this.setState({members:members,
            modalstyle:{display:"block"}
        });
    }

    handleClose = () =>{
        console.log("Button clicked");
        const members = this.state.members;
        console.log(members);
        this.setState({members:members,
            modalstyle:{display:"none"}
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
                    <span class="close" onClick={this.handleClose}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
            <hr id="myrules"/>
            <div class="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Notes</th>
                    </tr>
                        {this.state.members.map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.company}</td>
                            <td>{val.status}</td>
                            <td>{val.updated}</td>
                            <td>{val.notes}</td>
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