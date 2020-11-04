// Mutable

const xavierSchoolForGifted = ['storm', 'jean grey', 'cyclops'];

console.log({ preMutation: xavierSchoolForGifted });

xavierSchoolForGifted.push('nightcrawler');

console.log({ postMutation: xavierSchoolForGifted });

// Immutable

// const xavierSchoolForGiftedExpanded = [...xavierSchoolForGifted, 'mystique'];
const xavierSchoolForGiftedExpanded = xavierSchoolForGifted.concat('mystique');

console.log({
  xavierSchoolForGiftedExpanded,
  xavierSchoolForGifted,
});

// const mystique = xavierSchoolForGiftedExpanded.pop();
const [mystique] = xavierSchoolForGiftedExpanded.slice(-1);

console.log({ mystique, xavierSchoolForGiftedExpanded });
