import Green from "@/assets/svg/Green.svg";
import LightGreen from "@/assets/svg/LightGreen.svg";
import Red from "@/assets/svg/Red.svg";
import Yellow from "@/assets/svg/Yellow.svg";
import map from "@/assets/svg/Rectangle.svg";
import { useAfricaMap } from "@/Context/MapContext";
const CountryInfo = () => {
  const { selectedCountry, countryInfo } = useAfricaMap();
  return (
    <div className=" w-[35vw]  h-[75vh] ">
        <div className="h-[82%] ">
        {selectedCountry ? (
        <div className="h-[90%] w-[331.59px] shadow-sm bg-[#FFFFFF] border-[0.89px] rounded-[17.73px]">
          <h2>{selectedCountry}</h2>
          <p>
            <strong>Capital:</strong>{" "}
            {countryInfo[selectedCountry]?.capital || "Unknown"}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {countryInfo[selectedCountry]?.population || "Unknown"}
          </p>
          <p>
            <strong>Currency:</strong>{" "}
            {countryInfo[selectedCountry]?.currency || "Unknown"}
          </p>
        </div>
      ) : (
        <div className=" h-[100%] flex  flex-col ">
          <div className="flex justify-center items-center h-[90%] w-[331.59px] shadow-sm bg-[#FFFFFF] border-[0.89px] rounded-[17.73px] p-[14.9px] flex-col gap-[7.09px]">
            <img src={map} />

            <p className="text-[21.28px]">No country Selected</p>
            <p className="text-center w-[75%] text-[12.41px] text-[#9D9C99]">
              Start exploring by selecting a country to view its trade and
              economic insights.
            </p>
          </div>
        </div>
      )}
        </div>
    
      <div className="h-[18%] grid grid-rows-2 p-[14.19px] gap-[14.19px] grid-flow-col w-[414.59px] bg-[#FFFFFF] shadow-sm rounded-[17.73px] border-[0.89px]">
        <div className="flex gap-[14.19px] text-[14.19px]">
          <img src={Green} />
          <p>Highly Liberalized</p>
        </div>
        <div className="flex gap-[14.19px] text-[14.19px]">
          <img src={LightGreen} />
          <p>Partially Liberalized</p>
        </div>
        <div className="flex gap-[14.19px] text-[14.19px]">
          <img src={Yellow} />
          <p>Moderately Liberalized</p>
        </div>
        <div className="flex gap-[14.19px] text-[14.19px]">
          <img src={Red} />
          <p>Low Liberalized</p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
