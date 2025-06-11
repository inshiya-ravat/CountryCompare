import { useGetCountriesQuery } from "../../store";
import { Select } from "antd";

type DropDownPropsCommon= {
    country: string;
}
type DropDownPropsConditional = |{
  updateCountryA?: never;
  updateCountryB: (country: string) => void;
}|{
  updateCountryA: (country: string) => void;
  updateCountryB?: never;
}

type DropDownProps = DropDownPropsCommon & DropDownPropsConditional;
interface Country {
  name: {
    common: string;
  };
}

interface Option {
  label: string;
  value: string;
}
const DropDown = ({country,updateCountryA,updateCountryB}:DropDownProps) => {
  const { data, isLoading, isError } = useGetCountriesQuery({ fields: "name" });

  const options: Option[] | undefined = data?.map((country: Country) => ({
    label: country.name.common,
    value: country.name.common,
  }));
  function handleChange(selectedCountry: string) {
      if (country === "A" && updateCountryA) {
        updateCountryA(selectedCountry);
      } else if (country === "B" && updateCountryB) {
        updateCountryB(selectedCountry);
      }
    }
  if (isError) {
    return <div>Error loading countries</div>;
  }
  return (
    <>
      <Select
        defaultValue={`Select country ${country}`}
        options={options}
        loading={isLoading}
        onChange={(value) => handleChange(value)}
        />
    </>
  );
};

export default DropDown;
