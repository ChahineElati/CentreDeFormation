import React, { Component } from 'react'
import { Menu,Input, Segment } from 'semantic-ui-react'
export default class Admin extends Component {

  state = { }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
      const { activeItem } = this.state
      var jsx;
      if (activeItem ==='ajouter une formation ') {
        jsx =<Segment attached='bottom'><p>Hello</p></Segment>;
      }
      return (
        <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='liste de formation'
            active={activeItem === 'liste de formation'}
            onClick={this.handleItemClick}
           />
        
        
          <Menu.Item
            name='ajouter une formation '
            active={activeItem === 'ajouter une formation '}
            onClick={this.handleItemClick}
          />
        </Menu>
          {jsx}
        </div>
      )
    }
    
}

