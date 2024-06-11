import React from 'react'
import NavBar from './NavBar'

const UserHome = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>Log In</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <br /> <button className="btn btn-success">log in</button>
                        </div>
                       
                       <br /> <br /><br /><p><a class="link-opacity-30" href="/add">New users click here!</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserHome