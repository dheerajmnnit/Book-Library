import React, { Component } from './../../../node_modules/react'
import App from '../../App'
import Card from '../Books/card'
import Loader from '../Loader/loader'
import { link } from "../../Constants/constant";
import PropTypes from './../../../node_modules/prop-types';
import { connect } from './../../../node_modules/react-redux';
import { bindActionCreators } from './../../../node_modules/redux';
import { fetchPosts, deletePost, fetchProductsFilter, filerOptionValue } from '../../Actions/postActions';

class allBook extends Component {
    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
        this.optionValue = this.optionValue.bind(this)
    }
    deleteContact(e, data) {
        e.preventDefault();
        this.props.deletePost(data)
    }
    handleSearch = (searchValue) => {
        this.props.fetchProductsFilter(searchValue);
    }
    optionValue = (selectedValue) => {
        this.props.filerOptionValue(selectedValue)
    }
    editContact(e, data) {
        this.props.history.push({ pathname: link.EditUrl, state: data });
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        let cards = this.props.posts.reverse().map((book, index) => {
            return (
                <Card
                    key={index}
                    id={book._id}
                    author={book.bookauthor}
                    name={book.bookname}
                    image={book.bookimage}
                    price={book.bookprice}
                    count={book.bookcount}
                    onClick={(e) => this.deleteContact(e, book)}
                    onClickEdit={(e) => this.editContact(e, book)}

                />
            )
        })

        const arr = this.props.filterArray;
        let filteredArr = arr.reduce((acc, current) => {
            let x = acc.find(item => item.bookcategory === current.bookcategory);
            if (!x) return acc.concat([current])
            else return acc;
        }, []);
        return (
            <React.Fragment>
                <App>
                    <h2>Dashboard</h2>
                    <input
                        className="searchBook"
                        type="search"
                        placeholder="Search Books"
                        value={this.props.searchValue}
                        onInput={(e) => this.handleSearch(e.target.value)}
                    />
                    <select className="filterSearch" onChange={(e) => this.optionValue(e.target.value)}>
                        <option value="">All</option>
                        {filteredArr.map((item, key) =>
                            <option key={key} value={item.bookcategory}>{item.bookcategory}</option>
                        )}
                    </select>
                    <p className="pStyle">There are {this.props.posts.length} books in this library. See Below</p>
                    {cards.length ? cards : <Loader />}
                </App>
            </React.Fragment>
        )
    }
}

allBook.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    optionValue: PropTypes.func.isRequired

};
const mapDispatchToProps = dispatch => bindActionCreators({ fetchProductsFilter, deletePost, fetchPosts, filerOptionValue }, dispatch);
const mapStateToProps = state => ({
    posts: state.posts.searchArray,
    searchValue: state.posts.searchValue,
    filterArray: state.posts.filterArray
});

export default connect(mapStateToProps, mapDispatchToProps)(allBook);
