import React from "react";

export default function Pagination(props: any) {
  console.log(props.max);
  return (
    <>
      <button
        disabled={props.page === 1}
        onClick={() => props.pageNavi(props.page - 1)}
      >
        &lt;
      </button>
      <button disabled={props.page === 1} onClick={() => props.pageNavi(1)}>
        Begin
      </button>
      <span> Page {props.page} </span>
      <button
        disabled={props.page === props.max}
        onClick={() => props.pageNavi(props.max)}
      >
        End
      </button>
      <button
        disabled={props.page === props.max}
        onClick={() => props.pageNavi(props.page + 1)}
      >
        &gt;
      </button>
    </>
  );
}
