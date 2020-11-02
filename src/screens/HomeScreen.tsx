import React from "react";
import Teams from "../components/Teams";
import { fetchTeams } from "../api/api";
import { Team } from "../types";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

interface MyState {
  teams: Team[];
  page: number;
  entries: number;
  searchWord: string;
}

export default class HomeScreen extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.pageNavi = this.pageNavi.bind(this);
    this.searchTeams = this.searchTeams.bind(this);
    this.state = {
      teams: sessionStorage.teams ? JSON.parse(sessionStorage.teams) : [],
      page: props.match.params.page ? parseInt(props.match.params.page) : 1, // let user go to page from address bar
      entries: localStorage.entries ? JSON.parse(localStorage.entries) : 10, // user's preference, saved on local for next time
      searchWord: "",
    };
  }

  pageNavi(page: number): void {
    // navigate page
    window.history.pushState({}, "", JSON.stringify(page));
    this.setState({
      page,
    });
  }

  refreshTeams(): void {
    // refresh when user go to website first time and also make it an option
    fetchTeams().then((teams) => {
      sessionStorage.setItem("teams", JSON.stringify(teams));
      this.setState({
        teams,
      });
    });
  }

  searchTeams(word: string): void {
    // search for teams
    this.pageNavi(1);
    if (word === '') {
      this.setState({
        teams: JSON.parse(sessionStorage.teams),
      })
    } else {
      this.setState({
        teams: JSON.parse(sessionStorage.teams)
          .filter((team: Team) => team.school.toLowerCase().includes(word.toLowerCase())),
      })
    }
  }

  componentDidMount() {
    this.refreshTeams();
  }

  render() {
    const { page, entries, teams } = this.state; // make code easier to understand
    
    return (
      <>
        <SearchBar 
          searchTeams={this.searchTeams} 
          searchWord={this.state.searchWord}  
        />
        <Teams teams={teams.slice((page - 1) * entries, page * entries)} />
        <Pagination
          page={page}
          pagemax={Math.ceil(teams.length / entries)}
          pageNavi={this.pageNavi}
        />
      </>
    );
  }
}
