CSS.js's CDN https://cdn.rawgit.com/ilovecode1/css.js/master/css.min.js

#5 Reasons To Use CSS.js:

1. Simple!

2. Less Code!

3. Live!

4. Fast!

5. Great For Animations!

#About

Simply add CSS with JS!

```
cssjs("yourcsscode");
```

It updates live so you do not have to worry!

#New Options

With v0.2.0 we now have a option of where to put your CSS:

##In The Head Element:

```
cssjs("yourcsscode");
```

or

```
cssjs("yourcsscode", true);
```

#In the Body Element

```
cssjs("yourcsscode",false);
```

#Demo

HTML

```
<script src="path/to/css.js"></script>
<h1>CSS.js</h1>
```

JS

```
cssjs("h1{background: red}");
```

#Version

v0.1.0 - Release

v0.2.0 - New Option See ```#New Options```
