'use babel'

function calculateIndent ({row, column}, content) {
  let x = 0
  let y = 0
  let openBrackets = []

  while (true) {
    const char = content[y][x]
    if (char === '(') openBrackets.push(x + 2)
    if (char === '[' || char === '{') openBrackets.push(x + 1)
    if (char === ')' || char === ']' || char === '}') openBrackets.pop()

    x++
    if (x >= content[y].length) {
      x = 0
      y++
      if (y >= content.length) {
        break
      }
    }
  }

  return openBrackets.length
    ? ' '.repeat(openBrackets[openBrackets.length - 1])
    : ''
}

export function insertNewLine () {
  const editor = atom.workspace.getActiveTextEditor()
  const {row, column} = editor.getCursorBufferPosition()
  const lines = editor.getTextInBufferRange([[0, 0], [row, column]])
    .split('\n')

  const indent = calculateIndent({row, column}, lines)

  editor.getBuffer().setTextInRange(
    editor.getSelectedBufferRange(),
    '\n' + indent
  )
}
