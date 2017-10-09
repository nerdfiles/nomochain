/**
 * @jsdoc
 * @see https://www.martinfowler.com/eaaDev/timeNarrative.html
 * @description # Nomochain
 *
 * Proof By Entropy with bitemporal hashchains and a resolve to the
 * impossibility of intent by way of Critical Rationalism.
 *
 * SEC's rules:
 *
 * 1. "electronic records must be preserved exclusively in a non-rewritable and
 * non-erasable format"
 * 2. regulators want answers in 3 days - write-only formats are super-slow (5-7
 * transactions a second could take 2-3 weeks to get audit logs; bitemporality
 * + hashchains + DHTs)
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
    self.baptize(prev_hash=1, proof=100)
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
   * baptize
   *
   * @returns {undefined}
   * @description Nomological data structure for nomochaisn essentially puts
   * five cross-hairs on each State. Ultimately, hypermedia is the engine of
   * application statet, however hashlinks are governed by a richer notion of
   * temporality. In blockchain, the fact that others knew something at a
   * certain time contributes to the security model. With nomological data, time
   * itself is broken down into four dimensions, indexed by the count-as-one
   * operation.
   */
  baptize(prev_hash=undefined, proof) {

    var self = this

    var state = {
      index        : (self.antichain.length + 1),
      timestamp    : moment(),
      time_df      : moment(),
      time_du      : moment(),
      time_rf      : moment(),
      time_ru      : moment(),
      transactions : self.current_transactions,
      proof        : proof,
      prev_hash    : prev_hash || self.state(self.antichain[-1])
    }

    // Reset the current list of transactions
    self.current_transactions = []
    self.antichain.push(state)
    return state
  }

  /**
   * new_transaction
   *
   * @param {String} agent     http://pending.webschemas.org/agent
   * @param {String} recipient http://pending.webschemas.org/recipient
   * @param {Number} amount    http://pending.webschemas.org/amount
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
   * @param {String} last_proof
   * @param {String} past_proof
   * @param {String} present_proof
   * @param {String} present_past_proof
   * @param {String} present_perfect_proof
   * @description Physical information as the average energy per degree of
   * freedom.
   */
  negentropy(last_proof, re, dicto, se, te) {

    var proof = 0
    var self = this

    while (self.warrant_proof(re, dicto, se, te, last_proof, proof) === false) {
      proof += 1
    }

    return proof
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

    while (current_index < antichain.length) {
      state = antichain[current_index]
      if (state.prev_hash !== self.hash(last_state)) {
        return false
      }

      if (!self.warrant_proof(last_state.re, last_state.dicto, last_state.se, last_state.te, last_state.proof, state.proof)) {
        return false
      }

      last_state = state
      current_index += 1
    }

    return true
  }

  /**
   * warrant_proof
   *
   * @returns {undefined}
   */
  static warrant_proof(re, dicto, se, te, last, p) {

    var condition = [
      re,
      dicto,
      se,
      te,
      last,
      p
    ].join('')

    var condition_hash = crypto.createHash('sha256')
      .update(condition)
      .digest('hex')

    return condition_hash
  }
}

module.exports = Nomochain

