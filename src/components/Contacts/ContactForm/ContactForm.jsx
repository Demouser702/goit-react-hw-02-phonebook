import React, { Component } from 'react';
import Button from '../../common/Button';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={` form ${styles.box}`} onSubmit={this.handleSubmit}>
        <label>
          <span>Name </span>
          <input
            className="form-input "
            value={name}
            name="name"
            type="text"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>Number </span>
          <input
            className="form-input "
            value={number}
            name="number"
            type="tel"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
