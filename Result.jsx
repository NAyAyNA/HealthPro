import React from 'react';
import Percentage from './Percentage';
import diagram from './imgs/diagram.png';
import expecting from './imgs/expecting.png';
import blur from './imgs/blur.png';


export default function Result() {
  return (
    <section className="result-homepage">
        <div className="address">
            <p>Home</p>
            <p>/</p>
            <p>IVF Success Rate Calculator</p>
            <p>/</p>
            <p className="add1">Result</p></div>
        <div className="calcular-m-title"><span className="arrow">&#8592;</span>IVF Success Rate Calculator</div>
        <div className="result-fulltitle">
          <img className="diagram" src={diagram} />
          <p className="result-title">Your estimated IVF Success Rate is</p>
        </div>
        <Percentage />
        <p className="result-caption">With 1 IVF Cycle</p>
        <img className="result-img" src={expecting} />
        <img className="blur" src={blur} />
        <button className="btn result-m-btn">Start private consultation &#8594;</button>
    </section>
    )  
    };