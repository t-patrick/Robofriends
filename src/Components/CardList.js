import React from 'react';
import RoboBox from './RoboBox'


const CardList = ({ robots }) => {
    // So in dev it will show a dev error, but the production will show the user your predefined ErrorBoundary code.
    if (false) {
        throw new Error("Oh no.")
    }
    // var boxes = [];
    // for(let i = 0; i < robots.length; i++) {
    //     let robo = new RoboBox();
    //     robo.name = robots[i].name;
    //     robo.username = robots[i].username;
    //     robo.email = robots[i].email;
    //     boxes.push(React.createElement(robo));
    // }


    return (

        <div className="dil tc"> 
            {
                robots.map((user, i) => {
                    return <RoboBox name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
                })
            }
        </div>  
    )
}

export default CardList;

  /* <RoboBox name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
        <RoboBox name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
        <RoboBox name={robots[2].name} username={robots[2].username} email={robots[2].email}/> */