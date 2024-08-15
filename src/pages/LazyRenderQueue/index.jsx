import React from 'react';
import './index.css'
import {A, B, C} from "./normalRender";
import createLazyRender from "./LazyRender";

const HOC = createLazyRender();

const LA = HOC(A);
const LB = HOC(B);
const LC = HOC(C);

// NOTE: this demo is not working in strict mode
export default function LazyRenderQueue() {
  return (
    <div>
      <h1>LazyRenderQueue</h1>
      <h2>normalRender</h2>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <A msg={'a'}/>
        <B msg={'b'}/>
        <C msg={'c'}/>
      </div>
      <h2>LazyRender</h2>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <LA msg={'la'}/>
        <LB msg={'lb'}/>
        <LC msg={'lc'}/>
      </div>
    </div>
  );
}
