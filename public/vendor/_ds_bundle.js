/* @ds-bundle: {"format":4,"namespace":"HongixDesignSystem_ffb926","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FaqItem","sourcePath":"components/core/FaqItem.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"NavPill","sourcePath":"components/core/NavPill.jsx"},{"name":"PriceCard","sourcePath":"components/core/PriceCard.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"StepCard","sourcePath":"components/core/StepCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"HongixFAQ","sourcePath":"framer-webflow/Framer-FAQ.tsx"},{"name":"HongixFigma","sourcePath":"framer-webflow/Framer-Figma.tsx"},{"name":"HongixHero","sourcePath":"framer-webflow/Framer-Hero.tsx"},{"name":"HongixKanban","sourcePath":"framer-webflow/Framer-Kanban.tsx"},{"name":"HongixStamp","sourcePath":"framer-webflow/Framer-Stamp.tsx"},{"name":"HongixStar","sourcePath":"framer-webflow/Framer-Star.tsx"}],"sourceHashes":{"components/core/Avatar.jsx":"d43424075cd8","components/core/Badge.jsx":"a12eefc1ea0a","components/core/Button.jsx":"4a11fbd94b5e","components/core/Card.jsx":"245fac9f58a0","components/core/FaqItem.jsx":"319c48acec74","components/core/Input.jsx":"0ebc82cec05c","components/core/NavPill.jsx":"1de1fa53110f","components/core/PriceCard.jsx":"e697bf99b919","components/core/Stat.jsx":"3c13031c0ddf","components/core/StepCard.jsx":"20f51c15f9fc","components/core/Tag.jsx":"72d09abb832a","components/core/Textarea.jsx":"5270afe0c92c","framer-webflow/Framer-FAQ.tsx":"95256aee1ecf","framer-webflow/Framer-Figma.tsx":"38d4928f2d0a","framer-webflow/Framer-Hero.tsx":"b3045e6af552","framer-webflow/Framer-Kanban.tsx":"3ae031b651ed","framer-webflow/Framer-Stamp.tsx":"6fe57ce0bcf3","framer-webflow/Framer-Star.tsx":"23e53de19df2","ui_kits/website/Sections1.export.jsx":"bc7486b2d7ee","ui_kits/website/Sections1.jsx":"04082ea85249","ui_kits/website/Sections2.export.jsx":"0aea8ae51232","ui_kits/website/Sections2.jsx":"296bed9a5553","ui_kits/website/Sections3.jsx":"a52ba16ab7bb","ui_kits/website/Sections4.jsx":"a3d67bcf062d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HongixDesignSystem_ffb926 = window.HongixDesignSystem_ffb926 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'hx-avatar-css';
  s.textContent = `
  .hx-avatar{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;flex:none;
    border:var(--bw) solid var(--line);border-radius:999px;box-shadow:var(--shadow-xs);
    font-family:var(--font-display);font-weight:800;color:var(--ink);background:var(--yellow-300);}
  .hx-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
  .hx-avatar--sq{border-radius:var(--radius-md);}
  `;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 34,
  md: 46,
  lg: 64,
  xl: 88
};
const TONES = {
  yellow: 'var(--yellow-300)',
  coral: 'var(--coral-300)',
  pink: 'var(--pink-300)',
  sky: 'var(--sky-300)',
  mint: 'var(--mint-300)',
  lilac: 'var(--lilac-300)'
};

/** Outlined circular (or squircle) avatar with image or initials. */
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  tone = 'yellow',
  square = false,
  className = '',
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hx-avatar ${square ? 'hx-avatar--sq' : ''} ${className}`,
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4,
      background: TONES[tone] || tone,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-badge-css')) {
  const s = document.createElement('style');
  s.id = 'hx-badge-css';
  s.textContent = `
  .hx-badge{display:inline-flex;align-items:center;gap:.45em;font-family:var(--font-mono);font-weight:700;
    font-size:12px;letter-spacing:.04em;line-height:1;padding:5px 11px;border:var(--bw) solid var(--line);
    border-radius:var(--radius-pill);color:var(--ink);white-space:nowrap;}
  .hx-badge--soft{box-shadow:none;}
  .hx-badge--solid{box-shadow:var(--shadow-xs);}
  .hx-badge .hx-badge__dot{width:8px;height:8px;border-radius:999px;border:var(--bw) solid var(--line);background:var(--paper);}
  .hx-badge i{font-size:1.05em;line-height:0;}
  `;
  document.head.appendChild(s);
}
const TONES = {
  yellow: 'var(--yellow-300)',
  coral: 'var(--coral-300)',
  pink: 'var(--pink-300)',
  sky: 'var(--sky-300)',
  mint: 'var(--mint-300)',
  lilac: 'var(--lilac-300)',
  cream: 'var(--cream-deep)',
  ink: 'var(--ink)'
};

/** Small mono label / status chip with ink outline. */
function Badge({
  tone = 'yellow',
  dot = false,
  iconLeft,
  solid = true,
  className = '',
  children,
  ...rest
}) {
  const bg = TONES[tone] || tone;
  const isInk = tone === 'ink';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hx-badge hx-badge--${solid ? 'solid' : 'soft'} ${className}`,
    style: {
      background: bg,
      color: isInk ? 'var(--cream)' : 'var(--ink)'
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "hx-badge__dot",
    style: isInk ? {
      background: 'var(--coral-400)'
    } : null
  }), iconLeft && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${iconLeft}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* inject interaction CSS once */
if (typeof document !== 'undefined' && !document.getElementById('hx-button-css')) {
  const s = document.createElement('style');
  s.id = 'hx-button-css';
  s.textContent = `
  .hx-btn{--_sh:var(--shadow-sm);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.5em;
    font-family:var(--font-display);font-weight:700;letter-spacing:-.01em;white-space:nowrap;cursor:pointer;
    border:var(--bw) solid transparent;border-radius:var(--radius-md);box-shadow:var(--_sh);
    transition:transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),background var(--dur-fast),filter var(--dur-fast);
    text-decoration:none;color:var(--ink);user-select:none;}
  .hx-btn:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);filter:brightness(.98);}
  .hx-btn:active{transform:translateY(0);box-shadow:var(--shadow-xs);filter:brightness(.96);}
  .hx-btn:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px;}
  .hx-btn[disabled],.hx-btn[aria-disabled="true"]{opacity:.45;pointer-events:none;box-shadow:none;}
  .hx-btn--sm{font-size:14px;padding:9px 16px;border-radius:var(--radius-sm);}
  .hx-btn--md{font-size:16px;padding:12px 22px;}
  .hx-btn--lg{font-size:18px;padding:15px 30px;border-radius:var(--radius-lg);}
  .hx-btn--full{width:100%;}
  .hx-btn--primary{background:var(--yellow-400);}
  .hx-btn--secondary{background:var(--coral-400);color:var(--cream);}
  .hx-btn--ink{background:var(--ink);color:var(--cream);}
  .hx-btn--white{background:var(--paper);border-color:var(--line);}
  .hx-btn--ghost{background:transparent;box-shadow:none;border-color:var(--line-strong);}
  .hx-btn--ghost:hover{background:var(--cream-deep);transform:translateY(-1px);box-shadow:var(--shadow-sm);filter:none;}
  .hx-btn--ghost:active{box-shadow:none;transform:translateY(0);}
  .hx-btn i{font-size:1.15em;line-height:0;}
  `;
  document.head.appendChild(s);
}

/**
 * Hongix primary action button — clean fill with a thin hairline edge and soft shadow; lifts gently on hover, settles on press.
 */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['hx-btn', `hx-btn--${variant}`, `hx-btn--${size}`, full ? 'hx-btn--full' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${iconLeft}`,
    "aria-hidden": "true"
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${iconRight}`,
    "aria-hidden": "true"
  }));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-card-css')) {
  const s = document.createElement('style');
  s.id = 'hx-card-css';
  s.textContent = `
  .hx-card{position:relative;background:var(--paper);border:var(--bw) solid var(--line);
    border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);}
  .hx-card--pad-sm{padding:18px;}
  .hx-card--pad-md{padding:26px;}
  .hx-card--pad-lg{padding:36px;}
  .hx-card--hover{transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out);}
  .hx-card--hover:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);}
  `;
  document.head.appendChild(s);
}
const TONES = {
  paper: 'var(--paper)',
  cream: 'var(--cream-deep)',
  yellow: 'var(--yellow-300)',
  coral: 'var(--coral-300)',
  pink: 'var(--pink-300)',
  sky: 'var(--sky-300)',
  mint: 'var(--mint-300)',
  lilac: 'var(--lilac-300)',
  ink: 'var(--ink)'
};

/** Soft surface with a thin hairline border and gentle shadow — the base container for everything. */
function Card({
  tone = 'paper',
  pad = 'md',
  hover = false,
  shadow,
  className = '',
  style,
  children,
  ...rest
}) {
  const bg = TONES[tone] || tone;
  const isInk = tone === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hx-card hx-card--pad-${pad} ${hover ? 'hx-card--hover' : ''} ${className}`,
    style: {
      background: bg,
      color: isInk ? 'var(--cream)' : undefined,
      boxShadow: shadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-faq-css')) {
  const s = document.createElement('style');
  s.id = 'hx-faq-css';
  s.textContent = `
  .hx-faq{background:var(--paper);border:var(--bw) solid var(--line);border-radius:var(--radius-lg);
    box-shadow:var(--shadow-sm);overflow:hidden;transition:box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base);}
  .hx-faq--open{box-shadow:var(--shadow-md);border-color:var(--line-strong);}
  .hx-faq__q{display:flex;align-items:center;gap:16px;width:100%;text-align:left;cursor:pointer;
    background:none;border:none;padding:20px 22px;font-family:var(--font-display);font-weight:700;
    font-size:18px;letter-spacing:-.01em;color:var(--ink);}
  .hx-faq--open .hx-faq__q{background:var(--yellow-300);}
  .hx-faq__icon{flex:none;margin-left:auto;display:inline-flex;align-items:center;justify-content:center;
    width:32px;height:32px;border:var(--bw) solid var(--line-strong);border-radius:999px;background:var(--paper);font-size:17px;
    transition:transform var(--dur-base) var(--ease-spring);}
  .hx-faq--open .hx-faq__icon{transform:rotate(45deg);background:var(--paper);}
  .hx-faq__body{overflow:hidden;transition:height var(--dur-base) var(--ease-out);}
  .hx-faq__inner{padding:4px 22px 22px;font-family:var(--font-body);font-size:15.5px;line-height:1.6;color:var(--ink-soft);}
  `;
  document.head.appendChild(s);
}

/** Accordion FAQ item. Controlled via `open`/`onToggle`, or uncontrolled with `defaultOpen`. */
function FaqItem({
  question,
  children,
  defaultOpen = false,
  open,
  onToggle,
  className = '',
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;
  const bodyRef = React.useRef(null);
  const toggle = () => {
    onToggle ? onToggle(!isOpen) : setInternal(v => !v);
  };
  const h = isOpen && bodyRef.current ? bodyRef.current.scrollHeight : 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hx-faq ${isOpen ? 'hx-faq--open' : ''} ${className}`
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hx-faq__q",
    "aria-expanded": isOpen,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    className: "hx-faq__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-plus"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hx-faq__body",
    style: {
      height: h
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-faq__inner",
    ref: bodyRef
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-field-css')) {
  const s = document.createElement('style');
  s.id = 'hx-field-css';
  s.textContent = `
  .hx-field{display:flex;flex-direction:column;gap:7px;font-family:var(--font-body);}
  .hx-field__label{font-family:var(--font-display);font-weight:700;font-size:14px;color:var(--ink);}
  .hx-field__hint{font-size:13px;color:var(--ink-faint);}
  .hx-control{font-family:var(--font-body);font-size:16px;color:var(--ink);background:var(--paper);
    border:var(--bw) solid var(--line-strong);border-radius:var(--radius-md);padding:13px 16px;width:100%;
    box-shadow:var(--shadow-xs);transition:box-shadow var(--dur-fast),border-color var(--dur-fast);}
  .hx-control::placeholder{color:var(--ink-faint);}
  .hx-control:focus{outline:none;border-color:var(--sky-400);box-shadow:0 0 0 3px rgb(46 147 255 / 0.18);}
  .hx-control--err{border-color:var(--coral-500);box-shadow:0 0 0 3px rgb(232 60 22 / 0.16);}
  textarea.hx-control{resize:vertical;min-height:120px;line-height:1.5;}
  `;
  document.head.appendChild(s);
}

/** Hairline-bordered text input; soft sky-blue focus halo. */
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'hx-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: "hx-field",
    htmlFor: fid
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `hx-control ${error ? 'hx-control--err' : ''} ${className}`
  }, rest)), hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__hint"
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__hint",
    style: {
      color: 'var(--coral-500)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/NavPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-navpill-css')) {
  const s = document.createElement('style');
  s.id = 'hx-navpill-css';
  s.textContent = `
  .hx-navpill{display:inline-flex;align-items:center;gap:.4em;white-space:nowrap;font-family:var(--font-body);font-weight:600;
    font-size:15px;color:var(--ink);text-decoration:none;padding:8px 15px;border-radius:var(--radius-pill);
    border:1px solid transparent;cursor:pointer;background:none;transition:background var(--dur-fast),border-color var(--dur-fast),transform var(--dur-fast);}
  .hx-navpill:hover{background:var(--cream-deep);transform:translateY(-1px);}
  .hx-navpill--active{background:var(--yellow-300);border-color:transparent;}
  .hx-navpill i{font-size:1.1em;line-height:0;}
  `;
  document.head.appendChild(s);
}

