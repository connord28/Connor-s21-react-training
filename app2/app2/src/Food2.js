function Food2(props) {
   const removeFood = () => {
      /*console.log(props.singleIndex + "    " + props.index)
      const newArr=[...props.foodList.splice(0, props.index),
          ...props.foodList.splice(props.index+1)];*/
      var newArr=[...props.foodList];
      if(props.index==0)
         newArr=[...newArr.splice(1)]
      else
         newArr.splice(props.index, props.index);
      props.setFoodList(newArr);
      if((props.singleIndex==newArr.length))
         props.setSingleIndex(0)
   }

   const nextFood = () => {
      props.setSingleIndex((props.singleIndex+1)%props.foodList.length)
   }
   if(props.singleIndex==props.index)
   {
      return <div>{props.foodList[props.index]}<br/>
         <button onClick={removeFood}>Remove me</button>
         <button onClick={nextFood}>Next Item</button>
         </div>
   }
   else return null
}

export default Food2