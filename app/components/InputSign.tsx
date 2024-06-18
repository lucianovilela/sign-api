"use client";
import React, {useState} from 'react';
import  Sign  from './Sign'
export default function Widget() {
  const [ person, setPerson ] = useState<any>(undefined);
  const [ personName, setPersonName ] = useState<string>();
  
  const handleSubmit =  (() => {
    fetch(`/api/sign?name=${personName}`)
    .then(response => response.json())
    .then(response=>setPerson(response))
    .catch((error)=>alert(error))
  });

  return (
    <>

      <div className="container mx-auto p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Search for Zodiac Sign</h2>
        <input type="text" placeholder="Enter person's name" className="w-full p-2 rounded-lg border" 
        onChange={(event)=>setPersonName(event.target.value)}/>
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-2"
        onClick={handleSubmit}>Search</button>
        {person && <Sign person={person}/>}
        
      </div>

    </>

  )
}