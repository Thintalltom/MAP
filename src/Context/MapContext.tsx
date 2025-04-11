import React, { createContext, useContext, useState, useEffect } from "react";
import { LatLngTuple } from "leaflet";
import {  useMap } from "react-leaflet";
import Ngn from '@/assets/svg/NGN.svg'
import Ghs from '@/assets/svg/GH.svg'
const AfricaMapContext = createContext<any>(null);

interface MapDataProps {
  children: React.ReactNode;
}

 export const MapDataProvider: React.FC<MapDataProps> = ({ children }) => {
  const countryInfo: Record<
  string,
  { capital: string; Tariff: string; currency: string; countryimg: string, quote: string, Mfn: string, non: string, aftc: string, Tariff2: string }
> = {
  NGR: { capital: "Nigeria", Tariff: "12.3% (Average)", currency: "Naira (NGN)", countryimg: Ngn, quote:'(NG)', Mfn: '10.4%', non: "$5  Per Unit", aftc: "5%", Tariff2:"12.3%"  },
  GHA: { capital: "Accra", Tariff: "12.3% (Average)", currency: "Cedi (GHS)", countryimg: Ghs, quote:'(GHS)', Mfn: '10.4%', non: "$5  Per Unit", aftc: "5%", Tariff2:"12.3%"  },
};

const africaBounds: [[number, number], [number, number]] = [
  [37, -26],
  [-35, 55],
];

// Custom component to apply fitBounds
const FitMapBounds = () => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(africaBounds);
  }, [map]);

  return null;
};

const colorGroups: Record<string, string[]> = {
  "#1B622F": [
    "NGR",
    "ALG",
    "EQG",
    "SDN",
    "SS",
    "ZWE",
    "CD",
    "BF",
    "Republic of Congo",
    "BEN",
    "GMB",
    "SA"
  ],
  "#B70A0D": [
    "GHA",
    "KE",
    "EGY",
    "MLI",
    "TCD",
    "SO",
    "CMR",
    "SLE",
    "Sahara",
    "CG",
    "AGO",
    "MW",
    "CIV",
    "SEN",
    "SOL",
    "CIV",
    "LBR",
    "MRT",
    "W.S",
    "SS",
    "CAF",
    "BWA",
    "ERI",
    "DJI",
    "BDI",
    "RWA",
    "GNB",
    "SA"
  ],
  "#1DB849": ["LBY", "TZA", "MDG", "NAM", "GIN"],
  "#F4A51F": [
    "MOZ",
    "ZMB",
    "GAB",
    "TUN",
    "MOR",
    "LSO",
    "Sahara",
    "Libra",
    "TGO",
    "UGA",
    "ETH",
    "NER",
    "ETH",
    "SWZ",
    
  ],
};
  const center: LatLngTuple = [9, 20];
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const getCountryColor = (countryName: string): string => {
    for (const [color, countries] of Object.entries(colorGroups)) {
      if (countries.includes(countryName)) {
        return color;
      }
    }
    return "#CCCCCC";
  };

  const getCountryStyle = (feature: any) => {
    const countryName = feature.properties.name;
    const isSelected = countryName === selectedCountry;
    const countryColor = getCountryColor(countryName);

    return {
      fillColor: isSelected ? countryColor : `${countryColor}`, // Highlight or fade
      weight: isSelected ? 3 : 1, // Thicker border for selected country
      opacity: 1,
      color: "#FFFFFF",
      // color: isSelected ? "#FFFFFF" : "#AAAAAA", // White border for selected, gray for others
      fillOpacity: isSelected ? 1 : 0.7,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const countryName = feature.properties.name;
    // Show country name subtly inside the region
    layer.bindTooltip(countryName, {
      permanent: true,
      direction: "center",
      className: "country-label",
      interactive: false,
      opacity: 1,
    });
    // Show details on the right when clicked
    layer.on("click", () => {
      setSelectedCountry(countryName);
    });
  };
  
    return (
    <AfricaMapContext.Provider value={{ getCountryColor, colorGroups, selectedCountry, setSelectedCountry, center, countryInfo, FitMapBounds, getCountryStyle, onEachFeature}}>
      {children}
    </AfricaMapContext.Provider>
  );
};

export const useAfricaMap = () => {
    const context = useContext(AfricaMapContext);
    if (context === undefined) {
      throw new Error("useAfricaMap must be used within a MapDataProvider");
    }
    return context;
  };


