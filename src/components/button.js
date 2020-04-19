import React from 'react'
import { colors } from "./styles/styles"

export default function Button({ text, font, width, height, margin, radius, display }) {
  return (
    <>
      <button className="fourth outlinedButton">{text}</button>
      <style jsx>{`
.outlinedButton {
    background-color: transparent;
    border: 2px solid ${colors.primary};
    width: ${width || 'auto'};
    display: ${display || 'initial'};
    margin: ${margin || 'auto'};
    height: ${height || 'auto'};
    border-radius: ${radius || '40px'};

   
    color: var(--inverseNeutral);
    font-size: ${font || '20px'} ;
    outline: 0 !important;
    transition: 0.7s;
  }
  .outlinedButton:hover {
    background-color: ${colors.primary};
    transition: 0.7s;
    color: var(--neutral);
    
  }
  .fourth {
    background-image: -webkit-linear-gradient(45deg, ${colors.primary} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${colors.primary} 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 500ms ease-in-out;
    transition: background 500ms ease-in-out;
  }
  .fourth:hover {
    background-position: 0;
  }
  
`}</style>
    </>
  )
}
