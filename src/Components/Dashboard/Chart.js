import "./styles.css";
import React, {useState, useEffect} from "react";
import {
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area
} from "recharts";

const Chart = () => {

    const data = [
        {
          name: "12 PM",
          temperature: 39,
          humidity: 56
        },
        {
          name: "01 PM",
          temperature: 43,
          humidity: 40
        },
        {
          name: "02 PM",
          temperature: 38,
          humidity: 32
        },
        {
          name: "03 PM",
          temperature: 35,
          humidity: 17
        },
        {
          name: "04 PM",
          temperature: 40,
          humidity: 38
        },
        {
          name: "06 PM",
          temperature: 27,
          humidity: 28
        },
        {
          name: "07 PM",
          temperature: 23,
          humidity: 31
        }
      ];

        const renderCustomLabel = ({ x, y, value }) => {
          return <text style={{fontSize:"12px"}} x={x} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}%`}</text>;
        };

        const DigitalClock = () => {
          const [time, setTime] = useState(new Date());
        
          useEffect(() => {
            const interval = setInterval(() => {
              setTime(new Date());
            }, 1000);
            return () => clearInterval(interval);
          }, []);
        
          const formatTime = (time) => {
            return time.toLocaleTimeString([], { hour12: true });
          };
        
          return <div style={{color:"red"}}>{formatTime(time)}</div>;
        }
        
      
  return (
    <div className="container">
      <h4 className="mt-4 d-flex"> Room's Vibe: &nbsp;{DigitalClock()} </h4>
      <h6 style={{textAlign:"center"}}>Temperature</h6>
      <ResponsiveContainer width="100%" height={250} className="mb-4">
      <AreaChart
        width={500}
        height={250}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush fill="#c4f8ef"/>
        <Area type="monotone" dataKey="temperature" stroke="#ff1414" fill="#ffb066" />
      </AreaChart>
      </ResponsiveContainer>
      
      <h6 style={{textAlign:"center"}}>Humidity</h6>
      
      <ResponsiveContainer width="100%" height={140}>
      <LineChart
        width={500}
        height={140}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="humidity" stroke="#650094" fill="#8884d8" label={renderCustomLabel}/>
      </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart