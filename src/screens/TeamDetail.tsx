import React from "react";
import { fetchGames } from "../api/api";
import { Game } from "../types";
import UpcomingGames from "../components/UpcomingGames";
import PreviousGames from "../components/PreviousGames";

interface MyState {
  team: string;
  previous: Game[];
  upcoming: Game[];
}

export default class TeamDetail extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      team: props.match.params.team ? props.match.params.team : "",
      previous: [],
      upcoming: [],
    };
  }

  refreshGames(): void {
    // refresh when user go to website first time and also can be made into an option
    let previous: Game[] = [];
    let upcoming: Game[] = [];
    fetchGames(this.state.team)
      .then((games) =>
        games.forEach((game) => {
          game.home_points ? previous.unshift(game) : upcoming.push(game); // split into past and future matches
        })
      )
      .then(() =>
        this.setState({
          previous,
          upcoming,
        })
      );
  }

  componentDidMount() {
    this.refreshGames();
  }

  render() {
    return (
      <div className="team-detail">
        <h2>{this.state.team}</h2>
        <UpcomingGames upcoming={this.state.upcoming} />
        <PreviousGames previous={this.state.previous} team={this.state.team} />
      </div>
    );
  }
}
