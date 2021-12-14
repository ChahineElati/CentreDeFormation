import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import ListFormations from './ListFormations';


   const options = [
  { key: '1', text: 'en ligne ', value: 'en ligne ' },
  { key: '2', text: 'presentiel ', value: 'presentiel' },
];
  const etat = ['non terminée', 'terminée']  

export default class Admin extends Component {


  constructor(props){
    super(props);
    this.state = { selectValue: ''}
  }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name, selectValue: ''});
    handleChange = (e, {value}) => this.setState({ 
      selectValue: value
    });

    initForm(event){
      event.target.date_debut.value = null;
        event.target.titre.value = "";
        event.target.duree.value = null;
        this.setState({selectValue: ''});
        event.target.prix.value = null;
        event.target.nb_cand_max.value = null;
        event.target.categorie.value = "";
        event.target.description.value = "";
    }

    handleSubmit = event => {
      event.preventDefault();
      const formation = {
        dateDebut: event.target.date_debut.value,
        titre: event.target.titre.value,
        duree: event.target.duree.value,
        type: this.state.selectValue,
        prix: event.target.prix.value,
        nbrCondidatMax: event.target.nb_cand_max.value,
        categorie: event.target.categorie.value,
        description: event.target.description.value,
        etat: etat[0],
        nomFormateur: event.target.nom_formateur.value,
      }

      axios.post("http://localhost:8080/api/formations/", formation).then(() =>{
      });

      alert("Formation ajoutée.");
      this.initForm(event);
    }

    render() {
      const { activeItem } = this.state
      var jsx;
      if (activeItem ==='ajouter une formation ') {
        jsx =<Segment attached='bottom'><p>Ajouter une formation:</p>
              <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Titre de formation' name='titre' placeholder='Titre de formation' required={"required"}/>
          <Form.Input fluid label='Nom de formateur' name='nom_formateur' placeholder='Nom de formateur ' required={"required"}/>
          <Form.Select
            fluid
            label='type de formation'
            options={options}
            placeholder='Type de formation'
            name='type'
            value={this.state.selectValue}
            onChange={this.handleChange}
            required={"required"}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Nombre de place max' name='nb_cand_max' type='number' placeholder='Nombre de condidat maximum...' required={"required"}/>
          <Form.Input label='Prix(Dt)' name='prix' placeholder='Prix du foramtion...' required={"required"}/>
          <Form.Input label='Date de debut' name='date_debut' type="date" placeholder='Date ...' required={"required"}/>
          <Form.Input label='Durée' name='duree' type="number" placeholder='Durée (En jours)' required={"required"}/> 
        </Form.Group>
       <Form.Group>
          <Form.Input label="Catégorie" placeholder='Catégorie...' name='categorie' required={"required"}/>

       </Form.Group>
        
        <Form.TextArea label='About' placeholder='Description du formation...' name='description' required={"required"}/>
        
        <Form.Button inverted color='blue' size='large'>Ajouter</Form.Button>
      </Form>


        </Segment>;
      } else if(activeItem === 'liste de formations') {
        jsx = <Segment attached='bottom'>
          <ListFormations></ListFormations>
        </Segment>;
      }
      return (
        <div>
        <Menu attached='top' tabular>
          <Menu.Item
            style={{
              backgroundColor: 'white'
            }}
            name='liste de formations'
            active={activeItem === 'liste de formations'}
            onClick={this.handleItemClick}
            selected
           />
        
        
          <Menu.Item
          style={{
            backgroundColor: 'white'
          }}
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

