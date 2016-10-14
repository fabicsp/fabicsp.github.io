import React from 'react';
// import './App.css';


class Contact extends React.Component {

  render() {
    return (
        <li>
          {this.props.marketInfos.campaign}{this.props.marketInfos.channel}
        </li>
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
export default Contact
