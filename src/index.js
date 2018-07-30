/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Delimiter Block for the CodeX Editor.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} DelimiterData
 * @description Tool's input and output data format
 */
class Delimiter {
  /**
   * Should this tool be displayed at the Editor's Toolbox
   * @returns {boolean}
   * @public
   */
  static get displayInToolbox() {
    return true;
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   * @param {DelimiterData} savedData — previously saved data
   * @param {object} config - user config for Tool
   * @param {object} api - CodeX Editor API
   */
  constructor(savedData, config, api) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-delimiter'
    };

    this._data = {};
    this._element = this.drawView();

    this.data = savedData;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(toolsContent) {
    return {};
  }

  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  static get toolboxIcon() {
      return '<svg width="15" height="3" viewBox="0 0 15 3" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5zm8.2 0h3.5a1.25 1.25 0 0 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5z"/></svg>';
  }
}

module.exports = Delimiter;