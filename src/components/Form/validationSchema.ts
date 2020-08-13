export const loginStateValidatorSchema = {
  email: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Must not be empty"
    },
    isEmail: {
      func: value =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value
        ),
      error: "Invalid email format"
    }
  },
  password: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Password must not be empty"
    }
  }
};

export const registrationStateValidatorSchema = {
  name: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Name must not be empty"
    },
    isString: {
      func: value => /^[a-zA-Z]+$/.test(value),
      error: "Invalid name format"
    }
  },
  email: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Email must not be empty"
    },
    isEmail: {
      func: value =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value
        ),
      error: "Invalid email format"
    }
  },
  password: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Password must not be empty"
    },
    isValidPassword: {
      func: value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W\-_]{5,}$/.test(value),
      error: "Invalid password: must be greater than 5, and have numbers, upper and lower case letter and characters"
    }
  },
  confirmPassword: {
    isEmpty: {
      func: value => Boolean(value.length),
      error: "Confirm password must not be empty"
    },
    isEqual: {
      func: (password: string, confirmPassword: string) =>
        password === confirmPassword,
      error: "Password not equal"
    }
  }
};
