import './index.css'
import React from 'react'
import moment from 'moment'

const resetForm = (event) => {
  document.querySelector('.rb-container').remove()
  document.querySelector('form').reset()
  event.preventDefault();
}

const TimeLine = (data) => {

  const [newData] = Object.values(data)
  console.log(newData, 'data')
  const owner = newData[0].owner
  return (
    <>
      <section className='rb-container'>
        <button onClick={resetForm} className='close'> Go back</button>
        {
          owner ?
            <div className='user'>
              <h2>Hi, {owner.login} !</h2>
              <h3>
                That s all your work on github, good job!
              </h3>
            </div> : ''
        }
        <ul className='rb'>
          {newData.map((item, index) => {
            return (
              <li key={index} className='rb-item'>
                <div className='timestamp'>{moment(item.created_at).format('DD/MM/YYYY')} </div>
                <div className='item-title'>
                  <h2>{item.name}</h2>
                  <p>
                    {!item.description ? '' : item.description}
                    <a href={item.html_url}>repository link</a>
                  </p>
                  <p>most used language: <strong>{item.language} </strong> </p>
                </div>
              </li>
            )
          })}
        </ul>
      </section >
    </>
  )
}

export default TimeLine;
