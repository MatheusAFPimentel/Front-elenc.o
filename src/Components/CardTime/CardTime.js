import { CardText, CardBody, CardTitle, Card, CardImg } from "reactstrap";
import "./cardTime.css";

function CardTime(props) {
  return (
    <div>
      <Card className="card_time">
        <CardImg
          className="img_card_time"
          top
          width="100%"
          src={props.membro.imagem}
          alt="Foto do time"
        />
        <CardBody>
          <CardTitle>
            <h3>{props.membro.nome}</h3>
          </CardTitle>
          <CardText>
            <a>{props.membro.github}</a>
          </CardText>
          <CardText>
            <p>{props.membro.funcao}</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardTime;
