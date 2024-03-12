import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import MyCarousel from "../components/MyCarousel";
export default function Home() {
  
  const[collection_Cat, setCollection_Cat]=useState([])
  const[collection_Items, setCollection_Items]=useState([])
  
  const loadData=async()=>{
    let response=await fetch("http://localhost:3000/api/foodData",{
      method:"POST",
      headers:{
        'content-type':'application.json'
      }
    });
    response=await response.json();
    setCollection_Items(response[0])
    setCollection_Cat(response[1])
    // console.log(response[0], response[1]);

  }
  
  useEffect(()=>{
    loadData()
  },[])
  
  
  
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><MyCarousel/></div>
      <div className="container">
      {
        collection_Cat !=[]?collection_Cat.map((data)=>{
          return
          (<div>hello</div>)
        }): <div>"""""""</div>
      }
      <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
