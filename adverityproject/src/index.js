import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let marketingInfos = [{
  "campaign":"DE|SN|Longboard|Generisch", "id":1, "channel":"Search","clicks":"185","impressions":"8760"},
  {"campaign":"AT|SN|Snowboard|Generisch","id":2, "channel":"Search","clicks":"203","impressions":"5966"},
  {"campaign":"DE | SP Gadgets","id":3, "channel":"Search","clicks":"897","impressions":"15324"},
  {"campaign":"DE|SN|Snowboard|Brands","id":4, "channel":"Search","clicks":"121","impressions":"3002"},
  {"campaign":"EN | SP Gadgets","id":5, "channel":"Search","clicks":"259","impressions":"6738"},
  {"campaign":"AT|SN|Skullcandy","id":6, "channel":"Search","clicks":"76","impressions":"712"},
  {"campaign":"AT|SN|Longboard|Generisch","id":7, "channel":"Search","clicks":"189","impressions":"2683"},
  {"campaign":"AT|SN|Audio&Video|Brands","id":8, "channel":"Search","clicks":"23","impressions":"800"},
  {"campaign":"AT|SN|Skate|Generisch","id":9, "channel":"Search","clicks":"476","impressions":"6124"},
  {"campaign":"AT|SN|Snowboard|Brands","id":10, "channel":"Search","clicks":"107","impressions":"995"},
  {"campaign":"DE|SN|Accessoires|Brands","id":11, "channel":"Search","clicks":"156","impressions":"1699"},
  {"campaign":"DE|SN|Skullcandy","id":12, "channel":"Search","clicks":"664","impressions":"5533"},
  {"campaign":"AT|SN|Skate|Brands","id":13, "channel":"Search","clicks":"44","impressions":"671"},
  {"campaign":"DE|SN|Longboard|Generisch","id":14, "channel":"Display","clicks":"9","impressions":"141"},
  {"campaign":"AT|SN|Snowboard|Generisch","id":15, "channel":"Display","clicks":"798","impressions":"19014"},
  {"campaign":"DE | SP Gadgets","id":16, "channel":"Display","clicks":"295","impressions":"3761"},
  {"campaign":"DE|SN|Snowboard|Brands","id":17, "channel":"Display","clicks":"292","impressions":"98933"},
  {"campaign":"EN | SP Gadgets","id":18, "channel":"Display","clicks":"28","impressions":"143"},
  {"campaign":"AT|SN|Skullcandy","id":19, "channel":"Display","clicks":"122","impressions":"1138"},
  {"campaign":"AT|SN|Longboard|Generisch","id":20, "channel":"Display","clicks":"4064","impressions":"164954"},
  {"campaign":"AT|SN|Audio&Video|Brands","id":21, "channel":"Display","clicks":"912","impressions":"76522"},
  {"campaign":"AT|SN|Skate|Generisch","id":22, "channel":"Display","clicks":"89","impressions":"4471"},
  {"campaign":"AT|SN|Snowboard|Brands","id":23, "channel":"Display","clicks":"652","impressions":"27188"},
  {"campaign":"DE|SN|Accessoires|Brands","id":24, "channel":"Display","clicks":"146","impressions":"389"},
  {"campaign":"DE|SN|Skullcandy","id":25, "channel":"Display","clicks":"312","impressions":"642"}
  ]



class BappApp extends React.Component {
  render() {
    console.log(this.props.marketingInfos);
    return (
      <div className="App">
        <h1>Choose chanel or campaign</h1>
        <div className="click-impression-container">


        </div>
        <div className="show-up-block"></div>
        <div>
          <App marketingInfos={this.props.marketingInfos}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<BappApp marketingInfos={marketingInfos} />,document.getElementById('root')
);
