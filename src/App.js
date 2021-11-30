import React, { Component } from 'react';
import { Menu, Image, Header, Sticky, Container, Flag, Button, Modal, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

export default class App extends Component {
    etat = false
    state = { loggedIn: this.etat }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name, loggedIn: this.etat })

    render() {
        const { activeItem } = this.state

        return (

            <div className='App'>
                {/*Header Section*/}
                <header>
                    <Sticky className='sticky'>
                        <Menu fixed='top'
                            borderless
                            style={{
                                backgroundColor: 'rgba(17, 95, 249, 0.8)'
                            }}
                            color='yellow'
                        >

                            <Menu.Item >
                                <Image src='/images/logo.png'
                                    size='tiny'

                                />
                            </Menu.Item>

                            <Menu.Item header
                            >
                                <Header
                                    as='h2'
                                    style={{
                                        fontFamily: 'Arial, sans-serif',
                                        color: 'white',
                                        fontWeight: 900
                                    }}
                                >
                                    CENTRE DE FORMATIONS
                                </Header>
                            </Menu.Item>

                            <Menu.Item position='right'>
                                <Menu style={{
                                    backgroundColor: '#115ff9',
                                    marginRight: 25,
                                }}
                                >

                                    <Link to='/'>
                                        <Menu.Item
                                            name='home'
                                            active={activeItem === 'home'}
                                            onClick={this.handleItemClick}
                                            style={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'white',
                                                fontWeight: 700
                                            }}
                                        >
                                            Home
                                        </Menu.Item>
                                    </Link>
                                    <Link to='/APropos'>
                                        <Menu.Item
                                            name='a-propos'
                                            active={activeItem === 'a-propos'}
                                            onClick={this.handleItemClick}
                                            style={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'white',
                                                fontWeight: 700
                                            }}
                                        >
                                            A propos
                                        </Menu.Item>
                                    </Link>
                                    <Menu.Item
                                        name='formations'
                                        active={activeItem === 'formations'}
                                        onClick={this.handleItemClick}
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'white',
                                            fontWeight: 700
                                        }}
                                    >
                                        Formations
                                    </Menu.Item>

                                </Menu>
                                <div>
                                    <Modal size='tiny' style={{
                                        backgroundColor: 'darkred'
                                    }}
                                        trigger={<Button inverted color='yellow' style={{
                                            marginRight: 10
                                        }}>LOG IN</Button>}
                                    >
                                        <Modal.Header style={{
                                            textAlign: 'center'
                                        }}>LOG IN</Modal.Header>
                                        <Modal.Content>
                                            <Form>
                                                <Form.Field>
                                                    <label>Email</label>
                                                    <input type='email' placeholder='exemple@Email.com' />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Mot de passe</label>
                                                    <input type='password' placeholder='Mot de passe' />
                                                </Form.Field>
                                                <Button inverted color='blue' type='submit' style={{
                                                    position: 'relative',
                                                    left: '42%'
                                                }}>Log In</Button>
                                            </Form>
                                        </Modal.Content>
                                    </Modal>
                                    <Modal size='tiny' style={{
                                        backgroundColor: 'darkred'
                                    }}
                                        trigger={<Button inverted color='yellow'>SIGN UP</Button>}
                                    >
                                        <Modal.Header style={{
                                            textAlign: 'center'
                                        }}>SIGN UP</Modal.Header>
                                        <Modal.Content>
                                            <Form>
                                                <Form.Field>
                                                    <label>Nom</label>
                                                    <input placeholder='Nom' />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Prénom</label>
                                                    <input placeholder='Prénom' />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Email</label>
                                                    <input type='email' placeholder='exemple@email.com' />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Mot de passe</label>
                                                    <input type='password' placeholder='Mot de passe' />
                                                </Form.Field>
                                                <Button inverted color='blue' type='submit' style={{
                                                    position: 'relative',
                                                    left: '40%'
                                                }}>Sign Up</Button>
                                            </Form>
                                        </Modal.Content>
                                    </Modal>

                                </div>
                            </Menu.Item>
                        </Menu>
                    </Sticky>
                </header>

                <Main></Main>

                <footer className='footer-pin'
                    style={{
                        backgroundColor: 'rgba(17, 95, 249, 0.8)',
                    }}
                >
                    <Container className='text'
                        style={{
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Contact : ChahineElati@gmail.com ou LouayBenAziza@gmail.com, numéro Tél. : <Flag name='tunisia' />+216 20773602
                        <br />© copyright  2021
                    </Container>
                </footer>

            </div>
        );
    }
}
