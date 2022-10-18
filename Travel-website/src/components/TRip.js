
import trip1 from "../assets/img5.jpg"
import trip2 from "../assets/img6.jpg"
import trip3 from "../assets/img7.jpg"
import TripData from "./TripData"
function TRip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData scrImg={trip1} heading="Trip in Djelfa" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?"/>
                <TripData scrImg={trip2} heading="Trip in Alger" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?"/>
                <TripData scrImg={trip3} heading="Trip in Oran" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat quas assumenda tenetur? Dignissimos animi vel in blanditiis tempore reiciendis ab, ducimus iste amet commodi assumenda perspiciatis quia tempora at?"/>
            </div>

        </div>
        
    )
}

export default TRip;