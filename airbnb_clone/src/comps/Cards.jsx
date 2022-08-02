import Card from "./Card";
import data from "../data.js";

export default function Cards() {
  return (
    <div className="cards">
      {data.map((course) => {
        return <Card key={course.id} {...course} />;
      })}
    </div>
  );
}
