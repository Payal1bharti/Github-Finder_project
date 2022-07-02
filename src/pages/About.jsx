import { Link } from "react-router-dom"
function About() {
    return (
        <div className="card w-96 bg-primary text-primary-content my-0 mx-auto">
        <img src="https://user-images.githubusercontent.com/3369400/133268513-5bfe2f93-4402-42c9-a403-81c9e86934b6.jpeg" alt="Github picture" />
        <div className="card-body">
          <h1 className="card-title">Github Finder</h1>
          <p>A React app to search GitHub profiles and see profiles details.</p>
          <div className="card-actions justify-end">
            <Link to='/' className='btn btn-primary btn-lg'>
            <button className="btn">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default About