import React from 'react'
import styles from './Tests.module.css'
import Img from '../../assets/imgs/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'

function Tests() {
  return (
    <div className={styles.testElement}>
        <img src={Img} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, laudantium reprehenderit ipsa dolor consequatur ipsum obcaecati illum sed ea quam neque eveniet blanditiis omnis, eius tenetur nostrum expedita facilis.
        Ad consequuntur repudiandae fugit deleniti aliquid asperiores magni mollitia id esse enim vel illum eveniet doloribus expedita accusamus dolorem rerum, minima error veniam tenetur nam amet. Minima pariatur qui inventore.</p>
    </div>
  )
}

export default Tests