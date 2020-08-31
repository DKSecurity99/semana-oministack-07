import React, { Component } from 'react';

import api from '../service/api';
import './New.css';

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);
    
        await api.post('/posts', data);

        this.props.history.push('/');
    }

    handleImageChange = event => {
        this.setState({ image: event.target.files[0] })
        this.handleFile(event);
    }

    handleFile = event => {
        const fileName = document.querySelector('#file-name');
        fileName.innerHTML = event.target.value;
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <label for="select-file">Selecionar um arquivo</label>
                <input id="select-file" onChange={this.handleImageChange} type="file"/>
                <span id="file-name"></span>
                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}

                />
                <input 
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />
                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.state.description}

                />
                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}

                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
};

export default New;

