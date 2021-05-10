
import './App.css';
import { useState } from 'react';
import Food from './food'
import Food2 from './Food2'

function App(props) {
  const [foodList, setFoodList] = useState(["Pizza", "Burger", "Pasta"]);
  const [inputFood, setInputFood] = useState("");
  const [viewMode, setViewMode] = useState("Single View");
  const [isSingleView, setIsSingleView] = useState(true);
  const [singleIndex, setSingleIndex] = useState(0);

  const addFood = () => {
    setFoodList([...foodList, inputFood]);
    setInputFood("");
  }

  console.log("0th="+foodList[0]+ " singleIndex="+singleIndex)
  /*Im like 90% sure that this isn't the best way to do this,
    but I can't figure out how to get a different way to work */
  if(foodList.length==0)
  {
    return (
      <div className="App">
      <header className="App-header">
      <div className="viewButton">
      <button onClick={()=>{setViewMode(viewMode=="Single View" ? "View All" : "Single View")}}>
          {viewMode}</button>
      </div>
      New Food:
      <input type="text" onChange={(event)=>{setInputFood(event.target.value)}} value={inputFood}/>
      <button onClick={addFood}>Submit</button>
      List is empty
      </header>
      </div>
    );
  }
  else if(viewMode == "Single View")
  {
    return (
      <div className="App">
      <header className="App-header">
      <div className="viewButton">
      <button onClick={()=>{setViewMode(viewMode=="Single View" ? "View All" : "Single View")}}>
          {viewMode}</button>
      </div>
      New Food:
      <input type="text" onChange={(event)=>{setInputFood(event.target.value)}} value={inputFood}/>
      <button onClick={addFood}>Submit</button>
      {
        foodList.map((value, index)=>{return <Food 
          name={value} 
          foodList={foodList} 
          setFoodList={setFoodList} 
          index={index}>
          </Food>})
      }
      </header>
      </div>
    );
  }
  else
  {
    console.log("length=" + foodList.length)
    return (
      <div className="App">
      <header className="App-header">
      <div className="viewButton">
      <button onClick={()=>{setViewMode(viewMode=="Single View" ? "View All" : "Single View")}}>
          {viewMode}</button>
      </div>
      New Food:
      <input type="text" onChange={(event)=>{setInputFood(event.target.value)}} value={inputFood}/>
      <button onClick={addFood}>Submit</button>
      {
          foodList.map((value, index)=>{return <Food2
            name={value} 
            foodList={foodList}
            index={index}
            singleIndex={singleIndex}
            setSingleIndex={setSingleIndex} 
            setFoodList={setFoodList}>
          </Food2>})
      }
      </header>
      </div>
    );
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
}

export default App;
