import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/images/avatar1.png";
import { Avatar, Button, Col, Row, Tag, Tooltip } from "antd";
import { faCircleInfo, faComments } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import { LiteralUnion } from "antd/es/_util/type";
import { PresetColorType } from "antd/es/_util/colors";
import React from "react";

export interface TeamUserItemProps{
    name: string,
    email: string,
    role: string,
    color: LiteralUnion<"default" | PresetColorType | "success" | "processing" | "error" | "warning"> | undefined
}

const TeamUserItem: React.FC<TeamUserItemProps> = ({name, email, color, role}) => {

    return (
            <Col xs={19} md={12} xl={8} xxl={6} style={{marginLeft: "2rem"}} className="card">
                <div style={{}}>
                    <Avatar src={avatar} size={48} style={{ display: "block", margin: "auto" }} />
                    <p style={{ textAlign: "center", marginTop: "0.5rem" }}>{name}</p>
                    <p style={{ fontSize: "0.75rem", opacity: 0.5, textAlign: "center" }}>{email}</p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <p>Role: <Tag color={color} style={{marginLeft: "0.5rem"}}>{role}</Tag> </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <Tooltip title="See Details">
                            <Button shape="circle" type="primary"><FontAwesomeIcon icon={faCircleInfo} /></Button>
                        </Tooltip>
                        <Tooltip title="Chat">
                            <Button shape="circle" type="primary" style={{marginLeft: "1rem"}}><FontAwesomeIcon icon={faComments} /></Button>
                        </Tooltip>
                    </div>
                </div>
            </Col>
    )
}

export default TeamUserItem;