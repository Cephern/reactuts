import star from "../../public/assets/star.png";

export default function Card({
  coverImg,
  stats,
  location,
  title,
  price,
  openSpots,
}) {
  return (
    <div className="card">
      <div className="card--banner">
        {openSpots > 0 ? "" : <span>SOLD OUT</span>}
        <img src={`../../assets/${coverImg}`} alt="Card Image" />
      </div>
      <div className="card--info">
        <div className="card--social">
          <div className="card--rating">
            <img src={star} alt="Star" />
            <span>{stats.rating}</span>
          </div>

          <p>
            <span>({stats.reviewCount})</span> · <span>{location}</span>
          </p>
        </div>
        <p className="card--title">{title}</p>
        <p className="card--pricing">
          <span>From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}
