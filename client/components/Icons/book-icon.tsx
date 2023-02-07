import React from "react";

export default function SvgBook(props: any) {
  return (
    <svg
      {...props}
      width="19"
      height="19"
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3 2.4c-1.6 0-2.8 1.2-2.8 2.8v17.1c0 1.6 1.2 2.9 2.8 2.9h16.1V2.4H7.3zm0 1.9h14.2v15.2H7.3c-.3 0-.7.1-.9.2V5.2c0-.5.4-.9.9-.9zm0 17.1h14.2v1.9H7.3c-.6 0-.9-.4-.9-.9 0-.6.4-1 .9-1z"
        fill="currentColor"
      />
      <path d="M8.8 7.2h10.9v2.4H8.8z" fill="currentColor" />
    </svg>
  );
}
