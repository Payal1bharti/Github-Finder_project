import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user: {login, avatar_url}}) {
    return <div className='card shadow-md compact side bg-base-100 text-accent-focus'>
        <div className='flex-row items-centre space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className='rounded-full shadow w-14 h-14'>
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title'>{login}</h2>
            <Link className='text-info text-opacity-60' 
            to={`/user/${login}`}>
                Visit Profile
            </Link>
          </div>
        </div>
        </div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem