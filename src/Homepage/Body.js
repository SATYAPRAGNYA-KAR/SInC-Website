import React from 'react'
import "./HomepageBody.css";
import {ProgressBar} from 'react-bootstrap';
import dn from "./Images/dn.png";
import about from "./Images/about.png";
import mission from "./Images/mission.png";
import vision from "./Images/vision.png";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="homebody">
        
     <div >
     <br></br><br></br><br></br>
        <div className="homebody-tag1" style={{marginLeft:'auto',marginRight:'auto',width:'70%'}}>
            
          <h3 style={{color:'yellow',textAlign:'center'}}>Entrepreneurship Challenge</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Link to="registerpage" style={{ textDecoration: "none" }}>
            <div className="homebody__button1">
              <button type="button">Register Now</button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="homebody-tag1" style={{marginLeft:'auto',marginRight:'auto',width:'70%'}}>
          <h3 style={{color:'yellow',textAlign:'center'}}>Fundraiser</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* <div className="fundraiser_bottom">
            <div className="fundraiser_bar">
              <div className="fundraiser_bar_content"></div>
              <div className="fundraiser_bar_percent">
                <b>78%</b>
              </div>
            </div>
            <Link to="registerpage" style={{ textDecoration: "none" }}>
              <div className="homebody__button2">
                <button type="button">Contribute</button>
              </div>
            </Link>
          </div> */}
          <div className="row" style={{width:'100%',alignItems:'center'}}>
            <div className="col-md-10">
            <ProgressBar style={{height:'25px'}} variant="warning" now={78} label={'78%'} />
            </div>
            <div className='col-md-2' style={{textAlign:'center'}}>
            <Link to="registerpage" style={{ textDecoration: "none" }}>
              <div className="homebody__button2">
                <button style={{width:'auto',marginTop:'9px'}} type="button">Contribute</button>
              </div>
            </Link>
            </div>
          </div>
        </div>
         
        <div className="homebody-tag3" style={{marginLeft:'auto',marginRight:'auto',alignItems:'center'}}>
         <div class="row">
             <div class="col-md-4">
             <img style={{marginLeft:'auto', marginRight:'auto'}} src={dn} className="homebodyimg" alt="" />
             <center><h5 style={{color:'yellow'}}>Charvi</h5></center>
             <center><h5 style={{color:'white'}}>SInC Head</h5></center>
             </div>
             <div class="col-md-8">
              <center><h3 style={{color:'yellow'}}>imperdiet dui accumsan sit amet</h3>
              <h5 style={{color:'white'}}>  eget mi proin sed libero enim sed faucibus turpis in eu mi
              bibendum neque egestas congue quisque egestas diam in</h5></center>
             </div>
         </div>
        </div>
        <div className="homebody-tag3" style={{marginLeft:'auto',marginRight:'auto',alignItems:'center'}}>
         <div className="row">
             <div className="col-md-4">
             <img style={{marginLeft:'auto', marginRight:'auto'}} src={dn} className="homebodyimg" alt="" />
             <center><h5 style={{color:'yellow'}}>Charvi</h5></center>
             <center><h5 style={{color:'white'}}>SInC Head</h5></center>
             </div>
             <div class="col-md-8">
              <center><h3 style={{color:'yellow'}}>imperdiet dui accumsan sit amet</h3>
              <h5 style={{color:'white'}}>  eget mi proin sed libero enim sed faucibus turpis in eu mi
              bibendum neque egestas congue quisque egestas diam in</h5></center>
             </div>
         </div>

        </div>
        
        <div className="homebody-tag1" style={{marginLeft:'auto', marginRight:'auto',width:'90%'}}>
            <div className='row' style={{alignItems:'center'}}>
                <div style={{textAlign:'center'}} className='col-md-7'>
                <img style={{width:'60%', height:'60%'}}
                src={about}
                alt="About"
              />
                </div>
                <div className='col-md-5'>
                 <h3 style={{color:'yellow',textAlign:'center'}}>About Us</h3>
                 <center><p style={{color:'white'}}><p>
                 Well!, we construct roadmaps and keep to the deadlines we set. We never back down and always follow through on our promises. We believe in transparency; thus, our startup members and acquaintances are always kept up to date on the latest events and happenings.
              </p>
                     </p></center>
                </div>
            </div><br></br><hr></hr><br></br>
            <div className='row' style={{alignItems:'center'}}>
                <div style={{textAlign:'center'}} className='col-md-7 order-md-2 order-sm-1'>
                <img  style={{width:'75%', height:'75%'}}
                src={mission}
                alt="About"
              /> </div>
               <div className='col-md-5 order-md-1 order-sm-2'>
                 <h3 style={{color:'yellow',textAlign:'center'}}>Our Mission</h3>
                 <center><p style={{color:'white'}}><p>
                 Our mission is to empower every student on campus who aims high to turn their ideas into a real-world startup in every manner feasible and assist them in making a smooth transition through each stage of the process. As they say, "It's not about ideas, it's about making ideas happen", and we are committed to paving the path for them with every step they take. Our motto is to create an ecosystem that encourages students to explore their ideas freely by fostering constructive discussions with professors, industry veterans, investors, and peers. We aspire to aid all budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
              </p>
                     </p></center>
                </div>
    
            </div><br></br><hr></hr><br></br>
            <div className='row' style={{alignItems:'center'}}>
                <div style={{textAlign:'center'}} className='col-md-7'>
                <img  style={{width:'75%', height:'75%'}}
                src={vision}
                alt="About"
              />
                </div>
                <div className='col-md-5'>
              <h3 style={{color:'yellow',textAlign:'center'}}>Our Vision</h3>
              <center>   <p style={{color:'white'}}><p>
                 We want IIT Delhi to become the flag bearer, not just in India but across the world. We provide students a plethora of amenities, including mentorship, incubation space(of which most of the startups are bereft of), the much-needed legal expertise, which is as imperative as anything to launch a successful startup and funds. We connect students with industry experts and investors, provide incubation facilities and easy access to resources for product creation, and make them pitch-ready. We encourage individuals to engage in design thinking, planful ideation and foster the self-inculcation of new ideas.
              </p>
                     </p></center>
                     <br></br>
                </div><br></br><br></br>
            </div>
            <br></br>
        </div>
        <br></br>
        </div>
        <br></br><br></br>
        

    </div>
    
  )
}

export default Body
