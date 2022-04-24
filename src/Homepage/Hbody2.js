 import React from 'react'
import Topbar from './Navbar'
import './text.css'
import { Link } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import Footer from '../Login/LoginFooter'

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
         <center><h1 className='mt-5 mb-4 aboutus'>WHAT IS SInC ?</h1></center>
         <div className='container'>
          <h5 className='aboutus-h5 mb-3'> The Student Incubation Cell, IIT Delhi is formed with an intent to promote design thinking, planful ideation and support budding Entrepreneurs at IIT DELHI who can make a mark on the world map through their vision, next-generation technology, and services by leading from the front.Our mission is to empower every student in the campus in every way possible who aim high to translate their ideas into real-world Startup and to help in a smooth transition in every phase of this journey. As they say “It’s not about ideas, it’s about making ideas happen and we are committed to pave the way with every step one takes.
          <br></br> <br></br> Well! we construct roadmaps and keep to the deadlines we set. We never back 
                down and always follow through on our promises. We believe in transparency; 
                thus, our startup members and acquaintances are always kept up to date on 
                the latest events and happenings.
          </h5>
         {/* <center> <Link to="/team" className=" btn mt-3">Know More</Link> </center> */}
         </div>
      </div>
      <div className='container-fluid bg-contact p-0'>
      <div className='container-fluid nopadding' style={{height: "100%",
   width: "100%",
   background: "#000000cf"}}>
       <div className='container mt-5'>
          
          <center> <div className='col-md-8 mt-5'>
           <div className='container-fluid mt-5'>
               <br></br><br></br>
           <center><h1 className='mt-5 mb-3' style={{color:'white'}}>Get In Touch</h1></center>
               <div className='row'>
                   <div className='col-md-6'>
                   <Form.Control className='mt-4 mb-4'  style={{background:'transparent'}} type="email" placeholder="Name" />
                   <Form.Control  className='mt-4 mb-4' style={{background:'transparent'}} type="email" placeholder="Email" />
                   <Form.Control  className='mt-4 mb-4' style={{background:'transparent'}} type="email" placeholder="Subject" />
                   </div>
                   <div className='col-md-6' style={{marginBottom:'auto',marginTop:'auto'}}>
                   <textarea class="form-control" style={{background:'transparent'}} id="exampleFormControlTextarea1" rows="6" placeholder='Message'></textarea>
                     </div>
                <button class="btn btn-primary btn-block mt-2" style={{background: 'transparent',
    border: '1px solid #514b4b'}} >Send Message</button>
               </div>
           </div>
  
           </div>
           </center>
       </div>
       </div>
      </div>
      <Footer/>
      </>
   
  )
}

export default Hbody2
