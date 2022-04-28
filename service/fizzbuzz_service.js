

class FizzBuzzService {

  static assignFizzBuzz = (explorer) => explorer.score % 3 && explorer.score % 5 ? "FIZZBUZZ" : explorer.score;

  static assingFizz = (explorer) => explorer.score % 5 ? "FIZZ" : explorer.score;

  static assingBuzz = (explorer) => explorer.score % 3 ? "BUZZ" : explorer.score;
}

export default FizzBuzzService;
