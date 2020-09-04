import * as React from 'react';
const DEV_SVR = "https://dev.dummy-svr.com";
const PROD_SVR = "https://prod.dummy-svr.com";
const METRIC_ENDPOINT = "/metrics";


function genQuery(timeRange: string, componentName: string, seed: number) {
return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${(seed%7)==0?'true':'false'}`;
}
function Loading() {
    return <h2>Loading</h2>;
}
interface IProps {
    timeRange: string;
} 
function C1(props: IProps) {
    const refreshInterval_Secs = 60;
    const query = genQuery(props.timeRange, "c1", Math.random());
    const data = "dummy"//TODO fetch data;
    return <>Hi {data}</>;
}
function C2(props: IProps) {
    const refreshInterval_Secs = 10;
    const query = genQuery(props.timeRange, "c2", Math.random());
    const data = "dummy"//TODO fetch data;
    return <>Hello there {data}</>;
}
function C3(props: IProps) {
    const refreshInterval_Secs = 15;
    const query = genQuery(props.timeRange, "c3", Math.random());
    const data = "dummy"//TODO fetch data;
    return <>Charlie {data} Tango</>;
}
function C4(props: IProps) {
    const refreshInterval_Secs = 42;
    const query = genQuery(props.timeRange, "c4", Math.random());
    const data = "dummy"//TODO fetch data;
    return <>A fox jumped {data}</>;
}
function C5(props: IProps) {
    const refreshInterval_Secs = 30;
    const query = genQuery(props.timeRange, "c5", Math.random());
    const data = "dummy"//TODO fetch data;
    return <>{data} is king</>;
}