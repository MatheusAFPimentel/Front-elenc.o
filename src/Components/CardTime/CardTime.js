import { CardText, CardBody, CardTitle, Card, CardImg } from "reactstrap";
import "./cardTime.css";

function CardTime(props) {
  return (
    <div>
      <Card id="card_time">
        <CardImg
          className="card_time_img"
          top
          width="100%"
          src={props.membro.imagem}
          alt="Foto do time"
        />
        <CardBody>
          <CardTitle className="card_time_nomes">
            <b>{props.membro.nome}</b>
          </CardTitle>
          <CardText>
            <a id="card_time_github" href={props.membro.github}>
              GitHub
            </a>
          </CardText>
          <CardText className='card_time_funcao'>{props.membro.funcao}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardTime;
