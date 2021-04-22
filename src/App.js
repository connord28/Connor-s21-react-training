import logo from './logo.svg';
import './App.css';

function Foods(props) {
  const [number, setNumber] = useState(0);
  const [itemNum, setItemNum] = useState(1);
  var message = [];
  for(var i = 0; i < itemNum; i++)
  {
    message = [...message, <div>{props.name} 
    <br/> 
    {number} Likes 
    <br/> 
    <button onClick={()=>setNumber(number+1)}>Like</button> 
    <br/> 
    <button onClick={()=>setItemNum(itemNum+1)}>duplicate</button> 
    <br/> 
    <button onClick={()=>setItemNum(itemNum-1)}>remove</button> 
    </div>];
    console.log(message);
  }
  return message;
}

function App() {
  const foods = {
    "Pizza": 0,
    "Burrito": 0,
    "Burger": 0
  }
  return (
    <div className="App">
    <header className="App-header">
    {
      Object.entries(foods).map(([key, _]) => <Foods name={key}/>)
    }
    </header>
    </div>
  );
}

export default App;
