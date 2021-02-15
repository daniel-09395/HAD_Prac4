import React from 'react';

class ListValue extends React.Component {
    state = {
        list_array : ["Javascript", "Python", "Ruby", "Go"],
    };

    sortList() {
        this.setState({list_array : this.state.list_array.sort()});
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.list_array.map((item) => <li>{item}</li>)}
                </ul>
                <button onClick={this.sortList.bind(this)}>sort</button>
            </React.Fragment>
        );
    }
}

export default ListValue;
