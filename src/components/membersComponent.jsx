import React from 'react';

function Members({ members , handleDelete}) {

    return (
        <div>
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Last Updated</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                        {members.map((val, key) => {
                        return (
                            <tbody>
                                <tr key={key}>
                                    <td><input type="checkbox" class="form-check-input" id="exampleCheck1"/></td>
                                    <td>{val.name}</td>
                                    <td>{val.company}</td>
                                    <td>{val.status}</td>
                                    <td>{val.updated}</td>
                                    <td>{val.notes}</td>
                                    <td><button type="submit" class="btn btn-outline-danger" onClick={() => handleDelete(val)}>Delete</button></td>
                                </tr>
                            </tbody>
                        )
                        })}
                </table>
            </div>
        </div>
    );
}
 
export default Members;