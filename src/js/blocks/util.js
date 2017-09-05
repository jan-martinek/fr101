const { allArray, updateCardGently } = require('./../util.js');
const fields = require('./../fields/fields');

function wrap(type, html) {
  const wrapper = document.createElement('DIV');
  wrapper.classList.add('grid-x');
  wrapper.classList.add('grid-margin-x');
  wrapper.classList.add('block');
  wrapper.dataset.type = type;
  wrapper.classList.add(`block-${type}`);
  wrapper.innerHTML = html;
  const tools = document.createElement('DIV');
  tools.classList.add('cell');
  tools.classList.add('block-tools');
  tools.innerHTML = `
    <div class="external-tools">
      <a class="addBlock tool"><i class="fa fa-plus" aria-hidden="true"></i></a>
      <a class="swapBlocks tool"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i></a>
    </div>
    <p class="internal-tools">${type} <a class="removeBlock tool"><i class="fa fa-times" aria-hidden="true"></i></a></p>`;
  wrapper.insertAdjacentElement('afterbegin', tools);
  return wrapper;
}

function init(wrapper, update) {
  Object.keys(fields.all).forEach((key) => {
    allArray(wrapper, `.${key}`).forEach(el => fields.all[key].init(el));
  });
  wrapper.addEventListener('externalUpdate', () => {
    if (update) update(wrapper);
  });
  allArray(wrapper, '.in').forEach(el => el.addEventListener('input', () => {
    if (update) update(wrapper);
    updateCardGently();
  }));
}


module.exports = { wrap, init };
