import CardSection from "../CardSection/CardSection";

const Data = ({ cards, searchResults }) => {
  return (
    <div>
      <div>
        <div className="grid mt-20 grid-cols-1 gap-10 w-full mb-5  md:grid-cols-3  lg:grid-cols-4">
          {searchResults?.length > 0
            ? searchResults?.map((card) => (
                <CardSection key={card.id} card={card}></CardSection>
              ))
            : cards?.map((card) => (
                <CardSection key={card.id} card={card}></CardSection>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Data;