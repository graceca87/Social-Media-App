import React from 'react'


export default function LoginCard({handleSubmit}) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card mt-5">
            <div className="card-body">
              <h4 className="text-center">Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" name="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name="password" />
                    <input type="submit"className="btn btn-primary w-100 mt-3"value="Register" />
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
