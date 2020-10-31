import { Team, Game } from "../types";
const axios = require("axios").default;

export const fetchTeams = async (): Promise<Team[]> => {
  return await axios
    .get("https://api.collegefootballdata.com/teams")
    .then((res: any) => res.data.filter((team: Team) => team.mascot !== null)); // take only teams that actually compete
};

export const fetchGames = async (teamName: string): Promise<Game[]> => {
  return await axios
    .get("https://api.collegefootballdata.com/games", {
      params: {
        year: 2020, // I don't see API for getting games from all years so 2020 is default
        team: teamName,
      }
    })
    .then((res: any) => res.data);
};
