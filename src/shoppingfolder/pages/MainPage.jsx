import React,{useState} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import WomanCollection from '../components/WomanCollection';

import{Gents,Ladies} from '../data';
const MainPage = () => {
     const[gentsFashion, setgentsFashion] = useState(Gents)
     const[ladiesFashion, setladiesFashion] = useState(Ladies)

     console.log(Ladies);
  
  
  return (
    <div>
         <Header/>
         <Banner/>
         <Collections gentsFashion={gentsFashion}/>
         <WomanCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage