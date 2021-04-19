import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import Nav from 'react-bootstrap/Nav';
import Navigation from '../../components/Navigation';

describe('Navigation', () => {
  const wrapper = shallow(<Navigation />);
  const links = wrapper.find(Nav.Link);

  test('Nav bar renders 4 links', () => {
    expect(links).toHaveLength(4);
  });

  test('Nav bar renders the proper link names', () => {
    expect(links.at(0).text()).toEqual('Home');
    expect(links.at(1).text()).toEqual('About');
    expect(links.at(2).text()).toEqual('Gallery');
    expect(links.at(3).text()).toEqual('Contact');
  });

  // snapshot test
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
});
