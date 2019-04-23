import React from 'react';
import axios from 'axios';

class Party extends React.Component {
        state = {
            parties: []
        }
    

    componentDidMount() {
        axios.get('https://party-planner-build-week.herokuapp.com/api/parties')
        .then(res => {this.setState({parties: res.data}) })
        .catch(err => console.log(err));
    }

    render() {
       return (
           <div>
               <h2>{this.props.parties.theme}</h2>

           </div>
       )
    }
}

export default Party;