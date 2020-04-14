import React from 'react'
import { colors } from "./styles/styles"

export default function Button({ text, font, width, height, margin, radius }) {
    return (
        <>
            <button className="outlinedButton">{text}</button>
            <style jsx>{`
.outlinedButton {
    background-color: transparent;
    border: 2px solid ${colors.primary};
    width: ${width || 'auto'};
    margin: ${margin || 'auto'};
    height: ${height || 'auto'};
    border-radius: ${radius || '40px'};

   
    color: var(--inverseNeutral);
    font-size: ${font || '20px'} ;
    outline: 0 !important;
    transition: 0.3s;
  }
  .outlinedButton:hover {
    background-color: ${colors.primary};
    transition: 0.3s;
    color: var(--neutral);
  }
`}</style>
        </>
    )
}
