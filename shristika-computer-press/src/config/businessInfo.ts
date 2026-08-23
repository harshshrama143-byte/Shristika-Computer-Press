import { BusinessConfig } from '../types';

export const DEFAULT_BUSINESS_INFO: BusinessConfig = {
  businessName: "SHRISTIKA COMPUTER PRESS",
  businessType: "Professional Printing & Designing Studio",
  tagline: "High Quality Printing • Reasonable Price • Fast Service",
  phone1: "6200796553",
  phone2: "9835733642",
  whatsapp1: "6200796553",
  whatsapp2: "9835733642",
  address: "Domuhan, Cherki Road, Dayal Kunj, Kolhaura, Bodhgaya, Bihar",
  cityState: "Bodhgaya, Bihar",
  googleMapsUrl: "https://maps.app.goo.gl/18daCaEqs1FBpkTK8",
};

const STORAGE_KEY = 'shristika_press_business_config_v2';

export function getStoredBusinessInfo(): BusinessConfig {
  if (typeof window === 'undefined') return DEFAULT_BUSINESS_INFO;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.googleMapsUrl && parsed.googleMapsUrl.includes('Domuhan+Cherki')) {
        parsed.googleMapsUrl = DEFAULT_BUSINESS_INFO.googleMapsUrl;
      }
      return { ...DEFAULT_BUSINESS_INFO, ...parsed };
    }
  } catch (e) {
    console.error("Error reading business config", e);
  }
  return DEFAULT_BUSINESS_INFO;
}

export function saveBusinessInfo(info: BusinessConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    window.dispatchEvent(new Event('business-info-updated'));
  } catch (e) {
    console.error("Error saving business config", e);
  }
}

/**
 * Returns formatted WhatsApp direct link (standard wa.me)
 */
export function getWhatsAppDirectUrl(number: string, message?: string): string {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const prefix = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;
  const defaultMsg = "Hello Shristika Computer Press, I would like to enquire about your printing services.";
  const encodedText = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${prefix}?text=${encodedText}`;
}

/**
 * Returns formatted WhatsApp API link (works reliably across desktop & mobile)
 */
export function getWhatsAppApiUrl(number: string, message?: string): string {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const prefix = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;
  const defaultMsg = "Hello Shristika Computer Press, I would like to enquire about your printing services.";
  const encodedText = encodeURIComponent(message || defaultMsg);
  return `https://api.whatsapp.com/send?phone=${prefix}&text=${encodedText}`;
}

/**
 * Returns formatted WhatsApp Web link
 */
export function getWhatsAppWebUrl(number: string, message?: string): string {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const prefix = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;
  const defaultMsg = "Hello Shristika Computer Press, I would like to enquire about your printing services.";
  const encodedText = encodeURIComponent(message || defaultMsg);
  return `https://web.whatsapp.com/send?phone=${prefix}&text=${encodedText}`;
}

/**
 * Returns direct phone call link
 */
export function getTelDirectUrl(number: string): string {
  const cleanNumber = number.replace(/[^0-9+]/g, '');
  const dialNumber = cleanNumber.startsWith('+') ? cleanNumber : `+91${cleanNumber}`;
  return `tel:${dialNumber}`;
}
