import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RequestApproval() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-normal">
            Request Approval
          </DialogTitle>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-xl" htmlFor="document-title">
              Document Title
            </label>
            <Input
              id="document-title"
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
            <label className="text-xl" htmlFor="deadline">
              Deadline
            </label>
            <div className="relative">
              <Input
                id="deadline"
                className="h-12 pl-12 text-base placeholder:text-muted-foreground/60"
                placeholder="YYYY-MM-DD"
              />
              <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/60" />
            </div>
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
        <div className="flex justify-end space-x-4">
          <Button className="h-12 w-[140px] rounded-lg bg-[#000033] text-base font-normal hover:bg-[#000033]/90">
            Request
          </Button>
          <Button
            variant="ghost"
            className="h-12 w-[140px] rounded-lg text-base font-normal hover:bg-muted"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
