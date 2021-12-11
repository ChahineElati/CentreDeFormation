import React, { Component } from 'react'
import { Menu,Input, Segment } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'


   const options = [
  { key: '1', text: 'en ligne ', value: 'en ligne ' },
  { key: '2', text: 'presentiel ', value: 'presentiel' },
]  

export default class Admin extends Component {


  constructor(props){
    super(props);
    this.state = { }
  }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleChange = (e) => this.setState({ 
      titre: e.target.titre.value
    });

    handleSubmit = event => {
      event.preventDefault();
      const formation = {
        dateDebut: null,
        titre: event.target.titre.value,
        duree: event.target.duree.value,
        type: "non terminé",
        prix: event.target.prix.value,
        nbrCandidatMax: event.target.nbr_cand_max.value,
        categorie: event.target.categorie.value,
        description: event.target.description.value
      }

      axios.post("http://localhost:8080/api/formations/", formation).then(response =>{
        console.log(response.data)
      })
      
    }

    render() {
      const { activeItem } = this.state
      var jsx;
      if (activeItem ==='ajouter une formation ') {
        jsx =<Segment attached='bottom'><p>Ajouter une formation:</p>
              <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Titre de formation' name='titre' placeholder='Titre de formation' />
          <Form.Input fluid label='Nom de formateur' name='nom_formateur' placeholder='Nom de formateur ' />
          <Form.Select
            fluid
            label='type de formation'
            options={options}
            placeholder='type de formation'
            name='type_formation'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Nombre de place max' name='nbr_cand_max' placeholder='Nombre de condidat maximum...' />
          <Form.Input fluid label='Prix' name='prix' placeholder='Prix du foramtion...' />
          <Form.Input fluid label='Date de debut' name='date_debut' type="date" placeholder='Date ...' />
          <Form.Input fluid label='Durée' name='duree' type="number" placeholder='Durée (En jours)' /> 
        </Form.Group>
       <Form.Group inline>
       <label>Categorie </label>
          <Input placeholder='Categorie...' name='categorie'/>

       </Form.Group>
        
        <Form.TextArea label='About' placeholder='Description du formation...' name='description' />
        
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

