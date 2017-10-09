/**
 * @jsdoc
 * @description # Nomochain
 *
 * Proof By Entropy with bitemporal hashchains and a resolve to the
 * impossibility of intent by way of Critical Rationalism.
 */
const _ = require('lodash')
const crypto = require('crypto')

class Nomochain() {

  /**
   * constructor
   *
   * @returns {undefined}
   */
  constructor() {
    var self = this
    self.current_transactions = []
    self.antichain = []
    self.nodes = Set()

    self.state = self.state.bind(self)

    // State genesis
    self.baptize(prev_state=1, proof=100)
  }

  /**
   * force
   *
   * @returns {undefined}
   */
  static force() {
    return 'stub'
  }

  /**
   * impulse
   *
   * @returns {undefined}
   */
  static impulse() {
    return 'stub'
  }

  /**
   * momentum
   *
   * @returns {undefined}
   */
  static momentum() {
    return 'stub'
  }

  /**
   * action
   *
   * @returns {undefined}
   */
  static action() {
    return 'stub'
  }

  /**
   * hash
   *
   * @returns {undefined}
   */
  static hash(state) {
    var state_content = JSON.parse(state)
    return crypto.createHash('sha256')
      .update(state_content)
      .digest('hex');
  }

  /**
   * last_state
   *
   * @returns {undefined}
   */
  last_state() {
    var self = this
    return self.antichain[-1]
  }

  /**
   * new_state
   *
   * @returns {undefined}
   * @description Derive State from nomological data source.
   */
  new_state(proof, prev_state=undefined) {
    var self = this
    var state = {
      index        : (self.antichain.length + 1),
      time_f       : moment(),
      time_u       : moment(),
      time_rf      : moment(),
      timestamp_ru : moment(),
      transactions : self.current_transactions,
      proof        : proof,
      prev_hash   : prev_hash || self.state(self.antichain[-1])
    }

    // Reset the current list of transactions
    self.current_transactions = []
    self.antichain.push(state)
    return state
  }

  /**
   * new_transaction
   *
   * @param {String} agent     http ://pending.webschemas.org/agent
   * @param {String} recipient http ://pending.webschemas.org/recipient
   * @param {Number} amount    http ://pending.webschemas.org/amount
   * @returns {Number}
   */
  new_transaction(agent, recipient, amount) {
    var self = this
    self.current_transactions.push({
      agent     : agent,
      recipient : recipient,
      amount    : amount
    })
    return (self.last_state.index + 1)
  }

  /**
   * proof_of_negentropy
   *
   * @returns {undefined}
   * @description Physical information as the average energy per degree of
   * freedom.
   */
  proof_of_negentropy(last_proof) {
    return 'stub'
  }

  /**
   * register_node
   *
   * @returns {undefined}
   */
  register_node(address) {
    return 'stub'
  }

  /**
   * diagnosis_state
   *
   * @returns {undefined}
   */
  diagnosis_state() {
    return 'stub'
  }

  /**
   * rollback_state
   *
   * @returns {undefined}
   */
  rollback_state() {
    return 'stub'
  }

  /**
   * reassert_state
   *
   * @returns {undefined}
   */
  reassert_state() {
    return 'stub'
  }

  /**
   * mask_state
   *
   * @returns {undefined}
   */
  mask_state() {
    return 'stub'
  }

  /**
   * confine_state
   *
   * @returns {undefined}
   */
  confine_state() {
    return 'stub'
  }

  /**
   * configure_serial
   *
   * @returns {undefined}
   */
  configure_serial() {
    return 'stub'
  }

  /**
   * recover_state
   *
   * @returns {undefined}
   */
  recover_state() {
    return 'stub'
  }

  /**
   * warrant_antichain
   *
   * @returns {undefined}
   */
  warrant_antichain(antichain) {
    var self = this
    let last_state = _.first(antichain)
    let current_index = 1
  }

  /**
   * warrant_proof
   *
   * @returns {undefined}
   */
  warrant_proof(last_proof, proof) {
    return 'stub'
  }
}

module.exports = Nomochain

