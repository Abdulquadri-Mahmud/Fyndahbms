import { MoreHorizontal, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilePreview from "@/components/document-management/FilePreview";
import FilterDialog from "@/components/document-management/FilterCard";
import RequestApproval from "@/components/document-management/RequestApproval";

export default function DocumentManagement() {
  const [openModal, setOpenModal] = useState(null); // To track the currently open modal
  const [modalProps, setModalProps] = useState({}); // To store dynamic data for modals

  // Generic function to open a modal
  const handleOpenModal = (modalType, props = {}) => {
    setOpenModal(modalType);
    setModalProps(props);
  };

  // Function to close modals
  const handleCloseModal = () => {
    setOpenModal(null);
    setModalProps({});
  };

  // Sample document data
  const documents = Array.from({ length: 8 }).map((_, i) => ({
    name: `Document ${i + 1}`,
    category: i % 2 === 0 ? "Blueprint" : "Approval",
    lastModified: "2023-10-05",
    version: `v${i + 1}.0`,
    status: i % 3 === 0 ? "Approved" : i % 3 === 1 ? "Pending" : "Ongoing",
    uploadedBy: `User ${i + 1}`,
    description: `Description for Document ${i + 1}`,
  }));

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-[#000033]">Dashboard</h1>
            <span className="text-2xl text-[#FF6B6B]">
              / Project Management
            </span>
          </div>
          <Tabs defaultValue="document" className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent gap-8">
              <TabsTrigger
                value="planning"
                className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none px-0 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#FF6B6B]"
              >
                Project planning & Allocation
              </TabsTrigger>
              <TabsTrigger
                value="progress"
                className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none px-0 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#FF6B6B]"
              >
                Progress monitoring & Reporting
              </TabsTrigger>
              <TabsTrigger
                value="document"
                className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none px-0 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#FF6B6B]"
              >
                Document Management
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Document Repository */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Document Repository</h2>
              <p className="text-sm text-muted-foreground">
                Centralized platform for securely storing, organizing, and
                accessing important documents easily
              </p>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => handleOpenModal("filter")}
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <Table>
            <TableHeader className="bg-[#4338ca] text-white">
              <TableRow>
                <TableHead className="text-white">Document Name</TableHead>
                <TableHead className="text-white">Category</TableHead>
                <TableHead className="text-white">Last Modified</TableHead>
                <TableHead className="text-white">Version</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white w-[50px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 1 ? "bg-muted/50" : ""}
                >
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.lastModified}</TableCell>
                  <TableCell>{doc.version}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        doc.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : doc.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            handleOpenModal("filePreview", { file: doc })
                          }
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleOpenModal("filePreview", { file: doc })
                          }
                        >
                          Download
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Approval Workflow */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Approval Workflow</h2>
              <h3 className="font-medium">Approval Status Table</h3>
              <p className="text-sm text-muted-foreground">
                Table displaying current approval status, reviewer names, and
                decision timestamps.
              </p>
            </div>
            <Button
              className="bg-[#000033] hover:bg-[#000033]/90"
              onClick={() => handleOpenModal("requestApproval")}
            >
              Request Approval
            </Button>
          </div>
          {/* Placeholder Approval Table */}
          <Table>
            <TableHeader className="bg-[#4338ca] text-white">
              <TableRow>
                <TableHead className="text-white">Document Name</TableHead>
                <TableHead className="text-white">Approver</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Due Date</TableHead>
                <TableHead className="text-white w-[50px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 8 }).map((_, i) => (
                <TableRow key={i} className={i % 2 === 1 ? "bg-muted/50" : ""}>
                  <TableCell>Phase 1 - Structural Blueprint</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        i % 3 === 0
                          ? "bg-green-100 text-green-700"
                          : i % 3 === 1
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {i % 3 === 0
                        ? "Approved"
                        : i % 3 === 1
                        ? "Pending"
                        : "Ongoing"}
                    </span>
                  </TableCell>
                  <TableCell>2023-10-05</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modals */}
      {openModal === "filter" && <FilterDialog onClose={handleCloseModal} />}
      {openModal === "filePreview" && (
        <FilePreview {...modalProps.file} onClose={handleCloseModal} />
      )}
      {openModal === "requestApproval" && (
        <RequestApproval onClose={handleCloseModal} />
      )}
    </div>
  );
}
