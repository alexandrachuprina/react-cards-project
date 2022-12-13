import React from "react";
import Card from "./Card";

export default function Gallery() {
    return (
        <div className="gallery">
            <Card
                img='https://www.guyhepner.com/wp-content/uploads/2019/06/avedon-dovima.jpg'
                author='Richard Avedon'
                name='Dovima with Elephants'
                year='1955'
                location='The Art Institute of Chicago'
            />
            <Card
                img=''
                author=''
                name=''
                year=''
                location=''
            />
            <Card
                img=''
                author=''
                name=''
                year=''
                location=''
            />
        </div>
    )
}