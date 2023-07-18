import { MoreOutlined, SoundFilled } from "@ant-design/icons";
import { faBell, faCheck, faCircleInfo, faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Dropdown, MenuProps, Row } from "antd";

const items: MenuProps['items'] = [
    {
        label: "Detaylar",
        key: '0',
        icon: <FontAwesomeIcon icon={faCircleInfo} />
    },
    {
        label: "Kaldır",
        key: '1',
        icon: <FontAwesomeIcon icon={faTrash} />
    },
];

const RemindersItem = () => {

    return (
        <Row justify={"space-between"} style={{ borderRadius: "1rem", padding: "1rem" }} className="card">
            <Col>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faBell} color="var(--color-white)" style={{ padding: "0.75rem 0.8rem", backgroundColor: "#1b9c85", borderRadius: "0.5rem", fontSize: "1.2rem" }} />
                    </Col>
                    <Col style={{ marginLeft: "0.5rem" }}>
                        <p style={{ fontSize: "0.75rem" }}>Reminders Title Section</p>
                        <span style={{ fontSize: "0.66rem", opacity: "0.7" }}>07/08/23 15:30 - 16:30</span>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginTop: "0.6rem", fontSize: "1.4rem" }} />
                </Dropdown>
            </Col>
        </Row>
    )
}

export default RemindersItem;