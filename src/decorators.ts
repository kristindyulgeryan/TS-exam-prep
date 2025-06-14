export function decorator1<T extends new (...args: any[]) => {}>(
  constructor: T
) {
  return class extends constructor {
    protected _offset: number = 3;
  };
}
export function decorator2() {}
export function decorator3() {}
