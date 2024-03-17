import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recepies = () => {
  const [data, setData] = useState([]);
  const [cook, setCook] = useState([]);
  const [preparing, setPreparing] = useState([]);

  useEffect(() => {
    fetch("bloges.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleClick = (item) => {
    const isExit = cook.find((pd) => pd.recipe_id == item.recipe_id);
    if (isExit) {
      toast("ar khytam na");
    } else {
      const newArray = [...cook, item];

      setCook(newArray);
    }
  };
  const handlePreparing = (item) => {
    const newArray = [...preparing, item];

    setPreparing(newArray);
    const nweCook = cook.filter((pd) => pd.recipe_id !== item.recipe_id);
    setCook(nweCook);
  };

  return (
    <div>
      <ToastContainer />

      <div>
        <div className="mt-10 flex flex-col justify-center items-center max-w-3xl mx-auto text-center ">
          <h1 className="text-[#150B2B] text-3xl font-bold">Our Recipes</h1>
          <p className="text-[#150B2B99] mt-3">
            One of the unfortunate things about disasters is that you never know
            when they are going to strike. But when they do, you’re suddenly in
            the middle of a very difficult situation.
          </p>
        </div>
        <div>
          <div>
            <Card
              data={data}
              preparing={preparing}
              handleClick={handleClick}
              cook={cook}
              handlePreparing={handlePreparing}
            ></Card>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Recepies;
