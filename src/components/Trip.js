import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/05.jpg";
import Trip2 from "../assets/08.jpg";
import Trip3 from "../assets/06.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia is a beautiful country known for its islands and beaches. It has amazing natural scenery and a rich culture. Visitors can explore Bali and enjoy delicious food. Its friendly people make the trip memorable. Indonesia is a wonderful place to visit and explore nature."               
                />
<TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia is a beautiful country known for its modern cities and natural beauty. It is famous for the Petronas Towers and lovely beaches. Visitors can enjoy delicious food and explore green forests. Malaysia has a rich culture and friendly people. It is a wonderful place for an enjoyable trip."               
                />
<TripData
                image={Trip3}
                heading="Trip in France"
                text="France is a beautiful country known for its culture and historic places. It is famous for the Eiffel Tower and its beautiful cities. Visitors enjoy delicious food and lovely scenery. France has many museums, gardens, and famous landmarks. It is a wonderful place to explore and enjoy a memorable trip."               
                />
            </div>
        </div>
    );
}
export default Trip;