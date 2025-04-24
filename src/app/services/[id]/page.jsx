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
export default function ServicesDetailsPage({params}) {
  const { id } = params;
  const singleService = list.services.find((service) => service.id == id);
  if (!singleService) {
    return <div>Service not found</div>;
  }
  return (
    <div>
          <h1>Services ID</h1>
          <p>ID : { singleService.id}</p>
          <p>ID : { singleService.title}</p>
    </div>
  )
}
