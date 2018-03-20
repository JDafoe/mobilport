const {Composite, TextView, ui, Button, ImageView} = require('tabris');

// Create composites and append children to them

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';


let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#0b3dac'
}).appendTo(ui.contentView);

let casinoimage = new ImageView({
  top: 'prev() 10',
  centerX: 0,
  image: IMAGE_PATH + 'casino.jpg'
}).appendTo(composite1);

new Button({
  left: 10, top: 10,
  text: 'Button'
}).on('select', ({target}) => target.text = 'Pressed ' + (++count) + ' times')
  .appendTo(ui.contentView);


new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);