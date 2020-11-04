import React from "react";
import { fetchTeams } from "../api/api";
import { Team } from "../types";
import Teams from "../components/Teams";
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
      teams: sessionStorage.teams ? JSON.parse(sessionStorage.teams) : [], // can also use redux instead of sessionstorage but I feel like the app is not quite big for redux
      page: props.match.params.page ? parseInt(props.match.params.page) : 1, // let user go to team from address bar
      entries: localStorage.entries ? JSON.parse(localStorage.entries) : 10, // user's preference, saved on local for next time. The feature hasn't been coded in yet
      searchWord: "",
    };
  }

  pageNavi(page: number): void {
    // navigate page
    window.history.pushState({}, "", "/page/" + JSON.stringify(page));
    window.scrollTo({ top: 0, behavior: "smooth" }); // this line not tested yet
    this.setState({
      page,
    });
  }

  refreshTeams(): void {
    // refresh when user go to website first time and also can be made into an option
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
    if (word === "") {
      this.setState({
        teams: JSON.parse(sessionStorage.teams),
      });
    } else {
      this.setState({
        teams: JSON.parse(sessionStorage.teams).filter((team: Team) =>
          team.school.toLowerCase().includes(word.toLowerCase())
        ),
      });
    }
  }

  componentDidMount() {
    this.refreshTeams();
  }

  render() {
    const { page, entries, teams, searchWord } = this.state; // make code easier to understand

    return (
      <div className="homescreen">
        <SearchBar searchTeams={this.searchTeams} searchWord={searchWord} />
        <Teams teams={teams.slice((page - 1) * entries, page * entries)} />
        <Pagination
          page={page}
          pagemax={Math.ceil(teams.length / entries)}
          pageNavi={this.pageNavi}
        />
      </div>
    );
  }
}
