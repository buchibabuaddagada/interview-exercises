import React    from "react";
import template from "./Campaign.jsx.js";

class Campaign extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      campaigns: [],
      selectedCampaign: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const defaultCampaign = this.state.campaigns.find((campaign)=> {
      if (campaign.id === parseInt(event.target.value)) {
        return campaign;
      }
    });

    this.setState({
      selectedCampaign: defaultCampaign
    })
  }

  componentDidMount() {
    fetch("https://testcampaign.free.beeceptor.com/")
      .then(res => res.json())
      .then(
        (result) => {
          if(result.success) {
            this.setState({
              isLoaded: true,
              campaigns: result.campaigns,
              selectedCampaign: result.campaigns[0]
            });
          } else {
            this.setState({
              isLoaded: true,
              error: result.message
            });
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return template.call(this);
  }
}

export default Campaign;
