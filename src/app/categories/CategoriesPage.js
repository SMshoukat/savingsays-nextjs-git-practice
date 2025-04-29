"use client"

import Link from "next/link";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

export default function CategoryPage({categories}) {
    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        {categories.map(category => (
                            <ListGroup.Item key={category?.id} action href={`/categories/${category?.slug}`}>{category.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}