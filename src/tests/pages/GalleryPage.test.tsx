import renderer from 'react-test-renderer';
import { GalleryPage } from '../../pages/GalleryPage';

test('Gallery Page renders', () => {
  const props = {};
  const component = renderer.create(<GalleryPage {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});