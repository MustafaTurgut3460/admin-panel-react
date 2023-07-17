import { faCalendarDays, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Col, Dropdown, MenuProps, Progress, Row, Tag, Tooltip } from "antd";
import avatar from "../../assets/images/avatar1.png";
import logo from "../../assets/images/logo.png";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { LiteralUnion } from "antd/es/_util/type";
import { PresetColorType } from "antd/es/_util/colors";

const items: MenuProps['items'] = [
    {
        label: 'Projeyi İncele',
        key: '1',
    },
];

export interface ProjectItemProps{
    type: LiteralUnion<"default" | "success" | "processing" | PresetColorType | "error" | "warning"> | undefined
    text: string,
    percent: number,
    status: "success" | "active" | "normal" | "exception" | undefined
}


const ProjectItem: React.FC<ProjectItemProps> = ({type, text, percent, status}) => {

    return (
        <Dropdown menu={{ items }} trigger={["contextMenu"]}>
            <Row style={{ padding: "1rem", borderRadius: "1rem" }} className="card" justify={'space-between'}>
                <Col span={8}>
                    <Row>
                        <Col style={{ marginLeft: "1rem" }}>
                            <Avatar src={logo} size={48} />
                        </Col>
                        <Col style={{ marginLeft: "1rem" }}>
                            <p>Proje başlığı burada yer alır</p>
                            <Row style={{ opacity: 0.3 }}>
                                <Col>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </Col>
                                <Col style={{ marginLeft: "0.5rem" }}>
                                    3 Eylül, 2023
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} xl={8}>
                    <Row>
                        <Col xs={0} xl={12} style={{ marginTop: "0.75rem" }}>
                            <Progress percent={percent} status={status} showInfo={false} />
                        </Col>
                        <Col style={{ marginLeft: "1rem" }}>
                            <p style={{ opacity: 0.5 }}>Deadline</p>
                            <p>4 Ekim, 2023</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={2}>
                    <p style={{ opacity: 0.5 }}>Status</p>
                    <Tag color={type}>{text}</Tag>
                </Col>
                <Col span={4} style={{ display: "flex", justifyContent: "end" }}>
                    <Avatar.Group
                        maxCount={2}
                        maxPopoverTrigger="click"
                        size="large"
                        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                    >
                        <Avatar src={avatar} />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                </Col>
            </Row>
        </Dropdown>
    )
}

export default ProjectItem;