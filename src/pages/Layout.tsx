import { Button, Col, Drawer, Row } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/LayoutComponents/Navbar";
import Topbar from "../components/LayoutComponents/Topbar";
import Reminders from "../components/LayoutComponents/Reminders";
import { Dispatch, SetStateAction, useState } from "react";
import useWindowDimensions from "../hooks/window-dimention";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Layout = () => {

    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Row style={{ height: "100vh", width: "100vw" }}>
            <Col md={2} xs={0}>
                <div style={{ position: "fixed", width: "15rem" }}>
                    <Navbar inDrawer={false} />
                </div>
            </Col>
            <Col md={0} xs={2}>
                <Button onClick={showDrawer}><FontAwesomeIcon icon={faBars} /></Button>
            </Col>
            <Col span={22} style={{}}>
                <Row justify={"start"}>
                    <Col xs={23} lg={24}>
                        <Topbar />
                        <Row justify={"end"}>
                            {/* <Col xs={24} xxl={23}>
                        <Outlet />
                    </Col> */}
                            <Col xs={24} lg={14} xl={18}>
                                <Outlet />
                            </Col>
                            <Col xs={24} lg={9} xl={5}>
                                <Reminders />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Col>

            <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
                <Navbar inDrawer={true} />
            </Drawer>
        </Row>
    )
}

export default Layout;