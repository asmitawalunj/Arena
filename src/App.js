import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import data from './data.json'
import runImg from './img/download.jpg';
import iconImg from './img/2.png'



function searchingForfilter(buttonClicked,term){
  return function(x){
    if(buttonClicked === "country") {
        
                 return x.Country.toLowerCase().includes(term.toLowerCase())|| !term ;
            }

            else if(buttonClicked === "event") {
              
                 return x.Event.toLowerCase().includes(term.toLowerCase())|| !term ;
            }

            else if(buttonClicked === "all") {
              
                 return  !term ;
            }
   
  }
}
class App extends React.Component {

constructor(props)
{
  super(props);
  console.log(this.props);
  this.state = {
    data : data,
    
    term :'',
    radioSearch:'all',
    //radioSearch: this.props.radioSearch,
    showBox : true,
    icon : iconImg,
    coinimg: runImg
  }
  this.updateHandler = this.updateHandler.bind(this);
  this.displayBox = this.displayBox.bind(this)
}

displayBox = (e) =>
{
  
  //this.setState({show:!showVar})
  //console.log(this.state.show)
  //var eventtext = document.getElementById("event");
  var dvtext1 = document.getElementById("dvtext2");
  var dvtext2 = document.getElementById("dvtext1");
  if(e.target.checked && e.target.value === 'event')
  {
    
        dvtext1.style.display = "block" 
        dvtext2.style.display = "none" 

  }

  else if(e.target.checked && e.target.value === 'country')
  {
    dvtext1.style.display = "none";
        dvtext2.style.display = "block" 

  }

  else 
    if(e.target.checked && e.target.value === 'all')
  {
    dvtext1.style.display = "none";
        dvtext2.style.display = "none" 

  }
  //console.log('Before', this.state.show)
    //this.setState({show:!showVar})
    //console.log('After ', this.state.show)
}
updateHandler(event){
  this.setState({term:event.target.value})
  console.log('Searching ', this.state.term)
}

searchHandler = (e) =>{
  this.setState ({
    radioSearch: e.target.value
  },console.log('Radio',this.state.radioSearch))
  
}

hellothere = () =>
{
  console.log(this.state.name);
}

  render(){
    const {term,data} = this.state;
  return (
    <div >
    <h1><center>LEADERBOARD</center></h1> 
    <form>
    <p>Filter By </p>
    <div>
    <label htmlFor="all">
         <input type="radio" name="all" id="all" value="all"  checked={this.state.radioSearch === "all"} 
                      onChange={this.searchHandler}
                      onClick={this.displayBox}/>
                     All
                  </label>
                  </div>
    <div>
    <label htmlFor="title">
         <input type="radio" name="country" id="country" value="country"  checked={this.state.radioSearch === "country"} 
                      onChange={this.searchHandler}
                      onClick={this.displayBox}/>
                      Country
                  </label>
                  </div>
                  <div id="dvtext1" style={{display:'none'}}>
    <input type="text" placeholder="Type Country name here"
      onChange={this.updateHandler}
      value={term}

      />
      </div>
                  <div>
                  <label htmlFor="event">
                      <input type="radio" name="event" id="event" value="event" checked={this.state.radioSearch === "event"} 
                      onChange={this.searchHandler}
                      onClick={this.displayBox}/>
                      Event
                  </label> 
                  </div>
                  <div id="dvtext2" style={{display:'none'}}>
    <input type="text" placeholder="Type Event name here"
      onChange={this.updateHandler}
      value={term}

      />
               
      </div>

    </form>
      <table>

      <tr>
      <th>Rank</th>

      <th >Name</th>
      <th>Department</th>
      <th>Event</th>
      <th>Country</th>
      <th>Coins</th>
      </tr>
         <tbody>
           { 
                data.filter(searchingForfilter(this.state.radioSearch,term)).map( s =>
                   <tr key={s.id}>
                      <td>{s.id}</td>
                      <td><img alt="" src={this.state.icon} height="30" width="30"/><span>&nbsp;{s.Name} </span></td>
                      <td>{s.Department}</td>
                      <td>{s.Event}</td>
                    <td>{s.Country}</td>
                    <td><img alt="" src={this.state.coinimg} height="30" width="30"/>&nbsp;{s.Coins} </td>
                   </tr>
                )
           }
         </tbody>
       </table>
        

        
    


    </div>
  );
}
}


export default App;
