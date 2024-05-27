import { FC } from 'react';
import styles from './Card.module.scss'
import { TCourse } from '../../types/types';

export const Card: FC<TCourse> = (course) => {

const {
  name,
  id,
  image,
  bgColor,
} = course;

  return (
    <div key={id} className={styles.container}>
      <div className={styles.imgWrapper} style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name}/>
      </div>
      <h3>{name}</h3>
    </div>
  )
}