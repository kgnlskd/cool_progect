<script lang="ts">
    import { Card, CardHeader, CardImg, CardText, Col, Container, Row } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Контакты</title>
</svelte:head>

<Container>
    <h1>Контакты</h1>
    <Row>
        <Col>
            <Card>
                <CardHeader>Яруллин Виталий Андреевич</CardHeader>
                <CardImg src="https://team-chikara.com/wp-content/uploads/2018/05/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%AF%E3%83%BC%E3%82%AF.png"/>
                <CardText>Стаж: 5 лет</CardText>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Кузьмичев Андрей Юрьевич</CardHeader>
                <CardImg src="https://avatars.mds.yandex.net/i?id=d5c171e37820189e13caa66ce68a7404_l-5339868-images-thumbs&n=13"/>
                <CardText>Стаж: 7 лет</CardText>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Галиев Тимур Артемьевич</CardHeader>
                <CardImg src="https://avatars.dzeninfra.ru/get-zen_doc/5249897/pub_60dc440aeb3bc06967fcd7a0_60dc442b97db6e3a2d55982c/scale_1200"/>
                <CardText>Стаж: 3 года</CardText>
            </Card>
        </Col>

        
    </Row>
</Container>