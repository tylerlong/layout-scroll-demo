import { Layout, theme } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: "1rem 2rem" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: "1rem",
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Main;
