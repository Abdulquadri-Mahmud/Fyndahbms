import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export const Header = () => (
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center gap-2">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <span className="text-muted-foreground">/</span>
      <span className="text-primary">Project Management</span>
    </div>
    <div className="flex items-center gap-4">
      <Select defaultValue="30">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7">Last 7 days</SelectItem>
          <SelectItem value="30">Last 30 days</SelectItem>
          <SelectItem value="90">Last 90 days</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="default">Add New Project</Button>
    </div>
  </div>
);