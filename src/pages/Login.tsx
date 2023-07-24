import { Button, Col, Image, Input, Row } from "antd"
import loginImage from "../assets/images/login_image2.png"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface LoginProps {

}


const Login = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    return (
        <Row style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center"}}>
            <Col xs={23} lg={14} style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
                <img src={loginImage} alt="" style={{ width: "80%" }} />
            </Col>
            <Col xs={23} lg={9} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                            <Button type="primary" size="large" style={{ width: "100%" }} loading={loading} onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false)
                                    navigate("/")
                                }, 2000);
                            }}>Login</Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Button type="ghost" style={{ width: "100%" }}><p >Forgot Your Password</p></Button>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <p style={{ textAlign: "center" }}>Dont Have A Account Yet?</p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={8}>
                            <Button style={{ width: "100%" }} onClick={() => navigate("/register")}><p>Create Account Now!</p></Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Login;