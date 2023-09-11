import Footer from "./Footer";
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from '../utils/utils';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('should equal Copyright if false', () => {
  const wrapper = shallow(<Footer />);
  expect(getFooterCopy(true)).toBe('Holberton School');
});