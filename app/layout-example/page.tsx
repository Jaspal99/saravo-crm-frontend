import React from "react";
import {
  PageLayout,
  Header,
  Sidebar,
  Container,
  Button,
  Avatar,
  Card,
  TopNav,
} from "../../components";

export default function Page() {
  const header = (
    <Header>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Saravo CRM</div>
        <div className="flex items-center gap-3">
          <TopNav>
            <div className="flex items-center gap-2">
              <Avatar alt="JS" />
              <Button variant="ghost">Sign out</Button>
            </div>
          </TopNav>
        </div>
      </div>
    </Header>
  );

  const sidebar = (
    <div className="flex flex-col gap-2">
      <Button variant="ghost" className="w-full text-left">Dashboard</Button>
      <Button variant="ghost" className="w-full text-left">Contacts</Button>
      <Button variant="ghost" className="w-full text-left">Reports</Button>
      <Button variant="ghost" className="w-full text-left">Settings</Button>
    </div>
  );

  return (
    <PageLayout header={header} sidebar={sidebar} footer={<div className="text-center text-sm text-gray-500">© 2026 Saravo</div>}>
      <Container>
        <h1 className="text-2xl font-semibold mb-4">Welcome to the layout example</h1>
        <div className="grid grid-cols-2 gap-4">
          <Card title={<span className="font-medium">Overview</span>}>
            <p className="text-sm text-gray-700">This area shows your most important stats and quick actions.</p>
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
