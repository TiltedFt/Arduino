import { Board, Led } from "johnny-five";

const board = new Board();
board.on("ready", function () {
    var led = new Led(12);
    led.blink(1000);
    // Strobe the pin on/off, defaults to 100ms phases
});
