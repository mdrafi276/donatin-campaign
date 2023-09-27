import { useEffect, useState } from "react";
import DonationCard from "../../Pages/DonationCard/DonationCard";

   const Donation = () => {
  const [myDonation, setMyDonation] = useState([])
  
  useEffect(()=>{
      const allDonations = JSON.parse(localStorage.getItem("donation"));
    if(allDonations){
      setMyDonation(allDonations)
    }
  
  },[])

    return (
      <div className="max-w-7xl gap-5   grid grid-cols-1 md:grid-cols-2  mx-auto">
        {myDonation.map((donation) => (
          <DonationCard donation={donation} key={donation.id}></DonationCard>
        ))}
      </div>
    );
};

export default Donation ;
