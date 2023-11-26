export const HorizontalScroll = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (element) element.scrollLeft += offset;
};
