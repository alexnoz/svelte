/* generated by Svelte vX.Y.Z */
import { assign, createElement, createText, detachNode, init, insertNode, noop, proto } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var div, text, div_1;

	return {
		c: function create() {
			div = createElement("div");
			text = createText("\n");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div.dataset.foo = "bar";
			div_1.dataset.foo = state.bar;
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			insertNode(text, target, anchor);
			insertNode(div_1, target, anchor);
		},

		p: function update(changed, state) {
			if (changed.bar) {
				div_1.dataset.foo = state.bar;
			}
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text);
			detachNode(div_1);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;