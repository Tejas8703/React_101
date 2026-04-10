import Card from './components/card.jsx'

const App = () =>{
  const jobs = [
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "5 days ago",
    position: "Senior UI/UX Designer",
    tags: "Part Time",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 days ago",
    position: "Frontend Developer",
    tags: "Full Time",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "1 week ago",
    position: "Software Engineer",
    tags: "Full Time", 
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    position: "Product Designer",
    tags: "Contract", 
    pay: "$110/hr",
    location: "Remote"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "6 days ago",
    position: "React Developer",
    tags: "Full Time", 
    pay: "$95/hr",
    location: "Gurgaon, India"
  },
  {
    logo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "4 days ago",
    position: "Backend Engineer",
    tags: "Full Time",
    pay: "$105/hr",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 weeks ago",
    position: "iOS Developer",
    tags: "Full Time",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "1 day ago",
    position: "Embedded Systems Engineer",
    tags: "Full Time", 
    pay: "$115/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "3 days ago",
    position: "UI Designer",
    tags: "Part Time",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "5 days ago",
    position: "UX Researcher",
    tags: "Contract",
    pay: "$85/hr",
    location: "Noida, India"
  }
];
  return (
    <div className="parent">
      {jobs.map(function(elem){

        return <Card company ={elem.company} position ={elem.position} date = {elem.datePosted} logo = {elem.logo} tag = {elem.tags}/>

      })}
    </div>
  )
}
export default App


 