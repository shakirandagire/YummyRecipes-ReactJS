import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import axiosInstance from '../Constants/AxiosCall';

class SingleRecipe extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      date_created: '',
      name: '',
      time: '',
      ingredients: '',
      procedure: '',
      category_id: '',

    };
  }

  // mount recipes when page loads
  componentDidMount() {
    this.handleRecipe();
  }

  // handle get recipe request
  handleRecipe = () => {
    const id = this.props.match.params['id'];
    const categoryid = this.props.match.params['category_id'];

    // send GET request to API
    axiosInstance.get(`category/${categoryid}/recipes/${id}`)
      .then((response) => {
        const recipe = response.data['recipes'];
        this.setState({
          date_created: recipe['date_created'],
          time: recipe['time'],
          ingredients: recipe['ingredients'],
          procedure: recipe['procedure'],
          name: recipe['name'],
          category_id: recipe['category_id'],
          id: recipe['id'],
        });
      })

      .catch((error) => {
        notify.show(error.response, 'error', 4000);
      });
  };


  // handle delete recipe request
  handleDeleteRecipe = (event) => {
    const id = event.currentTarget.getAttribute('id');
    const categoryid = this.props.match.params['category_id'];

    // send DELETE request to API
    axiosInstance.delete(`category/${categoryid}/recipes/${id}`)
      .then((response) => {
        this.handleRecipe();
        notify.show(response.data.message, 'success', 4000);
        this.setState({
          id: this.state.id,
        });
        this.props
          .history
          .push(`/categories/${categoryid}/recipes`);
      })

      .catch((error) => {
        notify.show(error.response, 'error', 4000);
      });
  };

  // render a single recipe
  render() {
    const recipe = this.state;

    const styles = {
      card2: {
        position: 'relative',
        padding: 10,
        width: 450,
        float: 'left',
        margin: 5,

      },
      align: {
        align: 'left',

      },
    };
    return (
      <div>
        <MuiThemeProvider>

          <div>
            {(
              <div style={styles.card2}>
                <MuiThemeProvider is="nospace start">
                  <Card >
                    <h2 style={{ marginLeft: 30, paddingTop: 10 }}>{recipe['name']}</h2>
                    <p style={{ marginLeft: 30, marginBottom: 30 }}>Time taken: {recipe['time']}</p>
                    <p style={{ marginLeft: 30, marginBottom: 30 }}>Ingridients: {recipe['ingredients']}</p>
                    <p style={{ marginLeft: 30, marginBottom: 30 }}>Procedure: {recipe['procedure']}</p>
                    <CardText>
                      {
                        <div>

                          <p style={{ marginLeft: 15 }}><i>Created: </i>
                            {this.state.date_created}
                          </p>

                        </div>

                      }
                    </CardText>
                    <Link to={`/categories/${recipe['category_id']}/recipes/${recipe['id']}`}>
                      <FlatButton
                        label="Edit"
                        id={recipe['id']}
                        desc={recipe['desc']}
                        primary={true}
                      />
                    </Link>
                    <FlatButton
                      label="Delete"
                      style={{ color: 'red' }}
                      category_id={recipe['category_id']}
                      id={recipe['id']}
                      onClick={(event => this.handleDeleteRecipe(event))}
                    />
                  </Card>

                </MuiThemeProvider>
              </div>
            )}
          </div>

        </MuiThemeProvider>
      </div>

    );
  }
}

export default SingleRecipe;
