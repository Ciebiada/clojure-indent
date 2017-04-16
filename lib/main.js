'use babel'

import { CompositeDisposable } from 'atom'
import { insertNewLine } from './clojure-indent'

export default {
  activate (state) {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'clojure-indent:insert-new-line': () => insertNewLine()
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  }
}
