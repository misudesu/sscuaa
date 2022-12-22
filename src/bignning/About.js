
import React from 'react'
import Footer from './Footer'
import Service from './Service'

export default function About() {
  return (
    <div>
    
   
    {/* <!-- Header Start --> */} 
    <div class="container-fluid bg-primary py-5 mb-5 page-header">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-3 text-white animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a class="text-white text-decoration-none" href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a class="text-white text-decoration-none" href="#">Pages</a>
                </li>
                <li
                  class="breadcrumb-item text-white active text-decoration-none"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Header End -->


    <!-- About Start --> */}
    <Service/>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div
            class="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{minheight: '400px'}}
          >
            <div class="position-relative h-100">
              <img
                class="img-fluid position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style={{objectfit: 'cover'}}
              />
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 class="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 class="mb-4">Welcome to SSCUAA </h1>
            <p class="mb-4">
                    At SSCUAA, we believe everyone should have the opportunity to create progress 
            through technology and develop the skills of tomorrow. With IQ Question,tool, 
            learning paths and courses authored by Skilled Instructors experts, 
            our platform helps student and lectures, benchmark expertise across roles,
           speed up release cycles and build reliable, secure products.
                    </p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        
                    </div>
            
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About End -->


   

    <!-- Back to Top --> */}
    <Footer/>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a>
    </div>
  )
}
