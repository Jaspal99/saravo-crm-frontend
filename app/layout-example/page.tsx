import { PageLayout, Container, Button, Card } from "../../components";

export default function Page() {
  return (
    <PageLayout>
      <Container>
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the layout example
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <Card title={<span className="font-medium">Overview</span>}>
            <p className="text-sm text-gray-700">
              This area shows your most important stats and quick actions.
            </p>
            <div className="mt-3 flex gap-2">
              <Button>New Contact</Button>
              <Button variant="secondary">Import</Button>
            </div>
          </Card>

          <Card title={<span className="font-medium">Recent Activity</span>}>
            <ul className="text-sm text-gray-700">
              <li>Call with Acme Corp — 2h ago</li>
              <li>Signed contract — 1d ago</li>
              <li>Imported leads — 3d ago</li>
            </ul>
          </Card>
        </div>
      </Container>
    </PageLayout>
  );
}
