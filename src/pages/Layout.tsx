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
        <Row style={{ height: "100vh", width: "100vw", padding: "2rem 1rem" }}>
            <Col xl={3} lg={4} md={4} xs={0} style={{ position: "fixed" }}>
                <Navbar  inDrawer={false}/>
            </Col>
            <Col md={0} xs={2}>
                <Button onClick={showDrawer}><FontAwesomeIcon icon={faBars} /></Button>
            </Col>
            <Col offset={width < 768 ? 0 : 2} xl={22} md={21} xs={23}>
                <Topbar/>
                <Row>
                    <Col xs={24} lg={15} xl={19}>
                        <Outlet />
                    </Col>
                    <Col xs={24} lg={9} xl={5}>
                        <Reminders />
                    </Col>
                </Row>
            </Col>

            <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
                <Navbar inDrawer={true}/>
            </Drawer>
        </Row>
    )
}

export default Layout;