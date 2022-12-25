import React, { useEffect, useState } from "react";

export default function useGetGifs(){
  const getGifs = async (setGifs:React.Dispatch<React.SetStateAction<any>>) => {
    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=K0HfojbJv1WeLYl3jMvi7TjXkeSBrydd&limit=25&rating=g');
    const data = await response.json();
    console.log(data.data)
    setGifs(data.data)
  }

  const [gifs, setGifs] = useState<any>([]);  

  useEffect(()=>{
    getGifs(setGifs);
  },[])
    
  return {gifs, setGifs};  
}