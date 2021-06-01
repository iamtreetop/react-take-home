import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import MediaCard from "./components/campaign/Campaign";

export const CampaignContext = createContext()

function App() {

  // const [campaignData, setCampaignData] = useState({
  //   campaignName: "",
  //   payPerInstall: "",
  //   campaignIconUrl: "",
  //   medias: [],
  // })
  // useEffect(() => {
  //   const apiUrl = "https://www.plugco.in/public/take_home_sample_feed";

  //   const getCurrentCampaign = async () => {
  //     const currentData = await axios.get(apiUrl);
  //     console.log(currentData.data);
  //   };

  //   getCurrentCampaign();
  // }, []);

  return (
    <div>
      {/* <Header /> */}
      <MediaCard />
    </div>
  );
}

export default App;
