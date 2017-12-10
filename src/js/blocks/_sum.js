const { wrap, init } = require('./util');
const t = require('./../translator').translate('blocks.sum.');

function getCode() {
  return `<div class="cell medium-6">
    <p class="desc">${t('description')}</p>
  </div>
  <div class="cell medium-6">
    <input type="text" class="out name formula number">
  </div>`;
}

function assemble() {
  const block = wrap('sum', getCode());
  init(block);
  return block;
}


module.exports = { assemble };
