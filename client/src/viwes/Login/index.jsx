import { Row, Col, Form, Radio, Button } from 'antd'
import './index.css'
import { Input } from 'antd';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import axios from "../../config/axios"
const { Option } = Select;
export default () => {

    const [form] = Form.useForm()


    const getQuestions = e => {
        console.log(e.target.value);
        axios.get('questions/' + e.target.value)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={12}  >
                    <div className="banner">
                        <img src="https://images.unsplash.com/photo-1592347364028-4f101ff9ffd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}  >

                    <div className="login">
                        <div style={{ display: 'flex', justifyContent: "center" }} >

                            <h4>Veuillez remplir les champs suivants</h4>
                        </div>
                        <br />
                        <br />

                        <Form
                            form={form}
                        >
                            <Row gutter={[20, 20]} >
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez saisir votre nom' }]}
                                        name='Nom'
                                    >
                                        <Input placeholder="Nom" />

                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez saisir votre prénom' }]}
                                        name='Prénom'
                                    >
                                        <Input placeholder="Prénom" />

                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        name='linkedIn'
                                    >
                                        <Input placeholder="LinkedIn" />

                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez saisir votre email!' }]}
                                        name='email'
                                    >
                                        <Input placeholder="Email" />

                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Veuillez saisir votre mot de passe !',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder='Mot de passe' />
                                    </Form.Item>


                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        name="confirm"

                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Veuillez saisir votre mot de passe !',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Les deux mots de passe que vous avez saisis ne correspondent pas!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password placeholder='Confirmer votre mot de passe' />
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez saisir votre poste!' }]}
                                        name='poste'
                                    >
                                        <Input onChange={getQuestions} placeholder="Poste" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez saisir votre ville!' }]}
                                        name='ville'
                                    >
                                        <Input placeholder="Ville" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item
                                        rules={[{ required: true, message: 'Veuillez choisir votre genre!' }]}
                                        name='genre'
                                    >
                                        <Radio.Group >
                                            <Radio value={'femme'}>Femme</Radio>
                                            <Radio value={'homme'}>Homme</Radio>
                                        </Radio.Group>
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} >
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            S'inscrire
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>

                    </div>
                </Col>
            </Row>
        </>
    )
}