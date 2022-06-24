import React from 'react'
import style from './modal.module.scss'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <input id="button" type="checkbox" />
      <label htmlFor="button">{children}</label>
      <div className={style['modal']}>
        <div className={style['content']}>Pure CSS Modal! No JS!</div>
      </div>
    </>
  )
}
