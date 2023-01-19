import * as React from 'react';
import "./Header.css"

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div>
      <header className="header">
      <div className="header_left">
        <h1 className="header_left_context">Logo</h1>
        <a href="#" className="header_left_context link">
         Sign Up
        </a>
        <a href="#" className="header_left_context link">
          Login
        </a>
      </div>
      <div className="header_mid_context">
        <a href="#" className="link">About</a>
      </div>
      <div className="header_right_context">
        <a href="#">Post A Song</a>
      </div>
    </header>
    </div>
  );
}