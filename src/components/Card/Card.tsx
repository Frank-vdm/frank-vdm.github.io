import style from './card.module.scss'

export const Card = () => {
  return (
    <div className={style['card']}>
      <h3 className={style['title']}>Card 1</h3>
      <div className={style['bar']}>
        <div className={style['emptybar']}></div>
        <div className={style['filledbar']}></div>
      </div>
      <div className={style['circle']}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className={style['stroke']} cx="60" cy="60" r="50" />
        </svg>
      </div>
    </div>
  )
}
