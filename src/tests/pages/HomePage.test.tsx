import renderer from 'react-test-renderer';
import HomePage from '../../pages/HomePage';

test('Home Page renders', () => {
  const props = {};
  const component = renderer.create(<HomePage {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
