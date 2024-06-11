import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">bloodgroup</th>
                                    <th scope="col">mobilenumber</th>
                                    <th scope="col">address</th>
                                    <th scope="col">pincode</th>
                                    <th scope="col">district</th>
                                    <th scope="col">place</th>
                                    <th scope="col">emailid</th>
                                    <th scope="col">username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll