import React, { useState, useEffect } from "react"
import axios from "axios"
import "./detail.scss"

function Details(props) {
  const [data, setData] = useState({ character: [] })
  useEffect(() => {
    const url=props.url
    axios
      .get(url)
      .then(res => {setData({ character: res.data[0] })
    })
  })

  return (
    <>
      <div className="detailpage row">

        <div className="detail-img-row">
          <div className="detail-details-row">
            <h1>{data.character.name}</h1>
            <div className="detail-img-wrap">
              <img
                src={data.character.img}
                alt={data.character.name}
                className="detailpic"
              />
            </div>
            <div className="det-card" data-aos="fade-up">
              <h3>Status</h3>
              <p>{data.character.status}</p>
            </div>{" "}
            <div className="det-card" data-aos="fade-up">
              <h3>Date of Birth</h3>
              <p>{data.character.birthday}</p>
            </div>
            <div className="det-card" data-aos="fade-up">
              <h3>Nickname</h3>
              <p>{data.character.nickname}</p>
            </div>
            <div className="det-card" data-aos="fade-up">
              <h3>Appearance</h3>
              <p>{data.character.appearance}</p>
            </div>
            <div className="det-card" data-aos="fade-up">
              <h3>Portrayed by</h3>
              <p>{data.character.portrayed}</p>
            </div>
            <div className="det-card" data-aos="fade-up">
              <h3>Category</h3>
              <p>{data.character.category}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
