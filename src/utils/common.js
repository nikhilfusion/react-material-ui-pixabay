export const capitalizeName = (name) => {
  return name && name.charAt(0).toUpperCase() + name.slice(1);
}

export const formatTags = (tags) => {
  return tags && tags.split(", ").map((item) => capitalizeName(item)).join(", ");
}