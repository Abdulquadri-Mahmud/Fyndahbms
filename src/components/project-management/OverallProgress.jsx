import { Card } from "../ui/card";

export const OverallProgress = () => (
  <Card className="p-6">
    <h2 className="text-lg font-semibold mb-6">Overall Progress</h2>
    <div className="relative aspect-square">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl font-bold">72%</div>
          <div className="text-sm text-muted-foreground">Complete</div>
        </div>
      </div>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-muted stroke-current"
          strokeWidth="10"
          fill="none"
          r="40"
          cx="50"
          cy="50"
        />
      </svg>
    </div>
  </Card>
);