import React from "react";
import { Team } from "../types";
import { Link } from "react-router-dom";

export default function Teams(props: any) {  
  // pass array of teams down to Teams, so the number of display per each time is changeable (5,10,20,etc)
  
  return (
    <div>
      {
        !props.teams? (
          <div>Loading...</div>
        ) : (
          <ul className="teams">
            {props.teams.map((team: Team) => (
              <li key={team.id}>
                <Link to="/team/:name">
                  <img 
                  src={team.logos[0]}
                  alt={team.abbreviation}
                  style={{backgroundColor:team.color}} />
                </Link>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )  
}