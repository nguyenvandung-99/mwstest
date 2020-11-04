import React from "react";
import { Game } from "../types";

export default function PreviousGames(props: any) {
  const WinOrLose = (game: Game) =>
    game.home_points > game.away_points ? true : false;

  return (
    <div>
      {props.previous.length > 0 && (
        <>
          <h3>Previous Games </h3>
          <ul className="previous games">
            {props.previous.map((game: Game) => (
              <li
                key={game.id}
                style={{
                  backgroundColor:
                    (game.home_team === props.team) === WinOrLose(game) // true true and false false mean win, T F and F T mean lose
                      ? "#afa"
                      : "#faa",
                }}
              >
                <div className="game-time">
                  <table>
                    <tr>{new Date(game.start_date).toString().slice(4, 10)}</tr>
                    <tr>{game.start_date.slice(11, 16)}</tr>
                  </table>
                </div>
                <div className="game-team">
                  <table>
                    <tr style={WinOrLose(game) ? { fontWeight: "bold" } : {}}>
                      {game.home_team}
                    </tr>
                    <tr style={!WinOrLose(game) ? { fontWeight: "bold" } : {}}>
                      {game.away_team}
                    </tr>
                  </table>
                </div>
                <div className="game-score">
                  <table>
                    <tr>
                      <th>{game.home_points}</th>
                      {game.home_line_scores.map((score: number) => (
                        <td>{score}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>{game.away_points}</th>
                      {game.away_line_scores.map((score: number) => (
                        <td>{score}</td>
                      ))}
                    </tr>
                  </table>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
