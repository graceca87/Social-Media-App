import React from 'react'

export default function LoginCard() {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <div class="card mt-5">
            <div class="card-body">
              <h4 className="text-center">Login</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    name="username"
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                  />

                  <input
                    type="submit"
                    className="btn btn-primary w-100 mt-3"
                    value="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}