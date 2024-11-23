import { Card } from "./ui/card";

export const GenericCard = ({ title }) => (
  <Card className="p-6">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <p>Content for {title.toLowerCase()} goes here.</p>
  </Card>
);