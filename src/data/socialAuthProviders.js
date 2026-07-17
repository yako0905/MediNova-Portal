/**
 * Social login providers for the Login page (UI-only placeholders —
 * no OAuth is wired up yet).
 * Consumed by: pages/Login via components/Form/SocialAuthButtons
 * `icon` references a key from components/Common/icons.js.
 */
export const socialAuthProviders = [
  { id: 'google', label: 'Google', icon: 'IconGoogle' },
  { id: 'facebook', label: 'Facebook', icon: 'IconFacebook' },
];

export default socialAuthProviders;
