import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchQuery :'',
      locData : '',
      displayLocation :false,
      errorMassage :false
    }
  }


  getLocation = async(event) =>{
    event.preventDefault();
    let locUrl =`https://eu1.locationiq.com/v1/search.php?key=pk.b95b5d027bac6b00166fd9e61661c8cd&q=${this.state.searchQuery}&format=json`;
    try{

      let locResult = await axios.get(locUrl);
      console.log(locResult.data[0]);
      this.setState({
        locData:locResult.data[0],
        displayLocation : true,
        
        
      })
    }
      
    catch{
      this.setState({
        displayLocation:false,
        errorMassage : true,
      })
      
    }
  }



  updateSearchQuery = (event) =>{
    this.setState({

      searchQuery:event.target.value
     
    });

  }
 



render(){

return(
<>
<h1>city Explorer</h1>
<form onSubmit={this.getLocation}>
<input type='text' placeholder='enter city' onChange={this.updateSearchQuery}/>
<input type='submit'  value='display location'/>
<p>{this.state.locData.display_name}</p>





</form>
{this.state.displayLocation &&

<img src ={`https://maps.locationiq.com/v3/staticmap?key=pk.b95b5d027bac6b00166fd9e61661c8cd&center=${this.state.locData.lat},${this.state.locData.lon}`}/>
}
{this.state.errorMassage &&
<p>error in getting the data</p>
}

</>
)


}







}
export default App;
