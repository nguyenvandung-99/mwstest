import React from "react";
import { Game } from "../types";

export default function UpcomingGames(props: any) {
  return (
    <div>
      {props.upcoming.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>Upcoming Games</h3>
          <ul className="upcoming games">
            {props.upcoming.map((game: Game) => (
              <li key={game.id}>
                <div className="game-time">
                  <table>
                    <tr>{new Date(game.start_date).toString().slice(4, 10)}</tr>
                    <tr>{game.start_date.slice(11, 16)}</tr>
                  </table>
                </div>
                <div className="game-team">
                  <table>
                    <tr>{game.home_team}</tr>
                    <tr>{game.away_team}</tr>
                  </table>
                </div>
                <div className="game-score">
                  <table>
                    <tr>
                      <th>-</th>
                      {["-", "-", "-", "-"].map((score: string) => (
                        <th>{score}</th>
                      ))}
                    </tr>
                    <tr>
                      <th>-</th>
                      {["-", "-", "-", "-"].map((score: string) => (
                        <th>{score}</th>
                      ))}
                    </tr>
                  </table>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
