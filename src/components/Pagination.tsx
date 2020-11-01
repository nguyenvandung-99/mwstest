import React, { useState } from "react";

export default function Pagination(props: any) {
  
  const [page, setPage] = useState(props.page);

  const enterPage = (e: any) => { // enter the page
    e.preventDefault();
    props.pageNavi(page);
  }

  const buttonPage = (page: number) => { // click to go to page
    setPage(page);
    props.pageNavi(page);
  }
  
  return (
    <>
      <button
        disabled={props.page === 1}
        onClick={() => buttonPage(props.page - 1)}
      >
        &lt;
      </button>
      <button
        disabled={props.page === 1}
        onClick={() => buttonPage(1)}>
        Begin
      </button>
      <span onSubmit={(e) => enterPage(e)}>
        <input
        name="page"
        type="number"
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value))} />
      </span>
      <button
        disabled={props.page === props.pagemax}
        onClick={() => buttonPage(props.pagemax)}
      >
        End
      </button>
      <button
        disabled={props.page === props.pagemax}
        onClick={() => buttonPage(props.page + 1)}
      >
        &gt;
      </button>
    </>
  );
}
