import { Progress } from "../ui/progress";

export const ProjectRow = ({ name, manager, date, status, progress }) => (
  <div className="grid grid-cols-5 items-center py-3 border-b last:border-0">
    <div className="font-medium">{name}</div>
    <div>{manager}</div>
    <div>{date}</div>
    <div>
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          status === "completed"
            ? "bg-green-100 text-green-700"
            : status === "pending"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
    <div className="w-full max-w-[180px]">
      <Progress value={progress} className="h-2" />
    </div>
  </div>
);
