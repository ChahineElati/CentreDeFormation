import React, { Component } from 'react';
import FormationService from '../Services/FormationService';

class Formation extends Component {
    
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
        return (<div>
            <table>
                <tbody>
                {
                    this.state.formations.map(
                        formation => <tr key={formation.id}>
                            <td>{formation.titre}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>);
    }
}

export default Formation;