/** Pill-style navigation link used in the floating header bar. */
function NavPill({
  href,
  icon,
  active = false,
  className = '',
  children,
  ...rest
}) {
  const cls = `hx-navpill ${active ? 'hx-navpill--active' : ''} ${className}`;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${icon}`,
    "aria-hidden": "true"
  }), children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    "aria-current": active ? 'page' : undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavPill.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-price-css')) {
  const s = document.createElement('style');
  s.id = 'hx-price-css';
  s.textContent = `
  .hx-price{position:relative;background:var(--paper);border:var(--bw) solid var(--line);
    border-radius:var(--radius-xl);box-shadow:var(--shadow-md);padding:32px;display:flex;flex-direction:column;gap:18px;height:100%;}
  .hx-price--feature{background:linear-gradient(158deg,#FFE08A 0%,#FFC94E 52%,#FBA63A 100%);}
  .hx-price__name{font-family:var(--font-display);font-weight:800;font-size:24px;letter-spacing:-.02em;color:var(--ink);margin:0;}
  .hx-price__desc{font-family:var(--font-body);font-size:15px;line-height:1.5;color:var(--ink-soft);margin:0;}
  .hx-price__amount{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;}
  .hx-price__was{font-family:var(--font-display);font-weight:700;font-size:22px;color:var(--ink-faint);text-decoration:line-through;text-decoration-thickness:3px;}
  .hx-price__now{font-family:var(--font-display);font-weight:800;font-size:46px;letter-spacing:-.03em;color:var(--ink);line-height:1;}
  .hx-price__per{font-family:var(--font-mono);font-size:13px;color:var(--ink-soft);}
  .hx-price__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1 0 auto;}
  .hx-price__list li{display:flex;align-items:flex-start;gap:10px;font-family:var(--font-body);font-size:15.5px;color:var(--ink);line-height:1.4;}
  .hx-price__check{flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;
    background:var(--mint-400);border-radius:999px;font-size:14px;color:var(--paper);margin-top:1px;}
  .hx-price__hr{border:none;border-top:1px solid var(--line);margin:2px 0;}
  .hx-price--feature .hx-price__hr{border-top-color:rgba(28,22,6,.34);}
  .hx-price__note{font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--coral-500);text-align:center;}
  `;
  document.head.appendChild(s);
}

/** Pricing plan card with strike-through founding rate, feature list, CTA, scarcity note. */
function PriceCard({
  name,
  description,
  was,
  now,
  per = '/ month',
  badge,
  features = [],
  cta = 'Subscribe now',
  href,
  note,
  featured = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hx-price ${featured ? 'hx-price--feature' : ''} ${className}`
  }, rest), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? 'ink' : 'coral',
    dot: true
  }, badge), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "hx-price__name"
  }, name), description && /*#__PURE__*/React.createElement("p", {
    className: "hx-price__desc"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "hx-price__amount"
  }, was && /*#__PURE__*/React.createElement("span", {
    className: "hx-price__was"
  }, was), /*#__PURE__*/React.createElement("span", {
    className: "hx-price__now"
  }, now), /*#__PURE__*/React.createElement("span", {
    className: "hx-price__per"
  }, per)), /*#__PURE__*/React.createElement("hr", {
    className: "hx-price__hr"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "hx-price__list"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-price__check"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check",
    "aria-hidden": "true"
  })), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'ink' : 'primary',
    size: "lg",
    full: true,
    href: href,
    iconRight: "ph-arrow-right"
  }, cta), note && /*#__PURE__*/React.createElement("p", {
    className: "hx-price__note"
  }, note));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-stat-css')) {
  const s = document.createElement('style');
  s.id = 'hx-stat-css';
  s.textContent = `
  .hx-stat{display:flex;flex-direction:column;gap:4px;}
  .hx-stat__num{font-family:var(--font-display);font-weight:800;letter-spacing:-.03em;line-height:1;
    font-size:clamp(2.4rem,1.6rem+2.6vw,3.4rem);color:var(--ink);}
  .hx-stat__num em{font-style:normal;color:var(--coral-400);}
  .hx-stat__label{font-family:var(--font-body);font-size:15px;color:var(--ink-soft);max-width:24ch;}
  .hx-stat--center{align-items:center;text-align:center;}
  `;
  document.head.appendChild(s);
}

/** Big display number + supporting label — trust-bar metric. */
function Stat({
  value,
  suffix,
  label,
  center = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hx-stat ${center ? 'hx-stat--center' : ''} ${className}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "hx-stat__num"
  }, value, suffix && /*#__PURE__*/React.createElement("em", null, suffix)), label && /*#__PURE__*/React.createElement("span", {
    className: "hx-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-step-css')) {
  const s = document.createElement('style');
  s.id = 'hx-step-css';
  s.textContent = `
  .hx-step__top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
  .hx-step__num{font-family:var(--font-mono);font-weight:700;font-size:13px;letter-spacing:.1em;color:var(--ink-faint);}
  .hx-step__icon{display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;
    border:var(--bw) solid var(--line);border-radius:var(--radius-md);box-shadow:var(--shadow-xs);font-size:26px;color:var(--ink);}
  .hx-step__title{font-family:var(--font-display);font-weight:800;font-size:22px;letter-spacing:-.02em;margin:0 0 8px;color:var(--ink);}
  .hx-step__body{font-family:var(--font-body);font-size:15.5px;line-height:1.55;color:var(--ink-soft);margin:0;}
  `;
  document.head.appendChild(s);
}
const ICON_TONES = {
  yellow: 'var(--yellow-300)',
  coral: 'var(--coral-300)',
  pink: 'var(--pink-300)',
  sky: 'var(--sky-300)',
  mint: 'var(--mint-300)'
};

/** Numbered step card for "how it works". */
function StepCard({
  step,
  icon,
  iconTone = 'yellow',
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "lg",
    hover: true,
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "hx-step__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-step__num"
  }, "STEP ", step), icon && /*#__PURE__*/React.createElement("span", {
    className: "hx-step__icon",
    style: {
      background: ICON_TONES[iconTone] || iconTone
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${icon}`,
    "aria-hidden": "true"
  }))), title && /*#__PURE__*/React.createElement("h3", {
    className: "hx-step__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "hx-step__body"
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('hx-tag-css')) {
  const s = document.createElement('style');
  s.id = 'hx-tag-css';
  s.textContent = `
  .hx-tag{display:inline-flex;align-items:center;gap:.5em;font-family:var(--font-body);font-weight:700;
    font-size:15px;line-height:1;padding:9px 16px;border:var(--bw) solid var(--line);border-radius:var(--radius-pill);
    background:var(--paper);color:var(--ink);box-shadow:var(--shadow-xs);cursor:default;white-space:nowrap;
    transition:transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out),background var(--dur-fast);}
  .hx-tag--interactive{cursor:pointer;}
  .hx-tag--interactive:hover{transform:translateY(-1px);box-shadow:var(--shadow-sm);}
  .hx-tag--active{background:var(--yellow-400);}
  .hx-tag i{font-size:1.1em;line-height:0;}
  `;
  document.head.appendChild(s);
}

/** Pill tag for service categories / queue chips. */
function Tag({
  icon,
  active = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hx-tag ${active ? 'hx-tag--active' : ''} ${interactive ? 'hx-tag--interactive' : ''} ${className}`
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${icon}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Outlined multiline input — shares Input's field styling. */
function Textarea({
  label,
  hint,
  error,
  id,
  className = '',
  rows = 4,
  ...rest
}) {
  const fid = id || (label ? 'hx-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: "hx-field",
    htmlFor: fid
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__label"
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    className: `hx-control ${error ? 'hx-control--err' : ''} ${className}`
  }, rest)), hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__hint"
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "hx-field__hint",
    style: {
      color: 'var(--coral-500)'
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-FAQ.tsx
try { (() => {
// Framer-FAQ.tsx — Hongix FAQ Accordion · Framer Code Component
// Faithful to the Hongix design-system <FaqItem>: outlined card, the question bar
// fills yellow when open and the + icon rotates 45° into an ×. No framer-motion —
// the panel animates with a pure-CSS grid-rows transition so it works anywhere.
//
// HOW TO USE IN FRAMER:
//   1. Assets panel > Code > "+" > New Code File. Paste this whole file. Save.
//   2. Drag "HongixFAQ" from Insert > Code onto the canvas. Resize width to taste.
//   3. Fonts: add "Bricolage Grotesque", "Hanken Grotesk", "Instrument Serif",
//      "Space Mono" to the Framer project so it matches the brand.
//
// OPTIONAL — editable props in Framer's properties panel:
//   Once pasted INTO Framer, uncomment the marked block at the bottom (the `import`
//   line and the `addPropertyControls` call). They only work inside Framer.

const C = {
  ink: "#1C1606",
  inkSoft: "#4A4231",
  line: "#E3DED2",
  lineStrong: "#C9C2B3",
  paper: "#FFFFFF",
  yellow300: "#FFCF4D",
  coral300: "#FF8A6B",
  fontDisplay: '"Bricolage Grotesque", system-ui, sans-serif',
  fontBody: '"Hanken Grotesk", system-ui, sans-serif',
  fontSerif: '"Instrument Serif", Georgia, serif',
  fontMono: '"Space Mono", monospace'
};
function Row({
  item,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.paper,
      border: `1px solid ${open ? C.lineStrong : C.line}`,
      borderRadius: 26,
      overflow: "hidden",
      boxShadow: open ? "0 6px 16px rgba(38,28,8,.08), 0 2px 5px rgba(38,28,8,.05)" : "0 2px 4px rgba(38,28,8,.06), 0 1px 2px rgba(38,28,8,.05)",
      transition: "box-shadow .26s ease, border-color .26s ease"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 16,
      textAlign: "left",
      background: open ? C.yellow300 : "transparent",
      border: "none",
      cursor: "pointer",
      padding: "20px 22px",
      fontFamily: C.fontDisplay,
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: C.ink,
      lineHeight: 1.3,
      transition: "background .26s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.question), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginLeft: "auto",
      width: 32,
      height: 32,
      borderRadius: 999,
      border: `1px solid ${C.lineStrong}`,
      background: C.paper,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transform: open ? "rotate(45deg)" : "rotate(0deg)",
      transition: "transform .3s cubic-bezier(.34,1.4,.5,1)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v12M2 8h12",
    stroke: C.ink,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: open ? "1fr" : "0fr",
      transition: "grid-template-rows .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: "4px 22px 22px",
      color: C.inkSoft,
      fontFamily: C.fontBody,
      fontSize: 15.5,
      lineHeight: 1.6,
      maxWidth: "60ch"
    }
  }, item.answer))));
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
function HongixFAQ(props) {
  const {
    showHeader,
    eyebrow,
    title,
    serifWord,
    items,
    singleOpen,
    defaultOpenIndex
  } = props;
  const [openSet, setOpenSet] = React.useState(() => new Set(defaultOpenIndex >= 0 && defaultOpenIndex < items.length ? [defaultOpenIndex] : []));
  const toggle = i => {
    setOpenSet(prev => {
      const next = new Set(singleOpen ? [] : prev);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      fontFamily: C.fontBody,
      boxSizing: "border-box"
    }
  }, showHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".45em",
      fontFamily: C.fontMono,
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: ".04em",
      lineHeight: 1,
      padding: "5px 11px",
      border: `1px solid ${C.line}`,
      borderRadius: 999,
      background: C.coral300,
      color: C.ink,
      boxShadow: "0 1px 2px rgba(38,28,8,.06)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      border: `1px solid ${C.line}`,
      background: C.paper
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: C.fontDisplay,
      fontWeight: 800,
      fontSize: "clamp(2.75rem, 1.9rem + 4vw, 4rem)",
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
      margin: "14px 0 0",
      color: C.ink
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: C.fontSerif,
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "1.08em"
    }
  }, serifWord))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 820,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    item: item,
    open: openSet.has(i),
    onToggle: () => toggle(i)
  }))));
}
HongixFAQ.defaultProps = {
  showHeader: true,
  eyebrow: "FAQ",
  title: "Questions,",
  serifWord: "answered",
  singleOpen: true,
  defaultOpenIndex: 0,
  items: [{
    question: "Why shouldn't I just hire a full-time designer?",
    answer: "Hiring a senior in-house designer means a $100k+ salary, plus benefits, paid time off, and software expenses — and you might pay them for downtime when your pipeline is light. Hongix gives you that same senior-level expertise for a flat rate, and you can simply hit pause when things are slow."
  }, {
    question: "Is there a limit to the number of requests I can make?",
    answer: "Not at all. Load up your Kanban board with as many tasks as you need. Requests are systematically tackled one active task at a time until your entire queue is clear."
  }, {
    question: "How fast will my designs be delivered?",
    answer: "Most standard tasks — like social assets or landing page mockups — are delivered within 48 hours. For larger builds like a full website, the project is divided into milestones so you still see fresh progress every couple of days."
  }, {
    question: "How exactly does the pause feature work?",
    answer: "Subscriptions run on a 31-day cycle. If you use 20 days and don't need more work that month, you can pause. The remaining 11 days are banked, ready to activate whenever your next project pops up. You never pay for idle time."
  }, {
    question: "How do I submit my design briefs?",
    answer: "Everything happens inside your dedicated Kanban board. Write a brief on a card, attach a Google Doc, drop in visual inspiration, or link a Loom video. As long as the details are on the board, the work is ready to begin."
  }, {
    question: "Are there any creative services you do not cover?",
    answer: "To keep speed and quality high, Hongix stays focused on core design. That means no 3D modeling, heavy document typesetting, complex custom app architecture, or non-design work like copywriting, strategy, and SEO research."
  }, {
    question: "Do you offer refunds if I change my mind?",
    answer: "Because of the intensive nature of the work and the immediate time invested, refunds are not offered. However, the unlimited revision policy guarantees revisions continue until you are absolutely thrilled with your deliverables."
  }]
};

