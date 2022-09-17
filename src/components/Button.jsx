import React from 'react'

const Button = ({randomColor, getRandomAll}) => {
    const backgroundObj = {
        backgroundColor: randomColor
    }
  return (
    <button className='card__btn' style={backgroundObj} onClick={getRandomAll}>{`>`}</button>
  )
}

export default Button