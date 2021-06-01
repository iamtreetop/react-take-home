import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import MediaCard from "./components/campaign/Campaign";

export const CampaignContext = createContext()

function App() {
  return (
    <div>
      <MediaCard />
    </div>
  );
}

export default App;
