import React from 'react'

const Card = ({post}) => {
  return (

    <div className='card'>
      <span className="title">{post.title}</span>  
      <img src={post.img} alt="" className='img' />
      <p className='description'>{post.desc}</p>
      <button className='cardBtn'>Read More</button>
    </div>
  )
}

export default Card
