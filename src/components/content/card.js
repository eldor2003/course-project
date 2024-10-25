const Card = ({title, text, bg}) => {
  return (
    <div className="courses-card" style={{backgroundColor:bg}}>
      <div className="card-content">
        <div className="card-subcontent-1">
          <p className="card-title">Курс</p>
          <h2 className="card-title-2">{title}</h2>
        </div>
        <p className="card-text">{text}</p>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default Card;
