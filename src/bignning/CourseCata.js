import React from 'react'
import Footer from './Footer'
import PopularCourse from './PopularCourse'

export default function CourseCata() {
  return (
    <div>     
    {/* <!-- Header Start --> */}
    <div class="container-fluid bg-primary py-5 mb-5 page-header">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-3 text-white animated slideInDown">Courses</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">Pages</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Courses
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Header End -->

    <!-- Categories Start --> */}
    <div class="container-xxl py-5 category">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Categories
          </h6>
          <h1 class="mb-5">Courses Categories</h1>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <a class="position-relative d-block overflow-hidden" href="">
                  <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{margin: '1px'}}
                  >
                    <h5 class="m-0">Web Design</h5>
                    <small class="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                <a class="position-relative d-block overflow-hidden" href="">
                  <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{margin: '1px'}}
                  >
                    <h5 class="m-0">Graphic Design</h5>
                    <small class="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                <a class="position-relative d-block overflow-hidden" href="">
                  <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{margin: '1px'}}
                  >
                    <h5 class="m-0">Video Editing</h5>
                    <small class="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{minheight: '350px'}}
          >
            <a class="position-relative d-block h-100 overflow-hidden" href="">
              <img
                class="img-fluid position-absolute w-100 h-100"
                src="img/cat-4.jpg"
                alt=""
                style={{objectfit: 'cover'}}
              />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{margin: '1px'}}
              >
                <h5 class="m-0">Online Marketing</h5>
                <small class="text-primary">49 Courses</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Categories Start --> */}
   <PopularCourse/>
  
<Footer/>
    </div>
  )
}
