import React, {Component} from 'react';
// import ReactDOM from 'reactDOM';
import tachyons from 'tachyons';
import RoboBox from './RoboBox.css'


class Hello extends Component {

    

    // ClassName is what you need to use when used JSX.
    render() {

        let {name, username, email} = this.props;
        var image = new Image();
        let imsrc = "https://robohash.org/" + username + "?size=200x200";
        image.src = imsrc;

        
        return (
            <div className="bg-light-blue dib br3 ma2 pa3 grow bw3 shadow-5"> 
                <img src={imsrc}></img>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        )
    
    }


}

export default Hello;