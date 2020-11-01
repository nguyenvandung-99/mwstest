import React from "react";
import Teams from "../components/Teams";
import { fetchTeams } from '../api/api';
import { Team } from "../types";
import Pagination from "../components/Pagination";

interface MyState {
  teams: Team[]
  page: number
  entries: number
  searchWord: string
}

export default class HomeScreen extends React.Component <{}, MyState> {
  constructor(props: any) {
    super(props);
    this.pageNavi = this.pageNavi.bind(this);
    this.state = {
      teams: sessionStorage.teams ? JSON.parse(sessionStorage.teams) : [], // Usually || would work too but this is to prevent CORS error
      page: props.match.params.page ? JSON.parse(props.match.params.page) : 1,
      entries: localStorage.entries ? JSON.parse(localStorage.entries) : 10, // user's preference, saved on local for next time
      searchWord: "",
    }
  } 

  pageNavi(page: number): void {
    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, '', JSON.stringify(page));
    this.setState({
      page,
    })
  }

  refreshTeams(): void { // refresh when user go to website first time and also make it an option
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
    const {page, entries, teams} = this.state; // make code easier to understand
    return (
      <>
        <Teams teams={teams.slice( (page-1)*entries, (page)*entries )} />
        <Pagination page={page} max={Math.round(teams.length/entries)} pageNavi={this.pageNavi} />
      </>
    )
  }
}