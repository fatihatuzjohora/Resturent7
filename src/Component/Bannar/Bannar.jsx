const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-3xl mt-5"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/jrkC0DD/istockphoto-1162911786-612x612.jpg)",
        }}
      >
        <div
          style={{
            borderRadius: "24px",
            background:
              "linear-gradient(0.00deg, rgba(21, 11, 43, 0.9),rgba(21, 11, 43, 0) 100%),url(203)",
          }}
          className="hero-overlay bg-opacity-60 "
        ></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:p-40 p-3">
            <h1 className="mb-10 text-5xl font-bold text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-10">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn bg-[#0BE58A] text-black rounded-3xl ">
              Explore Now
            </button>
            <button className="btn text-white border-white bg-transparent rounded-3xl ml-4">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
