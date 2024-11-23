import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export const ProjectFilters = () => (
  <div className="flex gap-4">
    {["Project", "Project Manager", "Status"].map((placeholder, index) => (
      <Select defaultValue="all" key={index}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All {placeholder}</SelectItem>
        </SelectContent>
      </Select>
    ))}
  </div>
);