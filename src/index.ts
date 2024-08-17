/**
 * Build styles
 */
import './index.css';
import {API, BlockTool, BlockToolConstructorOptions, BlockToolData, ToolboxConfig, PasteConfig, PasteEvent} from "@editorjs/editorjs";
import { IconDelimiter } from '@codexteam/icons'

/**
 * Delimiter Block for the Editor.js.
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
export default class Delimiter implements BlockTool {

  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless(): boolean {
    return true;
  }

  private api: API

  private _CSS: {
    block: string
    wrapper: string
  }

  private data: BlockToolData

  private _element: HTMLDivElement

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}: BlockToolConstructorOptions) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-delimiter'
    };

    this._element = this.drawView();

    this.data = data;
  }

  /**
   * Create Tool's view
   * @return {HTMLDivElement}
   * @private
   */
  drawView(): HTMLDivElement {
    let div = document.createElement('div');

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render(): HTMLDivElement {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(toolsContent: HTMLElement): BlockToolData {
    return {};
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox(): ToolboxConfig {
    return {
      icon: IconDelimiter,
      title: 'Delimiter'
    };
  }

  /**
   * Delimiter onPaste configuration
   *
   * @public
   */
  static get pasteConfig(): PasteConfig {
    return { tags: ['HR'] };
  }

  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(event: PasteEvent): void {
    this.data = {};
  }
}

