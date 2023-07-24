import { Avatar, Col, Divider, Input, Row, Select } from "antd";
import avatar from "../assets/images/avatar1.png";

const Settings = () => {

    return (
        <div>
            <Row justify={'center'}>
                <Col>
                    <Avatar src={avatar} size={64}/>
                </Col>
            </Row>
            <Row style={{marginTop: "2rem"}} justify={'space-between'}>
                <Col span={2}>
                    <span>Name</span>
                </Col>
                <Col span={22}>
                    <Row justify={'end'}>
                        <Col span={7}>
                            <Input defaultValue={"Mustafa"} />
                        </Col>
                        <Col span={7} style={{ marginLeft: "0.5rem" }}>
                            <Input defaultValue={"Turgut"} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
            <Row justify={'space-between'}>
                <Col span={2}>
                    <span>Email</span>
                </Col>
                <Col span={13}>
                    <Input defaultValue={"mustafa.turgut3460@gmail.com"} />
                </Col>
            </Row>
            <Divider />
            <Row justify={'space-between'}>
                <Col span={2}>
                    <span>Role</span>
                </Col>
                <Col span={13}>
                    <Input defaultValue={"Senior Developer"} />
                </Col>
            </Row>
            <Divider />
            <Row justify={'space-between'}>
                <Col span={2}>
                    <span>Country</span>
                </Col>
                <Col span={13}>
                    <Select
                        defaultValue="tr"
                        style={{ width: 120 }}
                        options={[
                            { value: 'tr', label: 'Türkiye' },
                            { value: 'en', label: 'İngiltere' },
                            { value: 'fr', label: 'Fransa' },
                            { value: 'it', label: 'İtalya' },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Settings;