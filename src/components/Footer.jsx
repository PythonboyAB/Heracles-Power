import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="footer bg-base-200 text-base-content p-10 w-screen flex justify-evenly">
     
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">BMI Calculator</a>
    <a className="link link-hover">Diet plan</a>
    <a className="link link-hover">Expert</a>
    <a className="link link-hover">Workouts</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </>
  )
}
