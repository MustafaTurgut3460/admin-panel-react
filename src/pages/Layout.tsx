import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/LayoutComponents/Navbar";
import Topbar from "../components/LayoutComponents/Topbar";
import Reminders from "../components/LayoutComponents/Reminders";

const Layout = () => {

    return (
        <Row style={{ height: "100vh", width: "100vw", padding: "2rem 1rem"}}>
            <Col xl={3} lg={4} md={4} xs={0} style={{position: "fixed"}}>
                <Navbar />
            </Col>
            <Col offset={3} xl={21} md={20} xs={23}>
                <Topbar />
                <Row>
                    <Col xs={24} lg={15} xl={19}>
                        <Outlet />
                    </Col>
                    <Col xs={16} lg={9} xl={5}>
                        <Reminders />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Layout;