import * as React from 'react';
import "./open.scss"

export interface IOpenProps {
}

export function Open (props: IOpenProps) {
  return (
    <div className='open-main'>
      <h1>Writing Creating Together</h1>
      <button className='open-main_start-button'>Start writing</button>
    </div>
  );
}
