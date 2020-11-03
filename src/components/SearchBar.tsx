import React from "react";

export default function SearchBar(props: any) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => props.searchTeams(e.target.value)}
    />
  );
}
