import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs=(category)=>{
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getImages=async()=>{
    const newImages=await getGifs(category); 
    setImages(newImages);
    //Cuando termina de cargar
    setIsLoading(false);
    }

    useEffect(()=>{
        getImages();
    },[]); 

    return {
        images,
        isLoading
    }
}