// ===== OPTIONAL: uncomment EVERYTHING below once pasted into Framer =====
// import { addPropertyControls, ControlType } from "framer"
//
// addPropertyControls(HongixFAQ, {
//     showHeader: { type: ControlType.Boolean, title: "Header", defaultValue: true },
//     eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "FAQ" },
//     title: { type: ControlType.String, title: "Title", defaultValue: "Questions," },
//     serifWord: { type: ControlType.String, title: "Serif word", defaultValue: "answered" },
//     singleOpen: { type: ControlType.Boolean, title: "Single open", defaultValue: true, enabledTitle: "One", disabledTitle: "Many" },
//     defaultOpenIndex: { type: ControlType.Number, title: "Open at start", defaultValue: 0, min: -1, max: 20, step: 1, displayStepper: true },
//     items: {
//         type: ControlType.Array,
//         title: "Items",
//         control: {
//             type: ControlType.Object,
//             controls: {
//                 question: { type: ControlType.String, title: "Question" },
//                 answer: { type: ControlType.String, title: "Answer", displayTextArea: true },
//             },
//         },
//     },
// })
Object.assign(__ds_scope, { HongixFAQ, __ds_default_framer_webflow_Framer_FAQ_p66dme: HongixFAQ });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-FAQ.tsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-Figma.tsx
try { (() => {
// HongixFigma.tsx — Framer Code Component
// HOW TO USE IN FRAMER:
//   1. In Framer, open the left panel > Assets > Code > "+" > New Code File.
//   2. Delete the starter content and paste THIS whole file in.
//   3. Save. The component "HongixFigma" now appears under Code in the Insert menu.
//   4. Drag it onto the canvas. The animation runs in preview & published site.
// The illustration (markup + @keyframes CSS) is the EXACT copy from your landing page.
// To tweak the animation, edit the HTML constant below (timings live in the <style> block).

const HTML = "<!-- Hongix illustration: selected-works-figma — paste into Webflow HTML Embed, or wrap in a Framer Code Component -->\n<div class=\"hx-stage\" style=\"\n  --paper:#fff;\n  --paper: #FFFFFF;\n  --line: #E3DED2;\n  --radius-lg: 26px;\n  --shadow-lg: 0 16px 34px rgb(38 28 8 / 0.10), 0 5px 12px rgb(38 28 8 / 0.06);\n  --font-display: 'Bricolage Grotesque','Hanken Grotesk',system-ui,sans-serif;\n  --ink: #1C1606;\n  --mint-400: #18C47B;\n  --paper-2: #FFFBF1;\n  --font-mono: 'Space Mono',ui-monospace,monospace;\n  --ink-faint: #8A8068;\n  --radius-md: 18px;\n  --shadow-sm: 0 2px 4px rgb(38 28 8 / 0.06), 0 1px 2px rgb(38 28 8 / 0.05);\n  --line-strong: #C9C2B3;\n  --mint-500: #119A60;\n  --font-body: 'Hanken Grotesk',system-ui,-apple-system,sans-serif;\n  --cream-deep: #FCEFCD;\n  --yellow-400: #FFC02E;\n  --grad-sunrise: linear-gradient(135deg,#FFCF4D 0%,#FF5A36 55%,#FF63B5 100%);\n  --coral-400: #FF5A36;\n  --lilac-400: #9C86FF;\n  position:relative; width:100%; max-width:560px; aspect-ratio:4 / 3;\n  margin:0 auto; font-family:var(--font-body);\">\n<style>\n/* ===== Hongix keyframes (exact copy from the landing page) ===== */\n@media (prefers-reduced-motion: no-preference) {\n  .fig-el1 { animation: 5.5s ease-in-out 0s infinite normal none running fig-el1; }\n  .fig-el2 { animation: 5.5s ease-in-out 0s infinite normal none running fig-el2; }\n  .fig-el3 { animation: 5.5s ease-in-out 0s infinite normal none running fig-el3; }\n  .fig-cur1 { animation: 6.5s ease-in-out 0s infinite normal none running fig-cur1; }\n  .fig-cur2 { animation: 7.5s ease-in-out 0s infinite normal none running fig-cur2; }\n}\n@keyframes fig-el1 { \n  0%, 6% { opacity: 0; transform: translateY(8px); }\n  14%, 88% { opacity: 1; transform: translateY(0px); }\n  96%, 100% { opacity: 0; transform: translateY(8px); }\n}\n@keyframes fig-el2 { \n  0%, 24% { opacity: 0; transform: translateY(8px); }\n  32%, 88% { opacity: 1; transform: translateY(0px); }\n  96%, 100% { opacity: 0; transform: translateY(8px); }\n}\n@keyframes fig-el3 { \n  0%, 44% { opacity: 0; transform: translateY(8px); }\n  52%, 88% { opacity: 1; transform: translateY(0px); }\n  96%, 100% { opacity: 0; transform: translateY(8px); }\n}\n@keyframes fig-cur1 { \n  0% { transform: translate(55px, 208px); }\n  25% { transform: translate(270px, 76px); }\n  50% { transform: translate(470px, 146px); }\n  75% { transform: translate(175px, 246px); }\n  100% { transform: translate(55px, 208px); }\n}\n@keyframes fig-cur2 { \n  0% { transform: translate(430px, 56px); }\n  33% { transform: translate(120px, 128px); }\n  66% { transform: translate(370px, 238px); }\n  100% { transform: translate(430px, 56px); }\n}\n</style>\n<div style=\"position: absolute; inset: 0px; overflow: hidden;\"><div style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 64%; min-width: 230px; background: var(--paper); border: 1px solid rgba(28, 22, 6, 0.16); border-radius: 12px; box-shadow: rgba(18, 52, 60, 0.22) 0px 18px 38px; padding: 18px; display: flex; flex-direction: column; gap: 12px;\"><span style=\"position: absolute; top: -22px; left: 2px; font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: rgba(255, 255, 255, 0.92);\">Hero / v3</span><div class=\"fig-el1\" style=\"height: 72px; border-radius: 8px; background: var(--grad-sunrise);\"></div><div class=\"fig-el2\" style=\"display: flex; flex-direction: column; gap: 8px;\"><span style=\"height: 10px; width: 74%; border-radius: 999px; background: var(--cream-deep);\"></span><span style=\"height: 10px; width: 52%; border-radius: 999px; background: var(--cream-deep);\"></span></div><div class=\"fig-el3\" style=\"display: flex; gap: 9px; margin-top: 2px;\"><span style=\"height: 30px; width: 92px; border-radius: 8px; background: var(--coral-400);\"></span><span style=\"height: 30px; width: 60px; border-radius: 8px; background: var(--cream-deep);\"></span></div></div><div class=\"fig-cur1\" style=\"position: absolute; top: 0px; left: 0px; display: flex; align-items: flex-start; gap: 2px; pointer-events: none;\"><svg viewBox=\"0 0 24 24\" style=\"width: 27px; height: 27px; flex: 0 0 auto; filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 2px 3px);\"><path d=\"M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z\" fill=\"var(--paper)\" stroke=\"var(--ink)\" stroke-width=\"1.7\" stroke-linejoin=\"round\"></path></svg><span style=\"background: var(--coral-400); color: rgb(255, 255, 255); font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; padding: 3px 8px; border-radius: 6px; margin-top: 13px; white-space: nowrap;\">Gitta</span></div><div class=\"fig-cur2\" style=\"position: absolute; top: 0px; left: 0px; display: flex; align-items: flex-start; gap: 2px; pointer-events: none;\"><svg viewBox=\"0 0 24 24\" style=\"width: 27px; height: 27px; flex: 0 0 auto; filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 2px 3px);\"><path d=\"M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z\" fill=\"var(--paper)\" stroke=\"var(--ink)\" stroke-width=\"1.7\" stroke-linejoin=\"round\"></path></svg><span style=\"background: var(--lilac-400); color: rgb(255, 255, 255); font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; padding: 3px 8px; border-radius: 6px; margin-top: 13px; white-space: nowrap;\">You</span></div></div>\n</div>";

// The illustration's natural design size. The whole thing scales from here so it
// stays perfectly proportioned at ANY frame size you drag to in Framer.
const DESIGN_W = 560;
const DESIGN_H = 420;

/**
 * THIS COMMENT BLOCK IS REQUIRED — it tells Framer to give the component a real,
 * fixed size on the canvas instead of "auto" (which collapses it to a thin line).
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
function HongixFigma(props) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const r = el.getBoundingClientRect();
      setScale(Math.min(r.width / DESIGN_W, r.height / DESIGN_H));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: DESIGN_W,
      height: DESIGN_H,
      flex: "0 0 auto",
      transform: `scale(${scale})`,
      transformOrigin: "center center"
    },
    dangerouslySetInnerHTML: {
      __html: HTML
    }
  }));
}

// Default size Framer gives the component when first dropped on the canvas.
// Drag the frame corners (hold Shift to keep the ratio) and the art scales to fit.
HongixFigma.defaultProps = {
  width: 560,
  height: 420
};
Object.assign(__ds_scope, { HongixFigma, __ds_default_framer_webflow_Framer_Figma_1szgc9u: HongixFigma });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-Figma.tsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-Hero.tsx
try { (() => {
// HongixHero.tsx — Framer Code Component
// HOW TO USE IN FRAMER:
//   1. Assets panel > Code > "+" > New Code File. Delete starter content, paste THIS whole file.
//   2. Save. "HongixHero" appears under Code in the Insert menu. Drag onto canvas.
//   3. If it shows as a thin line, the @framerSupportedLayoutWidth comment below fixes the size.
// Self-contained: keyframes + markup + tokens all inlined, NO external icon font needed.
// To tweak timing, edit the numbers inside the <style> block in the HTML constant.

const HTML = "<!-- Hongix illustration: hero-flow-board — paste into Webflow HTML Embed, or wrap in a Framer Code Component -->\n<div class=\"hx-stage\" style=\"\n  --paper: #FFFFFF;\n  --line: #E3DED2;\n  --radius-md: 18px;\n  --shadow-lg: 0 16px 34px rgb(38 28 8 / 0.10), 0 5px 12px rgb(38 28 8 / 0.06);\n  --paper-2: #FFFBF1;\n  --coral-400: #FF5A36;\n  --yellow-400: #FFC02E;\n  --mint-400: #18C47B;\n  --cream-deep: #FCEFCD;\n  --grad-sunrise: linear-gradient(135deg, #FFCF4D 0%, #FF5A36 55%, #FF63B5 100%);\n  --radius-sm: 12px;\n  --yellow-100: #FFF1C2;\n  --radius-xs: 8px;\n  --ink: #1C1606;\n  --cream: #FFF6E2;\n  --font-display: 'Bricolage Grotesque', 'Hanken Grotesk', system-ui, sans-serif;\n  --mint-300: #58D79B;\n  --radius-lg: 26px;\n  --coral-300: #FF8A6B;\n  --font-mono: 'Space Mono', ui-monospace, 'SFMono-Regular', monospace;\n  --ink-faint: #8A8068;\n  --yellow-300: #FFCF4D;\n  --ink-soft: #4A4231;\n  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n  --ease-spring: cubic-bezier(0.34, 1.4, 0.5, 1);\n  --shadow-xs: 0 1px 2px rgb(38 28 8 / 0.06);\n  position:relative; width:360px; height:410px; max-width:100%;\n  margin:0 auto; font-family:var(--font-body, 'Hanken Grotesk',system-ui,sans-serif);\">\n<style>\n/* ===== Hongix hero keyframes (exact copy from the landing page) ===== */\n@media (prefers-reduced-motion: no-preference) {\n  .hx-flow-board { animation: hx-fl-board 9s var(--ease-out) infinite; }\n  .hx-flow-newcard { animation: hx-fl-newcard 9s var(--ease-out) infinite; }\n  .hx-flow-cursor { animation: hx-fl-cursor 9s var(--ease-out) infinite; }\n  .hx-flow-page { animation: hx-fl-page 9s var(--ease-out) infinite; }\n  .hx-flow-stamp { animation: hx-fl-stamp 9s var(--ease-spring) infinite; }\n}\n@keyframes hx-fl-board { \n  0% { opacity: 0; transform: scale(0.9) translateY(10px); }\n  6% { opacity: 1; transform: scale(1) translateY(0px); }\n  44% { opacity: 1; transform: scale(1) translateY(0px); }\n  50% { opacity: 0; transform: scale(0.93) translateY(-8px); }\n  100% { opacity: 0; transform: scale(0.9) translateY(10px); }\n}\n@keyframes hx-fl-newcard { \n  0% { opacity: 0; transform: translateY(-26px) scale(0.96); }\n  15% { opacity: 0; transform: translateY(-26px) scale(0.96); }\n  23% { opacity: 1; transform: translateY(0px) scale(1); }\n  26% { transform: translateY(0px) scale(1.035); }\n  30% { transform: scale(1); }\n  35% { transform: scale(0.95); }\n  39% { transform: scale(1); }\n  100% { opacity: 1; transform: translateY(0px) scale(1); }\n}\n@keyframes hx-fl-cursor { \n  0% { opacity: 0; transform: translate(54px, 64px); }\n  25% { opacity: 0; transform: translate(54px, 64px); }\n  29% { opacity: 1; }\n  35% { opacity: 1; transform: translate(0px, 0px); }\n  37% { transform: translate(-2px, -2px) scale(0.82); }\n  40% { transform: translate(0px, 0px) scale(1); }\n  47% { opacity: 0; transform: translate(16px, 16px); }\n  100% { opacity: 0; transform: translate(54px, 64px); }\n}\n@keyframes hx-fl-page { \n  0% { opacity: 0; transform: scale(0.86) translateY(12px); }\n  50% { opacity: 0; transform: scale(0.86) translateY(12px); }\n  60% { opacity: 1; transform: scale(1) translateY(0px); }\n  63% { transform: scale(1.012); }\n  67% { transform: scale(1); }\n  92% { opacity: 1; transform: scale(1) translateY(0px); }\n  98% { opacity: 0; transform: scale(0.97) translateY(-6px); }\n  100% { opacity: 0; transform: scale(0.86) translateY(12px); }\n}\n@keyframes hx-fl-stamp { \n  0% { opacity: 0; transform: rotate(-16deg) scale(1.6); }\n  64% { opacity: 0; transform: rotate(-16deg) scale(1.6); }\n  70% { opacity: 1; transform: rotate(-2deg) scale(0.95); }\n  74% { transform: rotate(-7deg) scale(1.05); }\n  78% { transform: rotate(-5deg) scale(1); }\n  92% { opacity: 1; transform: rotate(-5deg) scale(1); }\n  98% { opacity: 0; }\n  100% { opacity: 0; transform: rotate(-16deg) scale(1.6); }\n}\n</style>\n<div style=\"position: relative; width: 360px; height: 410px;\"><div class=\"hx-flow-page\" style=\"position: absolute; top: 54px; left: 12px; width: 336px; height: 300px; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); overflow: hidden;\"><div style=\"display: flex; align-items: center; gap: 6px; padding: 11px 14px; border-bottom: 1px solid var(--line); background: var(--paper-2);\"><span style=\"width: 10px; height: 10px; border-radius: 999px; background: var(--coral-400); border: 1px solid var(--line);\"></span><span style=\"width: 10px; height: 10px; border-radius: 999px; background: var(--yellow-400); border: 1px solid var(--line);\"></span><span style=\"width: 10px; height: 10px; border-radius: 999px; background: var(--mint-400); border: 1px solid var(--line);\"></span><span style=\"margin-left: 8px; flex: 1 1 0%; height: 11px; border-radius: 999px; background: var(--cream-deep);\"></span></div><div style=\"padding: 16px;\"><div style=\"background: var(--grad-sunrise); border-radius: var(--radius-sm); border: 1px solid var(--line); padding: 17px; display: flex; flex-direction: column; gap: 9px;\"><span style=\"width: 146px; height: 12px; border-radius: 999px; background: rgba(255, 255, 255, 0.92);\"></span><span style=\"width: 94px; height: 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.72);\"></span><span style=\"width: 70px; height: 22px; border-radius: 999px; background: var(--yellow-100); margin-top: 5px;\"></span></div><div style=\"display: flex; gap: 9px; margin-top: 14px;\"><span style=\"flex: 1 1 0%; height: 50px; border-radius: var(--radius-xs); background: var(--cream-deep);\"></span><span style=\"flex: 1 1 0%; height: 50px; border-radius: var(--radius-xs); background: var(--cream-deep);\"></span><span style=\"flex: 1 1 0%; height: 50px; border-radius: var(--radius-xs); background: var(--cream-deep);\"></span></div><div style=\"display: flex; flex-direction: column; gap: 7px; margin-top: 13px;\"><span style=\"width: 85%; height: 8px; border-radius: 999px; background: var(--cream-deep);\"></span><span style=\"width: 62%; height: 8px; border-radius: 999px; background: var(--cream-deep);\"></span></div></div></div><div class=\"hx-flow-stamp\" style=\"position: absolute; top: 44px; right: -2px; background: var(--ink); color: var(--cream); font-family: var(--font-display); font-weight: 800; font-size: 18px; padding: 10px 19px; border-radius: var(--radius-sm); box-shadow: var(--shadow-lg); transform: rotate(-5deg); white-space: nowrap; display: flex; align-items: center; gap: 8px;\"><svg viewBox=\"0 0 256 256\" style=\"width:20px;height:20px;fill:var(--mint-300);flex:0 0 auto;\"><path d=\"M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z\"></path></svg> Delivered in 48h</div><div class=\"hx-flow-board\" style=\"position: absolute; top: 32px; left: 10px; width: 340px; height: 336px; opacity: 0; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); overflow: hidden; display: flex; flex-direction: column;\"><div style=\"display: flex; align-items: center; gap: 9px; padding: 14px 16px; border-bottom: 1px solid var(--line);\"><svg viewBox=\"0 0 100 100\" aria-hidden=\"true\" style=\"width: 19px; height: 22px;\"><defs><linearGradient id=\"hxSparkBoard\" x1=\"0.1\" y1=\"0\" x2=\"0.9\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFA23E\"></stop><stop offset=\"1\" stop-color=\"#EC5A1A\"></stop></linearGradient></defs><path d=\"M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z\" fill=\"url(#hxSparkBoard)\"></path></svg><span style=\"font-family: var(--font-display); font-weight: 800; font-size: 16px; letter-spacing: -0.01em; color: var(--ink); white-space: nowrap;\">Your queue</span><span style=\"margin-left: auto;\"><span class=\"hx-avatar  \" style=\"width: 34px; height: 34px; font-size: 13.6px; background: var(--coral-300); border-radius:999px; display:inline-flex; align-items:center; justify-content:center; font-family:var(--font-display); font-weight:800; color:#fff;\">GH</span></span></div><div style=\"flex: 1 1 0%; padding: 15px; display: flex; flex-direction: column; gap: 11px; background: var(--paper-2);\"><span style=\"font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint);\">New request</span><div class=\"hx-flow-newcard\" style=\"background: var(--paper); border: 1.5px solid var(--yellow-400); border-radius: var(--radius-md); box-shadow: rgba(255, 192, 46, 0.2) 0px 0px 0px 3px; padding: 13px 14px; display: flex; align-items: center; gap: 11px;\"><span style=\"width: 38px; height: 38px; flex: 0 0 auto; background: var(--yellow-300); border: 1px solid var(--line); border-radius: var(--radius-sm); display: inline-flex; align-items: center; justify-content: center; font-size: 19px;\"><svg viewBox=\"0 0 256 256\" style=\"width:19px;height:19px;fill:var(--ink);\"><path d=\"M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h176v24H40Zm0 144V96h176v104Z\"></path></svg></span><div style=\"flex: 1 1 0%; min-width: 0px; line-height: 1.3;\"><div style=\"font-family: var(--font-display); font-weight: 800; font-size: 15.5px; white-space: nowrap;\">Landing page</div><div style=\"font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); white-space: nowrap;\">Brief attached · just now</div></div><span style=\"flex: 0 0 auto; font-family: var(--font-mono); font-weight: 700; font-size: 10px; letter-spacing: 0.06em; color: var(--cream); background: var(--coral-400); border-radius: 999px; padding: 3px 9px;\">NEW</span></div><span style=\"font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint);\">In review</span><div style=\"background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-md); box-shadow: var(--shadow-xs); padding: 10px 12px; display: flex; flex-direction: column; gap: 0px;\"><div style=\"display: flex; align-items: center; gap: 8px;\"><span style=\"font-family: var(--font-display); font-weight: 700; font-size: 13.5px; color: var(--ink); line-height: 1.2; white-space: nowrap;\">Brand identity</span></div></div></div></div><span class=\"hx-flow-cursor\" style=\"position: absolute; top: 150px; left: 250px; opacity: 0; width: 30px; height: 30px; color: var(--ink); filter: drop-shadow(rgba(38, 28, 8, 0.3) 0px 2px 3px);\"><svg viewBox=\"0 0 24 24\" style=\"width:100%;height:100%;\"><path d=\"M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linejoin=\"round\"></path></svg></span></div>\n</div>";

// The illustration's natural design size. The whole thing scales from here so it
// stays perfectly proportioned at ANY frame size you drag to in Framer.
const DESIGN_W = 360;
const DESIGN_H = 410;

/**
 * THIS COMMENT BLOCK IS REQUIRED — tells Framer to give the component a real fixed
 * size on the canvas instead of "auto" (which collapses it to a thin line).
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
function HongixHero(props) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const r = el.getBoundingClientRect();
      setScale(Math.min(r.width / DESIGN_W, r.height / DESIGN_H));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: DESIGN_W,
      height: DESIGN_H,
      flex: "0 0 auto",
      transform: `scale(${scale})`,
      transformOrigin: "center center"
    },
    dangerouslySetInnerHTML: {
      __html: HTML
    }
  }));
}

// Default size Framer gives the component when first dropped on the canvas.
// Drag the frame corners (hold Shift to keep the ratio) and the art scales to fit.
HongixHero.defaultProps = {
  width: 360,
  height: 410
};
Object.assign(__ds_scope, { HongixHero, __ds_default_framer_webflow_Framer_Hero_1dboafg: HongixHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-Hero.tsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-Kanban.tsx
try { (() => {
// HongixKanban.tsx — Framer Code Component
// HOW TO USE IN FRAMER:
//   1. In Framer, open the left panel > Assets > Code > "+" > New Code File.
//   2. Delete the starter content and paste THIS whole file in.
//   3. Save. The component "HongixKanban" now appears under Code in the Insert menu.
//   4. Drag it onto the canvas. The animation runs in preview & published site.
// The illustration (markup + @keyframes CSS) is the EXACT copy from your landing page.
// To tweak the animation, edit the HTML constant below (timings live in the <style> block).

const HTML = "<!-- Hongix illustration: about-kanban — paste into Webflow HTML Embed, or wrap in a Framer Code Component -->\n<div class=\"hx-stage\" style=\"\n  --paper:#fff;\n  --paper: #FFFFFF;\n  --line: #E3DED2;\n  --radius-lg: 26px;\n  --shadow-lg: 0 16px 34px rgb(38 28 8 / 0.10), 0 5px 12px rgb(38 28 8 / 0.06);\n  --font-display: 'Bricolage Grotesque','Hanken Grotesk',system-ui,sans-serif;\n  --ink: #1C1606;\n  --mint-400: #18C47B;\n  --paper-2: #FFFBF1;\n  --font-mono: 'Space Mono',ui-monospace,monospace;\n  --ink-faint: #8A8068;\n  --radius-md: 18px;\n  --shadow-sm: 0 2px 4px rgb(38 28 8 / 0.06), 0 1px 2px rgb(38 28 8 / 0.05);\n  --line-strong: #C9C2B3;\n  --mint-500: #119A60;\n  --font-body: 'Hanken Grotesk',system-ui,-apple-system,sans-serif;\n  --cream-deep: #FCEFCD;\n  --yellow-400: #FFC02E;\n  --grad-sunrise: linear-gradient(135deg,#FFCF4D 0%,#FF5A36 55%,#FF63B5 100%);\n  --coral-400: #FF5A36;\n  --lilac-400: #9C86FF;\n  position:relative; width:100%; max-width:560px; aspect-ratio:4 / 3;\n  margin:0 auto; font-family:var(--font-body);\">\n<style>\n/* ===== Hongix keyframes (exact copy from the landing page) ===== */\n@media (prefers-reduced-motion: no-preference) {\n  .kb-work { animation: 6s ease-in-out 0s infinite normal none running kb-work; }\n  .kb-c1 { animation: 6s ease-in-out 0s infinite normal none running kb-c1; }\n  .kb-c2 { animation: 6s ease-in-out 0s infinite normal none running kb-c2; }\n  .kb-c3 { animation: 6s ease-in-out 0s infinite normal none running kb-c3; }\n  .kb-c4 { animation: 6s ease-in-out 0s infinite normal none running kb-c4; }\n  .kb-prog { animation: 6s ease-in-out 0s infinite normal none running kb-prog; }\n  .kb-stamp { animation: 6s ease-in-out 0s infinite normal none running kb-stamp; }\n  .kb-pulse { animation: 1.6s ease-in-out 0s infinite normal none running kb-pulse; }\n  .kb-s1 { animation: 6s ease-in-out 0s infinite normal none running kb-s1; }\n  .kb-s2 { animation: 6s ease-in-out 0s infinite normal none running kb-s2; }\n  .kb-s3 { animation: 6s ease-in-out 0s infinite normal none running kb-s3; }\n  .kb-s4 { animation: 6s ease-in-out 0s infinite normal none running kb-s4; }\n}\n@keyframes kb-work { \n  0% { opacity: 0; }\n  3%, 92% { opacity: 1; }\n  99%, 100% { opacity: 0; }\n}\n@keyframes kb-c1 { \n  0%, 12% { opacity: 0; transform: scale(0.5); }\n  16% { opacity: 1; transform: scale(1.15); }\n  19%, 100% { opacity: 1; transform: scale(1); }\n}\n@keyframes kb-c2 { \n  0%, 30% { opacity: 0; transform: scale(0.5); }\n  34% { opacity: 1; transform: scale(1.15); }\n  37%, 100% { opacity: 1; transform: scale(1); }\n}\n@keyframes kb-c3 { \n  0%, 48% { opacity: 0; transform: scale(0.5); }\n  52% { opacity: 1; transform: scale(1.15); }\n  55%, 100% { opacity: 1; transform: scale(1); }\n}\n@keyframes kb-c4 { \n  0%, 64% { opacity: 0; transform: scale(0.5); }\n  68% { opacity: 1; transform: scale(1.15); }\n  71%, 100% { opacity: 1; transform: scale(1); }\n}\n@keyframes kb-prog { \n  0%, 8% { width: 0%; }\n  18% { width: 25%; }\n  36% { width: 50%; }\n  54% { width: 75%; }\n  70%, 100% { width: 100%; }\n}\n@keyframes kb-stamp { \n  0%, 72% { opacity: 0; transform: scale(0.6); }\n  76% { opacity: 1; transform: scale(1.12); }\n  79%, 92% { opacity: 1; transform: scale(1); }\n  100% { opacity: 0; }\n}\n@keyframes kb-pulse { \n  0%, 100% { opacity: 1; transform: scale(1); }\n  50% { opacity: 0.4; transform: scale(0.75); }\n}\n@keyframes kb-s1 { \n  0%, 17% { width: 0%; }\n  25%, 100% { width: 100%; }\n}\n@keyframes kb-s2 { \n  0%, 35% { width: 0%; }\n  43%, 100% { width: 100%; }\n}\n@keyframes kb-s3 { \n  0%, 53% { width: 0%; }\n  61%, 100% { width: 100%; }\n}\n@keyframes kb-s4 { \n  0%, 69% { width: 0%; }\n  77%, 100% { width: 100%; }\n}\n</style>\n<div style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 85%; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); overflow: hidden;\"><div style=\"display: flex; align-items: center; gap: 9px; padding: 14px 16px; border-bottom: 1px solid var(--line);\"><svg viewBox=\"0 0 100 100\" aria-hidden=\"true\" style=\"width: 18px; height: 21px;\"><defs><linearGradient id=\"kbSpark\" x1=\"0.1\" y1=\"0\" x2=\"0.9\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFA23E\"></stop><stop offset=\"1\" stop-color=\"#EC5A1A\"></stop></linearGradient></defs><path d=\"M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z\" fill=\"url(#kbSpark)\"></path></svg><span style=\"font-family: var(--font-display); font-weight: 800; font-size: 15px; letter-spacing: -0.01em; color: var(--ink); white-space: nowrap;\">Crafting your request</span><span class=\"kb-pulse\" style=\"margin-left: auto; width: 10px; height: 10px; border-radius: 999px; background: var(--mint-400); flex: 0 0 auto;\"></span></div><div style=\"padding: 18px; background: var(--paper-2);\"><span style=\"font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint);\">In progress</span><div style=\"margin-top: 11px; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 16px 16px 18px;\"><div style=\"font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--ink); margin-bottom: 15px;\">Landing page · v2</div><div class=\"kb-work\" style=\"display: flex; flex-direction: column; gap: 13px;\"><div style=\"display: flex; align-items: center; gap: 11px;\"><span style=\"position: relative; width: 22px; height: 22px; flex: 0 0 auto; border-radius: 999px; border: 1.5px solid var(--line-strong); background: var(--paper);\"><span class=\"kb-c1\" style=\"position: absolute; inset: -1.5px; opacity: 0; border-radius: 999px; background: var(--mint-400); border: 1.5px solid var(--mint-500); display: flex; align-items: center; justify-content: center; padding: 4px;\"><svg viewBox=\"0 0 20 20\" style=\"width: 100%; height: 100%;\"><path d=\"M5 10.5 L9 14 L15 6.5\" fill=\"none\" stroke=\"var(--paper)\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></span><span style=\"position: relative; font-family: var(--font-body); font-size: 14px; color: var(--ink); white-space: nowrap;\">Wireframe &amp; layout<span class=\"kb-s1\" style=\"position: absolute; left: 0px; top: 54%; height: 1.5px; width: 0%; background: var(--ink-faint); border-radius: 2px;\"></span></span></div><div style=\"display: flex; align-items: center; gap: 11px;\"><span style=\"position: relative; width: 22px; height: 22px; flex: 0 0 auto; border-radius: 999px; border: 1.5px solid var(--line-strong); background: var(--paper);\"><span class=\"kb-c2\" style=\"position: absolute; inset: -1.5px; opacity: 0; border-radius: 999px; background: var(--mint-400); border: 1.5px solid var(--mint-500); display: flex; align-items: center; justify-content: center; padding: 4px;\"><svg viewBox=\"0 0 20 20\" style=\"width: 100%; height: 100%;\"><path d=\"M5 10.5 L9 14 L15 6.5\" fill=\"none\" stroke=\"var(--paper)\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></span><span style=\"position: relative; font-family: var(--font-body); font-size: 14px; color: var(--ink); white-space: nowrap;\">Visual design<span class=\"kb-s2\" style=\"position: absolute; left: 0px; top: 54%; height: 1.5px; width: 0%; background: var(--ink-faint); border-radius: 2px;\"></span></span></div><div style=\"display: flex; align-items: center; gap: 11px;\"><span style=\"position: relative; width: 22px; height: 22px; flex: 0 0 auto; border-radius: 999px; border: 1.5px solid var(--line-strong); background: var(--paper);\"><span class=\"kb-c3\" style=\"position: absolute; inset: -1.5px; opacity: 0; border-radius: 999px; background: var(--mint-400); border: 1.5px solid var(--mint-500); display: flex; align-items: center; justify-content: center; padding: 4px;\"><svg viewBox=\"0 0 20 20\" style=\"width: 100%; height: 100%;\"><path d=\"M5 10.5 L9 14 L15 6.5\" fill=\"none\" stroke=\"var(--paper)\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></span><span style=\"position: relative; font-family: var(--font-body); font-size: 14px; color: var(--ink); white-space: nowrap;\">Spacing &amp; polish<span class=\"kb-s3\" style=\"position: absolute; left: 0px; top: 54%; height: 1.5px; width: 0%; background: var(--ink-faint); border-radius: 2px;\"></span></span></div><div style=\"display: flex; align-items: center; gap: 11px;\"><span style=\"position: relative; width: 22px; height: 22px; flex: 0 0 auto; border-radius: 999px; border: 1.5px solid var(--line-strong); background: var(--paper);\"><span class=\"kb-c4\" style=\"position: absolute; inset: -1.5px; opacity: 0; border-radius: 999px; background: var(--mint-400); border: 1.5px solid var(--mint-500); display: flex; align-items: center; justify-content: center; padding: 4px;\"><svg viewBox=\"0 0 20 20\" style=\"width: 100%; height: 100%;\"><path d=\"M5 10.5 L9 14 L15 6.5\" fill=\"none\" stroke=\"var(--paper)\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></span><span style=\"position: relative; font-family: var(--font-body); font-size: 14px; color: var(--ink); white-space: nowrap;\">Final review<span class=\"kb-s4\" style=\"position: absolute; left: 0px; top: 54%; height: 1.5px; width: 0%; background: var(--ink-faint); border-radius: 2px;\"></span></span></div><div style=\"display: flex; align-items: center; gap: 10px; margin-top: 5px;\"><div style=\"flex: 1 1 0%; height: 7px; border-radius: 999px; background: var(--cream-deep); overflow: hidden;\"><div class=\"kb-prog\" style=\"width: 0%; height: 100%; border-radius: 999px; background: var(--yellow-400);\"></div></div><span class=\"kb-stamp\" style=\"opacity: 0; display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-mono); font-weight: 700; font-size: 11px; color: var(--mint-500); white-space: nowrap;\"><svg viewBox=\"0 0 20 20\" style=\"width: 13px; height: 13px;\"><path d=\"M4 10.5 L8.5 15 L16 5.5\" fill=\"none\" stroke=\"var(--mint-500)\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>Done</span></div></div></div></div></div>\n</div>";

// The illustration's natural design size. The whole thing scales from here so it
// stays perfectly proportioned at ANY frame size you drag to in Framer.
const DESIGN_W = 560;
const DESIGN_H = 420;

/**
 * THIS COMMENT BLOCK IS REQUIRED — it tells Framer to give the component a real,
 * fixed size on the canvas instead of "auto" (which collapses it to a thin line).
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
function HongixKanban(props) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const r = el.getBoundingClientRect();
      setScale(Math.min(r.width / DESIGN_W, r.height / DESIGN_H));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: DESIGN_W,
      height: DESIGN_H,
      flex: "0 0 auto",
      transform: `scale(${scale})`,
      transformOrigin: "center center"
    },
    dangerouslySetInnerHTML: {
      __html: HTML
    }
  }));
}

// Default size Framer gives the component when first dropped on the canvas.
// Drag the frame corners (hold Shift to keep the ratio) and the art scales to fit.
HongixKanban.defaultProps = {
  width: 560,
  height: 420
};
Object.assign(__ds_scope, { HongixKanban, __ds_default_framer_webflow_Framer_Kanban_gnlfih: HongixKanban });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-Kanban.tsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-Stamp.tsx
try { (() => {
// HongixStamp.tsx — Framer Code Component
// The "In one subscription" stamp. ONE-SHOT animation: it stamps in once when the
// component mounts, then holds. Replays whenever the canvas/preview reloads it.
//
// HOW TO USE IN FRAMER:
//   1. Assets panel > Code > "+" > New Code File. Paste this whole file. Save.
//   2. Drag "HongixStamp" from Insert > Code onto the canvas.
//   3. The frame AUTO-SIZES to the text — you don't stretch it. To make it bigger or
//      smaller, change "Font size" in the right-hand properties panel (or edit
//      defaultProps below). To change the wording, edit "Text".
//
// Why the old version looked wrong: it tried to squeeze a rotated text box into a
// fixed pixel frame and used rem units (which depend on the page's root font size),
// so it clipped / mis-sized. This version sizes itself to the text in real pixels.

const STAMP_CSS = `
@keyframes hx-stamp-in {
  0%   { transform: rotate(-11deg) scale(1.28); }
  55%  { transform: rotate(-0.5deg) scale(0.95); }
  78%  { transform: rotate(-3.6deg) scale(1.03); }
  100% { transform: rotate(-2.5deg) scale(1); }
}
@media (prefers-reduced-motion: no-preference) {
  .hx-stamp-el { animation: hx-stamp-in 620ms cubic-bezier(0.34, 1.4, 0.5, 1) 220ms both; }
}
`;

/**
 * Auto-size to the text — the frame hugs the stamp; resize via Font size, not by stretching.
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
function HongixStamp(props) {
  const {
    text,
    fontSize,
    color,
    background
  } = props;
  // Padding scales with the font size so the stamp looks right at any size.
  const padY = Math.round(fontSize * 0.42);
  const padX = Math.round(fontSize * 0.92);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      padding: Math.round(fontSize * 0.6)
    }
  }, /*#__PURE__*/React.createElement("style", null, STAMP_CSS), /*#__PURE__*/React.createElement("span", {
    className: "hx-stamp-el",
    style: {
      display: "inline-block",
      fontFamily: "'Bricolage Grotesque', 'Hanken Grotesk', system-ui, sans-serif",
      fontWeight: 800,
      fontSize: fontSize,
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: color,
      background: background,
      padding: `${padY}px ${padX}px ${padY + 1}px`,
      borderRadius: Math.round(fontSize * 0.5),
      transform: "rotate(-2.5deg)",
      transformOrigin: "center center",
      boxShadow: "0 6px 16px rgb(38 28 8 / 0.12), 0 2px 5px rgb(38 28 8 / 0.06)",
      whiteSpace: "nowrap"
    }
  }, text));
}
HongixStamp.defaultProps = {
  text: "In one subscription",
  fontSize: 24,
  color: "#FFF6E2",
  background: "#FF5A36"
};

