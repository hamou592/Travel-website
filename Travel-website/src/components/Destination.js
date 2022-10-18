import img2 from "../assets/img2.jpg"
import img1 from "../assets/img1.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import DestinationData from "./DestinationData"
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData heading="Oum Bouaki,Algeria"
            img1={img1} img2={img2} cName="first-des" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?"
             />
            <DestinationData heading="Djijal,Algeria"
            img1={img3} img2={img4} cName="second-des" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?"
             />
        </div>
    )
}

export default Destination;