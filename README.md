# vue-cpu

* Clock - Everything is synchronized with the clock
* CPU - Registers, Control Bits, Interrupts, Input/Output Pins
  * variable cycles per operation

* BIOS - Shared Memory Bus, Multiple CPU Controllers

## External Devices
ROM, GPU, Direct Access VRAM, Audio Chip, Memory Pages

## Emulation
The CPU times the browser speed and sets a MHz target it can hit while keeping 60fps


## Memory IO

LDX 100

Load the value in the X register to memory address index 100

Set the IO pins for the memory value
set the IO pins for the memory address


| CPU                        | BUS                        | memory            | comment |
| -------------------------- | -------------------------- | ----------------- | ------- |
| W IO for value             | R CPU write pin - 0        |                   | BUS: R CPU/WRITE[0], CPU: (WRITE=0,DONE=1) set value pins
| W IO for address           | R CPU write pin - 0        |                   | BUS: R CPU/WRITE[0], CPU: (WRITE=0,DONE=1) set address pins
| W write pin - 1            | R CPU write pin - 0        |                   | BUS: R CPU/WRITE[0], CPU: (WRITE=0,DONE=1) write=1
| R done pin - 1             | R CPU write pin - 1        |                   | BUS: R CPU/WRITE[1], CPU: (WRITE=1,DONE=1) if(DONE==1 && WRITE==1){ NOP (here) } else{ WRITE=0 }
| R done pin - 1             | - W CPU done pin: 0        |                   | BUS: W CPU/DONE[0],  CPU: (WRITE=1,DONE=1) if(DONE==1 && WRITE==1){ NOP } else{ WRITE=0 (here) }
| R done pin - 0             | - R CPU value pins         |                   | BUS: R value pins,   CPU: (WRITE=1,DONE=0) if(DONE==1) { JMP HOME } else { NOP (here) }
| - W write pin - 0          | - R CPU address pins       |                   | BUS: R address pins, CPU: (WRITE=0,DONE=0) if(DONE==1) { JMP HOME } else { NOP (here) }
| R done pin - 0             | - W IO value to memory     | index::value      | BUS: load value,     CPU: (WRITE=0,DONE=0) if(DONE==1) { JMP HOME } else { NOP (here) }
| R done pin - 0             | - W CPU done pin - 1       |                   | BUS: W CPU/DONE[1],  CPU: (WRITE=0,DONE=0) if(DONE==1) { JMP HOME } else { NOP (here) }
| R done pin - 1             |                            |                   | BUS: NOP,            CPU: (WRITE=0,DONE=1) if(DONE==1) { JMP HOME (here) } else { NOP }
| - JMP HOME; memory written |                            |                   |
| -------------------------- | -------------------------- | ----------------- |
