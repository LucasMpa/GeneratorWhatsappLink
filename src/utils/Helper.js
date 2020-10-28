export default class Helper {
  
    static onlyNumbers(value){
      return value.replace(/\D/g, "");
    }
  }