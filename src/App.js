import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  countDown(60);
    return (
      
      <div>
        
        
          <WordCard value = {'Hello'}/>
          
  
      </div>
    );
}
function countDown(secs){
  
  let id =setTimeout(()=>{
    countDown(secs-1)
  },1000);
  
  if(secs ===0){
     clearTimeout(id);
     console.log("หมดเวลา..");
  }else{
     console.log('+secs+')
  }
   
}

export default App;
