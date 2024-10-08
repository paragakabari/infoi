import React from 'react'
import { HOC } from '../HOC/HOC'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      <section className="error-section">
        <div className="container">
          <div className="error-content">
            <div className="error-text">
              <h2>Page not found</h2>
              {/* For internal navigation in React, use the Link component from react-router-dom */}
              <Link to={"/"} className="btn btn-solid">Back to Home Page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HOC(PageNotFound)