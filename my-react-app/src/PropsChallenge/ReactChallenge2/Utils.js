export function getImageUrl(Person, size) {
    return (
      'https://i.imgur.com/' +
      Person.imageId +
      size +
      '.jpg'
    );
  }