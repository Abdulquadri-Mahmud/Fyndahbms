import React, { useState, useEffect } from "react";

const ComplianceLogs = () => {
  // State to store the compliance logs
  const [logs, setLogs] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors (optional)
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the API
    const fetchComplianceLogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/compliance-logs");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setLogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplianceLogs();
  }, []); // Empty dependency array ensures this runs only once (on component mount)

  // Render loading state, error, or the actual logs
  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Compliance Logs</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Action Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Compliance Type
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Responsible Person
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-700">{log.id}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {new Date(log.action_date).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {log.compliance_type}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {log.responsible_person}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceLogs;
