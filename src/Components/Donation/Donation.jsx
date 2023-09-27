import { useEffect, useState } from "react";
import DonationCard from "../../Pages/DonationCard/DonationCard";

   const Donation = () => {
  const [myDonation, setMyDonation] = useState([])
  const [isShow, setIsShow] = useState(false);

  useEffect(()=>{
      const allDonations = JSON.parse(localStorage.getItem("donation"));
    if(allDonations){
      setMyDonation(allDonations)
    }
  
  },[])

    return (
      <div>
        <div className="max-w-7xl gap-5   grid grid-cols-1 md:grid-cols-2  mx-auto">
          {isShow
            ? myDonation.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))
            : myDonation
                ?.slice(0, 4)
                .map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))}
        </div>
        
        <div className="flex justify-center my-6">
          {!isShow && myDonation.length > 4 ? (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn text-lg  text-white bg-[#009444] hover:bg-[#00cc5f]"
            >
              See All
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
};

export default Donation ;
