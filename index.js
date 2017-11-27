module.exports = {
  // Map of hooks
  hooks: {
    // Index each page
    'page': function (page) {
      console.log('page ok');
    },
    // Write index to disk
    'finish': function () {

    }
  },
  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {}
};
