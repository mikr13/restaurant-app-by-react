import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

import { Loading } from './LoadingComponent';

import { baseUrl } from '../shared/baseUrl';


const RenderCard = ({item, isLoading, err}) => {
    
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (err) {
        return (
            <h4>{err}</h4>
        );
    } else if (item == null) {
        return (
            <Loading />
        );
    } else 
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}

const Home = (props) => {
    if (props.dishesLoading || props.promoLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishErrMess || props.promoErrMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishErrMess}</h4>
                    <h4>{props.promoErrMess}</h4>
                </div>
            </div>
        );
    } else if(props.dish != null || props.promotion != null)
        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading} err={props.dishesErrMess}  />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} isLoading={props.promoLoading} err={props.promoErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div>
        );
}

export default Home;