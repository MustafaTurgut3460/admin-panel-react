import { Col, Row, message } from "antd";
import RecentPremiumCustomersTable from "../components/DashboardComponents/RecentPremimumCustomersTable";
import UserTable from "../components/UsersComponents/UserTable";
import Search from "antd/es/input/Search";
import { useState } from "react";

const Users = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [search, setSearch] = useState("")

    const info = () => {
        messageApi.info(`You searched: ${search}`, 3);
    };

    return (
        <Row>
            {contextHolder}
            <Col style={{ marginLeft: "2rem" }} xxl={23} sm={22} className="card">
                <Col span={24}>
                    <Search placeholder="Search User" allowClear value={search} onChange={(e) => setSearch(e.target.value)} onSearch={info} style={{ width: 200 }} />
                </Col>
                <UserTable/>
            </Col>
        </Row>
    )
}

export default Users;