// ===== OPTIONAL: uncomment EVERYTHING below once pasted into Framer =====
// (gives you Text / Font size / Color pickers in the properties panel)
// import { addPropertyControls, ControlType } from "framer"
//
// addPropertyControls(HongixStamp, {
//     text: { type: ControlType.String, title: "Text", defaultValue: "In one subscription" },
//     fontSize: { type: ControlType.Number, title: "Font size", min: 10, max: 120, step: 1, defaultValue: 24 },
//     color: { type: ControlType.Color, title: "Text", defaultValue: "#FFF6E2" },
//     background: { type: ControlType.Color, title: "Background", defaultValue: "#FF5A36" },
// })
Object.assign(__ds_scope, { HongixStamp, __ds_default_framer_webflow_Framer_Stamp_1t8v42r: HongixStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-Stamp.tsx", error: String((e && e.message) || e) }); }

// framer-webflow/Framer-Star.tsx
try { (() => {
// HongixStar.tsx — Framer Code Component
// A static four-point sparkle star. NOT an animation — the original just looked
// broken when copied because it used CSS variables (var(--yellow-300), var(--line))
// for its colors, which don't exist outside the landing page. This version takes
// real colors as props, so it always renders.
//
// HOW TO USE IN FRAMER:
//   1. Assets panel > Code > "+" > New Code File. Paste this whole file. Save.
//   2. Drag "HongixStar" from Insert > Code onto the canvas. Drag corners to resize;
//      change color/rotation in the defaultProps below.
//
// OPTIONAL — color picker in Framer's properties panel:
//   Once pasted INTO Framer, uncomment the two marked blocks at the bottom of this
//   file (the `import` line and the `addPropertyControls` block). They only work
//   inside Framer, so they're left commented here.

const STAR_PATH = "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z";

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
function HongixStar(props) {
  const {
    fill,
    stroke,
    strokeWidth,
    shadow,
    rotate
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      transform: `rotate(${rotate}deg)`,
      filter: shadow ? "drop-shadow(rgba(38,28,8,0.16) 0px 4px 8px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR_PATH,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round"
  })));
}
HongixStar.defaultProps = {
  width: 60,
  height: 60,
  fill: "#FFCF4D",
  stroke: "#E3DED2",
  strokeWidth: 4,
  shadow: true,
  rotate: -10
};

// ===== OPTIONAL: uncomment EVERYTHING below once pasted into Framer =====
// import { addPropertyControls, ControlType } from "framer"
//
// addPropertyControls(HongixStar, {
//     fill: { type: ControlType.Color, title: "Fill", defaultValue: "#FFCF4D" },
//     stroke: { type: ControlType.Color, title: "Stroke", defaultValue: "#E3DED2" },
//     strokeWidth: { type: ControlType.Number, title: "Stroke W", min: 0, max: 12, step: 1, defaultValue: 4 },
//     rotate: { type: ControlType.Number, title: "Rotate", min: -45, max: 45, step: 1, defaultValue: -10 },
//     shadow: { type: ControlType.Boolean, title: "Shadow", defaultValue: true },
// })
Object.assign(__ds_scope, { HongixStar, __ds_default_framer_webflow_Framer_Star_1dbx3mg: HongixStar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "framer-webflow/Framer-Star.tsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections1.export.jsx
try { (() => {
/* Hongix website — Header, Hero, TrustBar. Exports to window. */
const {
  Button,
  Badge,
  Avatar,
  NavPill,
  Card
} = window.HongixDesignSystem_ffb926;

/* Illustration placeholder — gradient panel where commissioned art goes */
function Illus({
  grad = 'var(--grad-sunrise)',
  label = 'Illustration',
  h = 320,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: grad,
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      minHeight: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.sparkSvg,
    alt: "",
    style: {
      width: 64,
      height: 64
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '4px 12px'
    }
  }, label)));
}
function Shape({
  kind = 'squircle',
  color = 'var(--sky-300)',
  size = 70,
  style
}) {
  if (kind === 'sparkle') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: size,
        height: size,
        filter: 'drop-shadow(0 4px 8px rgba(38,28,8,.16))',
        ...style
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: '100%',
        height: '100%',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z",
      fill: color,
      stroke: "var(--line)",
      strokeWidth: "4",
      strokeLinejoin: "round"
    })));
  }
  const radius = kind === 'pill' ? 999 : kind === 'blob' ? '60% 40% 55% 45% / 50% 55% 45% 50%' : 'var(--radius-lg)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: kind === 'pill' ? size * 1.5 : size,
      height: size,
      background: color,
      border: 'var(--bw) solid var(--line)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  });
}

