import React from 'react'
import { colors } from "../styles/styles"

export default function Contact() {
    return (
        <div className="bgColor">
            <div className=" w-100 container  py-5" id="is-waiting">
                <div className="text-center" >
                    <h1 className="mb-1 bgGrey mt20">Get In Touch</h1>
                    <div className="lineWrapper">
                        <div className="innerLine"></div>
                    </div>

                    <div className="container mt-5 invNeutral">
                        hello
                    </div>
                </div>
            </div>
            <style jsx>
                {`
          .mt20{
            margin-top: 25px
          }
            .iconWrapper {
              width: 60px;
              margin: 0 auto;
            }
            .bgColor {
              background-color: var(--bg);
            }
  
          
          `}
            </style>
        </div>

    )
}
