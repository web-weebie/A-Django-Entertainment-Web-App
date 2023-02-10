/**
 * All scripts for index page will be written here.
 */

const subParentElement = document.querySelector("section.sidebar-wrapper")
const show_more = document.querySelector('span.read-more-btn');
// const div = document.querySelector('div.subscriptions-wrapper');
const show_text = document.querySelector('span.read-more-text');
console.log(show_more);
// console.log(subscriptionParentElement);

show_more.addEventListener('click', () =>{
    show_text.classList.toggle('read-more-text--show');
    show_more.textContent = show_more.textContent.includes('show more') ?
    "show less" : "show more";
})


console.log(subParentElement.classList.contains('.sidebar-wrapper'));

