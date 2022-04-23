import React from 'react'
import Topbar from './Navbar'
import './text.css'

const Hbody2 = () => {
  return (
      <>
      <Topbar/>
      <div class="brasil" data-text="Student Incubation Cell">Student Incubation Cell</div> 
      <center><h1 className='head'>IIT DELHI</h1></center>
      <h1 className='head2'>“ CREATING JOB CREATORS ”</h1>
      <h1 className='head3'><a className='btn btn-explore'><b>What We Do?</b></a></h1>
      <div className='container-fluid bg-img p-0'>
      <div className='container-fluid nopadding' style={{height: "100%",
   width: "100%",
   background: "#000000cf"}}>
       </div>

      </div>
      <div className='container-fluid'>
      {/* <div class="vl"></div> */}
         <center><h1 className='mt-5 mb-4 aboutus'>About Us</h1></center>
         <div className='container'>
          <h5 className='aboutus-h5'>  The Student Incubation Cell, IIT Delhi is formed with an intent to promote design thinking, planful ideation and support budding Entrepreneurs at IIT DELHI who can make a mark on the world map through their vision, next-generation technology, and services by leading from the front.Our mission is to empower every student in the campus in every way possible who aim high to translate their ideas into real-world Startup and to help in a smooth transition in every phase of this journey. As they say “It’s not about ideas, it’s about making ideas happen and we are committed to pave the way with every step one takes.</h5>
         </div>
      </div>
      </>
   
  )
}

export default Hbody2
