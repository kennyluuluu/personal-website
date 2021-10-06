import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

// const projectData = {
//     {
//         imageSrc: ".../400x300"
//         title: "fol.io",
//         desc: "Financial portfolio advisor that utilizes public sentiment towards companies in order to predict stock changes using our FolioScore quantifier. Awarded Best Use of Google Cloud API at LAHacks 2018.",
        
//     },
// }

export default class Projects extends Component {
    render() {
        return (

            <Card style={{width: "18rem"}}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>fol.io</Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
