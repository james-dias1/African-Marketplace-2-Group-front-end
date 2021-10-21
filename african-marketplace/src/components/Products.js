import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

import axiosWithAuth from '../Helpers/AxiosWithAuth';
import data from '../data'
import '../CSS/Products.css'

// function fetchStock() {
//   // fetchStock simulates getting data through axios.get(<URL>)
//   return Promise.resolve({ success: true, data })
// }


export default function Products(props) {
    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;
    let count = 1;

  useEffect(() => {
    axiosWithAuth().get('https://lbs-african-marketplace.herokuapp.com/items')
      .then(resp => {
        console.log(resp);
        setItems(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
    // fetchStock().then(res => setItems(res.data))
  }, [])
  console.log("App stock = ", items)

  if (!items) return <h2>Oh no not fount..</h2>;
  return (
    <>
                {/* <h1>products-list</h1> */}
        <div className='container'>
        {items.map(item => (
            <div className={'item-card' }  key={item.id}>
                <div className={'bg-img order'+ (((item.id+1)*2-1)+(item.id%2*(1)))%2 }>
                    {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
                    <Link to={`${url}/${item.id}`}>
                    <img
                        className='items-list-image'
                        src={item.URL}
                        alt={item.name}
                    />
                    {/* <p>{item.name}</p> */}
                    </Link>
                    {/* Link ends */}
        
                    {/* <p>${item.price}</p> */}
                </div>
                {/* {(count++)} */}
                <div className={'text order'+ (((item.id+1)*2)+(item.id%2*(-1)) )%2  }>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.location}</p>
                    <p>${item.price}</p>
                </div>


            </div>



        ))}
      </div>
    </>
  )
}
