var natural = require('natural'),
    classifier = new natural.BayesClassifier();

classifier.events.on('trainedWithDocument', function(obj) {
    console.log('obj', obj);
    /* {
     *   total: 23 // There are 23 total documents being trained against
     *   index: 12 // The index/number of the document that's just been trained against
     *   doc: {...} // The document that has just been indexed
     *  }
     */
});

classifier.addDocument([{
    red: 1,
    green: 1,
    blue: 1
}], {
    white: 1,
    like: 1
});
classifier.addDocument('buy the q\'s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();

console.log('i am short silver ', classifier.classify('i am short silver'));
console.log('i am long copper', classifier.classify('i am long copper'));

classifier.addDocument(['sell', 'gold'], 'sell');
classifier.train();
console.log('i am long copper', classifier.getClassifications('i am long copper '));
