import React from "react";
import Teams from "../components/Teams";
import { fetchTeams } from '../api/api';
import { Team } from "../types";

interface MyState {
  teams: Team[]
  page: number
  entries: number
  searchWord: string
}

export default class HomeScreen extends React.Component <{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: JSON.parse(sessionStorage.teams) || [],
      page: 1,
      entries: 10,
      searchWord: "",
    }
  }

  refreshTeams() { // refresh when user go to website first time and also make it an option
    if (this.state.teams.length === 0) {
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
    const {page, entries, teams} = this.state;
    return (
      <Teams teams={teams.slice((page-1)*entries,(page)*entries)} />
    )
  }
}