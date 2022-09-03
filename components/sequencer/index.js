/**
 * Sequencer
 * 
 * What does a sequencer do?
 * A user should be able to toggle tiles on or off.  Once
 * activated, the tiles should fire a provided callback
 * with the selected tile identifiers as arguments.
 * 
 * The sequencer should offer APIs for starting, stopping,
 * and pausing.
 * 
 * play(tempo)
 * Plays from wherever the sequencer has been paused. If
 * it hasn't started yet, then it'll be at the beginning
 * of the sequence.
 * 
 * pause()
 * Stops the sequence in its current position.
 * 
 * stop()
 * Stops the sequence and brings it back to the beginning.
 */
export class Sequencer {
  pause() {}

  play() {}

  stop() {}
}