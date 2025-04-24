import Link from 'next/link'
import React from 'react'

export default function NavBar() {
const menu = [
  {
    _id: "1",
    title: "Home",
    url: "/",
    order: 1,
    children: [],
  },
  {
    _id: "2",
    title: "About Us",
    url: "/about",
    order: 2,
    children: [],
  },
  {
    _id: "3",
    title: "Services",
    url: "/services",
    order: 3,
    children: [
      {
        _id: "3.1",
        title: "Web Development",
        url: "/services/web-development",
      },
      {
        _id: "3.2",
        title: "SEO",
        url: "/services/seo",
      },
      {
        _id: "3.3",
        title: "Digital Marketing",
        url: "/services/digital-marketing",
      },
    ],
  },
  {
    _id: "4",
    title: "Blog",
    url: "/blog",
    order: 4,
    children: [],
  },
  {
    _id: "5",
    title: "Contact",
    url: "/contact",
    order: 5,
    children: [],
  },
];
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          {menu.map((item) => {
            return (
              <li key={item._id} className=''>
                <Link href={item.url} className="text-base font-semibold">
                  {item.title}
                </Link>
              </li>
            )
          })}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">My Accounts</a>
  </div>
</div>
  )
}
