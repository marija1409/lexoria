/**
 * Broj bez + i razmaka, za korišćenje u URL-ovima.
 */
function normalizePhoneForUrl(phone: string): string {
  return phone.replace(/\s/g, "").replace(/^\+/, "");
}

/**
 * WhatsApp: otvara chat u WhatsApp aplikaciji ili web.
 * Format: https://wa.me/381653731935
 */
export function getWhatsAppChatUrl(phone: string): string {
  const number = normalizePhoneForUrl(phone);
  return `https://wa.me/${number}`;
}

/**
 * Viber: otvara chat u Viber aplikaciji.
 * Format: viber://chat?number=381653731935
 */
export function getViberChatUrl(phone: string): string {
  const number = normalizePhoneForUrl(phone);
  return `viber://chat?number=${number}`;
}
