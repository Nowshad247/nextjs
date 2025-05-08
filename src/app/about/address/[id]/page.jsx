
import getpost from '@/lib/getpost';
import React from 'react'

export default async function postPage({ params }) {
    const post = await getpost(params.id);
  return (
    <div>
          <h1>{ post.userId}</h1>
          <h1>{ post.title}</h1>
          <h1>{ post.body}</h1>
    </div>
  )
}
