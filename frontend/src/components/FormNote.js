import React, { Component } from 'react'
import axios from 'axios'

export default class FormNote extends Component {

    componentDidMount() { 
        
    }

    onSubmit = (e) => { 
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>

                    {/** SELECT USER*/}
                    <div className="form-group">
                        <select className="form-control" name="userSelected" onChange="">
                            {

                            }
                        </select>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">Create Note</button>
                    </form>
                </div>
            </div>
        )
    }
}
