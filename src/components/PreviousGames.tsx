import React from "react";
import { Game } from "../types";

export default function PreviousGames(props: any) {
  return (
    <div>
      <div>
        <h3>Previous Games</h3>
        <ul className="previous games">
          {props.previous.map((game: Game) => (
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
                    <th>{game.home_points}</th>
                    {game.home_line_scores.map((score: number) => (
                      <th>{score}</th>
                    ))}
                  </tr>
                  <tr>
                    <th>{game.away_points}</th>
                    {game.away_line_scores.map((score: number) => (
                      <th>{score}</th>
                    ))}
                  </tr>
                </table>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
