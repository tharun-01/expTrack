import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, DatePicker } from "antd";
import { useState } from "react";
import { sample, todo } from "./services/expservices";
import moment from 'moment';
import MyDay from "./components/myday/MyDay";

const { Header, Content, Footer } = Layout;
function App() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("2021-01-08");
  const handleClick = (e) => {
    console.log(e.key);
    setPage(e.key);
  };
  return (
    <Layout className="layout">
      <Header style={{ height: "10vh", position:"relative" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          onClick={(e) => handleClick(e)}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">My Day</Menu.Item>
          <Menu.Item key="2">Add Items</Menu.Item>
          <Menu.Item key="3">Billing</Menu.Item>
        </Menu>
        <DatePicker defaultValue={moment('2021-01-08', 'YYYY-MM-DD')}  style={{position:"absolute" , right:'10%',bottom:"30%"}} onChange={(date, dateStr) => setDate(dateStr)} />
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "90vh" ,paddingBottom:"10vh"}}>
        <div className="site-layout-content">{page == 1 && <MyDay currDay={date}/>}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        Made with ❤ by Tharun
      </Footer>
    </Layout>
  );
}

export default App;
