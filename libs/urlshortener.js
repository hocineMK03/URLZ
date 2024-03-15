const shortid = require('shortid');

class UrlShortener {
    constructor(options = {}) {
        this.shortidLength = options.shortidLength || 6;
    }

    shorten(url, baseUrl) {
        if (!url || !baseUrl) {
            return null;
        }

        let uniqueKey = '';
        let short = '';

        const restUrl = url.replace(baseUrl, '');
        const removeSlash = restUrl.replace(/\/$/, '');

        if (this.shortidLength < 4) {
            short = shortid.generate().slice(0, this.shortidLength);
        } else  {
            short = shortid.generate();
            uniqueKey = Buffer.from(removeSlash).toString('base64').slice(0, 3);
            short = short.slice(0, this.shortidLength - 3);
            short = short + uniqueKey;
        }

        const shorturl = baseUrl + '/' + short;

        return shorturl;
    }
}

module.exports = UrlShortener
