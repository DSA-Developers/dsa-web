import renderer from 'react-test-renderer';
import { ContactPage } from '../../pages/ContactPage';

test('Contact Page renders', () => {
  const props = {};
  const component = renderer.create(<ContactPage {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});