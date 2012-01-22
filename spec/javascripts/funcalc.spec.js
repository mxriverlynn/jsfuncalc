describe("functional calculator", function(){
  var one = value(1);
  var two = value(2);
  var three = value(3);
  var four = value(4);

  describe("when adding 1 and 1", function(){
    var result;

    beforeEach(function(){
      result = add(one, one);
    });

    it("should equal 2", function(){
      expect(result()).toEqual(2);
    });

  });

  describe("when subtracting 1 from 2", function(){
    var result;

    beforeEach(function(){
      result = subtract(two, one);
    });

    it("should equal 1", function(){
      expect(result()).toEqual(1);
    });

  });

  describe('when multiplying 3 by 2', function(){
    var result;

    beforeEach(function(){
      result = multiply(three, two);
    });

    it("should equal 6", function(){
      expect(result()).toEqual(6);
    });
  });

  describe("when adding 1 and 1, and then subtracting 2", function(){
    var result;

    beforeEach(function(){
      result = subtract(two, add(one, one));
    });

    it("should equal zero", function(){
      expect(result()).toEqual(0);
    });
  });

  describe("when adding 1 and 2, multiplying by 3, then subtracting 4", function(){
    var result;

    beforeEach(function(){
      result = subtract(multiply(add(one, two), three), four);
    });

    it("should equal 5", function(){
      expect(result()).toEqual(5);
    });
  });

});
