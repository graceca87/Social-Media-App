

import React from 'react'

export default function CreatePost(props) {
  return (
    <form>
        <h3 className='text-center'>Create New Post</h3>
            <div className="form-group">
                <label htmlFor="email">Title</label>
                <input type='text' className='form-control' placeholder='Enter Title Here' name='email' />
                <label htmlFor="Body">Username</label>
                <input type='text' className='form-control' placeholder='Enter Body Here' name='username' />
            
                <input type='submit' className='btn btn-primary w-100 mt-3' value='Create Post' />
            </div>
          
    </form>
  )
}
