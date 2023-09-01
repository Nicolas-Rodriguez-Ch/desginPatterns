class oldSystem {
  public oldRequest(): void {
    console.log("Old request from the old system");
  }
}

interface TargetSystem {
  request(): void;
}

// adapter

class Adapter implements TargetSystem {
  private oldSystem: oldSystem;
  constructor(oldSystem: oldSystem) {
    this.oldSystem = oldSystem;
  }

  public request(): void {
    this.oldSystem.oldRequest();
  }
}

const pastSystem = new oldSystem();
const adapter = new Adapter(pastSystem);

adapter.request();
