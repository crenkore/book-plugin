module.exports = {
  hooks: {
    // Index each page
    'page': function (page) {
      console.log('page ok');
    },
    // Write index to disk
    'finish': function() {

    }
  }
};
