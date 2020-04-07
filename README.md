# randcolor-library
Randcolor library - give a html object random color!

How to use it?

- Download the library
- Link the script in the HTML
- Start using it!

html
```html
<script src="randcolor.js"></script>
```

functions
```javascript

// Change the color of the element to random
randcolor('.querySelector').color();


// Change the color of the element to random by time
randcolor('.querySelector').colorByTime(500); //Pass the number of milliseconds here


// Change the background color of the element to random
randcolor('.querySelector').backcolor();


// Change the background color of the element to random by time
randcolor('.querySelector').backcolorByTime(500); //Pass the number of milliseconds here


// Change the border color of the element to random
randcolor('.querySelector').bordercolor();


// Change the border color of the element to random by time
randcolor('.querySelector').bordercolorByTime(500); //Pass the number of milliseconds here


// Change the border color of the element to random
// You can define the border width ( in px ) and type 'string', defaults 1px, solid
randcolor('.querySelector').border(10, 'dashed');


// Change the border color of the element to random by time
// You can define the border width ( in px ) and type 'string', defaults 1px, solid
randcolor('.querySelector').bordercolorByTime(15, 'solid', 500); //Pass the number of milliseconds here

```

example
```javascript

randcolor('h1').borderColorByTime(15, 'dashed', 1000);
randcolor('.Attention').backcolor();

```
