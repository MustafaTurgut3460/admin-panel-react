import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Select, Space, Switch } from "antd";
import Search from "antd/es/input/Search";
import avatar1 from "../../assets/images/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {

    return (
        <Row style={{ padding: "1rem", marginLeft: "1rem" }} justify={'space-between'}>
            <Col xs={0} md={4}>
                <Search placeholder="Search anything" />
            </Col>
            <Col xs={24} md={20}>
                <Space size={16} style={{ display: "flex", justifyContent: "end" }}>
                    <Select
                        defaultValue="tr"
                        style={{ width: 120 }}
                        options={[
                            { value: 'tr', label: 'Türkçe' },
                            { value: 'en', label: 'English' },
                        ]}
                        size="small"
                    />
                    <Switch checkedChildren="Light" unCheckedChildren="Dark" />
                    <Avatar size={36} icon={<FontAwesomeIcon icon={faBell} />} />
                    <Avatar size={36} icon={<img src={avatar1} />} />
                </Space>
            </Col>
        </Row>
    )
}

export default Topbar;