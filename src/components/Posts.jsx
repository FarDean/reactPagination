import React from 'react'

export default function Posts({posts,loading}) {
    if(loading){
        return <h2>LOading...</h2>
    }
    return (
        <ul className="list-group mb-4">
            {posts.map(post=>(
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    )
}
