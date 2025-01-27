import React from 'react'

export default function Viewusers() {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center text-primary"> View Users</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of the users with id:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Username:</b>                                     
                                </li>
                                <li className='list-group-item'>
                                    <b>Name:</b>
                                    
                                </li>
                                <li className='list-group-item'>
                                    <b>Email:</b>
                                   
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}