import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuditScheduler from "./pages/be_compliance_risk/AuditScheduler";
import CertificationTracker from "./pages/be_compliance_risk/CertificationTracker";
import ComplianceTracker from "./pages/be_compliance_risk/ComplianceTracker";
import CorrecctiveActionTracker from "./pages/be_compliance_risk/CorrectiveActionTracker";
import MitigationPlanner from "./pages/be_compliance_risk/MitigationPlannerr";
import PolicyRepository from "./pages/be_compliance_risk/PolicyRepository";
import RiskDashboard from "./pages/be_compliance_risk/RiskDashboard";
import AuditReportGenerator from "./pages/be_compliance_risk/AuditReportGenerator";
import SignUp from "./pages/SignUp";
// import DocumentManagement from "./pages/project-management/DocumentManagement";
// import ProjectManagement from "./pages/project-management/ProjectManagement";
import Layout from "./layouts/Layout";
import Procurement from "./pages/be_supply_vendor/Procurement/Procurement";
import All_orders from "./pages/be_supply_vendor/Procurement/All_orders";
import New_suppler from "./pages/be_supply_vendor/Supplier/New_suppler";
import Supplier from "./pages/be_supply_vendor/Supplier/Supplier";
import Contract_management from "./pages/be_supply_vendor/Supplier/Contract_management";
import Compliance_verification from "./pages/be_supply_vendor/Supplier/Compliance_verification";
import Supplier_profile from "./pages/be_supply_vendor/Supplier/Supplier_profile";
import SearchableSelect from "./components/supplier-vendor-management/test";
import Scheduling from "./pages/be_front_office/scheduling_appointment/Scheduling";
import Checkin from "./pages/be_front_office/scheduling_appointment/Checkin";
import Inquiry_tracking from "./pages/be_front_office/inquiry_traking/Inquiry_tracking";
import Resolution_management from "./pages/be_front_office/inquiry_traking/Resolution_management";
import SchedulingCalendars from "./components/front-office-management/Shcdule_event/SchedulingCalendars";
import StaffCalendar from "./components/front-office-management/Shcdule_event/StaffCalendar";
import Feedback from "./pages/be_front_office/inquiry_traking/Feedback";
import StaffReviews from "./pages/be_front_office/scheduling_appointment/StaffReviews";

// import Scheduling from "./pages/be_front_office/scheduling_appointment/Scheduling";
// import Tickets from "./pages/be_front_office/tickets/Tickets";
// import SchedulingCalendar from "./pages/be_front_office/scheduling_appointment/calendar-component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUp />} />
          {/* <Route path="/project-management" element={<ProjectManagement />} /> */}
          {/* <Route path="/document-management" element={<DocumentManagement />} /> */}
          <Route path="mitigation-planner" element={<MitigationPlanner />} />
          <Route
            path="/audit-report-generator"
            element={<AuditReportGenerator />}
          />
          <Route path="/audit-scheduler" element={<AuditScheduler />} />
          <Route
            path="/certification-tracker"
            element={<CertificationTracker />}
          />
          <Route path="/compliance-tracker" element={<ComplianceTracker />} />
          <Route
            path="/corrective-action-tracker"
            element={<CorrecctiveActionTracker />}
          />
          <Route path="policy-repository" element={<PolicyRepository />} />
          <Route path="/risk-dashboard" element={<RiskDashboard />} />

          {/* suply & vendors routes */}
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/all-orders" element={<All_orders />} />
          <Route path="/new-supplier" element={<New_suppler />} />
          <Route path="/supplier-profile" element={<Supplier_profile />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/contract-management" element={<Contract_management />} />
          <Route path="/compliance-verification" element={<Compliance_verification />} />
          <Route path="/test" element={<SearchableSelect/>} />

          {/* scheduling & appointment */}
          <Route path="/scheduling" element={<Scheduling/>}/>
          <Route path="/checkin" element={<Checkin/>}/>
          <Route path="/StaffCalendar" element={<StaffCalendar/>}/>
          <Route path="/calendar" element={<SchedulingCalendars/>}/>
          <Route path="/staff-reviews" element={<StaffReviews/>}/>
          
          {/* Inquiry Tracking */}
          <Route path="/inquiry-tracking" element={<Inquiry_tracking/>}/>
          <Route path="/resolution-management" element={<Resolution_management/>}/>
          <Route path="/view-template" element={<Inquiry_tracking/>}/>
          <Route path="/feedback" element={<Feedback/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
