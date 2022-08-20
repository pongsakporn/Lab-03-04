
 function countDown(sec){
  
  let id =setTimeout(()=>{
    countDown(sec-1)
  },1000);
  
  if(sec ===0){
     clearTimeout(id);
     console.log("หมดเวลา..");
  }else{
     console.log('sec')
  }
   
}