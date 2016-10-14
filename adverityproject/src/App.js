import React from 'react';
import './App.css';
import Contact from './Contact';


class MarketingInfos extends React.Component {

  constructor(){
    super();
    this.state = {
      search: '',
      clicks: 0,
      impressions: 0
    };
  }

  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0,50),
      clicks: 0,
      impressions:0
    })
  }

  handleClick (e){
    console.log(e.target.id);
    this.setState({
      search: e.target.textContent,
      clicks: 0,
      impressions:0
    });
  }
  render() {
    let filteredContacts = this.props.marketingInfos.filter(
      (marketInfos) => {
        return marketInfos.channel.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1  || marketInfos.campaign.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    );
    for(var i = 0; i<filteredContacts.length; i++){
      this.state.clicks += parseInt(filteredContacts[i].clicks, 10);
      this.state.impressions += parseInt(filteredContacts[i].impressions, 10);
    }

    return (
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <div className="click-impression-container">
          <div className="click-counter">
            <div>Clicks: </div>
            <p>{this.state.clicks}</p>
          </div>
          <div className="impressions-counter">
            <div>Impressions: </div>
              <p>{this.state.impressions}</p>
          </div>
        </div>
        <ul onClick={this.handleClick.bind(this)}>
          {filteredContacts.map((marketInfos)=>{
            return <Contact  marketInfos={marketInfos} key={marketInfos.id}/>
          })}
        </ul>

      </div>
    );
  }

  // csvJSON(csv){
  //   var lines=csv.split("\n");
  //   var result = [];
  //   var headers=lines[0].split(",");
  //   for(var i=1;i<lines.length;i++){
  //   var obj = {};
  //   var currentline=lines[i].split(",");
  //   for(var j=0;j<headers.length;j++){
  //     obj[headers[j]] = currentline[j];
  //       }
  //       result.push(obj);
  //   }
  //   console.log(result); //JSON
  // }

//   componentWillMount() {
//   return axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6')
//   .then(function (response) {
//     var theDataWhatWeWillUseing = response.data
//     csvJSON(theDataWhatWeWillUseing)
//     // console.log(theDataWhatWeWillUseing);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   }
}
export default MarketingInfos
