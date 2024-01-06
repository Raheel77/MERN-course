import Hero from "../Components/Hero"

// import PremiumHome from "../Components/PremiumHome"
// import TheBest from "../Components/TheBest"
// import WinterDisc from "../Components/WinterDisc"
// import AllProd from "../Components/AllProd"





const Landing = (props) => {
  console.log('allSection' , props);
  return (
    <Hero {...allSection[0]} />
    <PremiumHome {...allSection[1]}   />
    <TheBest {...allSection[2]} products={Products} onChildEvent={handleChildEvent}/>
    <WinterDisc {...allSection[3]} />
    <AllProd {...allSection[4]} products={Products}/>

  )
}

export default Landing;