import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Menu,Input } from 'semantic-ui-react'
export default class Admin extends Component {
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
                            Bienvenue au espace Admin
                            </p>
                            
                </Container>
            </div>
        )
    }
    state = { activeItem: 'admin' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu tabular>
          <Menu.Item
            name='liste de formation '
            active={activeItem === 'liste de formation'}
            onClick={this.handleItemClick}
           />
        
        
          <Menu.Item
            name='ajouter une formation '
            active={activeItem === 'ajouter une formation '}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
    
}

