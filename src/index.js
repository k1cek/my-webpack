import { message, messageDOM } from './tools/message';
import './components/footer';
import info from './data/tekst.txt';
import './sass/index.scss';
import addImage from './tools/image';

message('działa po bundlingu ;)');
messageDOM(info);
addImage('h1');