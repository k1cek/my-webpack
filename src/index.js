import { message, messageDOM } from './tools/message';
import './components/footer';
import info from './data/tekst.txt';
import './sass/index.scss';
import addImage from './tools/image';
import Creator from './tools/creator';

message('działa po bundlingu ;)');
messageDOM(info);
addImage('h1');
const e1 = new Creator();
e1.bgdCol('red');
const e2 = new Creator();
e2.bgdCol('blue');
const e3 = new Creator();
e3.showColor();