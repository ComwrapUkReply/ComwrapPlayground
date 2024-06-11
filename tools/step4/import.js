
export default {
  transform: ({ document, params }) => {
    const main = document.querySelector('main');
    // keep a reference to the image
    const image = main.querySelector('.hero')

    //remove the image from the main, otherwise we'll get it in the 2 documents
    WebImporter.DOMUtils.remove(main, [
      '.hero',
    ]);

    return [{
      element: main,
      path: '/main',
    }, {
      element: image,
      path: '/image',
    }];
  },
};