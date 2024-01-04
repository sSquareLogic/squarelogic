class Validator {
  public static hasValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  public static hasValidName(name: string): boolean {
    return name.length > 0;
  }
  public validateAll = (name: string, email: string): boolean => {
    return Validator.hasValidName(name) && Validator.hasValidEmail(email);
  };
}

export default Validator;
