let seen = false;
export function hasSeenIntro() {
  try { return seen || sessionStorage.getItem("portfolio-intro-seen") === "true"; } catch { return seen; }
}
export function markIntroSeen() {
  seen = true;
  window.dispatchEvent(new Event("portfolio-intro-complete"));
  try { sessionStorage.setItem("portfolio-intro-seen", "true"); } catch { /* Session memory remains available. */ }
}
