import { Link } from "react-router-dom";

const CardSection = ({card}) => {
    const {
      id,
      image,
     
      title,
      text_btn_bg_color,
      category_bg_color,
    } = card || {};
    return (
      <Link to={`/donation/${id}`}>
        <div className="">
          <div className="grid  grid-cols-4 w-full gap-5">
            <div
              style={{
                backgroundColor: `${card.card_bg_color}`,
              }}
              className="card w-[400px] md:w-[200px] md:[h-250px]  lg:w-[250px] lg:h-[300px] bg-base-100 shadow-xl"
            >
              <figure className="h-full">
                <img className="w-full h-full" src={card.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 id="card-text-one" className="card-title">
                  <button
                    style={{
                      color: `${card.text_btn_bg_color}`,
                      backgroundColor: `${card.category_bg_color}`,
                    }}
                    className="   rounded-md text-[15px] px-4 py-1  }"
                  >
                    {card.category}
                  </button>
                </h2>
                <p
                  style={{
                    color: `${card.text_btn_bg_color}`,
                  }}
                  id="card-text-two"
                  className="text-[15px]"
                >
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default CardSection;