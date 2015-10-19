var ModularPartitioningRule = function (numberPartitions, remainder) {
  require('../../../cucumber');

  var self = {
    isSatisfiedByElement: function isSatisfiedByElement(element) {
      return (element.counter % numberPartitions) === remainder;
    }
  };
  return self;
};

module.exports = ModularPartitioningRule;