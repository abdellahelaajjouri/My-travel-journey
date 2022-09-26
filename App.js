import React from 'react';
import Navbare from './Navbare';
import Card from './Card.js';
import data from './data'

export default function App(){
    const cards = data.map(item  => { 
       return  ( <Card key={item.id} {...item} /> )
    })
    return (
        <>
            <Navbare/>
            <main className="container">
                {cards}
            </main>
            
        </>   
    )
}