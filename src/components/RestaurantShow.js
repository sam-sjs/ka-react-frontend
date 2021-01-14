import React from 'react';
<<<<<<< HEAD
import {config} from '../Constants'
import axios from 'axios'
import { GoogleMap, UseJsApiLoader } from '@react-google-maps/api'
import GoogleMaps from './GoogleMaps'
=======
import {config} from '../Constants';
import axios from 'axios';
import { GoogleMap, UseJsApiLoader } from '@react-google-maps/api';
import GoogleMaps from './GoogleMaps';
import Popup from './Popup';
>>>>>>> 036bdaddc62437f87d4af70b52985bd462af527c
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class RestaurantShow extends React.Component {

  state = {
    restaurant: {},
    menuItems: []
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/restaurants/${this.props.match.params.id}`)
    .then( res => {
      console.log('res', res);
      this.setState({restaurant: res.data.restaurant, menuItems: res.data.menuItems});
    })
    .catch(console.warn);

  }

  render(){
    return(
      <div>
<<<<<<< HEAD
        <div className="displayMenus">
=======

        {this.state.showPopup ?
          <Popup text="Nutrtion" closePopup={this.togglePopup}/>
          : null
        }
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.menuItems.map(r => {
                return (
                  <tr key={r.id}>
                    <td><img src={r.image} alt=""></img></td>
                    <td onClick={this.togglePopup}>{r.menu_item}</td>
                    <td>{r.item_description}</td>
                  </tr>
                    );
              })
            }
          </tbody>
        </table>

>>>>>>> 036bdaddc62437f87d4af70b52985bd462af527c
          {
            this.state.menuItems.map(r => (
              <Card style={{ width: '18rem'}} key={r.id}>
              <Card.Body>
                <Card.Img variant="top" src={r.image} />
                  <Card.Title>{r.name}</Card.Title>
                  <Card.Text>This is a description of the restaurant</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{r.menu_item}</ListGroupItem>
                  <ListGroupItem>{r.item_description}</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
              ))
          }
<<<<<<< HEAD
          </div>
=======
>>>>>>> 036bdaddc62437f87d4af70b52985bd462af527c
        <GoogleMaps />
      </div>
    )
  } // render

} // class RestaurantShow

export default RestaurantShow;
