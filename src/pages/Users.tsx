import { Col, Dropdown, MenuProps, Row, Table, message } from "antd";
import RecentPremiumCustomersTable from "../components/DashboardComponents/RecentPremimumCustomersTable";
import Search from "antd/es/input/Search";
import { useState } from "react";
import useWindowDimensions from "../hooks/window-dimention";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BigModal from "../components/BigModal";
import UserTable from "../components/UsersComponents/UserTable";

const items: MenuProps['items'] = [
    {
        label: 'Tabloyu İncele',
        key: '1',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    },
];

const Users = () => {

    const { width, height } = useWindowDimensions();
    const [open, setOpen] = useState(false);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setOpen(true);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <>
            <Dropdown menu={menuProps} trigger={["contextMenu"]}>
                <Row>
                    <Col style={{ marginLeft: width < 576 ? "0rem" : "2rem", padding: (height + width) / 100 }} xxl={23} xs={23} className="card">
                        <UserTable scrollY={height / 2} />
                    </Col>
                </Row>
            </Dropdown>
            <BigModal element={<UserTable scrollY={height / 1.5} />} open={open} setOpen={setOpen} title={''} />

        </>
    )
}

export default Users;