export const HOME_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export const getPageFromHash = () => {
  const index = HOME_SECTIONS.findIndex(
    ({ id }) => `#${id}` === window.location.hash
  );
  return Math.max(index, 0);
};
