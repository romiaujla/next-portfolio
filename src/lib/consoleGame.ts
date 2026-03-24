// Console-based interactive easter egg: "Fix the System"
// Only runs client-side. Exposes minimal globals on window.

interface SystemState {
  apiOptimized: boolean;
  cacheEnabled: boolean;
  dbConnected: boolean;
}

// Styled console helpers
const styles = {
  success: "color: #22c55e; font-weight: bold;",
  error: "color: #ef4444; font-weight: bold;",
  info: "color: #6b7280; font-style: italic;",
  heading: "color: #3b82f6; font-weight: bold; font-size: 14px;",
  banner: "color: #a78bfa; font-weight: bold; font-size: 16px;",
} as const;

function log(message: string, style: string) {
  console.log(`%c${message}`, style);
}

export function initConsoleGame() {
  if (typeof window === "undefined") return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;

  const state: SystemState = {
    apiOptimized: false,
    cacheEnabled: false,
    dbConnected: false,
  };

  function checkCompletion() {
    if (state.apiOptimized && state.cacheEnabled && state.dbConnected) {
      console.log("");
      log("🎉 System stabilized.", styles.banner);
      log(
        "Nice work — you'd probably fit right in on my team.",
        styles.success,
      );
    }
  }

  // help()
  win.help = () => {
    console.log("");
    log("📟 Available commands:", styles.heading);
    console.log("");
    log("  system.status()   — Check current system health", styles.info);
    log("  enableCache()     — Enable the response cache", styles.info);
    log("  optimizeAPI()     — Optimize API latency", styles.info);
    log("  reconnectDB()     — Restore database connection", styles.info);
    console.log("");
  };

  // system.status()
  win.system = {
    status: () => {
      console.log("");
      log("📊 System Health Report", styles.heading);
      console.log("");

      if (state.apiOptimized) {
        log("  ✅ API latency nominal (<100ms)", styles.success);
      } else {
        log("  ❌ API latency too high (2–3s)", styles.error);
      }

      if (state.cacheEnabled) {
        log("  ✅ Cache active", styles.success);
      } else {
        log("  ❌ Cache disabled", styles.error);
      }

      if (state.dbConnected) {
        log("  ✅ Database connected", styles.success);
      } else {
        log("  ❌ Database unstable", styles.error);
      }

      console.log("");
    },
  };

  // enableCache()
  win.enableCache = () => {
    if (state.cacheEnabled) {
      log("⚠️  Cache is already enabled.", styles.info);
      return;
    }
    state.cacheEnabled = true;
    log("✅ Cache enabled. Response times improving.", styles.success);
    checkCompletion();
  };

  // optimizeAPI()
  win.optimizeAPI = () => {
    if (state.apiOptimized) {
      log("⚠️  API is already optimized.", styles.info);
      return;
    }
    state.apiOptimized = true;
    log("✅ API optimized. Latency reduced to <100ms.", styles.success);
    checkCompletion();
  };

  // reconnectDB()
  win.reconnectDB = () => {
    if (state.dbConnected) {
      log("⚠️  Database is already connected.", styles.info);
      return;
    }
    state.dbConnected = true;
    log("✅ Database connection restored.", styles.success);
    checkCompletion();
  };

  // Initial teaser message
  console.log("");
  log("👀 Curious dev? Try typing help()", styles.info);
}
