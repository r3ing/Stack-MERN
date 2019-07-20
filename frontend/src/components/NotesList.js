import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class NotesList extends Component {

    state = {
        notes: []
    }

    componentDidMount() { 
        this.getNotes();    
    }

    async getNotes() { 
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({
            notes: res.data
        });
    }
    
    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5 className="float-left">{note.title}</h5>
                                    <Link to={"/edit/" + note._id} className="btn btn-outline-primary btn-sm float-right">
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <dt className="text-right">{note.author}</dt>
                                    <h6 className="text-sm-right"><TimeAgo date={note.date}/></h6>                                   
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => this.deleteNote(note._id)} className="btn btn-outline-danger btn-sm float-right">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
