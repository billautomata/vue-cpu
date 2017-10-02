## registers

### A - Accumulator, 8-bit
Where all the complex arithmetic happens.

### X, Y - General Purpose Registers, 8-bit


## modes
* `I` immediate, load this value
* `A` absolute, load the value at this memory address
* `N` none, register > register

## instructions

| instruction | mode | cycles | comment                                                           |
| ----------- | ---- | ------ |                                                                   |
| ACCUMULATOR | ---- | ------ |                                                                   |
| LDA #24     |  I   | 2      | load the value 0x24 into accumulator                              |
| LDA $24FF   |  A   | 8      | load the value at memory address 0x24FF                           |
| STA $24FF   |  A   | 8      | write the memory address at 0x24FF with the accumulator value     |
| TAX         |  N   | 1      | transfer accumulator to X                                         |
| TAY         |  N   | 1      | transfer accumulator to Y                                         |
| LAD         |  N   | 1      | load value in memory position at D to accumulator                 |
| LAS         |  N   | 1      | load value in memory position at S to accumulator                 |
| TAD         |  N   | 1      | transfer accumulator to memory position at D                      |
| TAS         |  N   | 1      | transfer accumulator to memory position at S                      |
| REGISTER X  | ---- | ------ |                                                                   |
| LDX #24     |  I   | 2      | load the value 0x24 into Register X                               |
| LDX $24FF   |  A   | 8      | load value at the memory address $24FF into Register X            |
| STX $24FF   |  A   | 6      | store the value in register X into memory address $24FF           |
| LXD         |  N   | 1      | load value in Memory at D to Register X                           |
| LXS         |  N   | 1      | load value in Memory at S to Register X                           |
| TXA         |  N   | 1      | transfer x to the accumulator                                     |
| TXD         |  N   | 1      | load value in Register X to Memory at D                           |
| TXS         |  N   | 1      | load value in Register X to Memory at S                           |
| REGISTER Y  | ---- | ------ |                                                                   |
| LDY #24     |  I   | 2      | load the value 0x24 into Register Y                               |
| LDY $24FF   |  A   | 8      | load value at the memory address $24FF into Register Y            |
| STY $24FF   |  A   | 6      | store the value in Register Y into memory address $24FF           |
| LYD         |  N   | 1      | load value in Memory at D to Register Y                           |
| LYS         |  N   | 1      | load value in Memory at S to Register Y                           |
| TYA         |  N   | 1      | transfer Register Y to the accumulator                            |
| TYD         |  N   | 1      | load value in Register Y to Memory at D                           |
| TYS         |  N   | 1      | load value in Register Y to Memory at S                           |
| CONTROLS    |      |        |                                                                   |
| JMP $24EF   | I    |        |                                                                   |
| JMP $       |      |        |                                                                   |
| COMPARE     |      |        |                                                                   |
| BRANCHING   |      |        |                                                                   |
