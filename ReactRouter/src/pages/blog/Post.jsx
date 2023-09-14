import { Helmet } from 'react-helmet'
import {useParams} from 'react-router-dom'

const Post = () => {
  //const params=useParams()
  const {url,id}=useParams()
  return (
    <div>
      <Helmet>
        <title>{url} Detay</title>  
      </Helmet>
      Blog Post of {url}-{id}
      </div>
  )
}

export default Post