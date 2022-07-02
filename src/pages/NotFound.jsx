import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='hero'>
          <div className='text-center hero-content'>
            <div className='max-w-md'>
                <h1 className='text-7xl font-bold mb-8 text-info'>Oops!</h1>
                <p className='text-4xl mb-8 text-warning'>Something Went wrong</p>
                <p className='text-2xl mb-8 text-error'>Error 404 Page Not Found</p>
                <Link to='/' className='btn btn-primary btn-lg'>
                    <FaHome className='mr-2'/>
                    Back To Home
                </Link>

            </div>

          </div>
        </div>
    )
}

export default NotFound