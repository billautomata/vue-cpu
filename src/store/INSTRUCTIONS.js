module.exports = [
  { name: 'NOP', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'LDA', mode: 'I', cycles: 2, instruction_length: 2 },
  { name: 'LDA', mode: 'A', cycles: 8, instruction_length: 3 },
  { name: 'STA', mode: 'A', cycles: 8, instruction_length: 3 },
  { name: 'TAX', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'TAY', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'LAS', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'LAD', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'TAD', mode: 'N', cycles: 1, instruction_length: 1 },
  { name: 'TAS', mode: 'N', cycles: 1, instruction_length: 1 },
]
