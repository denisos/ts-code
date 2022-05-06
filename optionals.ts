// in ts can't put a required after an optional param

function printIngredient(quantity: string, ingredient: string) {
  console.log(`${quantity} ${ingredient}`);
}

printIngredient("1 cup", "flour")

type User = {
  id: string,
  info?: {
    email?: string;
  }
}

function getUser(user: User, callback?: () => void): string {

  callback?.();

  // if (user?.info && user.info?.email) {
  //   return user.info.email
  // }
  return "";
  // return user?.info?.email ?? "";
}

// console.log(getUser({id: "21", info: { email: "test@test.com " } }))
