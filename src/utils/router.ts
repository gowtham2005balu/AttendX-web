/**
 * Router utility functions for client-side clean path navigation without '#' hash.
 */

export const normalizePath = (rawPath: string): string => {
  if (!rawPath) return '/';
  // Strip leading hashes and slashes
  const path = rawPath.replace(/^[#/]+/, '');
  if (!path || path === 'home') {
    return '/';
  }
  return '/' + path;
};

export const getCurrentPath = (): string => {
  // If there's an active hash (e.g. from an old link /#pricing), prefer it and normalize
  if (window.location.hash && window.location.hash !== '#') {
    return normalizePath(window.location.hash);
  }
  return normalizePath(window.location.pathname);
};

export const navigate = (to: string, replace = false): void => {
  const targetPath = normalizePath(to);
  const currentPath = normalizePath(window.location.pathname);

  if (currentPath !== targetPath || window.location.hash) {
    if (replace) {
      window.history.replaceState(null, '', targetPath);
    } else {
      window.history.pushState(null, '', targetPath);
    }
  }

  // Trigger popstate so all listeners can synchronize
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
};
