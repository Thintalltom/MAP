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
          <div className="h-[90%] w-[331.59px] shadow-sm bg-[#FFFFFF] border-[0.89px] rounded-[23.13px] p-[18.51px] flex flex-col gap-[15px]">
            <div>
              <p className="text-sm text-slate-400">Country</p>
              <img
                src={countryInfo[selectedCountry]?.countryimg}
                alt="country image"
                className="w-[49.7px] h-[37.3px]"
              />
            </div>

            <div>
              <div>
                <p className="text-sm text-slate-400">Overall Tariff Rate:</p>
                <p>{countryInfo[selectedCountry]?.Tariff}</p>
              </div>
            </div>

            <div className="flex gap-[20px] w-[100%] ">
              <div className="w-[50%] ">
                <p className="text-sm text-slate-400">Ad Voleram Tariff(%)</p>
                <p>{countryInfo[selectedCountry]?.Mfn}</p>
              </div>
              <div className="w-[50%] ">
                <p className="text-sm text-slate-400">MFN Tariff</p>
                <p>{countryInfo[selectedCountry]?.Tariff2}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400">Non-Ad Valorem Tariff</p>
              <p>{countryInfo[selectedCountry]?.non}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Preferential Tariff AFCTA (%)</p>
              <p>{countryInfo[selectedCountry]?.aftc}</p>
              </div>
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
