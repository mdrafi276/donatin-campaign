import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert2";
const Info = () => {
  const peram = useParams();
  const data = useLoaderData();
  const itemFind = data.find((item) => item.id == peram.id);
  const { title, image, text_btn_bg_color, amount, description } = itemFind;
  const handleDonation = () => {
    const donationsArray = [];
    const allDonations = JSON.parse(localStorage.getItem("donation"));
    if (!allDonations) {
      donationsArray.push(itemFind);
      localStorage.setItem("donation", JSON.stringify(donationsArray));
      swal("Good job!", "Your itemFind successfully completed!", "success");
    } else {
      const isExits = allDonations.find((arifVai) => arifVai.id == itemFind.id);
      if (!isExits) {
        donationsArray.push(...allDonations, itemFind);
        localStorage.setItem("donation", JSON.stringify(donationsArray));
        swal("Good job!", "Your itemFind successfully completed!", "success");
      } else {
        swal("Error!", "You already donated !", "error");
      }
    }
  };
  return (
    <div className=" md:mx-28">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" bg-cover bg-no-repeat border-2 w-full md:h-[500px] lg:[800px]"
      >
        <div className="w-full h-[80px] mt-[366px] md:h-[100px] lg:h-[130px] bg-[#0b0b0b80] flex items-center pl-7 md:pl-10 lg:pl-14">
          <Link>
            <button
              onClick={handleDonation}
              style={{ backgroundColor: `${text_btn_bg_color}` }}
              className="text-white px-7 py-4  rounded-lg"
            >
              donate ${amount}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-14 mx-2 md:mx-0">Good {title}</h1>
        <p className="mt-6 mb-28 md:mx-0">{description}</p>
      </div>
    </div>
  );
};

export default Info;
