import React from "react";
import Teams from "../components/Teams";
import { fetchTeams } from '../api/api';
import { Team } from "../types";

interface MyState {
  teams: Team[] | null
  page: number
  entries: number
  searchWord: string
}

export default class HomeScreen extends React.Component <{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: JSON.parse(sessionStorage.teams),
      page: 1,
      entries: 10,
      searchWord: "",
    }
  }

  refreshTeams() { // refresh when user go to website 1st time and also make it an option
    if (!this.state.teams) {
      fetchTeams()
      .then(teams => {
        sessionStorage.setItem('teams', JSON.stringify(teams));
        this.setState ({
          teams
        });
      })      
    }
  }

  componentDidMount() {
    this.refreshTeams();
  }

  render() {
    
    return (
      <Teams teams={null} />
    )
  }
}