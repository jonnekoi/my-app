import MediaRow from '../components/MediaRow.jsx';
import {useMedia} from '../hooks/ApiHooks.js'

const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);

  const {mediaArray} = useMedia();
  return (
      <>
        <h2 className='text-2xl font-bold mb-3'>My media</h2>
        <table>
          <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {mediaArray.map((item) => (
              <MediaRow
                  key={item.media_id}
                  item={item}
                  //setSelectedItem={setSelectedItem}
              />
          ))}
          </tbody>
        </table>
      </>
  );
};
export default Home;
