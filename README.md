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


| CPU                        | BUS                        | memory            |
| -------------------------- | -------------------------- | ----------------- |
| W IO for value             | R CPU write pin - 0        |                   |   
| W IO for address           | R CPU write pin - 0        |                   |   
| W write pin - 1            | R CPU write pin - 0        |                   |   
| R done pin - 1             | R CPU write pin - 1        |                   |   
| R done pin - 1             | W CPU done pin: 0          |                   |   
| R done pin - 0             | R CPU value pins           |                   |   
| W write pin - 0            | R CPU address pins         |                   |   
| R done pin - 0             | W IO value to memory       | index::value      |
| R done pin - 0             | W CPU done pin - 1         |                   |   
| R done pin - 1             |                            |                   |   
| ; memory written           |                            |                   |   
| -------------------------- | -------------------------- | ----------------- |
