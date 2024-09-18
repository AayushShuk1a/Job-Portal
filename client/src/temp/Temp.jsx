import React from 'react'
import "./temp.css"

const Temp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Webpage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        
        <div className="button-group">
          <button className="btn">Click Me</button>
          <button className="btn">Learn More</button>
        </div>

        <section className="section">
          <h2>Beautiful Nature</h2>
          <p>Explore the beauty of nature around us.</p>
          <img src="https://via.placeholder.com/1200x500" alt="Nature" />
        </section>

        <section className="section">
          <h2>Our Services</h2>
          <div className="card-container">
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h3>Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h3>Service 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h3>Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </header>
    </div>
  )
}

export default Temp