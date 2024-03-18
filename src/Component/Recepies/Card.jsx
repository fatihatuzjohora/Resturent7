/* eslint-disable react/prop-types */
import { IoMdTime } from "react-icons/io";
import { SlFire } from "react-icons/sl";

const Card = ({ data, handleClick, cook, handlePreparing, preparing }) => {
  const totalTime = preparing.reduce(
    (pre, current) => pre + +current.preparing_time,
    0
  );
  const cal = preparing.reduce((pre, current) => pre + +current.calories, 0);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-7 items-start">
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between  gap-7">
          {data.map((item, index) => {
            const {
              recipe_id,
              recipe_name,
              recipe_image,
              short_description,
              ingredients,
              preparing_time,
              calories,
            } = item;
            const newIngredients = [...ingredients];
            return (
              <div
                key={index}
                className="card  shadow-xl border border-[#28282833] mt-5 p-5"
              >
                <figure className="w-full max-h-[220px] rounded-2xl">
                  <img
                    className="rounded-2xl w-full "
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
                    <ul className="text-[#282828] mt-3 ml-7">
                      {newIngredients.splice(0, 3).map((item, idx) => (
                        <li className="list-disc" key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[#282828CC] mt-3">
                      <h2 className="flex items-center gap-2">
                        <IoMdTime /> <span>{preparing_time} Minutes</span>
                      </h2>
                      <h2 className="flex items-center gap-2">
                        <SlFire /> <span>{calories} Calories</span>
                      </h2>
                    </div>
                    <button
                      onClick={() => handleClick(item)}
                      className="btn bg-[#0BE58A] text-black font-semibold rounded-3xl text-xl mt-5"
                    >
                      {" "}
                      Want to Cook
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card shadow-xl border border-[#28282833] mt-5 md:p-5">
          <div>
            <h1 className="text-2xl text-center text-black font-semibold pb-5 border-b border-[#28282833]">
              Want to cook: <span className="">{cook.length}</span>
            </h1>
            {/* <div className="text-[#878787] font-semibold text-xl flex justify-between items-center mt-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div> */}

            <div className="overflow-x-auto rounded-md">
              <table className="table border border-none bg-white">
                <thead>
                  <tr className="text-[#878787] text-center font-semibold text-xl mt-5">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cook.map((item, index) => {
                    const {
                      recipe_id,
                      recipe_name,
                      recipe_image,
                      short_description,
                      ingredients,
                      preparing_time,
                      calories,
                    } = item;
                    return (
                      //     <div
                      //       key={index}
                      //       className="shadow-md rounded-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 "
                      //     >
                      //       <p className="text-[#282828CC] font-semibold">{index + 1}</p>
                      //       <p className="text-[#282828B3] font-semibold ">
                      //         {recipe_name}
                      //       </p>
                      //       <p className="text-[#282828B3] font-semibold ">
                      //         <span>{preparing_time} Minutes</span>
                      //       </p>
                      //       <p className="text-[#282828B3] font-semibold">
                      //         <span>{calories} Calories</span>
                      //       </p>
                      //       <button
                      //         onClick={() => handlePreparing(item)}
                      //         className="btn text-[#150B2B] bg-[#0BE58A] text-xl rounded-3xl"
                      //       >
                      //         Preparing
                      //       </button>
                      //     </div>

                      <tr
                        key={index}
                        className="shadow-md text-[15px] text-[#878787] font-semibold round-md mt-5 bg-[#28282808] p-2 justify-between items-center text-center gap-5"
                      >
                        <td>{index + 1}</td>
                        <td>{recipe_name}</td>
                        <td>
                          <span className="flex gap-1"><span>{preparing_time}</span> <span>Minutes</span> </span> 
                        </td>
                        <td>
                          <span className="flex gap-1"><span >{calories}</span> <span>Calories</span></span>
                        </td>
                        <td>
                          <button
                            onClick={() => handlePreparing(item)}
                            className="btn text-[#150B2B] bg-[#0BE58A] text-xl rounded-3xl"
                          >
                            Preparing
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl text-center text-black font-semibold border-b border-[#28282833] pb-5 mt-4">
              Currently cooking: <span>{preparing.length}</span>
            </h1>

            <div className="overflow-x-auto rounded-md">
              <table className="table border border-none bg-white">
                <thead>
                  <tr className="text-[#878787] font-semibold text-xl mt-5">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {preparing.map((item, index) => {
                    const {
                      recipe_id,
                      recipe_name,
                      recipe_image,
                      short_description,
                      ingredients,
                      preparing_time,
                      calories,
                    } = item;
                    return (
                      <tr
                        key={index}
                        className="shadow-md text-[15px] text-[#878787] font-semibold round-md mt-5 bg-[#28282808] p-2 justify-between items-center text-center gap-5"
                      >
                        <td>{index + 1}</td>
                        <td>{recipe_name}</td>
                        <td>
                          <span className="flex gap-1 text-right"><span>{preparing_time}</span> <span>Minutes</span> </span> 
                        </td>
                        <td>
                          <span className="flex gap-1 text-righ"><span >{calories}</span> <span>Calories</span></span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className=" font-semibold shadow-md text-[#282828CC] text-[15px] round-md mt-5 p-2">
                    <td colSpan="3" className="text-right">
                      Total Time: {totalTime} Minites
                    </td>
                    <td>Total Calories: {cal} Calories</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
