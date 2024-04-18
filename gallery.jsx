import React,{useEffect} from 'react';
import './gallery.css';
import  Img56  from '../images/56.jpg';
import  Img22  from '../images/22.jpg';
import  Img23  from '../images/23.jpg';
import  Img24  from '../images/24.jpg';
import  Img25  from '../images/25.jpg';
import  Img26  from '../images/26.jpg';
import  Img27  from '../images/27.jpg';
import  Img28  from '../images/28.jpg';
import  Img29  from '../images/29.jpg';
import  Img30  from '../images/30.jpg';
import  Img31  from '../images/31.jpg';
import  Img32  from '../images/32.jpg';
import  Img33  from '../images/33.jpg';
import  Img34  from '../images/34.jpg';
import  Img35  from '../images/35.jpg';
import  Img36  from '../images/36.jpg';
import logo from '../images/21.jpg';


export const Gallery = () => {
  return (
    <div>
        <div>
            <div className='gallery-Id'>
                <h1>Gallery</h1>
            </div>
       <div class="grid-container-gallery row gx-5">
        <div className='gallery-center'>
            <h2>Living Room</h2>
        </div>
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
                <div class="card-gallery">
                <div class="img-content-gallery">
                <img src={Img56} alt="..." width={300} height={300}/>
                </div>
                <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Your living room should be a reflection of your 
                unique taste and lifestyle. Discover the 
                art of personalization 
                through curated decor items, 
                 that tell your story.
                </p>
                </div>
            </div>
            </div>
        
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img22} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Your living room should be a reflection of your 
                unique taste and lifestyle. Discover the 
                art of personalization 
                through curated decor items, 
                 that tell your story.
                </p>
            </div>
            </div>
            </div>
        
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
                <div class="card-gallery">
                <div class="img-content-gallery">
                <img src={Img23} alt="..." width={300} height={300}/>
                </div>
                <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Your living room should be a reflection of your 
                unique taste and lifestyle. Discover the 
                art of personalization 
                through curated decor items, 
                 that tell your story.
                </p>
                </div>
            </div>
            </div>
            
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img24} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Your living room should be a reflection of your 
                unique taste and lifestyle. Discover the 
                art of personalization 
                through curated decor items, 
                 that tell your story.
                </p>
            </div>
            </div>
            </div>

           <div className='gallery-center'>
            <h2>Dining Room</h2>
        </div> 
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img25} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and introduce your expertise in crafting stunning dining room interiors.
Emphasize the dining room's role as a space for gathering, entertaining, and creating lasting memories.
                </p>
            </div>
            </div>
            </div>
            
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img26} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and introduce your expertise in crafting stunning dining room interiors.
Emphasize the dining room's role as a space for gathering, entertaining, and creating lasting memories.
                </p>
            </div>
            </div>
            </div>
            
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img27} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and introduce your expertise in crafting stunning dining room interiors.
Emphasize the dining room's role as a space for gathering, entertaining, and creating lasting memories.
                </p>
            </div>
            </div>
            </div>
            
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img28} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and introduce your expertise in crafting stunning dining room interiors.
Emphasize the dining room's role as a space for gathering, entertaining, and creating lasting memories.
                </p>
            </div>
            </div>
            </div>

            <div className='gallery-center'>
            <h2>Bed Room</h2>
        </div>
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img29} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and express your passion for creating comfortable and stylish bedroom spaces.
Emphasize the bedroom's significance as a personal retreat and a place for relaxation and rejuvenation.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img30} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and express your passion for creating comfortable and stylish bedroom spaces.
Emphasize the bedroom's significance as a personal retreat and a place for relaxation and rejuvenation.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            
                <img src={Img31} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and express your passion for creating comfortable and stylish bedroom spaces.
Emphasize the bedroom's significance as a personal retreat and a place for relaxation and rejuvenation.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img32} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors and express your passion for creating comfortable and stylish bedroom spaces.
Emphasize the bedroom's significance as a personal retreat and a place for relaxation and rejuvenation.
                </p>
            </div>
            </div>
            </div>

            <div className='gallery-center'>
            <h2>Kitchen Room</h2>
        </div>
            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img33} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors to your kitchen design section, highlighting the kitchen's central role in a home.
Emphasize the importance of functionality, efficiency, and aesthetics in a well-designed kitchen.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img34} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors to your kitchen design section, highlighting the kitchen's central role in a home.
Emphasize the importance of functionality, efficiency, and aesthetics in a well-designed kitchen.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img35} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors to your kitchen design section, highlighting the kitchen's central role in a home.
Emphasize the importance of functionality, efficiency, and aesthetics in a well-designed kitchen.
                </p>
            </div>
            </div>
            </div>

            <div class="card-container-gallery col-lg-3 col-md-6" data-aos="flip-up">
            <div class="card-gallery">
            <div class="img-content-gallery">
            <img src={Img36} alt="..." width={300} height={300}/>
            </div>
            <div class="content-gallery">
                <p class="heading-gallery">Card Hover</p>
                <p>
                Welcome visitors to your kitchen design section, highlighting the kitchen's central role in a home.
Emphasize the importance of functionality, efficiency, and aesthetics in a well-designed kitchen.
                </p>
            </div>
            </div>
            </div>



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
