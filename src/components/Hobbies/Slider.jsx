import React, { useState } from 'react';
import styles from "./Hobbies.module.css"
import slider1 from "../../assets/images/img1.jpg"
import slider2 from "../../assets/images/img2.jpg"
// import slider3 from "../../assets/images/img3.jpg"
import slider4 from "../../assets/images/img4.jpg"
// import slider5 from "../../assets/images/img5.jpg"
import slider6 from "../../assets/images/img6.jpg"
import slider7 from "../../assets/images/img7.jpg"
import slider8 from "../../assets/images/img8.jpg"
import slider9 from "../../assets/images/img9.jpg"

const images = [
    { id: 1, src: slider1 },
    { id: 2, src: slider2 },
    // { id: 3, src: slider3 },
    { id: 4, src: slider4 },
    // { id: 5, src: slider5 },
    { id: 6, src: slider6 },
    { id: 7, src: slider7 },
    { id: 8, src: slider8 },
    { id: 9, src: slider9 },
]

const Slider = () => {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <div className={styles.slider_container}>
                <div className={styles.slider_img} key={images.id}>
                    <img src={images[index].src} alt="photo" />
                </div>
                <div className={styles.slider_btn}>
                    <button disabled={index === 0} className={styles.prev_btn}
                        onClick={() => setIndex(index - 1)}>Попередня</button>
                    <button disabled={index === images.length - 1} className={styles.next_btn}
                        onClick={() => setIndex(index + 1)}>Наступна</button>
                </div>
            </div>
        </div>
    )
}

export default Slider;
