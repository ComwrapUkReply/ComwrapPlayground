
export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');
    // remove header and footer from main
    WebImporter.DOMUtils.remove(main, [
      'header',
      'footer',
      '.disclaimer',
    ]);

    const title = document.querySelector('h1');
    const img = document.querySelector('img');
    const cells = [
      ['Hero'],
      [title, img],
    ];
    const table = WebImporter.DOMUtils.createTable(cells, document);
    main.prepend(table);

    return main;
  },
};