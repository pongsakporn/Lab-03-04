import './App.css';
import WordCard from './WordCard';

const word = "Hello";


function App() {
  
    return (
      
      <div>
        <h2>"จงเขียนคำข้างล่างให้ถูกต้อง"</h2> 
            "คุณมีเวลา 10 secในการตอบ"
          <WordCard value = {word}/>
         

<p id="demo">  <h2>ต้องการคำใบ้ไหม</h2>.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = He_lo"'>คำใบ้</button>
          
  
      </div>
    );
   
} countDown(10);
function countDown(secs){
  
  let id =setTimeout(()=>{
    countDown(secs-1)
  },1000);
  
  if(secs ===0){
     clearTimeout(id);
    document.write("หมดเวลา..");
  }else{
     console.log('+secs+')
  }
   
}

export default App;
