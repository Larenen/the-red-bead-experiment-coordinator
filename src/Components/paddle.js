import "./css/paddle.css"
import React from 'react';
import whiteBead from '../white-bead.png';
import redBead from '../red-bead.png';
import emptyHole from '../empty-hole.png';

const items = 5 * 10;

export default function Paddle(props) {
    return(
        <div>
            <button className="button" disabled={!props.isEnabled} onClick={ () => {
                props.setBeads(updatePaddle());
                props.setStepPassed(true);
                } }>Losuj</button>
            <div className="container">
                {props.beads}
            </div>
        </div>
    )
}

export function initPaddle() {
    let beads = []

    for(let i = 0; i < items; i++) {
        beads.push(<img key={i} className="bead" alt="bead" src={emptyHole}/>)
    }

    return beads;
}

function updatePaddle() {
    let beads = []
    for(let i = 0; i < items; i++) {
        beads.push(<img key={i} className="bead" alt="bead" src={ whiteBead }/>)
    }

    for(let i = 0; i < 2; i++) {
        const randomBeadToChange = getRndInteger(0, items - 1);
        beads[randomBeadToChange] = <img key={i} className="bead" alt="bead" src={ redBead }/>
    }

    return beads;
}

export function shakePaddle(beadsArray) {
    let arrayCopy = [...beadsArray]
    const randomBeadToChange = getRndInteger(0, items - 1);
    const isRed = arrayCopy[randomBeadToChange].props.src.includes("media/red");
    arrayCopy[randomBeadToChange] = <img key={randomBeadToChange} className="bead" alt="bead" src={isRed ? whiteBead : redBead} />

    return arrayCopy;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
    
