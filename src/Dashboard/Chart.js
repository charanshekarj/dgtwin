import "../styles.css";
import React from "react";
import {
  ResponsiveContainer,
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
          temp: 39,
          humidity: 56
        },
        {
          name: "01 PM",
          temp: 43,
          humidity: 40
        },
        {
          name: "02 PM",
          temp: 38,
          humidity: 32
        },
        {
          name: "03 PM",
          temp: 35,
          humidity: 17
        },
        {
          name: "04 PM",
          temp: 40,
          humidity: 38
        },
        {
          name: "06 PM",
          temp: 27,
          humidity: 28
        },
        {
          name: "07 PM",
          temp: 23,
          humidity: 31
        }
      ];

        const renderCustomLabel = ({ x, y, value }) => {
          return <text style={{fontSize:"12px"}} x={x} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}%`}</text>;
        };
      
  return (
    <div style={{ width: '100%' }} className="container">
      <h4>Calfus Weather</h4>
      <h6>Temperature</h6>
      <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
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
        <Brush />
        <Area type="monotone" dataKey="temp" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
      </ResponsiveContainer>
      
      <h6>Humidity</h6>
      
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
        <Line type="monotone" dataKey="humidity" stroke="#8884d8" fill="#8884d8" label={renderCustomLabel}/>
      </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart