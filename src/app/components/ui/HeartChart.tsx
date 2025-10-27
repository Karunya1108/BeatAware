"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface HeartChartProps {
  data: { time: string; bpm: number }[];
}

export default function HeartChart({ data }: HeartChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis domain={[40, 180]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="bpm"
          stroke="#e11d48"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
