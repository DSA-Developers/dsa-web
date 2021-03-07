import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';

test('Navigation bar renders', () => {
  const props = {};
  const component = renderer.create(
    <Router>
      <Navigation {...props} />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
