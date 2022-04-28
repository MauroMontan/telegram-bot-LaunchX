

class FizzBuzzService {

  static fizzBuzzValidation = (score) => {
    if (score % 3 === 0 && score % 5 === 0) {
      return "FIZZBUZ";
    }
    else if (score % 3 === 0) {
      return "FIZZ";
    }
    else if (score % 5 === 0) {
      return "BUZZ";
    }
    else {
      return score;
    }
  };

}

export default FizzBuzzService;
