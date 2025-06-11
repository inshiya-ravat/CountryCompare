import { Flex } from "antd";
import ListDetails from "../ListDetails/ListDetails";

interface CountryDetailProps {
  countryA: string | null;
  countryB: string | null;
}
const CountryDetail = ({ countryA, countryB }: CountryDetailProps) => {
  if (countryA && countryB) {
    return (
      <Flex justify="space-evenly">
        <ListDetails country={countryA} />
        <ListDetails country={countryB} />
      </Flex>
    );
  } else {
    return <div>Please select two countries to compare.</div>;
  }
};

export default CountryDetail;
