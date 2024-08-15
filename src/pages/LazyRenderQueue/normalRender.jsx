import React, {useEffect} from "react";

export function A(props) {
  useEffect(() => {console.log("A is rendered")}, []);
  return <div className={"component-a flex-center-box"}>`A {props.msg}`</div>;
}

export function B(props) {
  useEffect(() => {console.log("B is rendered")}, []);
  return <div className={"component-b flex-center-box"}>`B: {props.msg}`</div>;
}

export function C(props) {
  useEffect(() => {console.log("C is rendered")}, []);
  return <div className={"component-c flex-center-box"}>`C: {props.msg}`</div>;
}
