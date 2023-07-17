import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { ConfigProvider, theme } from "antd";

function App() {

  return (
    <>
      <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token:{
        colorText: "#fff",
        colorBgBase: "#202528",
        colorBgContainer: "#202528"
      }}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Customers />} />
              <Route path="projects" element={<Projects />} />
              <Route path="team" element={<Team />} />
              <Route path="users" element={<Users />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter><Outlet />
      </ConfigProvider>
    </>
  )

  // const [collapsed, setCollapsed] = useState(false);
  // const [token, setToken] = useState<Partial<AliasToken>>();
  // const [checked, setChecked] = useState<boolean>(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  // return (
  //   <ConfigProvider theme={{
  //     token: token,
  //   }}>
  //     <Row>
  //       <Col xl={3} md={4} xs={0}>
  //         <Menu
  //           defaultSelectedKeys={['1']}
  //           mode="inline"
  //           theme="dark"
  //           inlineCollapsed={collapsed}
  //           items={items}
  //           style={{ borderRadius: "6px", backgroundColor: "#202528", height: "90vh", marginTop: "5vh"}}
  //         />
  //       </Col>
  //       <Col offset={1} xl={20} md={19} xs={24}>
  //         <Row style={{ height: "50%", width: "95%" }} justify={'space-between'}>
  //           <Col xl={5} md={10} xs={20} className='card' > Deneme </Col>
  //           <Col xl={5} md={10} xs={20} className='card'> <Text>Deneme</Text> </Col>
  //           <Col xl={5} md={10} xs={20} className='card'> <Paragraph>asdasd</Paragraph> </Col>
  //           <Col xl={5} md={10} xs={20} className='card'> asdasdas </Col>
  //         </Row>
  //         <Row>
  //           <Col span={24}>
  //             <Table columns={columns} dataSource={data} />
  //             <Button onClick={() => {
  //               document.body.classList.toggle('light-mode-variables');
  //               setChecked(!checked)
  //               setToken({
  //                 colorText: checked ? "#fff" : "#000",
  //                 colorBgBase: checked ? "#202528" : "#f1f1f1",
  //               })
  //             }} type='dashed'> Tema Değiştir </Button>
  //           </Col>
  //         </Row>
  //       </Col>
  //     </Row>


  //   </ConfigProvider>
  // );
}

export default App;