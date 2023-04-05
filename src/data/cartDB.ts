
export const cartDB = (key:string) => {
    let dataJSON:string | null = localStorage.getItem(key);
    
    let data = dataJSON !== null ? JSON.parse(dataJSON) : [];
    console.log(data)
    return data
   
}