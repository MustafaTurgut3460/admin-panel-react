import { Col, Row } from "antd";
import TeamUserItem from "../components/TeamsComponents/TeamUserItem";

const Team = () => {

    return (
        <Row>
            <Col span={23}>
                <Row>
                    <TeamUserItem name={"Mustafa Turgut"} email={"mustafa.turgut3460@gmail.com"} role={"Manager"} color={"red"} />
                    <TeamUserItem name={"Yavuz Selim Turgut"} email={"yavuz60@gmail.com"} role={"Senior Devoloper"} color={"green"} />
                    <TeamUserItem name={"Emre Ballı"} email={"emre.balli@gmail.com"} role={"Senior Devoloper"} color={"green"} />
                    <TeamUserItem name={"Zeynep Turgut"} email={"zeynep.turgut3460@gmail.com"} role={"Junior Devoloper"} color={"geekblue"} />
                    <TeamUserItem name={"Enes Turgut"} email={"enesturgut34@gmail.com"} role={"Manager"} color={"red"} />
                    <TeamUserItem name={"Ali Başpınar"} email={"alibaspinar@gmail.com"} role={"Server Management"} color={"orange"} />
                </Row>
            </Col>
        </Row>
    )
}

export default Team;