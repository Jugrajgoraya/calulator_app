let BodyExtractor = require('extract-main-text');
let fs = require('fs')
let extractor = new BodyExtractor({
    url: 'https://s3.amazonaws.com/codecore-website-data/certifiedin_images/Oxford+English+Dictionary.txt'
  });
extractor.analyze()
  .then(function(text) {
    fs.appendFileSync('data.txt',extractor.mainText)
    console.log(extractor.mainText);
});