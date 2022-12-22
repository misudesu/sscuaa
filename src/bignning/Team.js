import React from 'react'
import Footer from './Footer'

export default function Team() {
  return (
    <div>
         {/* <!-- Header Start --> */}
    <div class="container-fluid bg-primary py-5 mb-5 page-header">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-3 text-white animated slideInDown">Our Team</h1>
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
                  Team
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Header End -->

    <!-- Team Start --> */}
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Instructors
          </h6>
          <h1 class="mb-5">Expert Instructors</h1>
        </div>
        <div class="row justiy-content-center g-4">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/misu-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Misael Dessalegn</h5>
                <small>CEO and Full Stack Developer </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/miskr-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Misikr Mengste</h5>
                <small>UI AND UX Expert</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/bini-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Biniyam Merkin</h5>
                <small>Full Stack Developer</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/maki-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Meklit Getachew</h5>
                <small>CEO</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/yenu-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Yenenesh T/Yohannes</h5>
                <small>Programer</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/beki-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Bekalu Derjew</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/habte-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Instructor Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img class="img-fluid" src="img/yab-1.jpg" alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{margintop: '-23px'}}
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">David Abebe</h5>
                <small>Project Manager Expert</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Team End --> */}
<Footer/>
    </div>
  )
}
