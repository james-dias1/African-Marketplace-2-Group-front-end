import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

import data from '../data'
import '../CSS/Products.css'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}


export default function Products(props) {
    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;

  useEffect(() => {
    fetchStock().then(res => setItems(res.data))
  }, [])
  console.log("App stock = ", items)

  if (!items) return <h2>Oh no not fount..</h2>;
  return (
    <>
                {/* <h1>products-list</h1> */}
        <div className='container'>
        {items.map(item => (
            <div className='item-card' key={item.id}>
                <div className='bg-img'>
                    {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
                    <Link to={`${url}/${item.id}`}>
                    <img
                        className='items-list-image'
                        src="https://picsum.photos/360"
                        alt={item.name}
                    />
                    {/* <p>{item.name}</p> */}
                    </Link>
                    {/* Link ends */}
        
                    {/* <p>${item.price}</p> */}
                </div>
                <div className='text'>
                    <h2>{item.name}</h2>
                    <p>{item.instructions}</p>
                    <p>{item.location}</p>
                </div>


            </div>



        ))}
      </div>
    </>
  )
}
