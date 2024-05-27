import { FC } from 'react';
import { categories } from '../../constants/constants'
import styles from './SideBar.module.scss'

interface ISideBar {
  activeIndex: number;
  handlePickCategory: (index: number) => void;
}

export const SideBar:FC<ISideBar> = ({ activeIndex, handlePickCategory }) => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.list}>
        {categories.map((category, i) => {
          return <li  key={i} 
                      className={activeIndex === i ? `${styles.active}` : ''}
                      onClick={() => handlePickCategory(i)}
                      >{category}</li>
        })}
      </ul>
    </aside>
  )
}