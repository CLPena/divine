import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions';
import planet from '../../icons/planet.png'
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      classes: 'no-results hidden'
    }
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = (e) => {
    this.setState({ classes: 'no-results hidden' })
    e.preventDefault();
    let searchTerm = this.state.searchTerm.toUpperCase();
    let results = this.props.cards.filter(card => card.name.toUpperCase().includes(searchTerm) || card.meaning_up.toUpperCase().includes(searchTerm)
    );

    if(results.length) {
      this.props.search(results);
      this.setState({ searchTerm: '' })
      this.props.history.push('/search')
    } else {
      this.setState({ searchTerm: '', classes: 'no-results' })
      this.props.search([])
    }
  }

  render() {
    return (
      <form className="search-container">
        <input className="search" placeholder="search..." onChange={this.handleChange} value={this.state.searchTerm}>
        </input>
        <button type="submit" className="search-button" onClick={this.handleSubmit}><img className='planet' src={planet} alt='search icon'/></button>
        <p className={this.state.classes}>Sorry, no matches found!</p>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  search: results => dispatch( search(results) )
})

const mapStateToProps = (state) => ({
  cards: state.cards,
  favorites: state.favorites,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm))
