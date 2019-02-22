import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

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
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-25%)'
            }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );

}

const Home = (props) => {
    if (props.dishesLoading || props.promoLoading || props.leaderLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishErrMess || props.promoErrMess || props.leaderErrMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishErrMess}</h4>
                    <h4>{props.promoErrMess}</h4>
                    <h4>{props.leaderErrMess}</h4>
                </div>
            </div>
        );
    } else if(props.dish != null || props.promotion != null || props.leader != null)
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
                        <RenderCard item={props.leader} isLoading={props.leaderLoading} err={props.leaderErrMess} />
                    </div>
                </div>
            </div>
        );
}

export default Home;