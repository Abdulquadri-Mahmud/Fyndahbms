import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PermissionSetting() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-normal">
            Permission Settings
          </DialogTitle>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-xl" htmlFor="role-name">
              Role Name
            </label>
            <Input
              id="role-name"
              className="h-12 text-base placeholder:text-muted-foreground/60"
              placeholder="Enter Document type"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xl">Permissions</Label>
            <RadioGroup className="space-y-4 border rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="view" id="view" />
                <Label htmlFor="view" className="text-base font-normal">
                  View
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="edit" id="edit" />
                <Label htmlFor="edit" className="text-base font-normal">
                  Edit
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approve" id="approve" />
                <Label htmlFor="approve" className="text-base font-normal">
                  Approve
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comment" id="comment" />
                <Label htmlFor="comment" className="text-base font-normal">
                  Comment
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Button className="h-12 w-[140px] rounded-lg bg-[#000033] text-base font-normal hover:bg-[#000033]/90">
            Save
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
