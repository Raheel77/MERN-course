import Hero from "../Components/Hero"

import PremiumHome from "../Components/PremiumHome"
import TheBest from "../Components/TheBest"
import WinterDisc from "../Components/WinterDisc"
import AllProd from "../Components/AllProd"


const Landing = (props) => {
  const {data , active} = props;


  const allSection = data.Sections;
  const Products = data.allProducts;

  const handleChildEvent = (data) => {
    active(data);
  };

  return (
    <>
      <Hero {...allSection[0]} />
      <PremiumHome {...allSection[1]} />
      <TheBest {...allSection[2]} products={Products} />
      <WinterDisc {...allSection[3]} />
      <AllProd {...allSection[4]} products={Products} onChildEvent={handleChildEvent}/>
    </>
  )
}

export default Landing;