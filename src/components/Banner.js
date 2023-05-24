import React from "react";
import axios from "axios";
import mainLogo from '../assets/main-logo.png'; // with import
var apiUrl = 'https://wcp-ipl-vc5omsbdg5tn.rgbhu.io';


class Banner extends React.Component {

    state = {
  
      pcBannerURL: "",
      mobileBannerURL: ""
    };

    formBody = {"Device":"Desktop","Lang":"EN"};
    logoStyle = {"height": "80px", "margin" : "0 auto" };
    
  
    componentDidMount() {
  
        axios.post(apiUrl + '/getHowToPlayIPL', this.formBody)
            .then( res=> {
                const bannerObj = res.data.data.Banner1;
                const bannerObj2 = res.data.data.Banner2;
                this.setState( { pcBannerURL: bannerObj, mobileBannerURL: bannerObj2  });
            });
            console.log('hello')
  
    }

  
    render() {
  
        return(
            <section className="banner-wrap">
                
                <img className="featured-img desktop" 
                alt="banner"
                src={this.state.pcBannerURL} />
                <img className="featured-img mobile" 
                alt="banner"
                src={this.state.mobileBannerURL} />
                
                <div className="event-info-section">
                    <img src={mainLogo} alt="IPL Logo" className="ipl-logo slide-in-bck-center" style={this.logoStyle} />
                    <h3 className="small-txt txt-bold blue-txt uppercase text-center ptw slide-in-bck-center">Play To Win</h3>
                </div>
                
            </section>
           
  
        )
  
    }
  
  }

  export default Banner;