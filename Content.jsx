import React from 'react'
import Card from './Card'
import './Blog.css';
const Content = () => {
  const cities=[
    {
        id:1,
        ul:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqS8ezE3uckFG6KQc4brIGnb4T7d6vZr7QQL2-eZ0CjA&s",
        name:" FIGHT CLUB ",
        pi:"Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. S…"
        
      },
      {
        id:2,
        ul:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZtGiDYhGIUI4qlJsVnx1zS55hZVdYXYdWOshoeV7KQ&s",
       name:"OPPENHEIMER",
       pi:"During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a …"

},
    {
        id:3,
        ul:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/12/IMG_2359.jpeg",
        name:"THE WOLF OF WALLSTREET",
        pi:"Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff,…"
        
      },
      {
        id:3,
        ul:"https://www.digitaltrends.com/wp-content/uploads/2023/11/Avengers-featured.jpg?resize=1200%2C630&p=1",
        name:"AVENGERS",
        pi:"S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki.…"
        
      },
      {
        id:3,
        ul:"https://silverscreenindia.com/wp-content/uploads/2014/09/kaththi-teaser-900x506.jpg",
        name:"KATHTHI",
        pi:"Kathiresan, who escapes from prison, accidentally meets his lookalike, Jeeva, who gets shot by criminals. Kathiresan masquerades as Jeeva in …"
        
      },
      {
        id:4,
        ul:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpEh3Piv0wQhx9U0DVDK98jrTsBcynfizJO_desgX9w&s",
       name:"iNDRU NETRU NAALAI",
       pi:"When Elango and Pulivetti find a time machine, they decide to use it for their benefit. While meddling with time, they prevent a gangster's death and this lands them in trouble.…"

},
    {
        id:4,
        ul:"https://assets-in.bmscdn.com/discovery-catalog/events/et00053838-pxzqblapdk-landscape.jpg",
       name:"VIKRAM VEDHA",
       pi:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders,…"

},
    {
        id:4,
        ul:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0D2oTWWKSd4P3kECHzQa-OAp4eQWS2y_2A&s",
       name:"PADAYAPPA",
       pi:"Padayappa's family is humiliated by an uncle and forced to leave their home. After working hard, Padayappa restores his family's honour,..."

}
    
   
]

  return (
    <div className='all'>
    
    < div className='car1'>
    {cities.map((c)=>(
      <Card ul={c.ul} name={c.name} pi={c.pi}/>
    ))}
    </div></div>
  )
}

export default Content