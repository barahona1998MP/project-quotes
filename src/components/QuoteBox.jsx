import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, getRandomAll, randomColor}) => {

    const objStyle = {
        color: randomColor
    }
  return (
    <article style={objStyle} className='card'>
        <div className='card__content-quote'>
            <i className="fa-solid fa-quote-left card__icon"></i>
            <p  className='card__quote'>{randomQuote.quote}</p>
        </div>
        <div className='card__content'>
            <h3 className='card__author'>{randomQuote.author}</h3>
            <Button 
                randomColor={randomColor}
                getRandomAll={getRandomAll}
            />
        </div>
    </article>
  )
}

export default QuoteBox