function Food(props) {

   const removeFood = () => {
      var newArr=[...props.foodList];//...props.foodList.splice(0, props.index),
          //...props.foodList.splice(props.index+1)];
      if(props.index===0)
         newArr=[...newArr.splice(1)]
      else
         newArr.splice(props.index, props.index);
      props.setFoodList(newArr);

      if(props.isSingleView &&(props.singleIndex===newArr.length))
         props.setSingleIndex(0)
   }

   const nextFood = () => {
      props.setSingleIndex((props.singleIndex+1)%props.foodList.length)
   }
   
   return ( !props.isSingleView ? (
      <div>{props.name}<br/>
      <button onClick={removeFood}>Remove me</button>
      </div>) : (
         props.singleIndex===props.index && (
            <div>{props.foodList[props.index]}<br/>
            <button onClick={removeFood}>Remove me</button>
            <button onClick={nextFood}>Next Item</button>
            </div>
         )
      )
   )
}

export default Food