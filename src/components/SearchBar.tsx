import React from "react";

export default function SearchBar(props: any) {
  return (
    <input
      type="text"
      placeholder="Search..."
      title="search"
      onChange={(e) => props.searchTeams(e.target.value)}
    />
  );
}
