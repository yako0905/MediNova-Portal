import React from 'react';
import * as Icons from '../commons/icons';
import './SocialAuthButtons.css';

/**
 * SocialAuthButtons
 *
 * UI-only social login row for the Login page. No auth provider is
 * wired up yet — `onSelect` just receives the provider id so a real
 * OAuth flow can be dropped in later without touching this component.
 */
const SocialAuthButtons = ({ providers, onSelect }) => (
  <div className="social-auth">
    {providers.map((provider) => {
      const Icon = Icons[provider.icon];
      return (
        <button
          key={provider.id}
          type="button"
          className="social-auth__button"
          onClick={() => onSelect && onSelect(provider.id)}
        >
          {Icon && <Icon aria-hidden="true" />}
          <span>Continue with {provider.label}</span>
        </button>
      );
    })}
  </div>
);

export default SocialAuthButtons;
