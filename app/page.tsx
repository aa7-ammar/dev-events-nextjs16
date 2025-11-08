import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";

const Page = () => {
  return <section>
    <h1 className="text-center">Hub for every event <br/> You can't miss.</h1>
    <p className="text-center mt-5">Hackathons , Meetups and Conferences . All in one stop</p> 

    <ExploreBtn/>

    <div className="mt-20 space-y-7">
      <h3>Featured Events</h3>

      <ul>
        {events.map((event)=>(
          <li key={event.title}><EventCard {...event} /></li>
        ))}

      </ul>
    </div>
  </section>
}

export default Page;