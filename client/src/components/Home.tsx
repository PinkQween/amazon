import styled from "styled-components";
import { Product } from "./";

const Home = () => {
  return (
        <>
            <img className="w-full -z-10 -mb-[150px]" style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <Row>
                <Product />
            </Row>
      </>
  )
}

export default Home;

const Row = styled.div`
    
`;