

import "./App.css"

export default function App(){
 
// declare a variable in array of object
 const arr=[
             {name : "rubynathan",
              pic : "https://www.heloplus.com/wp-content/uploads/2022/02/whatsapp-dp.jpg",
              location : "trichy"},
             {name : "santhanam",
             pic : "https://www.heloplus.com/wp-content/uploads/2022/02/beautiful-dp-for-whatsapp.jpg",
             location : "chennai"},
             {name : "john",
             pic : "https://www.heloplus.com/wp-content/uploads/2022/02/whatsapp-dp-images-hd.jpg",
             location : "madurai"}
           
           ]

  return (
    <div className="app">
      {/* assign map method for looping  */}
       {arr.map((call)=> ( <Ruby name={call.name} pic={call.pic} location={call.location} /> ))}
    </div>
  );

}

function Ruby({name,pic,location}){
return (
  <div  className="main">
    <p>hello <span className="sp">{name}</span> welcome to website❤️❤️🎉🎉</p>
    <img className="pic" src={pic} alt={name}/>
    <p>he is come from {location}</p>
  </div>
);
}