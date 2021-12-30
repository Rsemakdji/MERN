import React, { Component } from "react";

class AjouterActu extends Component 
{
    state = 
    {
        title: '',
        description: ''

    }

    AjoutActu = Actu => {
        const Actus = { ...this.state.Actus }
        Actus[`Actu-${Date.now()}`] = Actu
        this.setState({Actus})
    }

    handleChange = event => {
        const  { name, value } = event.target
        this.setState ({ [name] : value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const Actu = {...this.state }
        this.props.AjoutActu(Actu)
        // reset Anto welc modif state via form 4m
        Object.keys(Actu).forEach(item => {Actu[item] = ''
        })
        this.setState({...Actu})
    }

    render() 
    {
        return (
        <div>
            <input 
                className="form-control" 
                name='title'
                type="text" 
                placeholder="titre de l'actualités"
                value= {this.state.title}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                aria-label="Disabled input example" 
                >
            </input>
            <input 
                className="form-control" 
                type="text" 
                name='description'
                placeholder="nouvelle actualités" 
                value= {this.state.description}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                aria-label="Disabled input example" 
                >
            </input>  
        </div>
        )
    }

}
export default AjouterActu;
