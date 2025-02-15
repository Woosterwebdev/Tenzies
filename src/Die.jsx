import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#FF0000" : "white"
    }
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <img className="die-num" src={`/assets/${props.value}.png`} />
        </div>
    )
}
