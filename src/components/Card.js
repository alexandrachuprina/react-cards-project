import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Photography" />
            <div className="card--descriprion">
                <ul>
                    <li>Author:{props.author}</li>
                    <li>{props.name}</li>
                    <li>Year:{props.year}</li>
                    <li>Location:{props.location}</li>
                </ul>
            </div>
        </div>
    )
}