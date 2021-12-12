import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container className="cnt" textAlign="center">
                    <Image size="medium" centered src="images/logo.png" />
                    <p style={{
                        color: "white",
                        fontSize: 30,
                        paddingBottom: 20,
                        backgroundColor: 'rgba(17, 95, 249, 0.8)',
                        borderRadius: 5,
                        fontWeight: 900,
                        margin: 30,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        }}>
                    Bienvenue dans notre platforme! Inscrivez vous pour consulter les formations que nous offrons pour vous
                </p>
            </Container>
            </div >
        );
    }
}
