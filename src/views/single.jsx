import {useLocation, useNavigate, useParams} from 'react-router-dom';
import SingleView from '../components/SingleView.jsx';

const Single = () => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()

  if(!location.state?.item){
    return null;
  }

  const {item} = location.state

  return<SingleView
    selectedItem={item}
    setSelectedItem={()=>navigate(-1)}
  />
}

export default Single;
