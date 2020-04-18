import React from 'react'
import NotFoundImageBackground from './ImageExports/NotFoundImageBackground'
import Button from './button'

export default function InexistingPage() {
  return (
    <div className="bgColor">
      <NotFoundImageBackground>
        <div className="contentWrapper">
          <div className=" w-100 container ">
            <div className="" >
              <div className="container  invNeutral">
                <div className="row">
                  <div className="col-sm-6">
                  </div>
                  <div className="col-sm-6">
                    <div className="d-table captionParent hImage">
                      <div className="captionArea captionPadding">
                        <h1 className='caption'>Uh oh...</h1>
                        <h4>This route doesn't exist... at least for now </h4>
                        <a href="/#">
                          <Button text='Go Home' radius='40px'
                            width='260px'
                            margin='10px 0'
                            height='55px' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </NotFoundImageBackground>

      <style jsx>
        {`
                .contentWrapper{
                    background-color: transparent
                
                }
                .captionArea {
                    display: table-cell;
                    vertical-align: middle;
                  }
           .invNeutral{
            color: var(--inverseNeutral) !important
          }
         
         
          .hImage{
            height: 100vh
          }
            .mt20{
              margin-top: 25px
            }
              .iconWrapper {
                width: 60px;
                margin: 0 auto;
              }
              .caption{
                font-weight: bold;
    font-size: 3.5rem;
            }
              @media(max-width: 1200px){
                .caption{
            font-size: 3.0rem;
                }
              }
              @media(max-width: 991px) and (min-width: 768px){
                .caption{
            font-size: 3.0rem;
                }
                .footer{
                  width: 55%;
                }
                .hImage{
                    height: 93vh
                  }
              }
              @media(max-width: 767px){
                .caption{
            font-size: 3.0rem;
                }
                .hImage{
                    height: 93vh
                  }
              }
              @media(max-width: 575px){
                .caption{
            font-size: 3.0rem;
  
                }
                .contentWrapper{
                    opacity: 1;
                    background-color: var(--bg);
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
