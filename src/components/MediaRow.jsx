import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Likes from './Likes.jsx';

const MediaRow = ({item}) => (
      <tr key={item.media_id}>
        <td>
          <img src={item.thumbnail} alt={item.title}/>
        </td>
        <td>{item.username}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>
          <Link className='border rounded' to={`/media/${item.media_id}`} state={{item}}>View</Link>
          <Likes id={item.media_id}/>
        </td>
      </tr>
);

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MediaRow;
