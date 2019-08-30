import React from 'react'

export default function Comments({
                                     post,
                                     comments,
                                     updateCounter, activePosts
                                 }) {

    return <>
        <div className="row">
            {
                comments.map(comment => {

                    if (post == comment.postId && activePosts.includes(comment.postId)) {
                        return <>
                            <div className="toast-body">
                                <strong>ID: </strong> {comment.id}
                                <strong>Post ID: </strong> {comment.postId}
                                <strong>Name: </strong> {comment.name}
                                <strong>Body: </strong>{comment.body}
                                <strong>Email: </strong>{comment.email}
                            </div>

                            <div className="card-body text-center">
                                <button className="btn btn-primary" onClick={() => {updateCounter(comment)}}>
                                    Buy this comment
                                </button>
                            </div>
                        </>
                    }
                })
            }
        </div>
    </>
}


