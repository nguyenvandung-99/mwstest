import React, { useState } from "react";

export default function Pagination(props: any) {
  
  const [page, setPage] = useState(props.page);

  const enterPage = (e: React.SyntheticEvent) => { // enter the page
    e.preventDefault();
    props.pageNavi(page);
  }

  const buttonPage = (page: number) => { // click to go to page
    setPage(page);
    props.pageNavi(page);
  }
  
  return (
    <div className="pagination">
      <button
        disabled={props.page === 1}
        onClick={() => buttonPage(props.page - 1)}
      >
        &lt;
      </button>
      <button
        disabled={props.page === 1}
        onClick={() => buttonPage(1)}>
        Page 1
      </button>
      <form onSubmit={enterPage}>
        <input
        name="page"
        type="number"
        value={page}
        min={1}
        max={props.pagemax}
        onChange={(e) => setPage(parseInt(e.target.value))} />
      </form>
      <button
        disabled={props.page === props.pagemax}
        onClick={() => buttonPage(props.pagemax)}
      >
        Page {props.pagemax}
      </button>
      <button
        disabled={props.page === props.pagemax}
        onClick={() => buttonPage(props.page + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
