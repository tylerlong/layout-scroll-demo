import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </StrictMode>,
);
