import {NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
    <h1 className="text-center my-5">Page Not Found</h1>
    <p className="text-center mb-5">Click <NavLink className='text-decoration-underline text-danger' to='/'>here</NavLink> to view site </p>
    </>
  )
}
