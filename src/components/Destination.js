import Mountain1 from "../assets/01.jpg";
import Mountain2 from "../assets/02.jpg";
import Mountain3 from "../assets/03.jpg";
import Mountain4 from"../assets/04.jpg";
import DestinationData from "./DestinationData";
 import"./DestinationStyles.css"

const Destination =()=>{
return(
<div className="destination">
    <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame </p>

<DestinationData
className="first-des"
heading="Taal Volcano, Batangas"
text="Taal Volcano is one of the most beautiful and fascinating natural attractions in Batangas, Philippines. It is famous for its unique volcanic landscape surrounded by the stunning waters of Taal Lake. The volcano offers breathtaking views of nature and the surrounding mountains. Visitors are amazed by its beautiful scenery and remarkable geological features. The area is a perfect destination for nature lovers and photography enthusiasts. Its peaceful surroundings make it a memorable place to explore. Taal Volcano is also known for its interesting volcanic history and natural beauty. It is truly one of the most remarkable landmarks of the Philippines."
img1={Mountain1}
img2={Mountain2}
/>
<DestinationData
className="first-des-reverse"
heading="Mt.Daguldul,Batangas"
text="Mt. Daguldul is a beautiful mountain located in Batangas, Philippines. It is known for its lush greenery, scenic views, and peaceful surroundings. The mountain offers a wonderful hiking experience for nature lovers and adventure seekers. Along the trail, visitors can enjoy beautiful trees, plants, and fresh air. Its summit provides breathtaking views of the surrounding landscape and sea. The area is also home to diverse plants and wildlife. Mt. Daguldul is a perfect destination for people who want to relax and enjoy nature."
img1={Mountain3}
img2={Mountain4}
/>
   </div>

);
};
export default Destination;