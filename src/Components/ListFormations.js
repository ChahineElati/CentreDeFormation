import React, { Component } from 'react';
import { Button, Card, Container, Modal, Form } from 'semantic-ui-react';
import FormationService from './Services/FormationService';

const options = [
    { key: '1', text: 'en ligne ', value: 'en ligne ' },
    { key: '2', text: 'presentiel ', value: 'presentiel' },
  ];

class ListFormations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formations: [],
            id : 0,
        }
    }

    handleChange = (e, {value}) => this.setState({ 
        selectValue: value
      });

    componentDidMount() {
        FormationService.getFormations().then(response => {
            this.setState({
                formations: response.data
            })
        })
    }

    handleDelete(id) {
        FormationService.deleteFormation(id).then(() => {
            alert("Formation supprimée.");
        });
    }

    updateFormation =  formation => e => {
        formation.titre = e.target.new_titre.value;
        formation.dateDebut = e.target.new_date_debut.value;
        formation.duree = e.target.new_duree.value;
        formation.prix = e.target.new_prix.value;
        formation.type = this.state.selectValue;
        formation.nbrCondidatMax = e.target.new_nbr_condidat_max.value;
        formation.categorie = e.target.new_categorie.value;
        formation.description = e.target.new_description.value;
        formation.nomFormateur = e.target.new_nom_formateur.value;
        FormationService.updateFormation(formation);
        alert("Formation modifiée.");
    }

    render() {
        return (
            <Card.Group>
                {
                    this.state.formations.map(
                        formation => {
                            return (
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{formation.titre}</Card.Header>
                                        <Card.Meta>
                                            Prix: {formation.prix}Dt<br></br>
                                            {formation.type}<br></br>
                                            Durée: {formation.duree} jours<br></br>
                                            Catégorie: {formation.categorie}<br></br>
                                            Formateur: {formation.nomFormateur}
                                        </Card.Meta>
                                        <Card.Description style={{
                                            fontSize: '20px'
                                        }}>
                                            {formation.description}
                                        </Card.Description>
                                        <br></br>
                                        <Container textAlign='right'><strong> Débute {formation.dateDebut}</strong></Container>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button inverted color='red' onClick={() => this.handleDelete(formation.id)}>Supprimer</Button>

                                        <Modal size='tiny' style={{
                                            backgroundColor: 'darkred'
                                        }}
                                            trigger={<Button inverted color='blue'>Modifier</Button>}
                                        >
                                            <Modal.Header style={{
                                                textAlign: 'center'
                                            }}>MODIFIER FORMATION</Modal.Header>
                                            <Modal.Content>
                                                <Form onSubmit={this.updateFormation(formation)}>
                                                    <Form.Field>
                                                        <label>Titre de formation</label>
                                                        <input placeholder='Titre de formation' name='new_titre' defaultValue={formation.titre}/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Nom de formateur</label>
                                                        <input placeholder='Nom de formateur' name='new_nom_formateur' defaultValue={formation.nomFormateur}/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Type de formation</label>
                                                        <Form.Select
                                                            fluid
                                                            options={options}
                                                            placeholder='Type de formation'
                                                            name='new_type'
                                                            defaultValue={formation.type}
                                                            onChange={this.handleChange}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Nombre de place max</label>
                                                        <input type='number' defaultValue={formation.nbrCondidatMax} placeholder='Nombre de condidat maximum...' name='new_nbr_condidat_max'/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Prix(Dt)</label>
                                                        <input defaultValue={formation.prix} placeholder='Prix de formation...' name='new_prix' />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input defaultValue={formation.dateDebut} label='Date de debut' name='new_date_debut' type="date" placeholder='Date ...' />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Durée</label>
                                                        <input defaultValue={formation.duree} type='number' placeholder='Durée (En jours)' name='new_duree' />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Catégorie</label>
                                                        <input defaultValue={formation.categorie} placeholder='Catégorie...' name='new_categorie' />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>About</label>
                                                        <Form.TextArea defaultValue={formation.description} placeholder='Desscription du formation' name='new_description' />
                                                    </Form.Field>
                                                    <Button inverted color='blue' type='submit' style={{
                                                        position: 'relative',
                                                        left: '40%'
                                                    }}
                                                    >Confirmer</Button>
                                                </Form>
                                            </Modal.Content>
                                        </Modal>
                                    </Card.Content>
                                </Card>
                            )
                        }
                    )
                }
            </Card.Group>
        );
    }
}

export default ListFormations;