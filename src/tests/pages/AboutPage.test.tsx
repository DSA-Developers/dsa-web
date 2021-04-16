import renderer from 'react-test-renderer';
import AboutPage from '../../pages/AboutPage';

test('About Page renders', () => {
  const props = {};
  const component = renderer.create(<AboutPage {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});