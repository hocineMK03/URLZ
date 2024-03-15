const urlshortener = require('../libs/urlshortener');

describe('URL Shortener', () => {
    it('should return a shortened URL with default settings', () => {
        const urlshortenerfunc = new urlshortener();
        const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', 'https://www.exemple.com');
        expect(shorturl).toMatch(/https:\/\/www.exemple.com\/[\w-]{6}/);
        console.log(shorturl)
    });
    it('should return a shortened URL with custom settings', () => {
        const urlshortenerfunc = new urlshortener({ shortidLength: 8 });
        const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', 'https://www.exemple.com');
        expect(shorturl).toMatch(/https:\/\/www.exemple.com\/[\w-]{8}/);
        console.log(shorturl)

    });
    it('houdlr eturn a shortened URL with custom settings', () => {
        const urlshortenerfunc = new urlshortener({ shortidLength: 3 });
        const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', 'https://www.exemple.com');
        expect(shorturl).toMatch(/https:\/\/www.exemple.com\/[\w-]{3}/);
        console.log(shorturl)
    });
    it('should return null if no URL is provided', () => {
        const urlshortenerfunc = new urlshortener();
        const shorturl = urlshortenerfunc.shorten('', 'https://www.exemple.com');
        expect(shorturl).toBeNull();
    });
    it('should return null if no URL is provided', () => {
        const urlshortenerfunc = new urlshortener();
        const shorturl = urlshortenerfunc.shorten('https://www.exemple.com/testmock', '');
        expect(shorturl).toBeNull();
    });
});
