import getAllPost from '@/lib/getAllpost'
import Link from 'next/link';
import React from 'react'

export default async function AddressPage() {
  const posts = await getAllPost();
  return (
    <div>
      { posts.map((post)=>(
        <div key={post.id}>
          <ol>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
            <Link href={`/about/address/${post.id}`} className='text-blue-500'>Read More</Link>
          </ol>
         
        </div>
      ))}
    </div>
  )
}
