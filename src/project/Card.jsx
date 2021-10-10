import React from "react";
import "./card.css";
import Pill from "../component/pill";

class CardHeader extends React.Component {
  render() {
    const imagesrc = this.props.image;
    return (
      <header
        style={{ backgroundImage: `url(${imagesrc})` }}
        className="card-header"
      >
        <h4 className="card-header--title">{this.props.name}</h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <b> &gt;</b> Find out more
      </div>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.date}</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>
        {this.props.skills
          ? this.props.skills.map((element) => {
              return <Pill key={element} text={element} />;
            })
          : null}
        <Button />
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    if (this.props.link) window.open(this.props.link, "_blank");
    // window.location.href = this.props.link;
    else alert("Coming soon....");
  };
  render() {
    return (
      <article onClick={this.handleClick} className="card">
        <CardHeader image={this.props.imagePath} name={this.props.name} />
        <CardBody
          date={this.props.date}
          title={this.props.title}
          text={this.props.text}
          skills={this.props.skills}
        />
      </article>
    );
  }
}

export default Card;
