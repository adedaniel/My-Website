import React from 'react'
import WithLoveImage from '../ImageExports/WithLoveImage'

export default function Contact({ queryData }) {
  return (
    <div className="bgColor">
      <div className=" w-100 container  py-5" id="is-waiting">
        <div className="text-center" >
          <h1 className="mb-1 bgGrey mt20">Get In Touch</h1>
          <div className="lineWrapper">
            <div className="innerLine"></div>
          </div>

          <div className="container mt-5 invNeutral">
            <div className="container mt-5 text-left">
              <div className="row">
                <div className="col-sm-12">
                  <div className="d-table hImage captionParent">
                    <div className="captionArea captionPadding">
                      <p className='bgGrey'> You have a finished design and a clear picture of how your website should work?
                     <br />
                      or you've got a rough idea of your website / web application and you need support with the design and implementation?
                      <br />
                        <br />
                      Or maybe you have an existing website / web application but you are not satisfied with it?
                      <br />
                        <br />


                      Wherever you are with your idea or your project, I'll be happy to help.</p>
                      <h6 className='bgGrey callToAction'>Ready to make a difference?</h6>
                      <div className="row my-5">
                        <div className="col-md-7">
                          <a className='invNeutral' href={`mailto:${queryData.email}`}><h1 className='contactEmail'>{queryData.email}</h1></a>
                          <div className="contacts">
                            <a target="_blank" rel="noopener noreferrer" href={queryData.twitter}>
                              <div className="eachLink d-inline-block">
                                <div className="innerTwitterLink">
                                  <div className="hoverIcon">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                  </div>
                                  <div className=" hoverIcon">
                                    <i
                                      className="fa fa-twitter text-white"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={queryData.linkedin}>
                              <div className="eachLink d-inline-block">
                                <div className="innerLinkedInLink">
                                  <div className="hoverIcon">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                  </div>
                                  <div className=" hoverIcon">
                                    <i
                                      className="fa fa-linkedin text-white"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={queryData.youtube}>
                              <div className="eachLink d-inline-block">
                                <div className="innerYouTubeLink">
                                  <div className="hoverIcon">
                                    <i className="fa fa-youtube" aria-hidden="true"></i>
                                  </div>
                                  <div className=" hoverIcon">
                                    <i
                                      className="fa fa-youtube text-white"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={queryData.github}>
                              <div className="eachLink d-inline-block">
                                <div className="innerGithubLink">
                                  <div className="hoverIcon">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                  </div>
                                  <div className=" hoverIcon">
                                    <i
                                      className="fa fa-github text-white"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={queryData.whatsapp}>
                              <div className="eachLink d-inline-block">
                                <div className="innerWhatsappLink">
                                  <div className="hoverIcon">
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                  </div>
                                  <div className=" hoverIcon">
                                    <i
                                      className="fa fa-whatsapp text-white"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>


                        </div>
                        <div className="col-md-5 pt-2">

                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="invNeutral"
                            href="tel:+2348104172477"
                          >
                            <h3>{queryData.phone}</h3>
                          </a>

                          <span><p className=''>Nigeria</p></span>
                          <h5>Anywhere you need me to be on Earth</h5>

                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer">
        <WithLoveImage />
      </div>
      <style jsx>
        {`
        .footer{
          width: 50%;
          margin: 0 auto;
          padding: 20px 0
        }
        .callToAction{
          font-weight: bold
        }
         .invNeutral{
          color: var(--inverseNeutral) !important
        }
        .innerTwitterLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerTwitterLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #00acee;
        }
        .innerLinkedInLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerLinkedInLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #0e76a8;
        }
        .innerYouTubeLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerYouTubeLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #c4302b;
        }
        .innerGithubLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerGithubLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #211f1f;
        }
        .innerWhatsappLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerWhatsappLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #25d366;
        }

        .hoverIcon {
          font-size: 25px;
          padding: 15px 0;
          text-align: center;
          color: var(--greyText);
        }
        .eachLink {
          overflow: hidden;
          width: 50px;
          height: 60px;
        }
        .bgTwitter {
          background-color: lightblue;
        }
        .break {
          display: block;
        }
        .hImage{
          height: 300px
        }
          .mt20{
            margin-top: 25px
          }
            .iconWrapper {
              width: 60px;
              margin: 0 auto;
            }
            .contactEmail{
              font-weight: bold;
  font-size: 2.3rem;
          }
            @media(max-width: 1200px){
              .contactEmail{
          font-size: 2.0rem;
              }
            }
            @media(max-width: 991px) and (min-width: 768px){
              .contactEmail{
          font-size: 2.0rem;
              }
              .footer{
                width: 55%;
              }
            }
            @media(max-width: 767px){
              .contactEmail{
          font-size: 1.8rem;
              }
            }
            @media(max-width: 575px){
              .contactEmail{
          font-size: 1.35rem;

              }
              .hImage {
                  height: auto;
                
                }
                .h150{
                  height: 150px;
                  width: 50%
              }
              .footer{
                width: 80%;
              }
              
            }
            .bgColor {
              background-color: var(--bg);
            }
  
          
          `}
      </style>
    </div>

  )
}
