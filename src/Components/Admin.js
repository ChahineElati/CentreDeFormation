import React, { Component } from 'react'
import { Menu,Input, Segment } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'



   const options = [
  { key: '1', text: 'type1', value: 'type1' },
  { key: '2', text: 'type2', value: 'type2' },
  { key: '3', text: 'type3', value: 'type3' },
]  

export default class Admin extends Component {


  state = { }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleChange = (e, { value }) => this.setState({ value });


    render() {
      const { activeItem } = this.state
      const { value } = this.state
      var jsx;
      if (activeItem ==='ajouter une formation ') {
        jsx =<Segment attached='bottom'><p>formulaire</p>
              <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='titre de formation' placeholder='titre de formation' />
          <Form.Input fluid label='nom de formateur' placeholder='nom de formateur ' />
          <Form.Select
            fluid
            label='type de formation'
            options={options}
            placeholder='type de formation'
          />
        </Form.Group>
        <Form.Group inline>
          <label>date</label>
          
          
        </Form.Group>
        <Form.TextArea label='About' placeholder='description du formation...' />
        
        <Form.Button>Submit</Form.Button>
      </Form>



        </Segment>;
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

