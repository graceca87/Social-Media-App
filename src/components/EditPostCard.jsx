import React from 'react'

export default function EditPostCard(props, handleSubmit) {

  return (
    // attach onSubmit to form
    <div className="row justify-content-center">
        <div className="col-sm-6">
          	<div className="card mt-4 p-4">
				<form onSubmit={handleSubmit}>
					<h3 className="text-center">Create Post</h3>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" className="form-control" placeholder={props.title} name="title"/>
						<label htmlFor="content">Body</label>
						<input type='text' className='form-control' placeholder={props.content} name='content' />
						<input type="submit" className="btn btn-primary w-100 mt-3" value="Create Post"/>
					</div>
				</form>
        	</div>
      	</div>
    </div>
  )
}
