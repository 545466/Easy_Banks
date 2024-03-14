import React, { useState } from 'react'
import image from './Easy_bank_img1'
const Easy_bank_why = () => {
    const [rows, setrows] = useState(image)
  return (
    <>
      <div className="item">
        <h1>Why choose Easybank?</h1>
      <p className='why'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      <div className="row">
            {rows.map((row) =>(
                <div className="sub-row" key={row.id}>
                    <img src={row.img} alt="" />
                    <h1>{row.title}</h1>
                    <p>{row.text}</p>
                </div>
            ))}
      </div>
      </div>
    </>
  )
}

export default Easy_bank_why
