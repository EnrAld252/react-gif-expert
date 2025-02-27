export const getGifs=async(category)=>{
    //Url del api donde mandamos categoria escrita
    const url=`https://api.giphy.com/v1/gifs/search?api_key=mwscRBdinjEtWhTsEc4NmRgiSRHyKYf2&q=${category}&limit=10`;
    //Obtenemos información
    const resp= await fetch(url);
    //Extraemos la data
    const {data}=await resp.json();
    //Hacemos un map para armar el arreglo de solo los datos que queremos
    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    return gifs;
}