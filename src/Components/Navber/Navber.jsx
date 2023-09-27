import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-8  md:flex-row  justify-center  md:justify-between  w-full mx-auto  py-6 bg-[rgba(255, 255, 255, 0.95)] ">
        <div className="flex  md:gap-4   items-center">
          <h1>
            <img
              className=" h-[40px ] md:h-[65px] "
              src="../../../Resources/Logo.png"
              alt=""
            />
          </h1>
        </div>
        <ul className="flex    items-center text-black    space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-600 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-600 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-600 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
