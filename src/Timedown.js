import React, {setTimeout} from "react";
export default function countDown(sec){
  let id =setTimeout(()=>{
    countDown(sec-1)
  },1000);
  if(sec ===0){
    clearTimeout(id);
    document.write("หมดเวลา..");
  }else{
    document.write("sec")
  }
}