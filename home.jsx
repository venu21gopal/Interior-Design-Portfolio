import React,{useEffect} from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/navbar';
import Social from '../components/social';

import  Img7  from '../images/image (7).jpg';
import  Img8  from '../images/image (8).jpg';
import  Img9  from '../images/image (9).jpg';
import  Img1  from '../images/image (1).jpg';
import  Img2  from '../images/image (2).jpg';
import  Img3  from '../images/image (3).jpg';
import  Img4  from '../images/image (4).jpg';
import  Img5  from '../images/image (5).jpg';
import  Img6  from '../images/image (6).jpg';
import  Img52  from '../images/52.jpg';
import  Img53  from '../images/53.jpg';
import  Img55  from '../images/55.jpg';
import  video1  from '../videos/video (3).mp4';
import  video2  from '../videos/video (4).mp4';
import  video3  from '../videos/video.mp4';
import  video4  from '../videos/video (5).mp4';
import logo from '../images/21.jpg'



export const Home = () => {
    useEffect (() =>{
        Aos.init({duration: 2000,
          })
      },[])
  return (
    <div>
        <Navbar/>
        <Social/>
     

         <div className="home">
        <div className="main-text">

            <div className='heading-container  flex-row justify-content-center align-self-center' data-aos="slide-right">
            <h2>Elevate Your Space:</h2><h3>Discover Timeless Elegance and Modern Comfort with Our Interior Design Solutions</h3>
            </div>
            <div>
            <div className='carousel-card  flex-row justify-content-center align-self-center' data-aos="slide-left">
           <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Img7} class="d-block carousel-img" alt="..."/>
                    </div>
                    <div class="carousel-item ">
                    <img src={Img8} class="d-block carousel-img" alt="..."/>
                    </div>
                    <div class="carousel-item ">
                    <img src={Img9} class="d-block carousel-img" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
           </div> 
            </div>  
        </div>
      </div>
<div>
      <div class="sliderrr">
            <div class="slide-track-11">
                <div class="slidee">
                    <img src={ Img1 } alt="img"/>
                </div>
                <div class="slidee">
                    <img src={ Img2 } alt="img"/>
                </div>
                <div class="slidee">
                    <img src={ Img3 } alt="img"/>
                </div>
                <div class="slidee">
                    <img src={ Img4 } alt="img"/>
                </div>
                <div class="slidee">
                    <img src={ Img5 } alt="img"/>
                </div>
                <div class="slidee">
                    <img src={ Img6 } alt="img"/>
                </div> 
            </div>
        </div>
        </div>

        <div className='opp '>
         
          <img src={Img52} class="d-block  imggggg"   alt="..." />
      
          <div className='opp-2 d-flex flex-row justify-content-center align-self-center' >
          Furniture is the backbone of a well-designed living room. From plush <br/>sofas that invite relaxation to strategic layouts that optimize space,<br/> our designs prioritize both form and function. Explore our portfolio for<br/> insights into how the right furniture<br/> and layout choices can redefine your living experience.

          </div>
        </div>

        <div className='opp d-flex'>
        
          <div className='opp-2 d-flex flex-row justify-content-center align-self-center ' >
          Furniture is the backbone of a well-designed living room. From plush <br/>sofas that invite relaxation to strategic layouts that optimize space,<br/> our designs prioritize both form and function. Explore our portfolio for<br/> insights into how the right furniture<br/> and layout choices can redefine your living experience.
          </div>
          <div className='opp-3  '>
          <img src={Img55} class=" imggggg"    alt="..."/>
          </div>
        </div>

        <div className='opp d-flex'>
          <div className='opp-1 '>
          <img src={Img53} class="d-block imggggg"   alt="..." />
          </div>
          <div className='opp-2 d-flex flex-row justify-content-center align-self-center' >
          Furniture is the backbone of a well-designed living room. From plush <br/>sofas that invite relaxation to strategic layouts that optimize space,<br/> our designs prioritize both form and function. Explore our portfolio for<br/> insights into how the right furniture<br/> and layout choices can redefine your living experience.
          </div>
        </div>

        
              <div className='videoplay'>
                <div className="slidee">
                    <video src={ video1 } autoPlay loop muted />
                </div>
                <div className="slidee">
                    <video src={ video2 } autoPlay loop muted />
                </div>
                <div className="slidee">
                    <video src={ video3 } autoPlay loop muted />
                </div>
                <div className="slidee">
                    <video src={ video4 } autoPlay loop muted />
                </div>
         </div>

    
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
        
            <img src={logo} alt='logo' className='fotterlogo'/>
     
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				
  	 			</ul>
  	 		</div>


  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>


      
    </div>
  )
}
