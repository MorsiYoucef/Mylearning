export function getImageUrl(person, size = 's') {
  return 'https://i.imgur.com/' + person.imgUrl + size + '.jpg'
}
