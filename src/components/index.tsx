import * as React from 'react';
import * as ReactDom from 'react-dom'
import axios from 'axios'
const DEV_SVR = "https://dev.dummy-svr.com";
const PROD_SVR = "https://prod.dummy-svr.com";
const METRIC_ENDPOINT = "/metrics";

const API_URL = process.env.NODE_ENV !=="production"?DEV_SVR+METRIC_ENDPOINT:PROD_SVR+METRIC_ENDPOINT;

function genQuery(timeRange: string, componentName: string, seed: number) {
return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${(seed%7)==0?'true':'false'}`;
}
function Loading() {
    return <h2>Loading</h2>;
}
interface IProps {
    timeRange: string;
} 
function  C1(props: IProps){
    const [data, setData] = React.useState("")
    const [isLoading, setLoading] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);    
    const refreshInterval_Secs = 60;
    const query = genQuery(props.timeRange, "c1", Math.random());
    const componentIsMounted = React.useRef(true);

    React.useEffect(() => {
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        async function fetchData() {            
            setLoading(true)
            try {
                const asyncResponse = await axios({
                    url:API_URL,
                    method:'post',
                    params:query
                });
                setLoading(false)
                setIsFirst(false)
                setData(asyncResponse.data);
            } catch (err) {
                setLoading(false)
                setIsFirst(false)
                setData("Couldn't get data")
            }
        }
        fetchData()
        let timerId = setInterval(()=>{
            // setSeconds(seconds => seconds + 1);
            fetchData()
        }, refreshInterval_Secs*1000)       
        return ()=>clearInterval(timerId)
    }, []);
    if(isLoading && isFirst) return <Loading />
    return <>Hi {data}</>;
}
function C2(props: IProps) {
    const [data, setData] = React.useState("")
    const [isLoading, setLoading] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);    
    const refreshInterval_Secs =10;
    const query = genQuery(props.timeRange, "c2", Math.random());
    const componentIsMounted = React.useRef(true);

    React.useEffect(() => {
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        async function fetchData() {            
            setLoading(true)
            try {
                const asyncResponse = await axios({
                    url:API_URL,
                    method:'post',
                    params:query
                });
                setLoading(false)
                setIsFirst(false)
                setData(asyncResponse.data);
            } catch (err) {
                setLoading(false)
                setIsFirst(false)
                setData("Couldn't get data")
            }
        }
        fetchData()
        let timerId = setInterval(()=>{
            // setSeconds(seconds => seconds + 1);
            fetchData()
        }, refreshInterval_Secs*1000)       
        return ()=>clearInterval(timerId)
    }, []);
    if(isLoading && isFirst) return <Loading /> 
    return <>Hello there {data}</>;
}
function C3(props: IProps) {
    const [data, setData] = React.useState("")
    const [isLoading, setLoading] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);    
    const refreshInterval_Secs = 15;
    const query = genQuery(props.timeRange, "c3", Math.random());
    const componentIsMounted = React.useRef(true);

    React.useEffect(() => {
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        async function fetchData() {            
            setLoading(true)
            try {
                const asyncResponse = await axios({
                    url:API_URL,
                    method:'post',
                    params:query
                });
                setLoading(false)
                setIsFirst(false)
                setData(asyncResponse.data);
            } catch (err) {
                setLoading(false)
                setIsFirst(false)
                setData("Couldn't get data")
            }
        }
        fetchData()
        let timerId = setInterval(()=>{
            // setSeconds(seconds => seconds + 1);
            fetchData()
        }, refreshInterval_Secs*1000)       
        return ()=>clearInterval(timerId)
    }, []);
    if(isLoading && isFirst) return <Loading /> 
    return <>Charlie {data} Tango</>;
}
function C4(props: IProps) {
    const [data, setData] = React.useState("")
    const [isLoading, setLoading] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);    
    const refreshInterval_Secs = 42;
    const query = genQuery(props.timeRange, "c4", Math.random());
    const componentIsMounted = React.useRef(true);

    React.useEffect(() => {
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        async function fetchData() {            
            setLoading(true)
            try {
                const asyncResponse = await axios({
                    url:API_URL,
                    method:'post',
                    params:query
                });
                setLoading(false)
                setIsFirst(false)
                setData(asyncResponse.data);
            } catch (err) {
                setLoading(false)
                setIsFirst(false)
                setData("Couldn't get data")
            }
        }
        fetchData()
        let timerId = setInterval(()=>{
            // setSeconds(seconds => seconds + 1);
            fetchData()
        }, refreshInterval_Secs*1000)       
        return ()=>clearInterval(timerId)
    }, []);
    if(isLoading && isFirst) return <Loading />
    return <>A fox jumped {data}</>;
}
function C5(props: IProps) {
    const [data, setData] = React.useState("")
    const [isLoading, setLoading] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);    
    const refreshInterval_Secs = 32;
    const query = genQuery(props.timeRange, "c5", Math.random());
    const componentIsMounted = React.useRef(true);

    React.useEffect(() => {
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        async function fetchData() {            
            setLoading(true)
            try {
                const asyncResponse = await axios({
                    url:API_URL,
                    method:'post',
                    params:query
                });
                setLoading(false)
                setIsFirst(false)
                setData(asyncResponse.data);
            } catch (err) {
                setLoading(false)
                setIsFirst(false)
                setData("Couldn't get data")
            }
        }
        fetchData()
        let timerId = setInterval(()=>{
            // setSeconds(seconds => seconds + 1);
            fetchData()
        }, refreshInterval_Secs*1000)       
        return ()=>clearInterval(timerId)
    }, []);
    if(isLoading && isFirst) return <Loading /> 
    
    return <>{data} is king</>;
}

function App(){

    return(
        <>
            <C1 timeRange={'100'} />
            <br/>
            <C2 timeRange={'100'} />
            <br/>
            <C3 timeRange={'100'} />            
            <br/>
            <C4 timeRange={'100'} />            
            <br/>
            <C5 timeRange={'100'} />            
            <br/>
        </>
    )
}
ReactDom.render(
    <App/>,
    document.getElementById("output")
);