import React, { Component } from 'react';
import { Menu, Image, Header, Sticky, Container, Flag, Button, Modal, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import UtilisateurService from './Components/Services/UtilisateurService';

export default class App extends Component {
    state = JSON.parse(window.localStorage.getItem('state')) || {
        role: "not logged in", utilisateur: null
    }

    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name }
    )

    signOut = () => {
        this.setState({role: "not logged in", utilisateur: null})
    }

    addUtilisateur = e => {

        const utilisateur = {
            nom: e.target.nom.value,
            prenom: e.target.prenom.value,
            email: e.target.email.value,
            motDePasse: e.target.mdp.value,
            role: 'utilisateur'
        }

        UtilisateurService.addUtilisateur(utilisateur).then(() => {
            alert("Utilisateur créé.");
        })
    }

    signIn = e => {
        UtilisateurService.getUtilisateurByEmail(e.target.email.value, e.target.mdp.value).then(response => {
            if (typeof (response.data) === "object") {
                if (response.data.role === "utilisateur") {
                    this.setState({
                        role: "utilisateur",
                        utilisateur: response.data,
                    });
                } else {
                    this.setState({
                        role: "admin",
                        utilisateur: response.data,
                    })
                }
            } else {
                alert("email ou mot de passe incorrect.");
            }
        })
    }

    render() {
        const { activeItem } = this.state
        var menu_item = null;
        var bar = null
        if (this.state.role === "admin") {
            menu_item = <Link to='/Admin'>
                <Menu.Item
                    name='Admin'
                    active={activeItem === 'Admin'}
                    onClick={this.handleItemClick}
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        color: 'white',
                        fontWeight: 700
                    }}
                >
                    Admin
                </Menu.Item>
            </Link>
            bar = <div>
                <h2 style={{
                    color: "white",
                    fontWeight: "bold"
                }}>Bienvenu {this.state.utilisateur.prenom} {this.state.utilisateur.nom}</h2>
                <Button style={{
                    float: "right"
                }}
                    inverted color='yellow'
                    onClick={this.signOut}
                >Sign Out</Button>
            </div>

        } else if (this.state.role === "utilisateur") {
            menu_item = <Link to='/Formations'>
            <Menu.Item
                name='Formations'
                active={activeItem === 'Formations'}
                onClick={this.handleItemClick}
                style={{
                    fontFamily: 'Arial, sans-serif',
                    color: 'white',
                    fontWeight: 700
                }}
            >
                Formations
            </Menu.Item>
        </Link>
            bar = <div>
                <h2 style={{
                    color: "white",
                    fontWeight: "bold"
                }}>Bienvenu {this.state.utilisateur.prenom} {this.state.utilisateur.nom}</h2>
                <Button style={{
                    float: "right"
                }}
                    inverted color='yellow'
                    onClick={this.signOut}
                >Sign Out</Button>
            </div>
        } else {
            bar = <div>
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
                        <Form onSubmit={this.signIn}>
                            <Form.Field>
                                <label>Email</label>
                                <input type='email' placeholder='exemple@Email.com' name='email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Mot de passe</label>
                                <input type='password' placeholder='Mot de passe' name='mdp' />
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
                        <Form onSubmit={this.addUtilisateur}>
                            <Form.Field>
                                <label>Nom</label>
                                <input placeholder='Nom' name='nom' />
                            </Form.Field>
                            <Form.Field>
                                <label>Prénom</label>
                                <input placeholder='Prénom' name='prenom' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input type='email' placeholder='exemple@email.com' name='email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Mot de passe</label>
                                <input type='password' placeholder='Mot de passe' name='mdp' />
                            </Form.Field>
                            <Button inverted color='blue' type='submit' style={{
                                position: 'relative',
                                left: '40%'
                            }}>Sign Up</Button>
                        </Form>
                    </Modal.Content>
                </Modal>

            </div>
        }
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

                                    {menu_item}

                                </Menu>
                                {bar}
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
