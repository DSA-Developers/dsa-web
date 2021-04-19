import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/Footer';

describe('Navigation', () => {
  test('Footer renders', () => {
    const component = renderer.create(
      <Router>
        <Footer />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
