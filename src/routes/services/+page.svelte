<script lang="ts">
    import { Card, CardBody, Col, Container, Row,CardHeader, CardText, CardImg  } from "@sveltestrap/sveltestrap";
 
</script>
<svelte:head>
    <title>Chorniy</title>
</svelte:head>

<Container>
    <h1>Наши услуги</h1>
    <Row>
            
                    <Col>
                        <Card>
                          <CardHeader>Малый</CardHeader>
                          <CardBody>
                            <CardImg src=""/>
                            <CardText> До 100 тысяч
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                                  
                    <Col>
                        <Card>
                          <CardHeader>Средний</CardHeader>
                          <CardBody>
                            <CardImg src=""/>
                            <CardText> До 500 тысяч
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

    
    </Row>
</Container>