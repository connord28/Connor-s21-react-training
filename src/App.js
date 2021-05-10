import './App.css';
import { useState } from 'react';
import Food from './Food'

function App(props) {
  const [foodList, setFoodList] = useState(["Pizza", "Burger", "Pasta"]);
  const [inputFood, setInputFood] = useState("");
  const [isSingleView, setIsSingleView] = useState(false);
  const [singleIndex, setSingleIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setInputFood("");
  }

  return (
    <div className="App">
    <header className="App-header">
    <div className="viewButton">
    <button onClick={()=>{setIsSingleView(!isSingleView)}}>
        {isSingleView===true ? "View All" : "Single View"}</button>
    </div>
    New Food:
    <input type="text" onChange={(event)=>{setInputFood(event.target.value)}} value={inputFood}/>
    <button onClick={addFood}>Submit</button>
    {
      foodList.length === 0 && <div>List is Empty</div>
    }
    {
      foodList.length !== 0 && (
        isSingleView===true ? (
          foodList.map((value, index)=>{return <Food
            name={value}
            key={index} 
            foodList={foodList}
            index={index}
            singleIndex={singleIndex}
            setSingleIndex={setSingleIndex} 
            setFoodList={setFoodList}
            isSingleView={isSingleView}>
          </Food>})
        ) : (
          foodList.map((value, index)=>{return <Food 
            name={value} 
            foodList={foodList}
            key={index}
            setFoodList={setFoodList} 
            index={index}
            isSingleView={isSingleView}>
            </Food>})
        )
      )
    }
    </header>
    </div>
  );
}


export default App;
