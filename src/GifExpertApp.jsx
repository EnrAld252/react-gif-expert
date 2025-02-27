import React, { useState } from "react";
import { AddCategory,GifGrid } from "./component";

export const GifExpertApp=()=>{
   const[categories,setCategories]=useState(['One Punch','Dragon Ball']); 

   const onAddCategory=(newCategory)=>{
   //Validamos si ya existe en el array el nuevo elemento
   if( categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);
   }       
   console.log(categories);
   return(
         <>
         {/* Titulo */}
         <h1>Gif ExpertApp</h1>
         {/* Input */}
         <AddCategory 
           //setCategories={ setCategories } 
           onNewCategory={(event)=>onAddCategory(event)}
         />
         {
            categories.map((category,i)=>(
                       <GifGrid 
                          key={category} 
                          category={category} />
                ))
            }

         </>
   )
}