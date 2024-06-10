import React from 'react'
import './handbags.css'
import potlis from '../../assets/potlis.png'
import sling from '../../assets/sling.png'
import hand from '../../assets/hand.png'
import laptop from '../../assets/laptop.png'
import clutches from '../../assets/clutches.png'
function Handbags() {
    return (
        <div className="head-section">
            <div>
                <div className="nav">
                    <div><h1>Handbags</h1></div> 
                    <div className="flex">
                        <div>
                            <img className="imgh" src={potlis}></img>
                            <p>POTLIS</p>
                        </div>

                        <div>
                            <img className="imgh" src={sling}></img>
                            <p>SLING BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" src={hand}></img>
                            <p>TOTE BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" src={laptop}></img>
                            <p>SLEEVES</p>
                        </div>

                        <div>
                            <img className="imgh" src={clutches}></img>
                            <p>CLUTCHES</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>
    )
}
export default Handbags