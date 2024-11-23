import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterDialog({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <Card className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Filter</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Date Range Filters */}
          <div className="flex gap-3">
            {["Today", "Last 7 days", "Last 30 days", "YTD"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className="text-sm font-normal"
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Custom Date Range */}
          <div className="relative">
            <Select>
              <SelectTrigger className="w-full bg-white">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <SelectValue placeholder="Start Date - End Date" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Range</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Document Types */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Document Types</h3>
            <Input
              type="text"
              placeholder="Enter Document type"
              className="w-full bg-white"
            />
          </div>

          {/* Status Filter */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Status</h3>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter Button */}
          <Button
            className="w-full bg-[#000033] hover:bg-[#000044] text-white py-6 text-lg"
            onClick={onClose}
          >
            Apply Filter
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}