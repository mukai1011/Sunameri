declare class Timer {
    constructor();
    sleep(millisecondsTimeout: number): void;
    start(): void;
    start(milliseconds: number): void;
    submit(milliseconds: number): void;
    wait(): void;
    stop(): void;
}
