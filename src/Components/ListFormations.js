import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import FormationService from './Services/FormationService';

class ListFormations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formations: []
        }
    }

    componentDidMount() {
        FormationService.getFormations().then(response => {
            this.setState({
                formations: response.data
            })
        })
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
                                            Catégorie: {formation.categorie}
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