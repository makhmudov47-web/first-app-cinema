import React,{useState} from 'react';
import"../../styles/FooterStyle/Footer.css"
import {setModalBox} from "../../store/modalBoxSlice";

const  Footer = () => {
 const [testBox, setTestBox] = useState(false);

 function addMovie () {

     const data = {
         title:'mortal kombat',
         description:'good movie is recomended',
         releaseYear:'2021',
         genres:'thirls',
         rating:5.6,
         posterURL:'movie3.png'
     }

     const api = 'http://localhost:9999/api/movies';
     fetch(api,{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     })
         .then(result => result.json())
         .then((result) => {
             if (result && result.message){
                 alert(result.message)
                 console.log(result.message);
             }
         })

 }

 return (
      <div className='footer'>
          <button onClick={addMovie}>
              add movie
          </button>


      </div>
    )

}

export default Footer;
