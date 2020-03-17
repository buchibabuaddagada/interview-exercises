import "./Campaign";
import React from "react";

function template() {

  let optionItems = this.state.campaigns.map((campaign)=>
    <option key={campaign.name} value={campaign.id}>{campaign.name}</option>
  );
  return (
    <div className="campaign">
      <h4>Campaigns</h4>
      <div>
        <h5>Select Campaign</h5>
        <select onChange={this.handleChange}>
          {optionItems}
        </select>
      </div>
      <div>
        <h5>Selected Campaign</h5>
        <label>Campaign: {this.state.selectedCampaign.name}</label><br></br>
        <label>Opens: {this.state.selectedCampaign.totalOpens}</label><br></br>
        <label>Clicks: {this.state.selectedCampaign.totalClicks}</label><br></br>
      </div>
    </div>
  );
};

export default template;
