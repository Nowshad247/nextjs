import Link from 'next/link'
import React from 'react'
const list = {
  "services": [
    {
      "id": 1,
      "title": "Web Design",
      "freeImage": "/next.svg"
    },
    {
      "id": 2,
      "title": "SEO Optimization",
      "freeImage": "/next.svg"
    },
    {
      "id": 3,
      "title": "Social Media Marketing",
      "freeImage": "/next.svg"
    },
    {
      "id": 4,
      "title": "Content Writing",
      "freeImage": "/next.svg"
    },
    {
      "id": 5,
      "title": "Graphic Design",
      "freeImage": "/next.svg"
    },
    {
      "id": 6,
      "title": "Video Editing",
      "freeImage": "/next.svg"
    },
    {
      "id": 7,
      "title": "Email Marketing",
      "freeImage": "/next.svg"
    },
    {
      "id": 8,
      "title": "App Development",
      "freeImage": "/next.svg"
    },
    {
      "id": 9,
      "title": "UI/UX Design",
      "freeImage": "/next.svg"
    },
    {
      "id": 10,
      "title": "Branding",
      "freeImage": "/next.svg"
    }
  ]
}
export default function ServicesPage() {
  return (
    <div className='grid grid-cols-3 gap-4 outline-4 outline-amber-100'>
      { 
        list.services.map((service) => (
          <div key={service.id} className='flex flex-col items-center justify-center'>
            <h2>{service.title}</h2>
            <img src={service.freeImage} alt={service.title} />
           <Link className='outline-2 outline-offset-2 outline-blue-500' href={`/services/${service.id}`}>
              Details
            </Link>
          </div>
        ))
      }
     </div>
  )
}
