class Logger {
  hashmap = new Map<string, number>();
  constructor() {}

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.hashmap.has(message)) {
      const expected = this.hashmap.get(message);

      if (timestamp >= expected) {
        this.hashmap.set(message, 10 + timestamp);
      }

      return timestamp >= expected;
    } else {
      this.hashmap.set(message, 10 + timestamp);
      return true;
    }
  }
}

const logger: Logger = new Logger();
logger.shouldPrintMessage(0, 'A'); // return true, next allowed timestamp for "foo" is 1 + 10 = 11
logger.shouldPrintMessage(0, 'A'); // return true, next allowed timestamp for "bar" is 2 + 10 = 12
logger.shouldPrintMessage(11, 'A'); // 3 < 11, return false
logger.shouldPrintMessage(11, 'A'); // 8 < 12, return false
