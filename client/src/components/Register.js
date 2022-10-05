import React from 'react'
import { useState } from "react"

function Register() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up!</h3>
              <div className="text-center">
                Already registered?{" "}
                <span style={{cursor:'pointer'}} className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="name"
                  className="form-control mt-1"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group mt-3">
                <label>Profile Picture</label>
                <input
                  type="photo"
                  className="form-control mt-1"
                  placeholder="Upload Image URL Here"
                />
              </div>
              <div className="form-group mt-3">
                <label>Bio</label>
                <input
                  type="bio"
                  className="form-control mt-1"
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  export default Register