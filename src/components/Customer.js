import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile
                    id={this.props.id}
                    name={this.props.name}
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    />
                <CustomerInfo
                    job={this.props.job}
                    />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.id} {this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer;
