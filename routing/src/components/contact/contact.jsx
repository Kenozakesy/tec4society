import React, {Component} from 'react';

class Contact extends Component {

    onSubmit = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit} className="btn btn-primary btn-sm m-2">Submit</button>
                </form>
            </div>
        );
    }
}

Contact.propTypes = {};
export default Contact;