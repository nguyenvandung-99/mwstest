import React from "react";
import Teams from "../components/Teams";
import { fetchTeams } from '../api/api';
import { Team } from "../types";

export default class HomeScreen extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: null as Team[] | null,
      page: 1 as number,
      searchTeams: null as Team[] | null,
      searchWord: null as string | null
    }
  }

  componentDidMount() {
    fetchTeams().then(
      teams => this.setState({
        teams,
        searchTeams: JSON.parse(JSON.stringify(teams))
      })
    )
  }

  render() {
    return (
      <Teams />
    )
  }
}