export class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("Method excecuted from the Singleton");
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.someMethod();

console.log(instance1 === instance2);
