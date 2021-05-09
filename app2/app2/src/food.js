function Food(props) {

   const removeFood = () => {
      var newArr=[...props.foodList];//...props.foodList.splice(0, props.index),
          //...props.foodList.splice(props.index+1)];
      if(props.index==0)
         newArr=[...newArr.splice(1)]
      else
         newArr.splice(props.index, props.index);
      props.setFoodList(newArr);
   }

      return <div>{props.name}<br/>
         <button onClick={removeFood}>Remove me</button>
         </div>
}

export default Food