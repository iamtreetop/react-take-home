import React, { useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Media from "./components/Media";

function App() {
  useEffect(() => {
    const apiUrl = "https://www.plugco.in/public/take_home_sample_feed";

    const getCurrentCampaign = async () => {
      const currentData = await axios.get(apiUrl);
      console.log(currentData.data);
    };

    getCurrentCampaign();
  }, []);

  return (
    <div>
      <Header />
      <Media />
    </div>
  );
}

export default App;
