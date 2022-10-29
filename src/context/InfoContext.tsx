import React, { createContext, useEffect, useState } from "react";
import { PersonalInfo } from "../data/PersonalInfo";
import { Experiences } from "../data/Experiences";
import { Trades } from "../data/Trades";
import { Works } from "../data/Works";
import { Opinions } from "../data/Opinions";

export const InfoContext = createContext<any | null>(null);

export function InfoContextProvider(props: any) {
  const [infoPersonal, setInfoPersonal] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [trades, setTrades] = useState([]);
  const [works, setWorks] = useState([]);
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    setInfoPersonal(PersonalInfo);
    setExperiences(Experiences);
    setTrades(Trades);
    setWorks(Works);
    setOpinions(Opinions);
  }, []);

  return (
    <InfoContext.Provider
      value={{ infoPersonal, experiences, trades, works, opinions }}
    >
      {props.children}
    </InfoContext.Provider>
  );
}
