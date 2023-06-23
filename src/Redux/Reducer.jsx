const initialdata = {
    Wholedata:null
}

export let Reducer=(Storedata=initialdata,action)=>{
 if(action.type=="APIDATA"){
    return{
        ...Storedata,
        Wholedata : action.payload
    }
 }
 return Storedata
}



  
  