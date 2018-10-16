import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function FormatDate({cdate}) {
  var options = { month: 'short', day: '2-digit', year: 'numeric' };
  return new Date(cdate).toLocaleDateString([],options);
}

function RenderDish({dish}) {
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

function RenderComments({comments}) {
  if ( comments !=null )
    return(
      <ul className="list-unstyled">
        { comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, <FormatDate cdate = {comment.date} /></p>
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

const DishDetail = (props) => {

  if(props.dish != null)
    return (
      <div className="container">
        <div className="row" style={{margin: 0 + 'em', padding: 0 + 'em'}}>
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
        </div>
        <div className="row" style={{margin: 0 + 'em', padding: 0 + 'em'}}>
          <div className="col-xs-12 col-sm-12 col-md-6 ml-4 mr-2 my-3">
            <RenderDish dish= {props.dish} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 my-3">
            <Card>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                <RenderComments comments= {props.comments} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div></div>
    );
}

export default DishDetail;