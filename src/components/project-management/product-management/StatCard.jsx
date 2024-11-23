import { Card } from "./ui/card";

export const StatCard = ({ title, value, icon, bgColor, increment, incrementColor }) => (
  <Card className="p-6">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${bgColor}`}>{icon}</div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`text-xs ${incrementColor}`}>{increment}</div>
      </div>
    </div>
  </Card>
);