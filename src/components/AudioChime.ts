/**
 * Gentle chime synthesizer using Web Audio API
 * Plays a soft, romantic bell chime when she says yes!
 */
export function playGentleChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Notes: C5, E5, G5, C6 (warm major arpeggio)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      const startTime = ctx.currentTime + index * 0.12;
      const duration = 1.2;
      
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  } catch {
    // Ignore audio autoplay restrictions safely
  }
}
