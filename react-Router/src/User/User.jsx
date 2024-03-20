import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-orange-500 text-white p-5'>User : {userid}
    </div>
  )
}

export default User