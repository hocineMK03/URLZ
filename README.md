# URL Shortener

URL Shortener is a Node.js library that helps you shorten URLs.

## Installation

You can install the URL Shortener library via npm:

```bash
npm install @hocinemk/urlz
```

## basic exemple with default configuration
```javascript

  const urlshortenerfunc = new urlshortener();
    const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', 'https://www.exemple.com');

```

## configuration
you can setup how many characters you want in length by :

```javascript
const urlshortenerfunc = new urlshortener({ shortidLength: 3 });
```

## basic exemple wiht configuration
```javascript
const urlshortenerfunc = new urlshortener({ shortidLength: 8 });
const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', 'https://www.exemple.com');

```