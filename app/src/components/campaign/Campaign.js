import React, { useEffect, useState } from "react";
import axios from "axios";

// import Media from "../media/Media"

import "./campaign.css";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const apiUrl = "https://www.plugco.in/public/take_home_sample_feed";
    axios.get(apiUrl).then((res) => {
      console.log(res.data.campaigns);
      setCampaigns(res.data.campaigns);
    });
  }, []);

  return (
    <ul className="card-container">
      {campaigns.map((campaign) => {
        return (
          <li className="campaign-card" key={campaign.id}>
            <div className="header-container">
              <img
                className="campaign-icon"
                src={campaign.campaign_icon_url}
                alt="icon"
              />
              <div className="campaign-details">
                <h2>
                  <b>{campaign.campaign_name}</b>
                </h2>
                <h3>{campaign.pay_per_install} per install</h3>
              </div>
            </div>

            <img
              className="campaign-cover-photo"
              src={campaign.medias[0].cover_photo_url}
              alt="cover"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Campaign;
