import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Clock, Flag, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/project-management/Header";
import { StatCard } from "@/components/project-management/StatCard";
import { Card } from "@/components/ui/card";
import { ProjectRow } from "@/components/project-management/ProjectRow";
import { OverallProgress } from "@/components/project-management/OverallProgress";

const statsData = [
  {
    title: "Total Projects",
    value: "95/100",
    icon: <Building2 className="w-6 h-6 text-orange-500" />,
    bgColor: "bg-orange-100",
    increment: "↑ 15% increase from last month",
    incrementColor: "text-green-500",
  },
  {
    title: "Budget",
    value: "$53,00989",
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    bgColor: "bg-purple-100",
    increment: "↑ 12% increase from last month",
    incrementColor: "text-green-500",
  },
  {
    title: "Milestones",
    value: "8/13 total",
    icon: <Flag className="w-6 h-6 text-blue-500" />,
    bgColor: "bg-blue-100",
    increment: "↑ 8% increase from last month",
    incrementColor: "text-green-500",
  },
  {
    title: "Resources",
    value: "101/120",
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    bgColor: "bg-yellow-100",
    increment: "↑ 5% increase from last month",
    incrementColor: "text-green-500",
  },
];

const ProjectManagement = () => {
  return (
    <div className="p-6">
      <Header />
      <div className="grid grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <Tabs defaultValue="project" className="mb-6">
        <TabsList>
          <TabsTrigger value="project">Project</TabsTrigger>
          <TabsTrigger value="planning">
            Project Planning & Allocation
          </TabsTrigger>
          <TabsTrigger value="monitoring">
            Progress Monitoring & Reporting
          </TabsTrigger>
          <TabsTrigger value="document">Document Management</TabsTrigger>
        </TabsList>
        <TabsContent value="project">
          <div className="grid grid-cols-[2fr,1fr] gap-6">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Project Summary</h2>
                  <div className="flex gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Project" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Projects</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Project Manager" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Managers</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
                    <div>Milestone Name</div>
                    <div>Project Manager</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div>Progress</div>
                  </div>
                  <ProjectRow
                    name="Helsa web development"
                    manager="Jane Cooper"
                    date="May 25, 2023"
                    status="completed"
                    progress={100}
                  />
                  <ProjectRow
                    name="Datascale AI app"
                    manager="Esther Howard"
                    date="Jun 20, 2023"
                    status="pending"
                    progress={25}
                  />
                  <ProjectRow
                    name="Media channel branding"
                    manager="Jacob Jones"
                    date="July 13, 2023"
                    status="pending"
                    progress={45}
                  />
                  <ProjectRow
                    name="Cortex iOS app developement"
                    manager="Guy Hawkins"
                    date="Dec 20, 2023"
                    status="completed"
                    progress={100}
                  />
                  <ProjectRow
                    name="Website builder development"
                    manager="Wade Warren"
                    date="Mar 15, 2024"
                    status="ongoing"
                    progress={15}
                  />
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">95</div>
                      <div className="text-sm text-muted-foreground">
                        Total projects
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-green-500">
                        26
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Completed
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-yellow-500">
                        35
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Pending
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-orange-500">
                        35
                      </div>
                      <div className="text-sm text-muted-foreground">
                        On going
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-border" />
                  <div className="space-y-4">
                    <TaskRow
                      title="Research"
                      duration="10 days"
                      status="pending"
                      progress={2}
                    />
                    <TaskRow
                      title="Competitor Analysis"
                      duration="7 days"
                      status="completed"
                      progress={100}
                    />
                    <TaskRow
                      title="Design"
                      duration="7 days"
                      status="ongoing"
                      progress={35}
                    />
                    <TaskRow
                      title="Development"
                      duration="7 days"
                      status="pending"
                      progress={45}
                    />
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Overall Progress</h2>
              <div className="relative aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold">72%</div>
                    <div className="text-sm text-muted-foreground">
                      Complete
                    </div>
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
              {/* <div className="mt-6 space-y-4">
                <TimelineItem
                  title="Design"
                  date="Oct 21 - Dec 5, 2023"
                  status="completed"
                />
                <TimelineItem
                  title="Development"
                  date="Dec 6 - Dec 20, 2023"
                  status="in-progress"
                />
                <TimelineItem
                  title="Testing"
                  date="Dec 6 - Dec 20, 2023"
                  status="pending"
                />
                <TimelineItem
                  title="Deployment"
                  date="Dec 6 - Dec 20, 2023"
                  status="completed"
                />
                <TimelineItem
                  title="Review"
                  date="Oct 5 - Oct 20, 2023"
                  status="in-progress"
                />
                <TimelineItem
                  title="Feedback"
                  date="Oct 21 - Dec 5, 2023"
                  status="pending"
                />
                <TimelineItem
                  title="Launch"
                  date="Dec 6 - Dec 20, 2023"
                  status="completed"
                />
                <TimelineItem
                  title="Maintenance"
                  date="Ongoing"
                  status="in-progress"
                />
              </div> */}
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="planning">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Project Planning & Allocation
            </h2>
            <p>Content for project planning and allocation goes here.</p>
          </Card>
        </TabsContent>
        <TabsContent value="monitoring">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Progress Monitoring & Reporting
            </h2>
            <p>Content for progress monitoring and reporting goes here.</p>
          </Card>
        </TabsContent>
        <TabsContent value="document">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Document Management</h2>
            <p>Content for document management goes here.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectManagement;

function TaskRow({ title, duration, status, progress }) {
  return (
    <>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{duration}</div>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium
          ${status === "completed" ? "bg-green-100 text-green-700" : ""}
          ${status === "pending" ? "bg-yellow-100 text-yellow-700" : ""}
          ${status === "ongoing" ? "bg-orange-100 text-orange-700" : ""}
        `}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <div className="w-[100px]">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        <OverallProgress />
      </div>
    </>
  );
}
