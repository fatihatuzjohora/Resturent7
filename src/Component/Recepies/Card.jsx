const Card = () => {
  return (
    <div>
      <div className="flex justify-between gap-7">
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between gap-7">
          <div className="card  shadow-xl border border-[#28282833] mt-5 p-5">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold text-black ">
                Spaghetti Bolognese
              </h2>
              <p className="text-[#878787] mt-3 border-b border-[#28282833] pb-5">
                Classic Italian pasta dish with savory meat sauce.
              </p>

              <div className="mt-3 border-b border-[#28282833] pb-5 ">
                <h2 className="text-black text-xl font-semibold">
                  Ingredients: <span>6</span>
                </h2>
                <ul className="text-[#282828]">
                  <li>aa</li>
                  <li>bb</li>
                  <li>cc</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center text-[#282828CC] mt-3">
                  <h2>
                    <span></span> <span>30 minutes</span>
                  </h2>
                  <h2>
                    <span></span> <span>600 calories</span>
                  </h2>
                </div>
                <button className="btn bg-[#0BE58A] text-black font-semibold rounded-3xl text-xl mt-5">
                  {" "}
                  Want to Cook
                </button>
              </div>
            </div>
          </div>

          <div className="card  shadow-xl border border-[#28282833] mt-5 p-5">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold text-black ">
                Spaghetti Bolognese
              </h2>
              <p className="text-[#878787] mt-3 border-b border-[#28282833] pb-5">
                Classic Italian pasta dish with savory meat sauce.
              </p>

              <div className="mt-3 border-b border-[#28282833] pb-5 ">
                <h2 className="text-black text-xl font-semibold">
                  Ingredients: <span>6</span>
                </h2>
                <ul className="text-[#282828]">
                  <li>aa</li>
                  <li>bb</li>
                  <li>cc</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center text-[#282828CC] mt-3">
                  <h2>
                    <span></span> <span>30 minutes</span>
                  </h2>
                  <h2>
                    <span></span> <span>600 calories</span>
                  </h2>
                </div>
                <button className="btn bg-[#0BE58A] text-black font-semibold rounded-3xl text-xl mt-4">
                  {" "}
                  Want to Cook
                </button>
              </div>
            </div>
          </div>

          <div className="card  shadow-xl border border-[#28282833] mt-5 p-5">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold text-black">
                Spaghetti Bolognese
              </h2>
              <p className="text-[#878787] mt-3">
                Classic Italian pasta dish with savory meat sauce.
              </p>

              <div className="mt-5  ">
                <h2 className="text-black text-xl font-semibold">
                  Ingredients: <span>6</span>
                </h2>
                <ul className="text-[#282828]">
                  <li>aa</li>
                  <li>bb</li>
                  <li>cc</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center text-[#282828CC] mt-5">
                  <h2>
                    <span></span> <span>30 minutes</span>
                  </h2>
                  <h2>
                    <span></span> <span>600 calories</span>
                  </h2>
                </div>
                <button className="btn bg-[#0BE58A] text-black font-semibold rounded-3xl text-xl mt-4">
                  {" "}
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-xl border border-[#28282833] mt-5 p-5">
          <div>
            <h1 className="text-2xl text-black font-semibold border-b border-[#28282833] pb-5">
              Want to cook: <span>00</span>
            </h1>
            <div className="text-[#878787] font-semibold text-xl flex justify-between items-center mt-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>

            <div className="shadow-md rounded-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 ">
              <p className="text-[#282828CC] font-semibold">1</p>
              <p className="text-[#282828B3] font-semibold ">
                Chicken Caesar Salad
              </p>
              <p className="text-[#282828B3] font-semibold ">20 minutes</p>
              <p className="text-[#282828B3] font-semibold ">400 calories</p>
              <button className="btn text-[#150B2B] bg-[#0BE58A] text-xl rounded-3xl">
                Preparing
              </button>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl text-black font-semibold border-b border-[#28282833] pb-5 mt-4">
              Currently cooking: <span>00</span>
            </h1>
            <div className="text-[#878787] font-semibold text-xl flex justify-between items-center mt-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>

            <div className="shadow-md round-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 ">
              <p className="text-[#282828CC] font-semibold">1</p>
              <p className="text-[#282828B3] font-semibold ">
                Chicken Caesar Salad
              </p>
              <p className="text-[#282828B3] font-semibold ">20 minutes</p>
              <p className="text-[#282828B3] font-semibold ">400 calories</p>
            </div>

            <div className="shadow-md round-md mt-3 bg-[#28282808] p-4 flex justify-between items-center gap-5 ">
              <p className="text-[#282828CC] font-semibold">1</p>
              <p className="text-[#282828B3] font-semibold ">
                Chicken Caesar Salad
              </p>
              <p className="text-[#282828B3] font-semibold ">20 minutes</p>
              <p className="text-[#282828B3] font-semibold ">400 calories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
