import { useState } from "react"

export const AddCategory=({onNewCategory})=>{

    const[inputValue,setInputValue]=useState('One Punch');    

    const onInputChange=({target})=>{
      setInputValue(target.value)
      
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        //Validamos no vacios
        if(inputValue.trim().length<=1) return;
        //setCategories(categories=> [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
   
    return (
        // <form onSubmit={(event)=>onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
        </form>)
}