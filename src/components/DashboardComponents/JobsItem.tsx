import { SyncOutlined } from "@ant-design/icons";
import { faCheck, faCircleInfo, faEllipsisVertical, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Dropdown, MenuProps, Row, Tag } from "antd";
import { PresetColorType } from "antd/es/_util/colors";
import { LiteralUnion } from "antd/es/_util/type";
import { useEffect, useState } from "react";

export interface JobsItemProps {
    color: LiteralUnion<"warning" | PresetColorType | "success" | "processing" | "error" | "default"> | undefined,
    text: string
}

const colors: string[] = [
    "#1b9c85",
    "#ff0060",
    "#7a6ad8",
]

const items: MenuProps['items'] = [
    {
        label: "Tamamlandı",
        key: '0',
        icon: <FontAwesomeIcon icon={faCheck}/>
    },
    {
        label: "Kaldır",
        key: '1',
        icon: <FontAwesomeIcon icon={faTrash} />
    },
];

const JobsItem: React.FC<JobsItemProps> = ({ color, text }) => {

    const [itemcolor, setItemColor] = useState("");

    const getRandomColor = (): string => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    useEffect(() => {
        setItemColor(getRandomColor);
    }, [])

    return (
        <Row justify={"space-between"} style={{ borderRadius: "1rem", padding: "1rem" }} className="card">
            <Col>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faCheck} style={{ padding: "0.75rem 0.8rem", backgroundColor: itemcolor, borderRadius: "0.5rem", fontSize: "1.2rem" }} />
                    </Col>
                    <Col style={{ marginLeft: "0.5rem" }}>
                        <p style={{ fontSize: "0.75rem" }}>Job Title Section</p>
                        <Tag color={color} style={{ marginTop: "5px", fontSize: "0.5rem" }}>
                            <span>{text}</span>
                        </Tag>
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

export default JobsItem;