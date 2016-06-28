import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

    render() {
        if(!this.props.book) {
            return (
                <div className='col-sm-8 book-detail'>
                    Select a book to show its title.
                </div>
            );
        }

        return (
            <div className='col-sm-8 book-detail'>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);