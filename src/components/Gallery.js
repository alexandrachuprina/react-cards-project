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
                img='https://karsh.org/wordpress/wp-content/uploads/2016/10/Yousuf-Karsh-Winston-Churchill-1941-1557x1960.jpg'
                author='Yousuf Karsh'
                name='Winston Churchill'
                year='1941'
            />
            <Card
                img='https://www.moma.org/media/W1siZiIsIjE5MDQ4MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=9ffb549956e47173'
                author='Arnold Newman'
                name='Igor Stravinsky'
                year='1946'
            />
        </div>
    )
}