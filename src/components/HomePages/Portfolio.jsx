import React from 'react'

export default function Portfolio() {
    return (
        <>
            <div className="pt-1 bgColor">
                <div className="text-center py-5" id="works">
                    <h1 className="mb-1 bgGrey">Portfolio</h1>
                    <div className="lineWrapper mb-4">
                        <div className="innerLine"></div>
                    </div>
                    <div className="container mt-5">
                    </div>
                </div>
            </div>

            <style jsx>{`
.invNeutral{
    color: var(--inverseNeutral)
  }
    .bgGrey{
      color: var(--greyText);

    }
.bgColor {
    background-color: var(--bg);
  }
  .lineWrapper{
    width: 180px;
    height: 3px;
    background: lightgray;
    margin: 0 auto;
  }
  .innerLine{
    width: 50px;
  background: var(--primary);
  height: 3px;
  margin: 0 auto;
  }
`}</style>

        </>
    )
}
