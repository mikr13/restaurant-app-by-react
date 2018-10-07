import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  formatDate(string){
    var options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  renderComments(comments) {
    if ( comments !=null )
      return(
        <ul className="list-unstyled">
          { comments.map((comment) => (
              <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {this.formatDate(comment.date)}</p>
              </li>
            ))
          }
        </ul>
      );
    else
      return (
      <div></div>
      );
  }

  render() {
    if(this.props.dish != null)
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 m-1">
            <Card>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                {this.renderComments(this.props.dish.comments)}
              </CardBody>
            </Card>
          </div>
        </div>
      );
    else
      return (
        <div></div>
      );
  }
}

export default DishDetail;