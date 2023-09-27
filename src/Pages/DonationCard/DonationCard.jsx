import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
      const {id, title, image,category, text_btn_bg_color, amount, description } = donation;
      

    return (
      <div
        style={{
          backgroundColor: `${donation.card_bg_color}`,
        }}
        className="flex flex-col bg-${text_btn_bg_color} shadow-sm w-full items-center md:flex-row gap-10 "
      >
        <div className="lg:h-48   lg:w-48 h-full w-full  ">
          <img className="h-full w-full  rounded-l-lg" src={image} alt="" />
        </div>
        <div>
          <h1
            style={{
              color: `${donation.text_btn_bg_color}`,
              backgroundColor: `${donation.category_bg_color}`,
            }}
            className=" py-1 mb-2 w-[80px] rounded-lg text-center"
          >
            {category}
          </h1>
          <h1 className="mb-2 font-bold text-2xl md:text-xl lg:text-2xl">{title}</h1>
          <h1 className="mb-2">${amount}</h1>
          <Link to={`/donation/${id}`}>
            <button
              style={{
                backgroundColor: `${donation.text_btn_bg_color}`,
              }}
              className="text-white lg:py-2 py-2 px-4 md:py-1 md:text-[15px] lg:text-[18px]  md:px-3 lg:pl-4 lg:pr-4 mb-2 rounded-lg"
            >
              view deteles
            </button>
          </Link>
        </div>
      </div>
    );
};

export default DonationCard;