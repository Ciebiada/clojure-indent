'use babel'

import { CompositeDisposable } from 'atom'
import { indent } from './better-clojure-indent'

export default {
  activate (state) {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'better-clojure:indent': () => indent()
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  }
}
