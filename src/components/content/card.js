import Image from "next/image";

const Card = ({title, text, bg, img}) => {
  return (
    <div className="courses-card" style={{backgroundColor:bg}}>
      <div className="card-content">
        <div className="card-subcontent-1">
          <p className="card-title">Курс</p>
          <h2 className="card-title-2">{title}</h2>
        </div>
        <p className="card-text">{text}</p>
      </div>
      <Image src={img} alt="imag" className="image"/>
    </div>
  );
};

export default Card;
