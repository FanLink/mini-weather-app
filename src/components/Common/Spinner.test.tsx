import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Spinner } from './Spinner';
enzyme.configure({ adapter: new Adapter() });
describe('Spinner', () => {
  test('find id in Spinner', () => {
    const wrapper = enzyme.shallow(<Spinner />);
    expect(wrapper.find({ 'data-testid': 'spinner-component-id' }));
  });
});
