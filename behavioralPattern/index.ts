interface Observer {
  update(message: string): void;
}

class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    console.log(`${this.name} has recived a messsage: ${message}`);
  }
}

class Magazine {
  private observers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notification(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

const magazine = new Magazine();

const user1 = new Subscriber("User 1");
const user2 = new Subscriber("User 2");

magazine.subscribe(user1)
magazine.subscribe(user2)

magazine.notification("New issue aviable")