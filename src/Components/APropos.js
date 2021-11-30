import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class APropos extends Component {
    render() {
        return (
            <div>
                <Container textAlign='center'>
                <p style={{
                        color: "white",
                        fontSize: 30,
                        paddingBottom: 20,
                        backgroundColor: 'rgba(17, 95, 249, 0.8)',
                        borderRadius: 5,
                        fontWeight: 900,
                        margin: 30,
                        paddingLeft: 50,
                        paddingTop: 25,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        }}>
                            Notre platforme offre diverses formations dans laquelles vous pouvez  inscrire. Nous assurons une bonne qualité. N'hésitez pas à nous réjoindre! 
                            </p>
                </Container>
            </div>
        )
    }
}
