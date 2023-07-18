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
        label: <Tag color="success">Tamamlandı</Tag>,
        key: '0',
    },
    {
        label: <Tag color="warning">Yapılıyor</Tag>,
        key: '1',
    },
    {
        label: <Tag color="error">İptal Edildi</Tag>,
        key: '2',
    },
    {
        label: <Tag color="default">Başlanmadı</Tag>,
        key: '3',
    },
];

const tagColors: Map<string, string> = new Map([
    ["0", "success"],
    ["1", "warning"],
    ["2", "error"],
    ["3", "default"]
])

const JobsItem: React.FC<JobsItemProps> = ({ color, text }) => {

    const [itemcolor, setItemColor] = useState("");
    const [tag, setTag] = useState(
        <Tag color={color} style={{ marginTop: "5px", fontSize: "0.5rem" }}>
            <span >{text}</span>
        </Tag>
    )

    const getRandomColor = (): string => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setTag(
            <Tag color={tagColors.get(e.key)} style={{ marginTop: "5px", fontSize: "0.5rem" }}>
                <span>{e.domEvent.currentTarget.outerText} </span>
            </Tag>
        )
    };

    const menuProps = {
        items,
        onClick: handleMenuClick
    }


    useEffect(() => {
        setItemColor(getRandomColor);
    }, [])

    return (
        <Row justify={"space-between"} style={{ borderRadius: "1rem", padding: "1rem" }} className="card">
            <Col>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faCheck} style={{ padding: "0.75rem 0.8rem", backgroundColor: itemcolor, borderRadius: "0.5rem", fontSize: "1.2rem"}} color="var(--color-white)"/>
                    </Col>
                    <Col style={{ marginLeft: "0.5rem" }}>
                        <p style={{ fontSize: "0.75rem" }}>Job Title Section</p>
                        <Dropdown menu={menuProps} trigger={["click"]}>
                            {
                                <div>
                                    {tag}
                                </div>
                            }
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faXmark} />
            </Col>
        </Row>
    )
}

export default JobsItem;