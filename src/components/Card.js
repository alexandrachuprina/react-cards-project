import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.img} alt="Photography" />
            <ul className="card--info">
                <li className="card--name">{props.name}</li>
                <li>Author: {props.author}</li>
                <li>Year: {props.year}</li>
            </ul>
        </div>
    )
}