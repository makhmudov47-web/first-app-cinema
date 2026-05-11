import React,{useState} from 'react';
import"../../styles/FooterStyle/Footer.css"

const  Footer = () => {
 const [testBox, setTestBox] = useState(false);

 return (
      <div className='footer'>
        <input
        type='text'
        onChange={(e)=> setTestBox(e.target.value)}
        />

        <p>{testBox}</p>


      </div>
    )

}

export default Footer;
