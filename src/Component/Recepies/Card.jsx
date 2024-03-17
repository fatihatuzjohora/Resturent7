const Card = ({data,handleClick,cook,handlePreparing,preparing}) => {
    const totalTime = preparing.reduce((pre, current)=>pre + +current.preparing_time ,0)
    const cal = preparing.reduce((pre, current)=>pre + +current.calories ,0)
  return (
    <div>
      <div className="flex justify-between gap-7 items-start">
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between  gap-7">
       {
        data.map((item, index)=>{
            const {recipe_id,recipe_name,recipe_image, short_description,ingredients,preparing_time,calories}=item;
            const newIngredients =[...ingredients]
            return(
                <div key={index} className="card  shadow-xl border border-[#28282833] mt-5 p-5">
                <figure className="w-full max-h-[220px] rounded-2xl">
                  <img className="rounded-2xl w-full "
                    src={recipe_image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-semibold text-black ">
                    {recipe_name}
                  </h2>
                  <p className="text-[#878787] mt-3 border-b border-[#28282833] pb-5">
                    {short_description}
                  </p>
    
                  <div className="mt-3 border-b border-[#28282833] pb-5 ">
                    <h2 className="text-black text-xl font-semibold">
                      Ingredients: <span>{ingredients.length}</span>
                    </h2>
                    <ul className="text-[#282828]">
                      {
                        newIngredients.splice(0,3).map((item, idx)=><li className="list-disc" key={idx}>{item}</li>)
                      }
                    </ul>
                  </div>
    
                  <div>
                    <div className="flex justify-between items-center text-[#282828CC] mt-3">
                      <h2>
                        <span></span> <span>{preparing_time} minutes</span>
                      </h2>
                      <h2>
                        <span></span> <span>{calories} calories</span>
                      </h2>
                    </div>
                    <button onClick={()=>handleClick(item)} className="btn bg-[#0BE58A] text-black font-semibold rounded-3xl text-xl mt-5">
                      {" "}
                      Want to Cook
                    </button>
                  </div>
                </div>
              </div>
            )
        })
       }
        </div>

        <div className="card shadow-xl border border-[#28282833] mt-5 p-5">
          <div>
            <h1 className="text-2xl text-center text-black font-semibold border-b border-[#28282833] pb-5">
              Want to cook: <span className="">{cook.length}</span>
            </h1>
            <div className="text-[#878787] font-semibold text-xl flex justify-between items-center mt-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>

          {
            cook.map((item, index)=>{
                const {recipe_id,recipe_name,recipe_image, short_description,ingredients,preparing_time,calories}=item;
                return(
                    <div key={index} className="shadow-md rounded-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 ">
                    <p className="text-[#282828CC] font-semibold">{index+1}</p>
                    <p className="text-[#282828B3] font-semibold ">
                      {recipe_name}
                    </p>
                    <p className="text-[#282828B3] font-semibold ">{preparing_time}</p>
                    <p className="text-[#282828B3] font-semibold ">{calories}</p>
                    <button onClick={()=>handlePreparing(item)} className="btn text-[#150B2B] bg-[#0BE58A] text-xl rounded-3xl">
                      Preparing
                    </button>
                  </div>
                )
            })
          }
          </div>

          <div className="">
            <h1 className="text-2xl text-center text-black font-semibold border-b border-[#28282833] pb-5 mt-4">
              Currently cooking: <span>{preparing.length}</span>
            </h1>
            <div className="text-[#878787] font-semibold text-xl flex justify-between items-center mt-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
{
preparing.map((item, index)=>{
    const {recipe_id,recipe_name,recipe_image, short_description,ingredients,preparing_time,calories}=item;
    return(
        <div key={index} className="shadow-md round-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 ">
        <p className="text-[#282828CC] font-semibold">{index+1}</p>
        <p className="text-[#282828B3] font-semibold ">
          {recipe_name}
        </p>
        <p className="text-[#282828B3] font-semibold ">{preparing_time}</p>
        <p className="text-[#282828B3] font-semibold ">{calories}</p>
      </div>
    )
})
}
            
<div className=" font-semibold shadow-md round-md mt-3 p-2">
<h1> Total Calories= {cal} Calories</h1>
<h1>Total Time= {totalTime} Minites</h1>
</div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
