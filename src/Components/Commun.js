import React, { Component } from 'react'
import { Menu, Image, Header, Sticky, Container, Flag } from 'semantic-ui-react'

export default class Commun extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (

            <div className='body'>
                
                <div className='content-container'>
                    {/*Header Section*/}
                    <header>
                        <Sticky>
                            <Menu fixed='top'
                                borderless
                                style={{
                                    backgroundColor: 'rgba(17, 95, 249, 0.8)',
                                }}
                                color='yellow'
                            >

                                <Menu.Item >
                                    <Image src='images/logo.png'
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
                                    }}
                                    >

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
                                </Menu.Item>
                            </Menu>
                        </Sticky>
                    </header>
                </div>
                <footer className='footer-pin'
                style={{
                    backgroundColor: 'rgba(17, 95, 249, 0.8)',
                }}
                >
                    <Container className='text'
                    style={{
                        color: 'white'
                    }}
                    >
                        Contact : ChahineElati@gmail.com ou LouayBenAziza@gmail.com
                        <br/>Num. Tél : <Flag name='tunisia'/>+216 20773602
                        <br/>© copyright  2021
                    </Container>
                </footer>

            </div>
        )
    }
}