/* A single request row inside the hero queue-board mockup */
function ReqRow({
  title,
  tag,
  tone,
  progress
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: progress != null ? 9 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)',
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, title), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tag))), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: 'var(--cream-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + '%',
      height: '100%',
      background: 'var(--yellow-400)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-faint)'
    }
  }, progress, "%")));
}
function QueueBoard() {
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '12px 14px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logomarkSvg,
    alt: "",
    style: {
      width: 22,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Your queue"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-faint)'
    }
  }, "Gitta"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Gitta H",
    tone: "coral",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '13px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "In progress \xB7 1"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Brand identity refresh",
    tag: "Designing",
    tone: "yellow",
    progress: 65
  }), /*#__PURE__*/React.createElement(Label, null, "Up next \xB7 2"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Landing page redesign",
    tag: "Website",
    tone: "sky"
  }), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Instagram carousel \xB7 6",
    tag: "Social",
    tone: "pink"
  })));
}
function Header({
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 24);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: scrolled ? '10px 24px' : '18px 24px',
      transition: 'padding var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: scrolled ? '8px 12px 8px 16px' : '10px 14px 10px 18px',
      background: 'rgba(255,251,241,.82)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'var(--shadow-md)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-.04em',
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, "hongi", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 24,
      height: 26,
      margin: '0 -1px',
      overflow: 'visible'
    },
    "aria-label": "x",
    role: "img"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hxSparkHeader",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    transform: "rotate(45 50 50)",
    d: "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z",
    fill: "url(#hxSparkHeader)",
    stroke: "url(#hxSparkHeader)",
    strokeWidth: "10",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      whiteSpace: 'nowrap',
      textAlign: 'justify',
      textAlignLast: 'justify',
      marginLeft: 1
    }
  }, "Design Labs")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    },
    className: "hx-hide-md"
  }, /*#__PURE__*/React.createElement(NavPill, {
    href: "#work",
    onClick: e => {
      e.preventDefault();
      onNav('work');
    }
  }, "Work"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#how",
    onClick: e => {
      e.preventDefault();
      onNav('how');
    }
  }, "How it works"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#pricing",
    onClick: e => {
      e.preventDefault();
      onNav('pricing');
    }
  }, "Pricing"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#faq",
    onClick: e => {
      e.preventDefault();
      onNav('faq');
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hx-hide-md",
    onClick: () => onNav('login'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "ph-sparkle",
    onClick: () => onNav('pricing')
  }, "Join Waitlist"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: "ph-phone-call",
    onClick: () => onNav('call')
  }, "Book a call")))));
}

