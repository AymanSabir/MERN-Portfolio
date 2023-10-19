import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';

function About() {
  return (
    <>
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="images/about.jpg" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi harum vitae neque? Labore, perferendis aut sm suscipit hic dolores voluptate, itaque nemo maxime. Reprehenderit eius veniam inventore quidem temporibus odit, sapiente porro excepturi delectus cupiditate doloremque praesentium fugit assume praesentium deserunt explicabo aliquid ipsa iure? Expedita nesciunt facere neque aperiam est veniam repellat corporis eos qui, illo eaque impedit quisquam. Quod, modi? Expedita sed alias ut cupiditate unde at sapiente nisi, nemo facere culpa quisquam quidem fugiat laboriosam.</p>
            </div>
        </div>
      </div>
      </Jump>
    </>
  )
}

export default About
