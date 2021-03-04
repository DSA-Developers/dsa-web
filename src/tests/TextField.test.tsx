import renderer from 'react-test-renderer';
import { TextField } from '../components/TextField';

test('Text field created', () => {
  const props = {
    text: 'dsa',
    handleChange: () => {
      return;
    },
  };
  const component = renderer.create(<TextField {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
