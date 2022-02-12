import React, { Component } from 'react';
import Members from './membersComponent';
import Modal from './modalComponent';

class Main extends Component {
    state = { 
        members : [
            { name: "Wayne Rooney", company: "DC United", status: "Active", updated:"7/07/2017", notes:"ManUtd highest scorer" },
            { name: "Ryan Giggs", company: "Manchester United", status: "Closed", updated:"11/01/2017", notes:"Most matches played" },
            { name: "Zlatan", company: "LA Galaxy", status: "Active", updated:"3/09/2018", notes:"Unique in his own league" },
            { name: "Messy", company: "Argentina", status: "Active", updated:"3/02/2022", notes:"Best Player of All Time. Period." }
          ]
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

    handleSave=(newMember) =>{
        const members = this.state.members;
        //newMember.updated = new Date.toString();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        newMember.updated = mm + '/' + dd + '/' + yyyy;
        members.push(newMember);
        this.setState({members});
        console.log("Inside handleSave :", newMember.name);
    }

    render() { 
        return (
            <div>
                <Modal 
                    handleSave={this.handleSave}
                />
                <Members 
                    members={this.state.members} 
                    handleDelete={this.handleDelete} 
                />
            </div>
        );
    }
}
 
export default Main;