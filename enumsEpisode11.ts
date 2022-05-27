
enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded"
}

// could also omit the string values for the enum states and in that case,
//  beforeLoad would be 0, loading 1, loaed 2

// can use as a key in a obj literal map
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loaded));

const rollDice = (dice: 1 | 2): number => {
  return (dice === 1) ? 2 : 1;
}
rollDice(2)

// 
enum CartAction {
  addToCart = 'addToCart',
  checkout = 'checkout'
}

// fn overload with diff values for name which constrain it
function sendEvent(name: 'addToCart', data: { productId: string}): void;
function sendEvent(name: 'checkout', data: { cartCount: number}): void;
function sendEvent(name: string, data: unknown): void {
  console.log(name)
}

// notice when you choose action, it lets you know what the 2nd param must be
sendEvent('addToCart', {productId: "271"})


// even better you can also us enum in overloads and it will enfore the 2nd param
function sendEventEnum(name: CartAction.addToCart, data: { productId: string}): void;
function sendEventEnum(name: CartAction.checkout, data: { cartCount: number}): void;
function sendEventEnum(name: CartAction, data: unknown): void {
  console.log(name)
}

sendEvent(CartAction.checkout, { cartCount: 10 } );



// could use enums for the name values, but hard to constrain data paran then

function sendOtherEvent(name: CartAction, data: { cartCount: number} |  { productId: string}) {
  console.log(name)
}
sendOtherEvent(CartAction.checkout, { cartCount: 10})

// as const
type LoadingStateAsConst = {
  beforeLoad: "beforeLoad",
  loading: "loading",
  loaded: "loaded"
}
type PP = keyof LoadingStateAsConst;

const isLoaded = (state: keyof LoadingStateAsConst): boolean => state === 'loaded';
const isLoaded2 = (state: 'beforeLoad' | 'loading' |'loaded'): boolean => state === 'loaded';

// possible, but both not as cool as enum ^
