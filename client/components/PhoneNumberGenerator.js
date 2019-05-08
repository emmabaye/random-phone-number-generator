/* eslint-disable react/sort-comp */
import React, { Component } from "react";
import axios from "axios";


export default class PhoneNumberGenerator extends Component {
    state = {
      phoneNumbers: [],
      ascending: true,
      loading: false,
    };

    generateNewNumbers = (url) => {
      this.setState({
        loading: true,
      });
      axios.get(url)
        .then((response) => {
          console.log(response);
          this.setState({
            phoneNumbers: response.data.sort(),
            ascending: true,
            loading: false
          });
        })
        .catch((error) => {
          console.log("error ", error);
        });
    };

    toggleOrder = () => {
      this.setState({
        phoneNumbers: this.state.phoneNumbers.reverse(),
        ascending: !this.state.ascending
      });
    }

    componentDidMount() {
      this.generateNewNumbers("/download/generatedPhoneNumbers.json");
    }

    render() {
      return (
        <section id="app-section">
          <h2>Random Phone Number Generator</h2>
          <button
            className="btn btn-primary"
            onClick={() => this.generateNewNumbers('/api/generate-numbers')}>
          Generate New Numbers
          </button>
          <a
            className="btn btn-primary"
            href="/download/generatedPhoneNumbers.json"
            target="_blank" >
          Download As JSON
          </a>
          <a className="btn btn-primary"
            href="/download/generatedPhoneNumbers.txt"
            target="_blank">
          Download As Text
          </a>
          <a
            className="btn btn-primary"
            href="/download/generatedPhoneNumbers.csv"
            target="_blank">Download As CSV
          </a>
          <h5>Total Phone Numbers Generated: {
            !this.state.loading ? this.state.phoneNumbers.length : "Loading..."
          }</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th
                  scope="col"
                  className="toggleHeader"
                  onClick={() => this.toggleOrder()}>
                Phone Number{
                    this.state.ascending ? <i className="fa fa-sort-up" /> : <i className="fa fa-sort-down" />
                  }
                </th>
              </tr>
            </thead>
            <tbody>{
              this.state.phoneNumbers.map((phoneNumber, index) => (<tr key={index}>
                <th scope="row">{
                  this.state.ascending ? index + 1 : this.state.phoneNumbers.length - index
                }
                </th>
                <td>{phoneNumber}</td>
              </tr>))
            }
            </tbody>
          </table>
        </section>
      );
    }
}