/* Animated hero story: a new request lands on the board → cursor opens it → landing page delivered in 48h (loops) */
function HeroFlow() {
  const dot = c => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: c,
    border: '1px solid var(--line)'
  });
  const bar = (w, h, c) => ({
    width: w,
    height: h,
    borderRadius: 999,
    background: c
  });
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 360,
      height: 410
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-page",
    style: {
      position: 'absolute',
      top: 54,
      left: 12,
      width: 336,
      height: 300,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '11px 14px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: dot('var(--coral-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--yellow-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--mint-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      flex: 1,
      height: 11,
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-sunrise)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--line)',
      padding: 17,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar(146, 12, 'rgba(255,255,255,.92)')
  }), /*#__PURE__*/React.createElement("span", {
    style: bar(94, 9, 'rgba(255,255,255,.72)')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar(70, 22, 'var(--yellow-100)'),
      marginTop: 5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar('85%', 8, 'var(--cream-deep)')
  }), /*#__PURE__*/React.createElement("span", {
    style: bar('62%', 8, 'var(--cream-deep)')
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-stamp",
    style: {
      position: 'absolute',
      top: 44,
      right: -2,
      background: 'var(--ink)',
      color: 'var(--cream)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      padding: '10px 19px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      transform: 'rotate(-5deg)',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check-circle",
    style: {
      fontSize: 20,
      color: 'var(--mint-300)'
    }
  }), " Delivered in 48h"), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-board",
    style: {
      position: 'absolute',
      top: 32,
      left: 10,
      width: 340,
      height: 336,
      opacity: 0,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 19,
      height: 22
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hxSparkBoard",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z",
    fill: "url(#hxSparkBoard)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Your queue"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Gitta H",
    tone: "coral",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 15,
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "New request"), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-newcard",
    style: {
      background: 'var(--paper)',
      border: '1.5px solid var(--yellow-400)',
      borderRadius: 'var(--radius-md)',
      boxShadow: '0 0 0 3px rgba(255,192,46,.20)',
      padding: '13px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      background: 'var(--yellow-300)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-browser"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15.5,
      whiteSpace: 'nowrap'
    }
  }, "Landing page"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-soft)',
      whiteSpace: 'nowrap'
    }
  }, "Brief attached \xB7 just now")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.06em',
      color: 'var(--cream)',
      background: 'var(--coral-400)',
      borderRadius: 999,
      padding: '3px 9px'
    }
  }, "NEW")), /*#__PURE__*/React.createElement(Label, null, "In review"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Brand identity",
    tone: "yellow"
  }))), /*#__PURE__*/React.createElement("i", {
    className: "hx-flow-cursor ph-bold ph-cursor",
    style: {
      position: 'absolute',
      top: 150,
      left: 250,
      opacity: 0,
      fontSize: 34,
      color: 'var(--ink)',
      filter: 'drop-shadow(0 2px 3px rgba(38,28,8,.3))'
    }
  })));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-9)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    kind: "sparkle",
    color: "var(--yellow-300)",
    size: 52,
    style: {
      top: 8,
      right: '1.5%',
      transform: 'rotate(-10deg)',
      opacity: .95
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.5rem, 1.5rem + 3.4vw, 4rem)',
      margin: 0,
      lineHeight: 1.04
    }
  }, "Your design support to launch, scale, and ", /*#__PURE__*/React.createElement("span", {
    className: "hx-serif"
  }, "stand\xA0out")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-stamp",
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-xl)',
      letterSpacing: '-.01em',
      lineHeight: 1.1,
      color: 'var(--cream)',
      background: 'var(--coral-400)',
      padding: '9px 20px 10px',
      borderRadius: 'var(--radius-sm)',
      transform: 'rotate(-2.5deg)',
      transformOrigin: 'left center',
      boxShadow: 'var(--shadow-md)'
    }
  }, "In one subscription")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconRight: "ph-tag",
    onClick: () => onNav('pricing')
  }, "View pricing"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "ph-arrow-right",
    onClick: () => onNav('how')
  }, "See how it works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Illus, {
    grad: "var(--grad-sunrise)",
    h: 468,
    label: "Hero illustration"
  }, /*#__PURE__*/React.createElement(HeroFlow, null)), /*#__PURE__*/React.createElement(Shape, {
    kind: "sparkle",
    color: "var(--coral-400)",
    size: 40,
    style: {
      top: -14,
      right: 24,
      transform: 'rotate(14deg)'
    }
  })))));
}
function TrustBar() {
  const stats = [['8', '+', 'Years of design experience'], ['60', '+', 'Brands & clients supported'], ['320', '+', 'Projects successfully delivered']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      borderTop: 'var(--bw) solid var(--line)',
      borderBottom: 'var(--bw) solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      padding: 'var(--space-6) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    },
    className: "hx-trust-grid"
  }, stats.map(([v, s, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-4xl)',
      letterSpacing: '-.03em',
      color: 'var(--cream)',
      lineHeight: 1
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--yellow-400)'
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'rgba(255,246,226,.75)',
      maxWidth: '26ch'
    }
  }, l))))));
}
Object.assign(window, {
  Illus,
  Shape,
  Header,
  Hero,
  TrustBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections1.export.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections1.jsx
try { (() => {
/* Hongix website — Header, Hero, TrustBar. Exports to window. */
const {
  Button,
  Badge,
  Avatar,
  NavPill,
  Card
} = window.HongixDesignSystem_ffb926;

/* Illustration placeholder — gradient panel where commissioned art goes */
function Illus({
  grad = 'var(--grad-sunrise)',
  label = 'Illustration',
  h = 320,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: grad,
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      minHeight: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/spark.svg",
    alt: "",
    style: {
      width: 64,
      height: 64
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '4px 12px'
    }
  }, label)));
}
function Shape({
  kind = 'squircle',
  color = 'var(--sky-300)',
  size = 70,
  style
}) {
  if (kind === 'sparkle') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: size,
        height: size,
        filter: 'drop-shadow(0 4px 8px rgba(38,28,8,.16))',
        ...style
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: '100%',
        height: '100%',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z",
      fill: color,
      stroke: "var(--line)",
      strokeWidth: "4",
      strokeLinejoin: "round"
    })));
  }
  const radius = kind === 'pill' ? 999 : kind === 'blob' ? '60% 40% 55% 45% / 50% 55% 45% 50%' : 'var(--radius-lg)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: kind === 'pill' ? size * 1.5 : size,
      height: size,
      background: color,
      border: 'var(--bw) solid var(--line)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  });
}

/* A single request row inside the hero queue-board mockup */
function ReqRow({
  title,
  tag,
  tone,
  progress
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: progress != null ? 9 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)',
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, title), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tag))), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: 'var(--cream-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + '%',
      height: '100%',
      background: 'var(--yellow-400)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-faint)'
    }
  }, progress, "%")));
}
function QueueBoard() {
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '12px 14px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark.svg",
    alt: "",
    style: {
      width: 22,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Your queue"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-faint)'
    }
  }, "Gitta"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Gitta H",
    tone: "coral",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '13px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "In progress \xB7 1"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Brand identity refresh",
    tag: "Designing",
    tone: "yellow",
    progress: 65
  }), /*#__PURE__*/React.createElement(Label, null, "Up next \xB7 2"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Landing page redesign",
    tag: "Website",
    tone: "sky"
  }), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Instagram carousel \xB7 6",
    tag: "Social",
    tone: "pink"
  })));
}
function Header({
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 24);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: scrolled ? '10px 24px' : '18px 24px',
      transition: 'padding var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: scrolled ? '8px 12px 8px 16px' : '10px 14px 10px 18px',
      background: 'rgba(255,251,241,.82)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'var(--shadow-md)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-.04em',
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, "hongi", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 24,
      height: 26,
      margin: '0 -1px',
      overflow: 'visible'
    },
    "aria-label": "x",
    role: "img"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hxSparkHeader",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    transform: "rotate(45 50 50)",
    d: "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z",
    fill: "url(#hxSparkHeader)",
    stroke: "url(#hxSparkHeader)",
    strokeWidth: "10",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      whiteSpace: 'nowrap',
      textAlign: 'justify',
      textAlignLast: 'justify',
      marginLeft: 1
    }
  }, "Design Labs")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    },
    className: "hx-hide-md"
  }, /*#__PURE__*/React.createElement(NavPill, {
    href: "#work",
    onClick: e => {
      e.preventDefault();
      onNav('work');
    }
  }, "Work"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#how",
    onClick: e => {
      e.preventDefault();
      onNav('how');
    }
  }, "How it works"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#pricing",
    onClick: e => {
      e.preventDefault();
      onNav('pricing');
    }
  }, "Pricing"), /*#__PURE__*/React.createElement(NavPill, {
    href: "#faq",
    onClick: e => {
      e.preventDefault();
      onNav('faq');
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hx-hide-md",
    onClick: () => onNav('login'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "ph-sparkle",
    onClick: () => onNav('pricing')
  }, "Join Waitlist"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: "ph-phone-call",
    onClick: () => onNav('call')
  }, "Book a call")))));
}

/* Animated hero story: a new request lands on the board → cursor opens it → landing page delivered in 48h (loops) */
function HeroFlow() {
  const dot = c => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: c,
    border: '1px solid var(--line)'
  });
  const bar = (w, h, c) => ({
    width: w,
    height: h,
    borderRadius: 999,
    background: c
  });
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 360,
      height: 410
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-page",
    style: {
      position: 'absolute',
      top: 54,
      left: 12,
      width: 336,
      height: 300,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '11px 14px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: dot('var(--coral-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--yellow-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--mint-400)')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      flex: 1,
      height: 11,
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-sunrise)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--line)',
      padding: 17,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar(146, 12, 'rgba(255,255,255,.92)')
  }), /*#__PURE__*/React.createElement("span", {
    style: bar(94, 9, 'rgba(255,255,255,.72)')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar(70, 22, 'var(--yellow-100)'),
      marginTop: 5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 50,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar('85%', 8, 'var(--cream-deep)')
  }), /*#__PURE__*/React.createElement("span", {
    style: bar('62%', 8, 'var(--cream-deep)')
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-stamp",
    style: {
      position: 'absolute',
      top: 44,
      right: -2,
      background: 'var(--ink)',
      color: 'var(--cream)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      padding: '10px 19px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      transform: 'rotate(-5deg)',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check-circle",
    style: {
      fontSize: 20,
      color: 'var(--mint-300)'
    }
  }), " Delivered in 48h"), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-board",
    style: {
      position: 'absolute',
      top: 32,
      left: 10,
      width: 340,
      height: 336,
      opacity: 0,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 19,
      height: 22
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hxSparkBoard",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z",
    fill: "url(#hxSparkBoard)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Your queue"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Gitta H",
    tone: "coral",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 15,
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "New request"), /*#__PURE__*/React.createElement("div", {
    className: "hx-flow-newcard",
    style: {
      background: 'var(--paper)',
      border: '1.5px solid var(--yellow-400)',
      borderRadius: 'var(--radius-md)',
      boxShadow: '0 0 0 3px rgba(255,192,46,.20)',
      padding: '13px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      background: 'var(--yellow-300)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-browser"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15.5,
      whiteSpace: 'nowrap'
    }
  }, "Landing page"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-soft)',
      whiteSpace: 'nowrap'
    }
  }, "Brief attached \xB7 just now")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.06em',
      color: 'var(--cream)',
      background: 'var(--coral-400)',
      borderRadius: 999,
      padding: '3px 9px'
    }
  }, "NEW")), /*#__PURE__*/React.createElement(Label, null, "In review"), /*#__PURE__*/React.createElement(ReqRow, {
    title: "Brand identity",
    tone: "yellow"
  }))), /*#__PURE__*/React.createElement("i", {
    className: "hx-flow-cursor ph-bold ph-cursor",
    style: {
      position: 'absolute',
      top: 150,
      left: 250,
      opacity: 0,
      fontSize: 34,
      color: 'var(--ink)',
      filter: 'drop-shadow(0 2px 3px rgba(38,28,8,.3))'
    }
  })));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-9)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    kind: "sparkle",
    color: "var(--yellow-300)",
    size: 52,
    style: {
      top: 8,
      right: '1.5%',
      transform: 'rotate(-10deg)',
      opacity: .95
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.5rem, 1.5rem + 3.4vw, 4rem)',
      margin: 0,
      lineHeight: 1.04
    }
  }, "Your design support to launch, scale, and ", /*#__PURE__*/React.createElement("span", {
    className: "hx-serif"
  }, "stand\xA0out")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-stamp",
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-xl)',
      letterSpacing: '-.01em',
      lineHeight: 1.1,
      color: 'var(--cream)',
      background: 'var(--coral-400)',
      padding: '9px 20px 10px',
      borderRadius: 'var(--radius-sm)',
      transform: 'rotate(-2.5deg)',
      transformOrigin: 'left center',
      boxShadow: 'var(--shadow-md)'
    }
  }, "In one subscription")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconRight: "ph-tag",
    onClick: () => onNav('pricing')
  }, "View pricing"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "ph-arrow-right",
    onClick: () => onNav('how')
  }, "See how it works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Illus, {
    grad: "var(--grad-sunrise)",
    h: 468,
    label: "Hero illustration"
  }, /*#__PURE__*/React.createElement(HeroFlow, null)), /*#__PURE__*/React.createElement(Shape, {
    kind: "sparkle",
    color: "var(--coral-400)",
    size: 40,
    style: {
      top: -14,
      right: 24,
      transform: 'rotate(14deg)'
    }
  })))));
}
function TrustBar() {
  const stats = [['8', '+', 'Years of design experience'], ['60', '+', 'Brands & clients supported'], ['320', '+', 'Projects successfully delivered']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      borderTop: 'var(--bw) solid var(--line)',
      borderBottom: 'var(--bw) solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      padding: 'var(--space-6) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    },
    className: "hx-trust-grid"
  }, stats.map(([v, s, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-4xl)',
      letterSpacing: '-.03em',
      color: 'var(--cream)',
      lineHeight: 1
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--yellow-400)'
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'rgba(255,246,226,.75)',
      maxWidth: '26ch'
    }
  }, l))))));
}
Object.assign(window, {
  Illus,
  Shape,
  Header,
  Hero,
  TrustBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections2.export.jsx
try { (() => {
/* Hongix website — SectionHead, About, Steps, Services + Portfolio. */
const {
  Button: Btn2,
  Badge: Badge2,
  Card: Card2,
  Tag,
  StepCard,
  Avatar: Avatar2
} = window.HongixDesignSystem_ffb926;
function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'left',
  maxw = '32ch',
  size = 'lg',
  titleMaxw = '20ch'
}) {
  const cen = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginBottom: 'var(--space-7)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    tone: "coral",
    dot: true
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: size === 'sm' ? 'var(--text-3xl)' : 'var(--text-4xl)',
      margin: 0,
      lineHeight: 1.12,
      textWrap: 'balance',
      maxWidth: titleMaxw,
      marginLeft: cen ? 'auto' : undefined,
      marginRight: cen ? 'auto' : undefined
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      margin: '14px 0 0',
      maxWidth: maxw,
      marginLeft: cen ? 'auto' : 0,
      marginRight: cen ? 'auto' : 0
    }
  }, sub));
}

