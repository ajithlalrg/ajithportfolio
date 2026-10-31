// Shared by the GA init script (server) and the consent banner (client).
export const consentKey = "ga-consent";

// EEA + UK + Switzerland: analytics cookies start denied until the visitor allows them.
export const consentRegions = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT",
  "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO",
  "GB", "CH",
];
