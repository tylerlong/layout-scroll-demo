import { Button, Input, Layout, theme } from "antd";
import React from "react";
import MarkPlus from "react-markplus";

const { Header, Content, Footer } = Layout;

const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Header>Header</Header>
      <Content style={{ padding: "1rem 2rem" }}>
        <div
          style={{
            background: colorBgContainer,
            height: "100%",
            padding: "1rem",
            borderRadius: borderRadiusLG,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input placeholder="Basic usage" style={{ marginBottom: "1rem" }} />
          <div style={{ flex: 1, overflow: "hidden" }}>
            <MarkPlus markdown="# Hello world" />
          </div>
          <Button block style={{ marginTop: "1rem" }}>Finish Editing</Button>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Main;
