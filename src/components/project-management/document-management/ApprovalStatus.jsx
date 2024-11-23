import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ApprovalStatus() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-normal">
            Approval Status
          </DialogTitle>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-xl" htmlFor="document-types">
              Document Types
            </label>
            <Input
              id="document-types"
              className="h-12 text-base placeholder:text-muted-foreground/60"
              placeholder="Enter Document type"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xl" htmlFor="approver">
              Approver
            </label>
            <Input
              id="approver"
              className="h-12 text-base placeholder:text-muted-foreground/60"
              placeholder="Enter Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xl">Status</label>
            <Select>
              <SelectTrigger className="h-12 text-base placeholder:text-muted-foreground/60">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xl" htmlFor="comment">
              Comment
            </label>
            <Textarea
              id="comment"
              className="min-h-[80px] resize-none text-base placeholder:text-muted-foreground/60"
              placeholder="Enter Comment"
            />
          </div>
        </div>
        <Button className="h-12 w-full rounded-lg bg-[#000033] text-base font-normal hover:bg-[#000033]/90">
          Filter
        </Button>
      </DialogContent>
    </Dialog>
  );
}
