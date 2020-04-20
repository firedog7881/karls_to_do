import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addTask } from "../../actions/tasks";

export class Form extends Component {
    state = {
        subject: '',
        notes: '',
        dueDate: '',
        tags: ''
    }

    static propTypes = {
        addTask: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { subject, notes, dueDate, tags } = this.state;
        const task = { subject, notes, dueDate, tags };
        this.props.addTask(task);
    }

    render() {
        const { subject, notes, dueDate, tags } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Task</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            onChange={this.onChange}
                            value={subject}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes</label>
                        <input
                            className="form-control"
                            type="text"
                            name="notes"
                            onChange={this.onChange}
                            value={notes}
                        />
                    </div>
                    <div className="form-group">
                        <label>Due Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="dueDate"
                            onChange={this.onChange}
                            value={dueDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags</label>
                        <input
                            className="form-control"
                            type="text"
                            name="number"
                            onChange={this.onChange}
                            value={tags}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTask })(Form);
