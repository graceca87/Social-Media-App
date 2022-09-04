import React from 'react'

export default function RegisterCard({handleSubmit}) {
  return (
    <>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <div className="card mt-4">
                    <h4 className="text-center mt-4">Register</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-3">
                            <label htmlFor="email">Email</label>
                            <input type='text' className='form-control' placeholder='Enter Email' name='email' />
                            <label htmlFor="username">Username</label>
                            <input type='text' className='form-control' placeholder='Enter Username' name='username' />
                            <label htmlFor="password">Password</label>
                            <input type='password' className='form-control' placeholder='Enter Password' name='password' />
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input type='password' className='form-control' placeholder='Enter Password Again' name='confirmPass' />

                            <input type='submit' className='btn btn-primary w-100 mt-3' value='Register' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

