import styles from './HomePage.module.scss'

import { Card } from "../components/Card/Card"
import { SideBar } from "../components/SideBar/SideBar"
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchData, selectCategory, setCategory } from '../store/slices/categorySlice'
import { TCourse } from '../types/types'
import React, { FC, useCallback, useEffect, useState } from 'react'
// import { BASE_URL } from '../api/url'
// import { useGetCoursesWithParamsQuery } from "../store/slices/api/apiSlice"

export const HomePage:FC = () => {
  
  const dispatch = useAppDispatch();

  const { 
    // categoryName, 
    categoryIndex, 
    courses, 
    isLoading 
  }  = useAppSelector(selectCategory);

  const [ activeIndex, setActiveIndex ] = useState(categoryIndex);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  const handlePickCategory = useCallback((index: number) => {
    setActiveIndex(index);
    dispatch(setCategory(index));
  }, [dispatch, setActiveIndex])

  // реализация запроса с помощью RTK Query
  // const { data: courses, isLoading } = useGetCoursesWithParamsQuery(categoryName);

  if (isLoading) {
    return <h1>Loading...</h1> 
  }

  const MemoCard = React.memo(Card);
  const MemoSideBar = React.memo(SideBar);

  return (
    <main className={styles.page}>
      <MemoSideBar activeIndex={activeIndex} handlePickCategory={handlePickCategory}/>
      <section className={styles.list}>
        { courses && courses.map((c:TCourse) => <MemoCard key={c.id} {...c} />) }
      </section>
    </main>
  )
}