/* Animated Kanban illustration — one request, crafted step by step (loops) */
function AboutArt() {
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 10.5 L9 14 L15 6.5",
    fill: "none",
    stroke: "var(--paper)",
    strokeWidth: 2.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const Item = ({
    n,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 999,
      border: '1.5px solid var(--line-strong)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'kb-c' + n,
    style: {
      position: 'absolute',
      inset: -1.5,
      opacity: 0,
      borderRadius: 999,
      background: 'var(--mint-400)',
      border: '1.5px solid var(--mint-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    className: 'kb-s' + n,
    style: {
      position: 'absolute',
      left: 0,
      top: '54%',
      height: 1.5,
      width: '0%',
      background: 'var(--ink-faint)',
      borderRadius: 2
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-candy)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4/5',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.sparkSvg,
    alt: "",
    style: {
      position: 'absolute',
      top: '7%',
      right: '10%',
      width: 30,
      transform: 'rotate(8deg)',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '9%',
      left: '11%',
      width: 14,
      height: 14,
      borderRadius: 999,
      background: 'var(--sky-400)',
      border: '1px solid var(--line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '11%',
      left: '14%',
      width: 11,
      height: 11,
      borderRadius: 999,
      background: 'var(--mint-400)',
      border: '1px solid var(--line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '85%',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 18,
      height: 21
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "kbSpark",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z",
    fill: "url(#kbSpark)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Crafting your request"), /*#__PURE__*/React.createElement("span", {
    className: "kb-pulse",
    style: {
      marginLeft: 'auto',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--mint-400)',
      flex: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, "In progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: '16px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--ink)',
      marginBottom: 15
    }
  }, "Landing page \xB7 v2"), /*#__PURE__*/React.createElement("div", {
    className: "kb-work",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(Item, {
    n: 1,
    label: "Wireframe & layout"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 2,
    label: "Visual design"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 3,
    label: "Spacing & polish"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 4,
    label: "Final review"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 7,
      borderRadius: 999,
      background: 'var(--cream-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kb-prog",
    style: {
      width: '0%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--yellow-400)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "kb-stamp",
    style: {
      opacity: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--mint-500)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    style: {
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5 L8.5 15 L16 5.5",
    fill: "none",
    stroke: "var(--mint-500)",
    strokeWidth: 2.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Done")))))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-about-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(AboutArt, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    size: "sm",
    eyebrow: "Who is Hongix",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Handled ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif hx-serif--accent"
    }, "personally"), ", crafted with care")
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      maxWidth: '54ch'
    }
  }, "Hongix is your design partner for one flat monthly rate. Every project is thoughtfully designed by the founder, Gitta. To protect that focus, Hongix works with only a select few clients at a time, so your creative work gets the dedicated attention it deserves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-user-focus"
  }, "One designer, fully invested"), /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-target"
  }, "Focused scope"), /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-heart"
  }, "Crafted with care"))))));
}
function Steps({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    ref: refEl,
    className: "hx-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "How it works",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How the ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "subscription"), " works"),
    titleMaxw: "none",
    maxw: "none",
    sub: "Get your design needs done with a simple, three-step system."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-steps-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    step: "1",
    icon: "ph-kanban",
    iconTone: "yellow",
    title: "Subscribe & queue"
  }, "Get access to your dedicated Kanban board. Load it up with as many design requests and details as you want. No meetings required."), /*#__PURE__*/React.createElement(StepCard, {
    step: "2",
    icon: "ph-paint-brush-broad",
    iconTone: "coral",
    title: "The work begins"
  }, "One active request at a time. Big projects are broken into milestones with early alignment, so you see purposeful progress every 48 hours."), /*#__PURE__*/React.createElement(StepCard, {
    step: "3",
    icon: "ph-arrows-clockwise",
    iconTone: "sky",
    title: "Revise until perfect"
  }, "Don't love the first draft? No problem. You get unlimited revisions until you are 100% happy with the result."))));
}
const SERVICES = [['ph-browser', 'Website design'], ['ph-cursor-click', 'UI/UX design'], ['ph-pen-nib', 'Logos & branding'], ['ph-instagram-logo', 'Social media content'], ['ph-megaphone', 'Ad assets'], ['ph-presentation-chart', 'Slide decks'], ['ph-newspaper', 'Print design'], ['ph-code', 'Framer development*'], ['ph-dots-three-circle', 'and more']];
const WORK = [['Veridia', 'Brand identity & website', 'var(--grad-sunrise)', 'tall'], ['Pluto Pay', 'Fintech app UI/UX', 'var(--grad-sky)', 'short'], ['Marlow & Co', 'Logo & packaging', 'var(--grad-candy)', 'short'], ['Sundae', 'Campaign & ad assets', 'var(--grad-citrus)', 'tall']];
const PORTFOLIO_URL = 'https://www.figma.com';

/* Animated Figma workspace — a design being built, with multiplayer cursors (loops) */
function FigmaCanvas() {
  const cur = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
    pointerEvents: 'none'
  };
  const Cursor = ({
    cls,
    name,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: cur
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 27,
      height: 27,
      flex: 'none',
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.22))'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: 1.7,
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: tone,
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      padding: '3px 8px',
      borderRadius: 6,
      marginTop: 13,
      whiteSpace: 'nowrap'
    }
  }, name));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: '64%',
      minWidth: 230,
      background: 'var(--paper)',
      border: '1px solid rgba(28,22,6,.16)',
      borderRadius: 12,
      boxShadow: '0 18px 38px rgba(18,52,60,.22)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -22,
      left: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(255,255,255,.92)'
    }
  }, "Hero / v3"), /*#__PURE__*/React.createElement("div", {
    className: "fig-el1",
    style: {
      height: 72,
      borderRadius: 8,
      background: 'var(--grad-sunrise)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-el2",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 10,
      width: '74%',
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 10,
      width: '52%',
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-el3",
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 30,
      width: 92,
      borderRadius: 8,
      background: 'var(--coral-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 30,
      width: 60,
      borderRadius: 8,
      background: 'var(--cream-deep)'
    }
  }))), /*#__PURE__*/React.createElement(Cursor, {
    cls: "fig-cur1",
    name: "Gitta",
    tone: "var(--coral-400)"
  }), /*#__PURE__*/React.createElement(Cursor, {
    cls: "fig-cur2",
    name: "You",
    tone: "var(--lilac-400)"
  }));
}
function Services({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    ref: refEl,
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    size: "sm",
    eyebrow: "Services & portfolio",
    titleMaxw: "none",
    maxw: "none",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What you can drop in your ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "queue")),
    sub: "One subscription covers the full range of creative work your brand needs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 'var(--space-8)'
    }
  }, SERVICES.map(([ic, l], i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    icon: ic,
    interactive: true
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "hx-portfolio",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      minHeight: 296,
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--grad-sky)',
      overflow: 'hidden',
      minHeight: 264,
      borderRight: 'var(--bw) solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(FigmaCanvas, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-2xl)',
      margin: 0,
      letterSpacing: '-.02em',
      textWrap: 'balance'
    }
  }, "Explore the portfolio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      margin: 0,
      maxWidth: '34ch'
    }
  }, "Let the works speak for themselves."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Btn2, {
    href: PORTFOLIO_URL,
    target: "_blank",
    rel: "noopener",
    variant: "primary",
    size: "lg",
    iconRight: "ph-arrow-up-right"
  }, "See selected works"))))));
}
Object.assign(window, {
  SectionHead,
  About,
  Steps,
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections2.export.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections2.jsx
try { (() => {
/* Hongix website — SectionHead, About, Steps, Services + Portfolio. */
const {
  Button: Btn2,
  Badge: Badge2,
  Card: Card2,
  Tag,
  StepCard,
  Avatar: Avatar2
} = window.HongixDesignSystem_ffb926;
function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'left',
  maxw = '32ch',
  size = 'lg',
  titleMaxw = '20ch'
}) {
  const cen = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginBottom: 'var(--space-7)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    tone: "coral",
    dot: true
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: size === 'sm' ? 'var(--text-3xl)' : 'var(--text-4xl)',
      margin: 0,
      lineHeight: 1.12,
      textWrap: 'balance',
      maxWidth: titleMaxw,
      marginLeft: cen ? 'auto' : undefined,
      marginRight: cen ? 'auto' : undefined
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      margin: '14px 0 0',
      maxWidth: maxw,
      marginLeft: cen ? 'auto' : 0,
      marginRight: cen ? 'auto' : 0
    }
  }, sub));
}

/* Animated Kanban illustration — one request, crafted step by step (loops) */
function AboutArt() {
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 10.5 L9 14 L15 6.5",
    fill: "none",
    stroke: "var(--paper)",
    strokeWidth: 2.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const Item = ({
    n,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 999,
      border: '1.5px solid var(--line-strong)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'kb-c' + n,
    style: {
      position: 'absolute',
      inset: -1.5,
      opacity: 0,
      borderRadius: 999,
      background: 'var(--mint-400)',
      border: '1.5px solid var(--mint-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    className: 'kb-s' + n,
    style: {
      position: 'absolute',
      left: 0,
      top: '54%',
      height: 1.5,
      width: '0%',
      background: 'var(--ink-faint)',
      borderRadius: 2
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-candy)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4/5',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/spark.svg",
    alt: "",
    style: {
      position: 'absolute',
      top: '7%',
      right: '10%',
      width: 30,
      transform: 'rotate(8deg)',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '9%',
      left: '11%',
      width: 14,
      height: 14,
      borderRadius: 999,
      background: 'var(--sky-400)',
      border: '1px solid var(--line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '11%',
      left: '14%',
      width: 11,
      height: 11,
      borderRadius: 999,
      background: 'var(--mint-400)',
      border: '1px solid var(--line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '85%',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 18,
      height: 21
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "kbSpark",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M50 1 C53 38 60 47 94 50 C60 53 53 60 50 99 C47 60 40 53 6 50 C40 47 47 38 50 1 Z",
    fill: "url(#kbSpark)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      letterSpacing: '-.01em',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Crafting your request"), /*#__PURE__*/React.createElement("span", {
    className: "kb-pulse",
    style: {
      marginLeft: 'auto',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--mint-400)',
      flex: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, "In progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: '16px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--ink)',
      marginBottom: 15
    }
  }, "Landing page \xB7 v2"), /*#__PURE__*/React.createElement("div", {
    className: "kb-work",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(Item, {
    n: 1,
    label: "Wireframe & layout"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 2,
    label: "Visual design"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 3,
    label: "Spacing & polish"
  }), /*#__PURE__*/React.createElement(Item, {
    n: 4,
    label: "Final review"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 7,
      borderRadius: 999,
      background: 'var(--cream-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kb-prog",
    style: {
      width: '0%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--yellow-400)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "kb-stamp",
    style: {
      opacity: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--mint-500)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    style: {
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5 L8.5 15 L16 5.5",
    fill: "none",
    stroke: "var(--mint-500)",
    strokeWidth: 2.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Done")))))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-about-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(AboutArt, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    size: "sm",
    eyebrow: "Who is Hongix",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Handled ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif hx-serif--accent"
    }, "personally"), ", crafted with care")
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      maxWidth: '54ch'
    }
  }, "Hongix is your design partner for one flat monthly rate. Every project is thoughtfully designed by the founder, Gitta. To protect that focus, Hongix works with only a select few clients at a time, so your creative work gets the dedicated attention it deserves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-user-focus"
  }, "One designer, fully invested"), /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-target"
  }, "Focused scope"), /*#__PURE__*/React.createElement(Tag, {
    icon: "ph-heart"
  }, "Crafted with care"))))));
}
function Steps({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    ref: refEl,
    className: "hx-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "How it works",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How the ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "subscription"), " works"),
    titleMaxw: "none",
    maxw: "none",
    sub: "Get your design needs done with a simple, three-step system."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-steps-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    step: "1",
    icon: "ph-kanban",
    iconTone: "yellow",
    title: "Subscribe & queue"
  }, "Get access to your dedicated Kanban board. Load it up with as many design requests and details as you want. No meetings required."), /*#__PURE__*/React.createElement(StepCard, {
    step: "2",
    icon: "ph-paint-brush-broad",
    iconTone: "coral",
    title: "The work begins"
  }, "One active request at a time. Big projects are broken into milestones with early alignment, so you see purposeful progress every 48 hours."), /*#__PURE__*/React.createElement(StepCard, {
    step: "3",
    icon: "ph-arrows-clockwise",
    iconTone: "sky",
    title: "Revise until perfect"
  }, "Don't love the first draft? No problem. You get unlimited revisions until you are 100% happy with the result."))));
}
const SERVICES = [['ph-browser', 'Website design'], ['ph-cursor-click', 'UI/UX design'], ['ph-pen-nib', 'Logos & branding'], ['ph-instagram-logo', 'Social media content'], ['ph-megaphone', 'Ad assets'], ['ph-presentation-chart', 'Slide decks'], ['ph-newspaper', 'Print design'], ['ph-code', 'Framer development*'], ['ph-dots-three-circle', 'and more']];
const WORK = [['Veridia', 'Brand identity & website', 'var(--grad-sunrise)', 'tall'], ['Pluto Pay', 'Fintech app UI/UX', 'var(--grad-sky)', 'short'], ['Marlow & Co', 'Logo & packaging', 'var(--grad-candy)', 'short'], ['Sundae', 'Campaign & ad assets', 'var(--grad-citrus)', 'tall']];
const PORTFOLIO_URL = 'https://www.figma.com';

