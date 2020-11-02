import React from "react";

export default function SearchBar(props: any) {
  
  return (
    
      <input type="text" onChange={(e) => props.searchTeams(e.target.value)} />
    
  );
}
