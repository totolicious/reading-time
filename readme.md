#reading-time

This is a simple javascript function that estimates the read duration of a string.

It is useful to set timeouts for various messages that appear in temporary UI elements such as popups and hints.

#Examples

```
var text = 'This is a simple javascript function that estimates the read duration of a string.';

alert('It takes ' + readTime(text)) + 's to read this text:\n'+text);
```


See the examples folder for more examples