import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Input, Row } from "antd";

import registerImage from "../assets/images/register_image.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterProps {

}

const Register = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    return (
        <Row style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center"}}>
            <Col xs={22} lg={14} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={registerImage} alt="" style={{ width: "80%" }} />
            </Col>
            <Col xs={22} lg={10} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "100%"}}>
                    <Row>
                        <Col span={8}>
                            <Input placeholder="Email Address" size="large" prefix={<FontAwesomeIcon icon={faEnvelope} color="grey" />} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Input.Password placeholder="Password" type="password" size="large" prefix={<FontAwesomeIcon icon={faLock} color="grey" />} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Input.Password placeholder="Password Again" type="password" size="large" prefix={<FontAwesomeIcon icon={faLock} color="grey" />} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Button type="primary" size="large" style={{ width: "100%" }} loading={loading} onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false)
                                    navigate("/")
                                }, 2000);
                            }}>Register</Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Button type="ghost" style={{ width: "100%" }}><p >Forgot Your Password</p></Button>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <p style={{ textAlign: "center" }}>Have An Account?</p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Button style={{ width: "100%" }}><p>Login Now!</p></Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Register;