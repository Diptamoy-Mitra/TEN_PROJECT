import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
      <div className="hero-content">
        <h1>Crank Up The Sound Of Victory</h1>
        <p>boAt Rockerz 410 - Bluetooth Headphone for Work from Home</p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.jpg" alt="amazon logo" />
            <img src="/images/flipkart.jpg" alt="flipkart logo" />

          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/rock.png" alt="rock logo" />

      </div>
    </main>
  )
}

export default Hero
