import React from 'react'

export default function CreatePost(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value
    
    let myHeaders = new Headers();
    let myToken = localStorage.getItem('token')

    myHeaders.append(`Authorization`, `Bearer ${myToken}`)
    myHeaders.append(`Authorization`, `Bearer ${myToken}`);
    let data = JSON.stringify({title, body})

  }
  return (
    <form>
        <h3 className='text-center'>Create Post</h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                    <input type='text' className='form-control' placeholder='Enter Title Here' name='title' />
                <label htmlFor="body">Body</label>
                    <input type='text' className='form-control' placeholder='Enter Body Here' name='body' />
                <input type='submit' className='btn btn-primary w-100 mt-3' value='Create Post' />
            </div>
          
    </form>
  )
}
