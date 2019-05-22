import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import '@babel/polyfill';

configure({ adapter: new Adapter() });
