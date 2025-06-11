import { Flex, Typography } from "antd";
import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  const [countryA, setCountryA] = useState<string | null>(null);
  const [countryB, setCountryB] = useState<string | null>(null);
 
  function updateCountryA(country:string) {
    setCountryA(country);
  }
  function updateCountryB(country:string) {
    setCountryB(country);
  }
  return (
    <>
      <Navbar />
      <Flex justify="center" gap={10}>
        <DropDown country="A" updateCountryA={updateCountryA}/>
        <DropDown country="B" updateCountryB={updateCountryB}/>
      </Flex>
      <Typography.Title style={{textAlign:'center'}} level={4}>Country Comparison</Typography.Title>
      <CountryDetail countryA={countryA} countryB={countryB} />
    </>
  );
}

export default App;
