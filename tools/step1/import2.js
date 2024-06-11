export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');
    main.querySelector('header, footer, .disclaimer').forEach(el => el.remove());
    return main;
  },
};