/* Animated Figma workspace — a design being built, with multiplayer cursors (loops) */
function FigmaCanvas() {
  const cur = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
    pointerEvents: 'none'
  };
  const Cursor = ({
    cls,
    name,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: cur
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 27,
      height: 27,
      flex: 'none',
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.22))'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 2.4 L19.2 11.8 L12.3 12.7 L16.1 20.2 L13 21.6 L9.2 14 L5 17.8 Z",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: 1.7,
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: tone,
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      padding: '3px 8px',
      borderRadius: 6,
      marginTop: 13,
      whiteSpace: 'nowrap'
    }
  }, name));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: '64%',
      minWidth: 230,
      background: 'var(--paper)',
      border: '1px solid rgba(28,22,6,.16)',
      borderRadius: 12,
      boxShadow: '0 18px 38px rgba(18,52,60,.22)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -22,
      left: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(255,255,255,.92)'
    }
  }, "Hero / v3"), /*#__PURE__*/React.createElement("div", {
    className: "fig-el1",
    style: {
      height: 72,
      borderRadius: 8,
      background: 'var(--grad-sunrise)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-el2",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 10,
      width: '74%',
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 10,
      width: '52%',
      borderRadius: 999,
      background: 'var(--cream-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-el3",
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 30,
      width: 92,
      borderRadius: 8,
      background: 'var(--coral-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 30,
      width: 60,
      borderRadius: 8,
      background: 'var(--cream-deep)'
    }
  }))), /*#__PURE__*/React.createElement(Cursor, {
    cls: "fig-cur1",
    name: "Gitta",
    tone: "var(--coral-400)"
  }), /*#__PURE__*/React.createElement(Cursor, {
    cls: "fig-cur2",
    name: "You",
    tone: "var(--lilac-400)"
  }));
}
function Services({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    ref: refEl,
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    size: "sm",
    eyebrow: "Services & portfolio",
    titleMaxw: "none",
    maxw: "none",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What you can drop in your ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "queue")),
    sub: "One subscription covers the full range of creative work your brand needs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 'var(--space-8)'
    }
  }, SERVICES.map(([ic, l], i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    icon: ic,
    interactive: true
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "hx-portfolio",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      minHeight: 296,
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--grad-sky)',
      overflow: 'hidden',
      minHeight: 264,
      borderRight: 'var(--bw) solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(FigmaCanvas, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-2xl)',
      margin: 0,
      letterSpacing: '-.02em',
      textWrap: 'balance'
    }
  }, "Explore the portfolio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      margin: 0,
      maxWidth: '34ch'
    }
  }, "Let the works speak for themselves."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Btn2, {
    href: PORTFOLIO_URL,
    target: "_blank",
    rel: "noopener",
    variant: "primary",
    size: "lg",
    iconRight: "ph-arrow-up-right"
  }, "See selected works"))))));
}
Object.assign(window, {
  SectionHead,
  About,
  Steps,
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections3.jsx
try { (() => {
/* Hongix website — Audience, WhyHongix, Testimonials. */
const {
  Card: Card3,
  Badge: Badge3,
  Avatar: Avatar3
} = window.HongixDesignSystem_ffb926;
const SH3 = window.SectionHead;
const AUDIENCE = [['ph-rocket-launch', 'yellow', 'The "zero-to-one" launch', "You are building from scratch, but your pitch deck and website don't reflect your vision. You need investor-ready branding — without the $100k salary of a full-time hire."], ['ph-lightning', 'coral', 'The campaign engine', "You need a relentless stream of social content, ads, or landing pages to keep your audience engaged. You need a fast, reliable partner to keep the assets flowing."], ['ph-puzzle-piece', 'sky', 'The flexible extension', "You need execution, not headcount. Short-term cover or long-term partner, you need an expert ready to step in and hit the ground running."]];
function Audience() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hx-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SH3, {
    align: "center",
    eyebrow: "Who it's for",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Who Hongix is ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "built for")),
    maxw: "none",
    sub: "Good design drives growth. Getting it done shouldn't be a nightmare."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-steps-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, AUDIENCE.map(([ic, tone, title, body], i) => {
    const tones = {
      yellow: 'var(--yellow-300)',
      coral: 'var(--coral-300)',
      sky: 'var(--sky-300)'
    };
    return /*#__PURE__*/React.createElement(Card3, {
      key: i,
      pad: "lg",
      hover: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        background: tones[tone],
        border: 'var(--bw) solid var(--line)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-xs)',
        fontSize: 28,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph-bold ${ic}`
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: '-.02em',
        margin: '0 0 8px'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.55,
        color: 'var(--ink-soft)',
        margin: 0
      }
    }, body));
  }))));
}
const WHY = [['ph-wallet', 'Predictable pricing', 'No hourly billing, no surprises. Your design needs covered by one flat monthly fee.'], ['ph-infinity', 'Unlimited requests', 'Drop as many tasks into your queue as you want. Hongix tackles them one at a time, delivering fresh work every 48 hours.'], ['ph-pause-circle', 'The pause feature', 'No need to pay for idle time. Pause your 31-day billing cycle anytime and bank your remaining days for later.'], ['ph-arrows-out-cardinal', 'Complete flexibility', 'No long-term contracts, no retainer minimums. You are only committed for the exact month you pay for. Cancel anytime.']];
function WhyHongix() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hx-section",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge3, {
    tone: "yellow",
    dot: true
  }, "Why Hongix")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: 0,
      lineHeight: 1.12,
      textWrap: 'balance',
      maxWidth: 'none',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'var(--cream)'
    }
  }, "Fast execution. ", /*#__PURE__*/React.createElement("span", {
    className: "hx-serif",
    style: {
      color: 'var(--yellow-400)'
    }
  }, "Zero friction.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'rgba(255,246,226,.72)',
      margin: '14px auto 0',
      maxWidth: 'none'
    }
  }, "Say goodbye to messy spreadsheets, unpredictable invoices, and lagging timelines.")), /*#__PURE__*/React.createElement("div", {
    className: "hx-why-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-5)'
    }
  }, WHY.map(([ic, title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      background: 'var(--paper)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      background: 'var(--yellow-300)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      fontSize: 28
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ${ic}`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '-.02em',
      margin: '2px 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, body)))))));
}
const QUOTES = [['Hongix felt like having a senior designer on the team — without the overhead. Every request came back sharper than I imagined.', 'Mara Lin', 'Founder, Pluto Pay', 'sky'], ['Fresh work every couple of days kept our whole launch on schedule. The pause feature alone paid for itself.', 'Ravi Patel', 'CMO, Sundae', 'coral']];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SH3, {
    align: "center",
    eyebrow: "In their words",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Loved by the brands we ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "build with"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-why-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-5)'
    }
  }, QUOTES.map(([quote, name, role, tone], i) => /*#__PURE__*/React.createElement(Card3, {
    key: i,
    pad: "lg",
    shadow: "var(--shadow-md)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.4,
      letterSpacing: '-.01em',
      margin: '0 0 20px'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar3, {
    name: name,
    tone: tone,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, role))))))));
}
Object.assign(window, {
  Audience,
  WhyHongix,
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections4.jsx
try { (() => {
/* Hongix website — Pricing, Faq, BookCall, Footer, CTA banner. */
const {
  Button: Btn4,
  Badge: Badge4,
  PriceCard,
  FaqItem,
  Input: Input4
} = window.HongixDesignSystem_ffb926;
const SH4 = window.SectionHead;
function Pricing({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    ref: refEl,
    className: "hx-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement(SH4, {
    align: "center",
    eyebrow: "Pricing",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One subscription. ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "Everything"), " you need."),
    maxw: "none",
    sub: "Pause or cancel anytime. No contracts, no retainer minimums."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-price-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-6)',
      maxWidth: 920,
      margin: '0 auto',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    name: "Design & No-code",
    description: "Perfect for ongoing marketing, branding, UI/UX, and simple no-code sites.",
    badge: "Founding Member Rate",
    was: "$4,999",
    now: "$3,999",
    per: "USD / month",
    features: ['One active request at a time', 'Graphic design, branding, social & UI/UX', 'Framer & Squarespace site builds', 'Source files delivered in Figma', 'Unlimited revisions', 'Pause or cancel anytime'],
    cta: "Join waitlist"
  }), /*#__PURE__*/React.createElement(PriceCard, {
    featured: true,
    name: "Design & Webflow Dev",
    description: "Perfect for businesses that need a fully custom website built and maintained.",
    badge: "Founding Member Rate",
    was: "$5,999",
    now: "$4,999",
    per: "USD / month",
    features: ['Everything in Design & No-code, plus:', 'Full custom Webflow development', 'Complex website architectures & CMS', 'Unlimited revisions', 'Pause or cancel anytime'],
    cta: "Claim your spot"
  }))));
}
const FAQS = [["Why shouldn't I just hire a full-time designer?", "Hiring a senior in-house designer means a $100k+ salary, plus benefits, paid time off, and software expenses — and you might pay them for downtime when your pipeline is light. Hongix gives you that same senior-level expertise for a flat rate, and you can simply hit pause when things are slow."], ["Is there a limit to the number of requests I can make?", "Not at all. Load up your Kanban board with as many tasks as you need. Requests are systematically tackled one active task at a time until your entire queue is clear."], ["How fast will my designs be delivered?", "Most standard tasks — like social assets or landing page mockups — are delivered within 48 hours. For larger builds like a full website, the project is divided into milestones so you still see fresh progress every couple of days."], ["How exactly does the pause feature work?", "Subscriptions run on a 31-day cycle. If you use 20 days and don't need more work that month, you can pause. The remaining 11 days are banked, ready to activate whenever your next project pops up. You never pay for idle time."], ["How do I submit my design briefs?", "Everything happens inside your dedicated Kanban board. Write a brief on a card, attach a Google Doc, drop in visual inspiration, or link a Loom video. As long as the details are on the board, the work is ready to begin."], ["Are there any creative services you do not cover?", "To keep speed and quality high, Hongix stays focused on core design. That means no 3D modeling, heavy document typesetting, complex custom app architecture, or non-design work like copywriting, strategy, and SEO research."], ["Do you offer refunds if I change my mind?", "Because of the intensive nature of the work and the immediate time invested, refunds are not offered. However, the unlimited revision policy guarantees revisions continue until you are absolutely thrilled with your deliverables."]];
function Faq({
  refEl
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    ref: refEl,
    className: "hx-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SH4, {
    align: "center",
    eyebrow: "FAQ",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions, ", /*#__PURE__*/React.createElement("span", {
      className: "hx-serif"
    }, "answered"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: q,
    open: open === i,
    onToggle: n => setOpen(n ? i : -1)
  }, a)))));
}
const SLOTS = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];
function BookingCalendar() {
  const [offset, setOffset] = React.useState(0);
  const [day, setDay] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const base = new Date(2026, 5, 1);
  const view = new Date(base.getFullYear(), base.getMonth() + offset, 1);
  const year = view.getFullYear(),
    month = view.getMonth();
  const monthName = view.toLocaleString('en-US', {
    month: 'long'
  });
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayN = 12; // June 12, 2026

  const isAvail = d => {
    if (offset < 0) return false;
    const wd = new Date(year, month, d).getDay();
    const future = offset > 0 || d > todayN;
    return future && wd !== 0 && wd !== 6;
  };
  const pickDay = d => {
    setDay({
      key: `${year}-${month}-${d}`,
      d,
      month,
      year
    });
    setSlot(null);
  };
  const selectedLabel = day && new Date(day.year, day.month, day.d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const navBtn = (dir, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => !disabled && (setOffset(offset + dir), setDay(null), setSlot(null)),
    disabled: disabled,
    style: {
      width: 32,
      height: 32,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      border: '1px solid var(--line)',
      background: 'var(--paper)',
      color: disabled ? 'var(--ink-faint)' : 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ph-caret-${dir < 0 ? 'left' : 'right'}`
  }));
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        border: 'var(--bw) solid var(--line)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        padding: 'var(--space-6)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        background: 'var(--mint-300)',
        border: '1px solid var(--line)',
        borderRadius: 999,
        fontSize: 32,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-bold ph-check-circle"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        margin: '0 0 8px'
      }
    }, "You're booked in!"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--ink-soft)',
        margin: '0 0 18px'
      }
    }, "15-min call with Gitta confirmed for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)'
      }
    }, selectedLabel, " \xB7 ", slot)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        setSent(false);
        setDay(null);
        setSlot(null);
      },
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--ink-soft)',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "Pick another time")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      margin: 0
    }
  }, monthName, " ", year), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, navBtn(-1, offset <= 0), navBtn(1, offset >= 2))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4,
      marginBottom: 4
    }
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-faint)',
      padding: '2px 0'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("span", {
      key: i
    });
    const avail = isAvail(d);
    const selected = day && day.d === d && day.month === month;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      disabled: !avail,
      onClick: () => pickDay(d),
      style: {
        aspectRatio: '1',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        border: selected ? '1.5px solid var(--ink)' : '1px solid ' + (avail ? 'var(--line)' : 'transparent'),
        background: selected ? 'var(--yellow-400)' : avail ? 'var(--paper)' : 'transparent',
        color: avail || selected ? 'var(--ink)' : 'var(--ink-faint)',
        opacity: avail || selected ? 1 : .4,
        cursor: avail ? 'pointer' : 'default',
        boxShadow: avail && !selected ? 'var(--shadow-xs)' : 'none'
      }
    }, d);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      margin: '18px 0 0',
      paddingTop: 18
    }
  }, !day ? /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--ink-soft)',
      fontSize: 14,
      margin: 0,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-hand-pointing"
  }), " Select a day to see open times") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      marginBottom: 10
    }
  }, selectedLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, SLOTS.map(s => {
    const on = slot === s;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      type: "button",
      onClick: () => setSlot(s),
      style: {
        padding: '9px 4px',
        borderRadius: 10,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13.5,
        border: on ? '1.5px solid var(--ink)' : '1px solid var(--line)',
        background: on ? 'var(--yellow-400)' : 'var(--paper)',
        color: 'var(--ink)',
        cursor: 'pointer',
        boxShadow: on ? 'none' : 'var(--shadow-xs)'
      }
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Btn4, {
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: "ph-calendar-check",
    disabled: !day || !slot,
    onClick: () => day && slot && setSent(true)
  }, day && slot ? `Book ${slot}` : 'Book this time')), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '12px 0 0'
    }
  }, "Prefer email? ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hi@hongix.studio",
    style: {
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "hi@hongix.studio"))));
}
function BookCall({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "call",
    ref: refEl,
    className: "hx-section",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-book-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      background: 'var(--grad-sunrise)',
      border: 'var(--bw) solid var(--line)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge4, {
    tone: "ink",
    dot: true
  }, "15-minute discovery call"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '16px 0 0',
      textWrap: 'balance',
      maxWidth: '20ch'
    }
  }, "Not sure where to start? ", /*#__PURE__*/React.createElement("span", {
    className: "hx-serif"
  }, "Let's talk.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--ink-soft)',
      maxWidth: '40ch',
      margin: '14px 0 0'
    }
  }, "Pick a time that works for you and book a quick call with Gitta to see if Hongix is the right fit. No pressure, no pitch, just a real conversation about your design needs."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '22px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Walk through your current goals', 'See how the queue would work for you', 'Get a clear next step'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  })), t)))), /*#__PURE__*/React.createElement(BookingCalendar, null))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--cream)',
      borderTop: 'var(--bw) solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-container",
    style: {
      padding: 'var(--space-9) var(--gutter) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-foot-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 25,
      letterSpacing: '-.04em',
      color: 'var(--cream)',
      lineHeight: 1
    }
  }, "hongi", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 24,
      height: 26,
      margin: '0 -1px',
      overflow: 'visible'
    },
    "aria-label": "x",
    role: "img"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hxSparkFooter",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFA23E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EC5A1A"
  }))), /*#__PURE__*/React.createElement("path", {
    transform: "rotate(45 50 50)",
    d: "M50 13 C55 35 65 45 87 50 C65 55 55 65 50 87 C45 65 35 55 13 50 C35 45 45 35 50 13 Z",
    fill: "url(#hxSparkFooter)",
    stroke: "url(#hxSparkFooter)",
    strokeWidth: "10",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.01em',
      color: 'rgba(255,246,226,.72)',
      whiteSpace: 'nowrap'
    }
  }, "Design Labs")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,246,226,.7)',
      maxWidth: '34ch',
      marginTop: 14
    }
  }, "Your design support to launch, scale, and stand out \u2014 in one subscription."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Btn4, {
    variant: "primary",
    iconRight: "ph-arrow-right",
    onClick: () => onNav('pricing')
  }, "View pricing"))), /*#__PURE__*/React.createElement(FootCol, {
    title: "Hongix",
    links: ['Work', 'How it works', 'Pricing', 'FAQ']
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Connect",
    links: ['Book a call', 'Login', 'hi@hongix.studio', 'Instagram']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,246,226,.16)',
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 13,
      color: 'rgba(255,246,226,.6)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 HONGIX DESIGN LABS"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Terms & conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Privacy policy")))));
}
function FootCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,246,226,.55)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cream)',
      textDecoration: 'none',
      fontSize: 15
    }
  }, l)))));
}
Object.assign(window, {
  Pricing,
  Faq,
  BookCall,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections4.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavPill = __ds_scope.NavPill;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.HongixFAQ = __ds_scope.HongixFAQ;

__ds_ns.HongixFigma = __ds_scope.HongixFigma;

__ds_ns.HongixHero = __ds_scope.HongixHero;

__ds_ns.HongixKanban = __ds_scope.HongixKanban;

__ds_ns.HongixStamp = __ds_scope.HongixStamp;

__ds_ns.HongixStar = __ds_scope.HongixStar;

})();
