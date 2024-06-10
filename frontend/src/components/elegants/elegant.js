import React from 'react'
import './elegant.css'
import bangle from '../../assets/bangle.png'
import neck from '../../assets/neck.png'
import anklets from '../../assets/anklets.png'
import bracelet from '../../assets/bracelet.png'
import earrings from '../../assets/earrings.png'
function Elegants() {
    return (
        <div className="eleganthead-section">
            <div>
                <div className="elegantnav">
                    <div><h1>Elegant jewellery</h1></div> 
                    <div className="elegantflex">
                        <div>
                            <img className="elegantimgh" src={bangle}></img>
                            <p>BANGLES</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={neck}></img>
                            <p>NECKLACE</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={anklets}></img>
                            <p>ANKLETS</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={bracelet}></img>
                            <p>BRACELETS</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={bracelet}></img>
                            <p>EARRINGS</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>       
    )
}
export default Elegants