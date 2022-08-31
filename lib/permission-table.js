var Hn = Object.defineProperty;
var Un = (e, r, t) =>
  r in e
    ? Hn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[r] = t);
var z = (e, r, t) => (Un(e, typeof r != 'symbol' ? r + '' : r, t), t),
  Xr = (e, r, t) => {
    if (!r.has(e)) throw TypeError('Cannot ' + t);
  };
var I = (e, r, t) => (
    Xr(e, r, 'read from private field'), t ? t.call(e) : r.get(e)
  ),
  he = (e, r, t) => {
    if (r.has(e))
      throw TypeError('Cannot add the same private member more than once');
    r instanceof WeakSet ? r.add(e) : r.set(e, t);
  },
  E = (e, r, t, n) => (
    Xr(e, r, 'write to private field'), n ? n.call(e, t) : r.set(e, t), t
  );
import * as oe from 'react';
import we, {
  createContext as Wn,
  useContext as yr,
  useEffect as te,
  useState as Ce,
  useMemo as J,
  useCallback as xe,
  useRef as Zr,
} from 'react';
import { Checkbox as Gn, Spin as Vn, Empty as zn } from 'antd';
var Pe =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  w = { exports: {} },
  pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function Kn() {
  if (Qr) return pe;
  Qr = 1;
  var e = we,
    r = Symbol.for('react.element'),
    t = Symbol.for('react.fragment'),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, f, v) {
    var d,
      p = {},
      C = null,
      b = null;
    v !== void 0 && (C = '' + v),
      f.key !== void 0 && (C = '' + f.key),
      f.ref !== void 0 && (b = f.ref);
    for (d in f) n.call(f, d) && !o.hasOwnProperty(d) && (p[d] = f[d]);
    if (s && s.defaultProps)
      for (d in ((f = s.defaultProps), f)) p[d] === void 0 && (p[d] = f[d]);
    return {
      $$typeof: r,
      type: s,
      key: C,
      ref: b,
      props: p,
      _owner: i.current,
    };
  }
  return (pe.Fragment = t), (pe.jsx = c), (pe.jsxs = c), pe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Yn() {
  return (
    et ||
      ((et = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var e = we,
            r = Symbol.for('react.element'),
            t = Symbol.for('react.portal'),
            n = Symbol.for('react.fragment'),
            i = Symbol.for('react.strict_mode'),
            o = Symbol.for('react.profiler'),
            c = Symbol.for('react.provider'),
            s = Symbol.for('react.context'),
            f = Symbol.for('react.forward_ref'),
            v = Symbol.for('react.suspense'),
            d = Symbol.for('react.suspense_list'),
            p = Symbol.for('react.memo'),
            C = Symbol.for('react.lazy'),
            b = Symbol.for('react.offscreen'),
            S = Symbol.iterator,
            U = '@@iterator';
          function W(a) {
            if (a === null || typeof a != 'object') return null;
            var l = (S && a[S]) || a[U];
            return typeof l == 'function' ? l : null;
          }
          var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function g(a) {
            {
              for (
                var l = arguments.length,
                  u = new Array(l > 1 ? l - 1 : 0),
                  h = 1;
                h < l;
                h++
              )
                u[h - 1] = arguments[h];
              O('error', a, u);
            }
          }
          function O(a, l, u) {
            {
              var h = F.ReactDebugCurrentFrame,
                _ = h.getStackAddendum();
              _ !== '' && ((l += '%s'), (u = u.concat([_])));
              var x = u.map(function (m) {
                return String(m);
              });
              x.unshift('Warning: ' + l),
                Function.prototype.apply.call(console[a], console, x);
            }
          }
          var M = !1,
            P = !1,
            X = !1,
            ze = !1,
            vn = !1,
            jr;
          jr = Symbol.for('react.module.reference');
          function hn(a) {
            return !!(
              typeof a == 'string' ||
              typeof a == 'function' ||
              a === n ||
              a === o ||
              vn ||
              a === i ||
              a === v ||
              a === d ||
              ze ||
              a === b ||
              M ||
              P ||
              X ||
              (typeof a == 'object' &&
                a !== null &&
                (a.$$typeof === C ||
                  a.$$typeof === p ||
                  a.$$typeof === c ||
                  a.$$typeof === s ||
                  a.$$typeof === f ||
                  a.$$typeof === jr ||
                  a.getModuleId !== void 0))
            );
          }
          function pn(a, l, u) {
            var h = a.displayName;
            if (h) return h;
            var _ = l.displayName || l.name || '';
            return _ !== '' ? u + '(' + _ + ')' : u;
          }
          function Sr(a) {
            return a.displayName || 'Context';
          }
          function K(a) {
            if (a == null) return null;
            if (
              (typeof a.tag == 'number' &&
                g(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              typeof a == 'function')
            )
              return a.displayName || a.name || null;
            if (typeof a == 'string') return a;
            switch (a) {
              case n:
                return 'Fragment';
              case t:
                return 'Portal';
              case o:
                return 'Profiler';
              case i:
                return 'StrictMode';
              case v:
                return 'Suspense';
              case d:
                return 'SuspenseList';
            }
            if (typeof a == 'object')
              switch (a.$$typeof) {
                case s:
                  var l = a;
                  return Sr(l) + '.Consumer';
                case c:
                  var u = a;
                  return Sr(u._context) + '.Provider';
                case f:
                  return pn(a, a.render, 'ForwardRef');
                case p:
                  var h = a.displayName || null;
                  return h !== null ? h : K(a.type) || 'Memo';
                case C: {
                  var _ = a,
                    x = _._payload,
                    m = _._init;
                  try {
                    return K(m(x));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var ee = Object.assign,
            de = 0,
            Er,
            Ar,
            Rr,
            Pr,
            kr,
            Ir,
            Dr;
          function Fr() {}
          Fr.__reactDisabledLog = !0;
          function gn() {
            {
              if (de === 0) {
                (Er = console.log),
                  (Ar = console.info),
                  (Rr = console.warn),
                  (Pr = console.error),
                  (kr = console.group),
                  (Ir = console.groupCollapsed),
                  (Dr = console.groupEnd);
                var a = {
                  configurable: !0,
                  enumerable: !0,
                  value: Fr,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: a,
                  log: a,
                  warn: a,
                  error: a,
                  group: a,
                  groupCollapsed: a,
                  groupEnd: a,
                });
              }
              de++;
            }
          }
          function bn() {
            {
              if ((de--, de === 0)) {
                var a = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: ee({}, a, {
                    value: Er,
                  }),
                  info: ee({}, a, {
                    value: Ar,
                  }),
                  warn: ee({}, a, {
                    value: Rr,
                  }),
                  error: ee({}, a, {
                    value: Pr,
                  }),
                  group: ee({}, a, {
                    value: kr,
                  }),
                  groupCollapsed: ee({}, a, {
                    value: Ir,
                  }),
                  groupEnd: ee({}, a, {
                    value: Dr,
                  }),
                });
              }
              de < 0 &&
                g(
                  'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
                );
            }
          }
          var Ke = F.ReactCurrentDispatcher,
            Ye;
          function je(a, l, u) {
            {
              if (Ye === void 0)
                try {
                  throw Error();
                } catch (_) {
                  var h = _.stack.trim().match(/\n( *(at )?)/);
                  Ye = (h && h[1]) || '';
                }
              return (
                `
` +
                Ye +
                a
              );
            }
          }
          var qe = !1,
            Se;
          {
            var yn = typeof WeakMap == 'function' ? WeakMap : Map;
            Se = new yn();
          }
          function Mr(a, l) {
            if (!a || qe) return '';
            {
              var u = Se.get(a);
              if (u !== void 0) return u;
            }
            var h;
            qe = !0;
            var _ = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var x;
            (x = Ke.current), (Ke.current = null), gn();
            try {
              if (l) {
                var m = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(m.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(m, []);
                  } catch (Y) {
                    h = Y;
                  }
                  Reflect.construct(a, [], m);
                } else {
                  try {
                    m.call();
                  } catch (Y) {
                    h = Y;
                  }
                  a.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Y) {
                  h = Y;
                }
                a();
              }
            } catch (Y) {
              if (Y && h && typeof Y.stack == 'string') {
                for (
                  var y = Y.stack.split(`
`),
                    k = h.stack.split(`
`),
                    $ = y.length - 1,
                    j = k.length - 1;
                  $ >= 1 && j >= 0 && y[$] !== k[j];

                )
                  j--;
                for (; $ >= 1 && j >= 0; $--, j--)
                  if (y[$] !== k[j]) {
                    if ($ !== 1 || j !== 1)
                      do
                        if (($--, j--, j < 0 || y[$] !== k[j])) {
                          var N =
                            `
` + y[$].replace(' at new ', ' at ');
                          return (
                            a.displayName &&
                              N.includes('<anonymous>') &&
                              (N = N.replace('<anonymous>', a.displayName)),
                            typeof a == 'function' && Se.set(a, N),
                            N
                          );
                        }
                      while ($ >= 1 && j >= 0);
                    break;
                  }
              }
            } finally {
              (qe = !1), (Ke.current = x), bn(), (Error.prepareStackTrace = _);
            }
            var ie = a ? a.displayName || a.name : '',
              Jr = ie ? je(ie) : '';
            return typeof a == 'function' && Se.set(a, Jr), Jr;
          }
          function mn(a, l, u) {
            return Mr(a, !1);
          }
          function _n(a) {
            var l = a.prototype;
            return !!(l && l.isReactComponent);
          }
          function Ee(a, l, u) {
            if (a == null) return '';
            if (typeof a == 'function') return Mr(a, _n(a));
            if (typeof a == 'string') return je(a);
            switch (a) {
              case v:
                return je('Suspense');
              case d:
                return je('SuspenseList');
            }
            if (typeof a == 'object')
              switch (a.$$typeof) {
                case f:
                  return mn(a.render);
                case p:
                  return Ee(a.type, l, u);
                case C: {
                  var h = a,
                    _ = h._payload,
                    x = h._init;
                  try {
                    return Ee(x(_), l, u);
                  } catch {}
                }
              }
            return '';
          }
          var Ae = Object.prototype.hasOwnProperty,
            Nr = {},
            Lr = F.ReactDebugCurrentFrame;
          function Re(a) {
            if (a) {
              var l = a._owner,
                u = Ee(a.type, a._source, l ? l.type : null);
              Lr.setExtraStackFrame(u);
            } else Lr.setExtraStackFrame(null);
          }
          function Cn(a, l, u, h, _) {
            {
              var x = Function.call.bind(Ae);
              for (var m in a)
                if (x(a, m)) {
                  var y = void 0;
                  try {
                    if (typeof a[m] != 'function') {
                      var k = Error(
                        (h || 'React class') +
                          ': ' +
                          u +
                          ' type `' +
                          m +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof a[m] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                      );
                      throw ((k.name = 'Invariant Violation'), k);
                    }
                    y = a[m](
                      l,
                      m,
                      h,
                      u,
                      null,
                      'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
                    );
                  } catch ($) {
                    y = $;
                  }
                  y &&
                    !(y instanceof Error) &&
                    (Re(_),
                    g(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      h || 'React class',
                      u,
                      m,
                      typeof y,
                    ),
                    Re(null)),
                    y instanceof Error &&
                      !(y.message in Nr) &&
                      ((Nr[y.message] = !0),
                      Re(_),
                      g('Failed %s type: %s', u, y.message),
                      Re(null));
                }
            }
          }
          var xn = Array.isArray;
          function Je(a) {
            return xn(a);
          }
          function On(a) {
            {
              var l = typeof Symbol == 'function' && Symbol.toStringTag,
                u =
                  (l && a[Symbol.toStringTag]) ||
                  a.constructor.name ||
                  'Object';
              return u;
            }
          }
          function Tn(a) {
            try {
              return Br(a), !1;
            } catch {
              return !0;
            }
          }
          function Br(a) {
            return '' + a;
          }
          function Hr(a) {
            if (Tn(a))
              return (
                g(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  On(a),
                ),
                Br(a)
              );
          }
          var ve = F.ReactCurrentOwner,
            wn = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            Ur,
            Wr,
            Xe;
          Xe = {};
          function $n(a) {
            if (Ae.call(a, 'ref')) {
              var l = Object.getOwnPropertyDescriptor(a, 'ref').get;
              if (l && l.isReactWarning) return !1;
            }
            return a.ref !== void 0;
          }
          function jn(a) {
            if (Ae.call(a, 'key')) {
              var l = Object.getOwnPropertyDescriptor(a, 'key').get;
              if (l && l.isReactWarning) return !1;
            }
            return a.key !== void 0;
          }
          function Sn(a, l) {
            if (
              typeof a.ref == 'string' &&
              ve.current &&
              l &&
              ve.current.stateNode !== l
            ) {
              var u = K(ve.current.type);
              Xe[u] ||
                (g(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  K(ve.current.type),
                  a.ref,
                ),
                (Xe[u] = !0));
            }
          }
          function En(a, l) {
            {
              var u = function () {
                Ur ||
                  ((Ur = !0),
                  g(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    l,
                  ));
              };
              (u.isReactWarning = !0),
                Object.defineProperty(a, 'key', {
                  get: u,
                  configurable: !0,
                });
            }
          }
          function An(a, l) {
            {
              var u = function () {
                Wr ||
                  ((Wr = !0),
                  g(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    l,
                  ));
              };
              (u.isReactWarning = !0),
                Object.defineProperty(a, 'ref', {
                  get: u,
                  configurable: !0,
                });
            }
          }
          var Rn = function (a, l, u, h, _, x, m) {
            var y = {
              $$typeof: r,
              type: a,
              key: l,
              ref: u,
              props: m,
              _owner: x,
            };
            return (
              (y._store = {}),
              Object.defineProperty(y._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(y, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: h,
              }),
              Object.defineProperty(y, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: _,
              }),
              Object.freeze && (Object.freeze(y.props), Object.freeze(y)),
              y
            );
          };
          function Pn(a, l, u, h, _) {
            {
              var x,
                m = {},
                y = null,
                k = null;
              u !== void 0 && (Hr(u), (y = '' + u)),
                jn(l) && (Hr(l.key), (y = '' + l.key)),
                $n(l) && ((k = l.ref), Sn(l, _));
              for (x in l)
                Ae.call(l, x) && !wn.hasOwnProperty(x) && (m[x] = l[x]);
              if (a && a.defaultProps) {
                var $ = a.defaultProps;
                for (x in $) m[x] === void 0 && (m[x] = $[x]);
              }
              if (y || k) {
                var j =
                  typeof a == 'function'
                    ? a.displayName || a.name || 'Unknown'
                    : a;
                y && En(m, j), k && An(m, j);
              }
              return Rn(a, y, k, _, h, ve.current, m);
            }
          }
          var Ze = F.ReactCurrentOwner,
            Gr = F.ReactDebugCurrentFrame;
          function ae(a) {
            if (a) {
              var l = a._owner,
                u = Ee(a.type, a._source, l ? l.type : null);
              Gr.setExtraStackFrame(u);
            } else Gr.setExtraStackFrame(null);
          }
          var Qe;
          Qe = !1;
          function er(a) {
            return typeof a == 'object' && a !== null && a.$$typeof === r;
          }
          function Vr() {
            {
              if (Ze.current) {
                var a = K(Ze.current.type);
                if (a)
                  return (
                    `

Check the render method of \`` +
                    a +
                    '`.'
                  );
              }
              return '';
            }
          }
          function kn(a) {
            {
              if (a !== void 0) {
                var l = a.fileName.replace(/^.*[\\\/]/, ''),
                  u = a.lineNumber;
                return (
                  `

Check your code at ` +
                  l +
                  ':' +
                  u +
                  '.'
                );
              }
              return '';
            }
          }
          var zr = {};
          function In(a) {
            {
              var l = Vr();
              if (!l) {
                var u = typeof a == 'string' ? a : a.displayName || a.name;
                u &&
                  (l =
                    `

Check the top-level render call using <` +
                    u +
                    '>.');
              }
              return l;
            }
          }
          function Kr(a, l) {
            {
              if (!a._store || a._store.validated || a.key != null) return;
              a._store.validated = !0;
              var u = In(l);
              if (zr[u]) return;
              zr[u] = !0;
              var h = '';
              a &&
                a._owner &&
                a._owner !== Ze.current &&
                (h = ' It was passed a child from ' + K(a._owner.type) + '.'),
                ae(a),
                g(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  u,
                  h,
                ),
                ae(null);
            }
          }
          function Yr(a, l) {
            {
              if (typeof a != 'object') return;
              if (Je(a))
                for (var u = 0; u < a.length; u++) {
                  var h = a[u];
                  er(h) && Kr(h, l);
                }
              else if (er(a)) a._store && (a._store.validated = !0);
              else if (a) {
                var _ = W(a);
                if (typeof _ == 'function' && _ !== a.entries)
                  for (var x = _.call(a), m; !(m = x.next()).done; )
                    er(m.value) && Kr(m.value, l);
              }
            }
          }
          function Dn(a) {
            {
              var l = a.type;
              if (l == null || typeof l == 'string') return;
              var u;
              if (typeof l == 'function') u = l.propTypes;
              else if (
                typeof l == 'object' &&
                (l.$$typeof === f || l.$$typeof === p)
              )
                u = l.propTypes;
              else return;
              if (u) {
                var h = K(l);
                Cn(u, a.props, 'prop', h, a);
              } else if (l.PropTypes !== void 0 && !Qe) {
                Qe = !0;
                var _ = K(l);
                g(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  _ || 'Unknown',
                );
              }
              typeof l.getDefaultProps == 'function' &&
                !l.getDefaultProps.isReactClassApproved &&
                g(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                );
            }
          }
          function Fn(a) {
            {
              for (var l = Object.keys(a.props), u = 0; u < l.length; u++) {
                var h = l[u];
                if (h !== 'children' && h !== 'key') {
                  ae(a),
                    g(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      h,
                    ),
                    ae(null);
                  break;
                }
              }
              a.ref !== null &&
                (ae(a),
                g('Invalid attribute `ref` supplied to `React.Fragment`.'),
                ae(null));
            }
          }
          function qr(a, l, u, h, _, x) {
            {
              var m = hn(a);
              if (!m) {
                var y = '';
                (a === void 0 ||
                  (typeof a == 'object' &&
                    a !== null &&
                    Object.keys(a).length === 0)) &&
                  (y +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var k = kn(_);
                k ? (y += k) : (y += Vr());
                var $;
                a === null
                  ? ($ = 'null')
                  : Je(a)
                  ? ($ = 'array')
                  : a !== void 0 && a.$$typeof === r
                  ? (($ = '<' + (K(a.type) || 'Unknown') + ' />'),
                    (y =
                      ' Did you accidentally export a JSX literal instead of a component?'))
                  : ($ = typeof a),
                  g(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    $,
                    y,
                  );
              }
              var j = Pn(a, l, u, _, x);
              if (j == null) return j;
              if (m) {
                var N = l.children;
                if (N !== void 0)
                  if (h)
                    if (Je(N)) {
                      for (var ie = 0; ie < N.length; ie++) Yr(N[ie], a);
                      Object.freeze && Object.freeze(N);
                    } else
                      g(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                      );
                  else Yr(N, a);
              }
              return a === n ? Fn(j) : Dn(j), j;
            }
          }
          function Mn(a, l, u) {
            return qr(a, l, u, !0);
          }
          function Nn(a, l, u) {
            return qr(a, l, u, !1);
          }
          var Ln = Nn,
            Bn = Mn;
          (ge.Fragment = n), (ge.jsx = Ln), (ge.jsxs = Bn);
        })()),
    ge
  );
}
(function (e) {
  process.env.NODE_ENV === 'production'
    ? (e.exports = Kn())
    : (e.exports = Yn());
})(w);
function qn() {
  (this.__data__ = []), (this.size = 0);
}
var Jn = qn;
function Xn(e, r) {
  return e === r || (e !== e && r !== r);
}
var Ne = Xn,
  Zn = Ne;
function Qn(e, r) {
  for (var t = e.length; t--; ) if (Zn(e[t][0], r)) return t;
  return -1;
}
var Le = Qn,
  ea = Le,
  ra = Array.prototype,
  ta = ra.splice;
function na(e) {
  var r = this.__data__,
    t = ea(r, e);
  if (t < 0) return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : ta.call(r, t, 1), --this.size, !0;
}
var aa = na,
  ia = Le;
function oa(e) {
  var r = this.__data__,
    t = ia(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var sa = oa,
  ca = Le;
function la(e) {
  return ca(this.__data__, e) > -1;
}
var fa = la,
  ua = Le;
function da(e, r) {
  var t = this.__data__,
    n = ua(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
}
var va = da,
  ha = Jn,
  pa = aa,
  ga = sa,
  ba = fa,
  ya = va;
function se(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
se.prototype.clear = ha;
se.prototype.delete = pa;
se.prototype.get = ga;
se.prototype.has = ba;
se.prototype.set = ya;
var Be = se,
  ma = Be;
function _a() {
  (this.__data__ = new ma()), (this.size = 0);
}
var Ca = _a;
function xa(e) {
  var r = this.__data__,
    t = r.delete(e);
  return (this.size = r.size), t;
}
var Oa = xa;
function Ta(e) {
  return this.__data__.get(e);
}
var wa = Ta;
function $a(e) {
  return this.__data__.has(e);
}
var ja = $a,
  Sa = typeof Pe == 'object' && Pe && Pe.Object === Object && Pe,
  kt = Sa,
  Ea = kt,
  Aa = typeof self == 'object' && self && self.Object === Object && self,
  Ra = Ea || Aa || Function('return this')(),
  ce = Ra,
  Pa = ce,
  ka = Pa.Symbol,
  It = ka,
  rt = It,
  Dt = Object.prototype,
  Ia = Dt.hasOwnProperty,
  Da = Dt.toString,
  be = rt ? rt.toStringTag : void 0;
function Fa(e) {
  var r = Ia.call(e, be),
    t = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {}
  var i = Da.call(e);
  return n && (r ? (e[be] = t) : delete e[be]), i;
}
var Ma = Fa,
  Na = Object.prototype,
  La = Na.toString;
function Ba(e) {
  return La.call(e);
}
var Ha = Ba,
  tt = It,
  Ua = Ma,
  Wa = Ha,
  Ga = '[object Null]',
  Va = '[object Undefined]',
  nt = tt ? tt.toStringTag : void 0;
function za(e) {
  return e == null
    ? e === void 0
      ? Va
      : Ga
    : nt && nt in Object(e)
    ? Ua(e)
    : Wa(e);
}
var He = za;
function Ka(e) {
  var r = typeof e;
  return e != null && (r == 'object' || r == 'function');
}
var ne = Ka,
  Ya = He,
  qa = ne,
  Ja = '[object AsyncFunction]',
  Xa = '[object Function]',
  Za = '[object GeneratorFunction]',
  Qa = '[object Proxy]';
function ei(e) {
  if (!qa(e)) return !1;
  var r = Ya(e);
  return r == Xa || r == Za || r == Ja || r == Qa;
}
var mr = ei,
  ri = ce,
  ti = ri['__core-js_shared__'],
  ni = ti,
  rr = ni,
  at = (function () {
    var e = /[^.]+$/.exec((rr && rr.keys && rr.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function ai(e) {
  return !!at && at in e;
}
var ii = ai,
  oi = Function.prototype,
  si = oi.toString;
function ci(e) {
  if (e != null) {
    try {
      return si.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var li = ci,
  fi = mr,
  ui = ii,
  di = ne,
  vi = li,
  hi = /[\\^$.*+?()[\]{}|]/g,
  pi = /^\[object .+?Constructor\]$/,
  gi = Function.prototype,
  bi = Object.prototype,
  yi = gi.toString,
  mi = bi.hasOwnProperty,
  _i = RegExp(
    '^' +
      yi
        .call(mi)
        .replace(hi, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
function Ci(e) {
  if (!di(e) || ui(e)) return !1;
  var r = fi(e) ? _i : pi;
  return r.test(vi(e));
}
var xi = Ci;
function Oi(e, r) {
  return e == null ? void 0 : e[r];
}
var Ti = Oi,
  wi = xi,
  $i = Ti;
function ji(e, r) {
  var t = $i(e, r);
  return wi(t) ? t : void 0;
}
var _r = ji,
  Si = _r,
  Ei = ce,
  Ai = Si(Ei, 'Map'),
  Ft = Ai,
  Ri = _r,
  Pi = Ri(Object, 'create'),
  Ue = Pi,
  it = Ue;
function ki() {
  (this.__data__ = it ? it(null) : {}), (this.size = 0);
}
var Ii = ki;
function Di(e) {
  var r = this.has(e) && delete this.__data__[e];
  return (this.size -= r ? 1 : 0), r;
}
var Fi = Di,
  Mi = Ue,
  Ni = '__lodash_hash_undefined__',
  Li = Object.prototype,
  Bi = Li.hasOwnProperty;
function Hi(e) {
  var r = this.__data__;
  if (Mi) {
    var t = r[e];
    return t === Ni ? void 0 : t;
  }
  return Bi.call(r, e) ? r[e] : void 0;
}
var Ui = Hi,
  Wi = Ue,
  Gi = Object.prototype,
  Vi = Gi.hasOwnProperty;
function zi(e) {
  var r = this.__data__;
  return Wi ? r[e] !== void 0 : Vi.call(r, e);
}
var Ki = zi,
  Yi = Ue,
  qi = '__lodash_hash_undefined__';
function Ji(e, r) {
  var t = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (t[e] = Yi && r === void 0 ? qi : r),
    this
  );
}
var Xi = Ji,
  Zi = Ii,
  Qi = Fi,
  eo = Ui,
  ro = Ki,
  to = Xi;
function le(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = Zi;
le.prototype.delete = Qi;
le.prototype.get = eo;
le.prototype.has = ro;
le.prototype.set = to;
var no = le,
  ot = no,
  ao = Be,
  io = Ft;
function oo() {
  (this.size = 0),
    (this.__data__ = {
      hash: new ot(),
      map: new (io || ao)(),
      string: new ot(),
    });
}
var so = oo;
function co(e) {
  var r = typeof e;
  return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var lo = co,
  fo = lo;
function uo(e, r) {
  var t = e.__data__;
  return fo(r) ? t[typeof r == 'string' ? 'string' : 'hash'] : t.map;
}
var We = uo,
  vo = We;
function ho(e) {
  var r = vo(this, e).delete(e);
  return (this.size -= r ? 1 : 0), r;
}
var po = ho,
  go = We;
function bo(e) {
  return go(this, e).get(e);
}
var yo = bo,
  mo = We;
function _o(e) {
  return mo(this, e).has(e);
}
var Co = _o,
  xo = We;
function Oo(e, r) {
  var t = xo(this, e),
    n = t.size;
  return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
}
var To = Oo,
  wo = so,
  $o = po,
  jo = yo,
  So = Co,
  Eo = To;
function fe(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = wo;
fe.prototype.delete = $o;
fe.prototype.get = jo;
fe.prototype.has = So;
fe.prototype.set = Eo;
var Ao = fe,
  Ro = Be,
  Po = Ft,
  ko = Ao,
  Io = 200;
function Do(e, r) {
  var t = this.__data__;
  if (t instanceof Ro) {
    var n = t.__data__;
    if (!Po || n.length < Io - 1)
      return n.push([e, r]), (this.size = ++t.size), this;
    t = this.__data__ = new ko(n);
  }
  return t.set(e, r), (this.size = t.size), this;
}
var Fo = Do,
  Mo = Be,
  No = Ca,
  Lo = Oa,
  Bo = wa,
  Ho = ja,
  Uo = Fo;
function ue(e) {
  var r = (this.__data__ = new Mo(e));
  this.size = r.size;
}
ue.prototype.clear = No;
ue.prototype.delete = Lo;
ue.prototype.get = Bo;
ue.prototype.has = Ho;
ue.prototype.set = Uo;
var Wo = ue,
  Go = _r,
  Vo = (function () {
    try {
      var e = Go(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  Mt = Vo,
  st = Mt;
function zo(e, r, t) {
  r == '__proto__' && st
    ? st(e, r, {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      })
    : (e[r] = t);
}
var Cr = zo,
  Ko = Cr,
  Yo = Ne;
function qo(e, r, t) {
  ((t !== void 0 && !Yo(e[r], t)) || (t === void 0 && !(r in e))) &&
    Ko(e, r, t);
}
var Nt = qo;
function Jo(e) {
  return function (r, t, n) {
    for (var i = -1, o = Object(r), c = n(r), s = c.length; s--; ) {
      var f = c[e ? s : ++i];
      if (t(o[f], f, o) === !1) break;
    }
    return r;
  };
}
var Xo = Jo,
  Zo = Xo,
  Qo = Zo(),
  es = Qo,
  ur = { exports: {} };
(function (e, r) {
  var t = ce,
    n = r && !r.nodeType && r,
    i = n && !0 && e && !e.nodeType && e,
    o = i && i.exports === n,
    c = o ? t.Buffer : void 0,
    s = c ? c.allocUnsafe : void 0;
  function f(v, d) {
    if (d) return v.slice();
    var p = v.length,
      C = s ? s(p) : new v.constructor(p);
    return v.copy(C), C;
  }
  e.exports = f;
})(ur, ur.exports);
var rs = ce,
  ts = rs.Uint8Array,
  ns = ts,
  ct = ns;
function as(e) {
  var r = new e.constructor(e.byteLength);
  return new ct(r).set(new ct(e)), r;
}
var is = as,
  os = is;
function ss(e, r) {
  var t = r ? os(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var cs = ss;
function ls(e, r) {
  var t = -1,
    n = e.length;
  for (r || (r = Array(n)); ++t < n; ) r[t] = e[t];
  return r;
}
var fs = ls,
  us = ne,
  lt = Object.create,
  ds = (function () {
    function e() {}
    return function (r) {
      if (!us(r)) return {};
      if (lt) return lt(r);
      e.prototype = r;
      var t = new e();
      return (e.prototype = void 0), t;
    };
  })(),
  vs = ds;
function hs(e, r) {
  return function (t) {
    return e(r(t));
  };
}
var ps = hs,
  gs = ps,
  bs = gs(Object.getPrototypeOf, Object),
  Lt = bs,
  ys = Object.prototype;
function ms(e) {
  var r = e && e.constructor,
    t = (typeof r == 'function' && r.prototype) || ys;
  return e === t;
}
var Bt = ms,
  _s = vs,
  Cs = Lt,
  xs = Bt;
function Os(e) {
  return typeof e.constructor == 'function' && !xs(e) ? _s(Cs(e)) : {};
}
var Ts = Os;
function ws(e) {
  return e != null && typeof e == 'object';
}
var $e = ws,
  $s = He,
  js = $e,
  Ss = '[object Arguments]';
function Es(e) {
  return js(e) && $s(e) == Ss;
}
var As = Es,
  ft = As,
  Rs = $e,
  Ht = Object.prototype,
  Ps = Ht.hasOwnProperty,
  ks = Ht.propertyIsEnumerable,
  Is = ft(
    (function () {
      return arguments;
    })(),
  )
    ? ft
    : function (e) {
        return Rs(e) && Ps.call(e, 'callee') && !ks.call(e, 'callee');
      },
  Ut = Is,
  Ds = Array.isArray,
  Wt = Ds,
  Fs = 9007199254740991;
function Ms(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fs;
}
var Gt = Ms,
  Ns = mr,
  Ls = Gt;
function Bs(e) {
  return e != null && Ls(e.length) && !Ns(e);
}
var xr = Bs,
  Hs = xr,
  Us = $e;
function Ws(e) {
  return Us(e) && Hs(e);
}
var Gs = Ws,
  Fe = { exports: {} };
function Vs() {
  return !1;
}
var zs = Vs;
(function (e, r) {
  var t = ce,
    n = zs,
    i = r && !r.nodeType && r,
    o = i && !0 && e && !e.nodeType && e,
    c = o && o.exports === i,
    s = c ? t.Buffer : void 0,
    f = s ? s.isBuffer : void 0,
    v = f || n;
  e.exports = v;
})(Fe, Fe.exports);
var Ks = He,
  Ys = Lt,
  qs = $e,
  Js = '[object Object]',
  Xs = Function.prototype,
  Zs = Object.prototype,
  Vt = Xs.toString,
  Qs = Zs.hasOwnProperty,
  ec = Vt.call(Object);
function rc(e) {
  if (!qs(e) || Ks(e) != Js) return !1;
  var r = Ys(e);
  if (r === null) return !0;
  var t = Qs.call(r, 'constructor') && r.constructor;
  return typeof t == 'function' && t instanceof t && Vt.call(t) == ec;
}
var tc = rc,
  nc = He,
  ac = Gt,
  ic = $e,
  oc = '[object Arguments]',
  sc = '[object Array]',
  cc = '[object Boolean]',
  lc = '[object Date]',
  fc = '[object Error]',
  uc = '[object Function]',
  dc = '[object Map]',
  vc = '[object Number]',
  hc = '[object Object]',
  pc = '[object RegExp]',
  gc = '[object Set]',
  bc = '[object String]',
  yc = '[object WeakMap]',
  mc = '[object ArrayBuffer]',
  _c = '[object DataView]',
  Cc = '[object Float32Array]',
  xc = '[object Float64Array]',
  Oc = '[object Int8Array]',
  Tc = '[object Int16Array]',
  wc = '[object Int32Array]',
  $c = '[object Uint8Array]',
  jc = '[object Uint8ClampedArray]',
  Sc = '[object Uint16Array]',
  Ec = '[object Uint32Array]',
  T = {};
T[Cc] = T[xc] = T[Oc] = T[Tc] = T[wc] = T[$c] = T[jc] = T[Sc] = T[Ec] = !0;
T[oc] =
  T[sc] =
  T[mc] =
  T[cc] =
  T[_c] =
  T[lc] =
  T[fc] =
  T[uc] =
  T[dc] =
  T[vc] =
  T[hc] =
  T[pc] =
  T[gc] =
  T[bc] =
  T[yc] =
    !1;
function Ac(e) {
  return ic(e) && ac(e.length) && !!T[nc(e)];
}
var Rc = Ac;
function Pc(e) {
  return function (r) {
    return e(r);
  };
}
var kc = Pc,
  dr = { exports: {} };
(function (e, r) {
  var t = kt,
    n = r && !r.nodeType && r,
    i = n && !0 && e && !e.nodeType && e,
    o = i && i.exports === n,
    c = o && t.process,
    s = (function () {
      try {
        var f = i && i.require && i.require('util').types;
        return f || (c && c.binding && c.binding('util'));
      } catch {}
    })();
  e.exports = s;
})(dr, dr.exports);
var Ic = Rc,
  Dc = kc,
  ut = dr.exports,
  dt = ut && ut.isTypedArray,
  Fc = dt ? Dc(dt) : Ic,
  zt = Fc;
function Mc(e, r) {
  if (!(r === 'constructor' && typeof e[r] == 'function') && r != '__proto__')
    return e[r];
}
var Kt = Mc,
  Nc = Cr,
  Lc = Ne,
  Bc = Object.prototype,
  Hc = Bc.hasOwnProperty;
function Uc(e, r, t) {
  var n = e[r];
  (!(Hc.call(e, r) && Lc(n, t)) || (t === void 0 && !(r in e))) && Nc(e, r, t);
}
var Wc = Uc,
  Gc = Wc,
  Vc = Cr;
function zc(e, r, t, n) {
  var i = !t;
  t || (t = {});
  for (var o = -1, c = r.length; ++o < c; ) {
    var s = r[o],
      f = n ? n(t[s], e[s], s, t, e) : void 0;
    f === void 0 && (f = e[s]), i ? Vc(t, s, f) : Gc(t, s, f);
  }
  return t;
}
var Kc = zc;
function Yc(e, r) {
  for (var t = -1, n = Array(e); ++t < e; ) n[t] = r(t);
  return n;
}
var qc = Yc,
  Jc = 9007199254740991,
  Xc = /^(?:0|[1-9]\d*)$/;
function Zc(e, r) {
  var t = typeof e;
  return (
    (r = r == null ? Jc : r),
    !!r &&
      (t == 'number' || (t != 'symbol' && Xc.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < r
  );
}
var Yt = Zc,
  Qc = qc,
  el = Ut,
  rl = Wt,
  tl = Fe.exports,
  nl = Yt,
  al = zt,
  il = Object.prototype,
  ol = il.hasOwnProperty;
function sl(e, r) {
  var t = rl(e),
    n = !t && el(e),
    i = !t && !n && tl(e),
    o = !t && !n && !i && al(e),
    c = t || n || i || o,
    s = c ? Qc(e.length, String) : [],
    f = s.length;
  for (var v in e)
    (r || ol.call(e, v)) &&
      !(
        c &&
        (v == 'length' ||
          (i && (v == 'offset' || v == 'parent')) ||
          (o && (v == 'buffer' || v == 'byteLength' || v == 'byteOffset')) ||
          nl(v, f))
      ) &&
      s.push(v);
  return s;
}
var cl = sl;
function ll(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var fl = ll,
  ul = ne,
  dl = Bt,
  vl = fl,
  hl = Object.prototype,
  pl = hl.hasOwnProperty;
function gl(e) {
  if (!ul(e)) return vl(e);
  var r = dl(e),
    t = [];
  for (var n in e) (n == 'constructor' && (r || !pl.call(e, n))) || t.push(n);
  return t;
}
var bl = gl,
  yl = cl,
  ml = bl,
  _l = xr;
function Cl(e) {
  return _l(e) ? yl(e, !0) : ml(e);
}
var qt = Cl,
  xl = Kc,
  Ol = qt;
function Tl(e) {
  return xl(e, Ol(e));
}
var wl = Tl,
  vt = Nt,
  $l = ur.exports,
  jl = cs,
  Sl = fs,
  El = Ts,
  ht = Ut,
  pt = Wt,
  Al = Gs,
  Rl = Fe.exports,
  Pl = mr,
  kl = ne,
  Il = tc,
  Dl = zt,
  gt = Kt,
  Fl = wl;
function Ml(e, r, t, n, i, o, c) {
  var s = gt(e, t),
    f = gt(r, t),
    v = c.get(f);
  if (v) {
    vt(e, t, v);
    return;
  }
  var d = o ? o(s, f, t + '', e, r, c) : void 0,
    p = d === void 0;
  if (p) {
    var C = pt(f),
      b = !C && Rl(f),
      S = !C && !b && Dl(f);
    (d = f),
      C || b || S
        ? pt(s)
          ? (d = s)
          : Al(s)
          ? (d = Sl(s))
          : b
          ? ((p = !1), (d = $l(f, !0)))
          : S
          ? ((p = !1), (d = jl(f, !0)))
          : (d = [])
        : Il(f) || ht(f)
        ? ((d = s), ht(s) ? (d = Fl(s)) : (!kl(s) || Pl(s)) && (d = El(f)))
        : (p = !1);
  }
  p && (c.set(f, d), i(d, f, n, o, c), c.delete(f)), vt(e, t, d);
}
var Nl = Ml,
  Ll = Wo,
  Bl = Nt,
  Hl = es,
  Ul = Nl,
  Wl = ne,
  Gl = qt,
  Vl = Kt;
function Jt(e, r, t, n, i) {
  e !== r &&
    Hl(
      r,
      function (o, c) {
        if ((i || (i = new Ll()), Wl(o))) Ul(e, r, c, t, Jt, n, i);
        else {
          var s = n ? n(Vl(e, c), o, c + '', e, r, i) : void 0;
          s === void 0 && (s = o), Bl(e, c, s);
        }
      },
      Gl,
    );
}
var zl = Jt;
function Kl(e) {
  return e;
}
var Xt = Kl;
function Yl(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var ql = Yl,
  Jl = ql,
  bt = Math.max;
function Xl(e, r, t) {
  return (
    (r = bt(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var n = arguments, i = -1, o = bt(n.length - r, 0), c = Array(o);
        ++i < o;

      )
        c[i] = n[r + i];
      i = -1;
      for (var s = Array(r + 1); ++i < r; ) s[i] = n[i];
      return (s[r] = t(c)), Jl(e, this, s);
    }
  );
}
var Zl = Xl;
function Ql(e) {
  return function () {
    return e;
  };
}
var ef = Ql,
  rf = ef,
  yt = Mt,
  tf = Xt,
  nf = yt
    ? function (e, r) {
        return yt(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: rf(r),
          writable: !0,
        });
      }
    : tf,
  af = nf,
  of = 800,
  sf = 16,
  cf = Date.now;
function lf(e) {
  var r = 0,
    t = 0;
  return function () {
    var n = cf(),
      i = sf - (n - t);
    if (((t = n), i > 0)) {
      if (++r >= of) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
var ff = lf,
  uf = af,
  df = ff,
  vf = df(uf),
  hf = vf,
  pf = Xt,
  gf = Zl,
  bf = hf;
function yf(e, r) {
  return bf(gf(e, r, pf), e + '');
}
var mf = yf,
  _f = Ne,
  Cf = xr,
  xf = Yt,
  Of = ne;
function Tf(e, r, t) {
  if (!Of(t)) return !1;
  var n = typeof r;
  return (n == 'number' ? Cf(t) && xf(r, t.length) : n == 'string' && r in t)
    ? _f(t[r], e)
    : !1;
}
var wf = Tf,
  $f = mf,
  jf = wf;
function Sf(e) {
  return $f(function (r, t) {
    var n = -1,
      i = t.length,
      o = i > 1 ? t[i - 1] : void 0,
      c = i > 2 ? t[2] : void 0;
    for (
      o = e.length > 3 && typeof o == 'function' ? (i--, o) : void 0,
        c && jf(t[0], t[1], c) && ((o = i < 3 ? void 0 : o), (i = 1)),
        r = Object(r);
      ++n < i;

    ) {
      var s = t[n];
      s && e(r, s, n, o);
    }
    return r;
  });
}
var Ef = Sf,
  Af = zl,
  Rf = Ef,
  Pf = Rf(function (e, r, t) {
    Af(e, r, t);
  }),
  tr = Pf;
function Zt(e = [], r, t = 'childList', n, i) {
  const o = n == null ? 0 : i + 1;
  e.forEach((c) => {
    const s = c[t];
    r(c, n, o), s && Zt(s, r, t, c, o);
  });
}
function Oe(e, ...r) {
  return e && e(...r);
}
let nr;
function kf(e, r = 'normal 14px Robot') {
  nr = nr || document.createElement('canvas');
  const t = nr.getContext('2d');
  return t == null ? 0 : (r && (t.font = r), t.measureText(e).width);
}
const Or = we.createContext({}),
  If = Or.Provider;
var Qt = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function (e) {
  (function () {
    var r = {}.hasOwnProperty;
    function t() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (!!o) {
          var c = typeof o;
          if (c === 'string' || c === 'number') n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = t.apply(null, o);
              s && n.push(s);
            }
          } else if (c === 'object')
            if (o.toString === Object.prototype.toString)
              for (var f in o) r.call(o, f) && o[f] && n.push(f);
            else n.push(o.toString());
        }
      }
      return n.join(' ');
    }
    e.exports ? ((t.default = t), (e.exports = t)) : (window.classNames = t);
  })();
})(Qt);
const B = Qt.exports,
  Df = '40px',
  Ff = '_permissionContainer_1g7io_1',
  Mf = '_flexAuto_1g7io_13',
  Nf = '_flex_1g7io_13',
  Lf = '_tableHeaderbox_1g7io_27',
  Bf = '_tableItem_1g7io_33',
  Hf = '_tableBody_1g7io_81',
  Uf = '_firstCol_1g7io_98',
  Wf = '_lastCol_1g7io_113',
  Gf = '_centerColWrap_1g7io_121',
  Vf = '_centerCol_1g7io_121',
  zf = '_authCol_1g7io_141',
  Kf = '_row_1g7io_155',
  Yf = '_borderTop_1g7io_164',
  qf = '_minCol_1g7io_173',
  R = {
    rowHeight: Df,
    permissionContainer: Ff,
    flexAuto: Mf,
    flex: Nf,
    'flex-col': '_flex-col_1g7io_22',
    tableHeaderbox: Lf,
    tableItem: Bf,
    tableBody: Hf,
    firstCol: Uf,
    lastCol: Wf,
    centerColWrap: Gf,
    centerCol: Vf,
    authCol: zf,
    row: Kf,
    borderTop: Yf,
    minCol: qf,
  },
  Jf = [
    {
      title: '\u4E00\u7EA7\u83DC\u5355',
    },
    {
      title: '\u4E8C\u7EA7\u83DC\u5355',
    },
    {
      title: '\u6A21\u5757\u6743\u9650',
    },
    {
      title: '\u5177\u4F53\u6743\u9650',
    },
  ],
  Xf = (e) => {
    const { columns: r } = e;
    return w.exports.jsx(
      'div',
      Object.assign(
        { className: R.tableHeaderbox },
        {
          children: r.map((t, n) =>
            w.exports.jsx(
              'div',
              Object.assign(
                {
                  className: B(R.tableItem, {
                    [R.flexAuto]: n === r.length - 1,
                  }),
                },
                { children: t.title },
              ),
              n,
            ),
          ),
        },
      ),
    );
  };
var Zf = /* @__PURE__ */ Wn({});
const en = Zf;
function vr(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function mt(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function V(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? mt(Object(t), !0).forEach(function (n) {
          vr(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : mt(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function Qf(e) {
  if (Array.isArray(e)) return e;
}
function eu(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      i = !0,
      o = !1,
      c,
      s;
    try {
      for (
        t = t.call(e);
        !(i = (c = t.next()).done) && (n.push(c.value), !(r && n.length === r));
        i = !0
      );
    } catch (f) {
      (o = !0), (s = f);
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function _t(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ru(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _t(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _t(e, r);
  }
}
function tu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rn(e, r) {
  return Qf(e) || eu(e, r) || ru(e, r) || tu();
}
function nu(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function tn(e, r) {
  if (e == null) return {};
  var t = nu(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Me(e) {
  return (
    (Me =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    Me(e)
  );
}
function H(e, r) {
  au(e) && (e = '100%');
  var t = iu(e);
  return (
    (e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e)))),
    t && (e = parseInt(String(e * r), 10) / 100),
    Math.abs(e - r) < 1e-6
      ? 1
      : (r === 360
          ? (e = (e < 0 ? (e % r) + r : e % r) / parseFloat(String(r)))
          : (e = (e % r) / parseFloat(String(r))),
        e)
  );
}
function au(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function iu(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function ou(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ke(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function ar(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function su(e, r, t) {
  return {
    r: H(e, 255) * 255,
    g: H(r, 255) * 255,
    b: H(t, 255) * 255,
  };
}
function ir(e, r, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? e + (r - e) * (6 * t)
      : t < 1 / 2
      ? r
      : t < 2 / 3
      ? e + (r - e) * (2 / 3 - t) * 6
      : e
  );
}
function cu(e, r, t) {
  var n, i, o;
  if (((e = H(e, 360)), (r = H(r, 100)), (t = H(t, 100)), r === 0))
    (i = t), (o = t), (n = t);
  else {
    var c = t < 0.5 ? t * (1 + r) : t + r - t * r,
      s = 2 * t - c;
    (n = ir(s, c, e + 1 / 3)), (i = ir(s, c, e)), (o = ir(s, c, e - 1 / 3));
  }
  return { r: n * 255, g: i * 255, b: o * 255 };
}
function lu(e, r, t) {
  (e = H(e, 255)), (r = H(r, 255)), (t = H(t, 255));
  var n = Math.max(e, r, t),
    i = Math.min(e, r, t),
    o = 0,
    c = n,
    s = n - i,
    f = n === 0 ? 0 : s / n;
  if (n === i) o = 0;
  else {
    switch (n) {
      case e:
        o = (r - t) / s + (r < t ? 6 : 0);
        break;
      case r:
        o = (t - e) / s + 2;
        break;
      case t:
        o = (e - r) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: f, v: c };
}
function fu(e, r, t) {
  (e = H(e, 360) * 6), (r = H(r, 100)), (t = H(t, 100));
  var n = Math.floor(e),
    i = e - n,
    o = t * (1 - r),
    c = t * (1 - i * r),
    s = t * (1 - (1 - i) * r),
    f = n % 6,
    v = [t, c, o, o, s, t][f],
    d = [s, t, t, c, o, o][f],
    p = [o, o, s, t, t, c][f];
  return { r: v * 255, g: d * 255, b: p * 255 };
}
function uu(e, r, t, n) {
  var i = [
    ar(Math.round(e).toString(16)),
    ar(Math.round(r).toString(16)),
    ar(Math.round(t).toString(16)),
  ];
  return n &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('');
}
function Ct(e) {
  return D(e) / 255;
}
function D(e) {
  return parseInt(e, 16);
}
var xt = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function ye(e) {
  var r = { r: 0, g: 0, b: 0 },
    t = 1,
    n = null,
    i = null,
    o = null,
    c = !1,
    s = !1;
  return (
    typeof e == 'string' && (e = hu(e)),
    typeof e == 'object' &&
      (q(e.r) && q(e.g) && q(e.b)
        ? ((r = su(e.r, e.g, e.b)),
          (c = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : q(e.h) && q(e.s) && q(e.v)
        ? ((n = ke(e.s)),
          (i = ke(e.v)),
          (r = fu(e.h, n, i)),
          (c = !0),
          (s = 'hsv'))
        : q(e.h) &&
          q(e.s) &&
          q(e.l) &&
          ((n = ke(e.s)),
          (o = ke(e.l)),
          (r = cu(e.h, n, o)),
          (c = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (t = e.a)),
    (t = ou(t)),
    {
      ok: c,
      format: e.format || s,
      r: Math.min(255, Math.max(r.r, 0)),
      g: Math.min(255, Math.max(r.g, 0)),
      b: Math.min(255, Math.max(r.b, 0)),
      a: t,
    }
  );
}
var du = '[-\\+]?\\d+%?',
  vu = '[-\\+]?\\d*\\.\\d+%?',
  Q = '(?:'.concat(vu, ')|(?:').concat(du, ')'),
  or = '[\\s|\\(]+('
    .concat(Q, ')[,|\\s]+(')
    .concat(Q, ')[,|\\s]+(')
    .concat(Q, ')\\s*\\)?'),
  sr = '[\\s|\\(]+('
    .concat(Q, ')[,|\\s]+(')
    .concat(Q, ')[,|\\s]+(')
    .concat(Q, ')[,|\\s]+(')
    .concat(Q, ')\\s*\\)?'),
  G = {
    CSS_UNIT: new RegExp(Q),
    rgb: new RegExp('rgb' + or),
    rgba: new RegExp('rgba' + sr),
    hsl: new RegExp('hsl' + or),
    hsla: new RegExp('hsla' + sr),
    hsv: new RegExp('hsv' + or),
    hsva: new RegExp('hsva' + sr),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function hu(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var r = !1;
  if (xt[e]) (e = xt[e]), (r = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var t = G.rgb.exec(e);
  return t
    ? { r: t[1], g: t[2], b: t[3] }
    : ((t = G.rgba.exec(e)),
      t
        ? { r: t[1], g: t[2], b: t[3], a: t[4] }
        : ((t = G.hsl.exec(e)),
          t
            ? { h: t[1], s: t[2], l: t[3] }
            : ((t = G.hsla.exec(e)),
              t
                ? { h: t[1], s: t[2], l: t[3], a: t[4] }
                : ((t = G.hsv.exec(e)),
                  t
                    ? { h: t[1], s: t[2], v: t[3] }
                    : ((t = G.hsva.exec(e)),
                      t
                        ? { h: t[1], s: t[2], v: t[3], a: t[4] }
                        : ((t = G.hex8.exec(e)),
                          t
                            ? {
                                r: D(t[1]),
                                g: D(t[2]),
                                b: D(t[3]),
                                a: Ct(t[4]),
                                format: r ? 'name' : 'hex8',
                              }
                            : ((t = G.hex6.exec(e)),
                              t
                                ? {
                                    r: D(t[1]),
                                    g: D(t[2]),
                                    b: D(t[3]),
                                    format: r ? 'name' : 'hex',
                                  }
                                : ((t = G.hex4.exec(e)),
                                  t
                                    ? {
                                        r: D(t[1] + t[1]),
                                        g: D(t[2] + t[2]),
                                        b: D(t[3] + t[3]),
                                        a: Ct(t[4] + t[4]),
                                        format: r ? 'name' : 'hex8',
                                      }
                                    : ((t = G.hex3.exec(e)),
                                      t
                                        ? {
                                            r: D(t[1] + t[1]),
                                            g: D(t[2] + t[2]),
                                            b: D(t[3] + t[3]),
                                            format: r ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function q(e) {
  return Boolean(G.CSS_UNIT.exec(String(e)));
}
var Ie = 2,
  Ot = 0.16,
  pu = 0.05,
  gu = 0.05,
  bu = 0.15,
  nn = 5,
  an = 4,
  yu = [
    {
      index: 7,
      opacity: 0.15,
    },
    {
      index: 6,
      opacity: 0.25,
    },
    {
      index: 5,
      opacity: 0.3,
    },
    {
      index: 5,
      opacity: 0.45,
    },
    {
      index: 5,
      opacity: 0.65,
    },
    {
      index: 5,
      opacity: 0.85,
    },
    {
      index: 4,
      opacity: 0.9,
    },
    {
      index: 3,
      opacity: 0.95,
    },
    {
      index: 2,
      opacity: 0.97,
    },
    {
      index: 1,
      opacity: 0.98,
    },
  ];
function Tt(e) {
  var r = e.r,
    t = e.g,
    n = e.b,
    i = lu(r, t, n);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v,
  };
}
function De(e) {
  var r = e.r,
    t = e.g,
    n = e.b;
  return '#'.concat(uu(r, t, n, !1));
}
function mu(e, r, t) {
  var n = t / 100,
    i = {
      r: (r.r - e.r) * n + e.r,
      g: (r.g - e.g) * n + e.g,
      b: (r.b - e.b) * n + e.b,
    };
  return i;
}
function wt(e, r, t) {
  var n;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (n = t ? Math.round(e.h) - Ie * r : Math.round(e.h) + Ie * r)
      : (n = t ? Math.round(e.h) + Ie * r : Math.round(e.h) - Ie * r),
    n < 0 ? (n += 360) : n >= 360 && (n -= 360),
    n
  );
}
function $t(e, r, t) {
  if (e.h === 0 && e.s === 0) return e.s;
  var n;
  return (
    t ? (n = e.s - Ot * r) : r === an ? (n = e.s + Ot) : (n = e.s + pu * r),
    n > 1 && (n = 1),
    t && r === nn && n > 0.1 && (n = 0.1),
    n < 0.06 && (n = 0.06),
    Number(n.toFixed(2))
  );
}
function jt(e, r, t) {
  var n;
  return (
    t ? (n = e.v + gu * r) : (n = e.v - bu * r),
    n > 1 && (n = 1),
    Number(n.toFixed(2))
  );
}
function hr(e) {
  for (
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = [],
      n = ye(e),
      i = nn;
    i > 0;
    i -= 1
  ) {
    var o = Tt(n),
      c = De(
        ye({
          h: wt(o, i, !0),
          s: $t(o, i, !0),
          v: jt(o, i, !0),
        }),
      );
    t.push(c);
  }
  t.push(De(n));
  for (var s = 1; s <= an; s += 1) {
    var f = Tt(n),
      v = De(
        ye({
          h: wt(f, s),
          s: $t(f, s),
          v: jt(f, s),
        }),
      );
    t.push(v);
  }
  return r.theme === 'dark'
    ? yu.map(function (d) {
        var p = d.index,
          C = d.opacity,
          b = De(mu(ye(r.backgroundColor || '#141414'), ye(t[p]), C * 100));
        return b;
      })
    : t;
}
var cr = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  lr = {},
  fr = {};
Object.keys(cr).forEach(function (e) {
  (lr[e] = hr(cr[e])),
    (lr[e].primary = lr[e][5]),
    (fr[e] = hr(cr[e], {
      theme: 'dark',
      backgroundColor: '#141414',
    })),
    (fr[e].primary = fr[e][5]);
});
var St = {};
function _u(e, r) {
  process.env.NODE_ENV !== 'production' &&
    !e &&
    console !== void 0 &&
    console.error('Warning: '.concat(r));
}
function Cu(e, r, t) {
  !r && !St[t] && (e(!1, t), (St[t] = !0));
}
function xu(e, r) {
  Cu(_u, e, r);
}
function Ou() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var Tu = 'rc-util-key';
function on() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = e.mark;
  return r ? (r.startsWith('data-') ? r : 'data-'.concat(r)) : Tu;
}
function Tr(e) {
  if (e.attachTo) return e.attachTo;
  var r = document.querySelector('head');
  return r || document.body;
}
function Et(e) {
  var r,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ou()) return null;
  var n = document.createElement('style');
  if (!((r = t.csp) === null || r === void 0) && r.nonce) {
    var i;
    n.nonce = (i = t.csp) === null || i === void 0 ? void 0 : i.nonce;
  }
  n.innerHTML = e;
  var o = Tr(t),
    c = o.firstChild;
  return (
    t.prepend && o.prepend
      ? o.prepend(n)
      : t.prepend && c
      ? o.insertBefore(n, c)
      : o.appendChild(n),
    n
  );
}
var pr = /* @__PURE__ */ new Map();
function wu(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = Tr(r);
  return Array.from(pr.get(t).children).find(function (n) {
    return n.tagName === 'STYLE' && n.getAttribute(on(r)) === e;
  });
}
function $u(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = Tr(t);
  if (!pr.has(n)) {
    var i = Et('', t),
      o = i.parentNode;
    pr.set(n, o), o.removeChild(i);
  }
  var c = wu(r, t);
  if (c) {
    var s, f;
    if (
      ((s = t.csp) === null || s === void 0 ? void 0 : s.nonce) &&
      c.nonce !== ((f = t.csp) === null || f === void 0 ? void 0 : f.nonce)
    ) {
      var v;
      c.nonce = (v = t.csp) === null || v === void 0 ? void 0 : v.nonce;
    }
    return c.innerHTML !== e && (c.innerHTML = e), c;
  }
  var d = Et(e, t);
  return d.setAttribute(on(t), r), d;
}
function ju(e, r) {
  xu(e, '[@ant-design/icons] '.concat(r));
}
function At(e) {
  return (
    Me(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (Me(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function Rt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (r, t) {
    var n = e[t];
    switch (t) {
      case 'class':
        (r.className = n), delete r.class;
        break;
      default:
        r[t] = n;
    }
    return r;
  }, {});
}
function gr(e, r, t) {
  return t
    ? /* @__PURE__ */ we.createElement(
        e.tag,
        V(
          V(
            {
              key: r,
            },
            Rt(e.attrs),
          ),
          t,
        ),
        (e.children || []).map(function (n, i) {
          return gr(n, ''.concat(r, '-').concat(e.tag, '-').concat(i));
        }),
      )
    : /* @__PURE__ */ we.createElement(
        e.tag,
        V(
          {
            key: r,
          },
          Rt(e.attrs),
        ),
        (e.children || []).map(function (n, i) {
          return gr(n, ''.concat(r, '-').concat(e.tag, '-').concat(i));
        }),
      );
}
function sn(e) {
  return hr(e)[0];
}
function cn(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Su = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  Eu = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su,
      t = yr(en),
      n = t.csp;
    te(function () {
      $u(r, '@ant-design-icons', {
        prepend: !0,
        csp: n,
      });
    }, []);
  },
  Au = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  Te = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: !1,
  };
function Ru(e) {
  var r = e.primaryColor,
    t = e.secondaryColor;
  (Te.primaryColor = r),
    (Te.secondaryColor = t || sn(r)),
    (Te.calculated = !!t);
}
function Pu() {
  return V({}, Te);
}
var Ge = function (r) {
  var t = r.icon,
    n = r.className,
    i = r.onClick,
    o = r.style,
    c = r.primaryColor,
    s = r.secondaryColor,
    f = tn(r, Au),
    v = Te;
  if (
    (c &&
      (v = {
        primaryColor: c,
        secondaryColor: s || sn(c),
      }),
    Eu(),
    ju(At(t), 'icon should be icon definiton, but got '.concat(t)),
    !At(t))
  )
    return null;
  var d = t;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = V(
        V({}, d),
        {},
        {
          icon: d.icon(v.primaryColor, v.secondaryColor),
        },
      )),
    gr(
      d.icon,
      'svg-'.concat(d.name),
      V(
        {
          className: n,
          onClick: i,
          style: o,
          'data-icon': d.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        f,
      ),
    )
  );
};
Ge.displayName = 'IconReact';
Ge.getTwoToneColors = Pu;
Ge.setTwoToneColors = Ru;
const wr = Ge;
function ln(e) {
  var r = cn(e),
    t = rn(r, 2),
    n = t[0],
    i = t[1];
  return wr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: i,
  });
}
function ku() {
  var e = wr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Iu = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
ln('#1890ff');
var Ve = /* @__PURE__ */ oe.forwardRef(function (e, r) {
  var t,
    n = e.className,
    i = e.icon,
    o = e.spin,
    c = e.rotate,
    s = e.tabIndex,
    f = e.onClick,
    v = e.twoToneColor,
    d = tn(e, Iu),
    p = oe.useContext(en),
    C = p.prefixCls,
    b = C === void 0 ? 'anticon' : C,
    S = B(
      b,
      ((t = {}),
      vr(t, ''.concat(b, '-').concat(i.name), !!i.name),
      vr(t, ''.concat(b, '-spin'), !!o || i.name === 'loading'),
      t),
      n,
    ),
    U = s;
  U === void 0 && f && (U = -1);
  var W = c
      ? {
          msTransform: 'rotate('.concat(c, 'deg)'),
          transform: 'rotate('.concat(c, 'deg)'),
        }
      : void 0,
    F = cn(v),
    g = rn(F, 2),
    O = g[0],
    M = g[1];
  return /* @__PURE__ */ oe.createElement(
    'span',
    V(
      V(
        {
          role: 'img',
          'aria-label': i.name,
        },
        d,
      ),
      {},
      {
        ref: r,
        tabIndex: U,
        onClick: f,
        className: S,
      },
    ),
    /* @__PURE__ */ oe.createElement(wr, {
      icon: i,
      primaryColor: O,
      secondaryColor: M,
      style: W,
    }),
  );
});
Ve.displayName = 'AntdIcon';
Ve.getTwoToneColor = ku;
Ve.setTwoToneColor = ln;
const Du = Ve;
var Fu = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z',
        },
      },
    ],
  },
  name: 'caret-right',
  theme: 'outlined',
};
const Mu = Fu;
var fn = function (r, t) {
  return /* @__PURE__ */ oe.createElement(
    Du,
    V(
      V({}, r),
      {},
      {
        ref: t,
        icon: Mu,
      },
    ),
  );
};
fn.displayName = 'CaretRightOutlined';
const Nu = /* @__PURE__ */ oe.forwardRef(fn),
  Lu = '_rotate90_16cnn_1',
  Bu = '_checkbox_16cnn_4',
  Hu = '_icon_16cnn_8',
  Uu = '_checkboxContainer_16cnn_12',
  Wu = '_noLeaf_16cnn_19',
  me = {
    rotate90: Lu,
    checkbox: Bu,
    icon: Hu,
    checkboxContainer: Uu,
    noLeaf: Wu,
  },
  Pt = (e) => {
    const {
        data: r,
        isLeaf: t,
        className: n,
        firstCenterCol: i,
        expand: o,
        onExpand: c,
      } = e,
      [s, f] = Ce(!0),
      v = J(() => {
        var P;
        return (
          (!t && s) ||
          (i &&
            ((P = r == null ? void 0 : r.parent) === null || P === void 0
              ? void 0
              : P.childList) &&
            r.parent.childList.length > 1)
        );
      }, [t, i, s]),
      {
        onChange: d,
        dispatchMap: p,
        dispatchWithDiff: C,
        authWidth: b,
        maxLevel: S,
      } = yr(Or),
      [U, W] = Ce(!1),
      [F, g] = Ce(!1);
    J(() => {
      p[r.id] == null
        ? (p[r.id] = {
            checked: W,
            indeterminate: g,
          })
        : ((p[r.id].checked = W), (p[r.id].indeterminate = g));
    }, [p, r]);
    const O = xe(
        (P) => {
          const X = P.target.checked,
            ze = r.setCheckedByIdReturnDiff(r.id, X);
          C(ze), d();
        },
        [d, C, r],
      ),
      M = xe(() => {
        Oe(c, !o);
      }, [o]);
    return (
      te(() => {
        if (b <= 0 || r.level !== S - 1) return;
        let P = 0;
        r.each(({ name: X }) => {
          P += kf(X) + 16 + 37 + 16;
        }),
          b > P && ((r.authOverLong = !1), f(!1));
      }, [b, r]),
      w.exports.jsxs(
        'div',
        Object.assign(
          { className: B(me.checkboxContainer, n), title: r.name },
          {
            children: [
              v &&
                w.exports.jsx(Nu, {
                  className: B(
                    {
                      [me.rotate90]: o,
                    },
                    me.icon,
                  ),
                  onClick: M,
                }),
              w.exports.jsx(
                Gn,
                Object.assign({}, e, {
                  indeterminate: F,
                  checked: U,
                  className: B(me.checkbox, {
                    [me.noLeaf]: !v,
                  }),
                  onChange: O,
                }),
              ),
            ],
          },
        ),
      )
    );
  },
  un = (e) => {
    var r;
    const { data: t, list: n, firstCenterCol: i, expand: o, setExpand: c } = e,
      { maxLevel: s, dispatchMap: f } = yr(Or),
      v = J(() => t && t.level >= s - 1, [s]),
      [d, p] = Ce(
        (r = t == null ? void 0 : t.options.expand) !== null && r !== void 0
          ? r
          : !1,
      ),
      C = J(
        () => ({
          [R.minCol]: t && !d,
        }),
        [d, t],
      );
    return (
      J(() => {
        t != null &&
          (f[t.id]
            ? (f[t.id].expand = p)
            : (f[t.id] = {
                expand: p,
              }));
      }, [f, t]),
      te(() => {
        if (!(t == null || o == null)) {
          if (o === !1) {
            p(!1);
            return;
          }
          i && t.childList.length === 1 && p(o);
        }
      }, [o, i, t]),
      te(() => {
        d
          ? Oe(c, !0)
          : (t && t.level === 1 && i && Oe(c, !1),
            t &&
              i &&
              (t.authOverLong === !1 || t.childList.length <= 1) &&
              Oe(c, !1));
      }, [d, i, f, t]),
      w.exports.jsxs(
        'div',
        Object.assign(
          { className: B(R.borderTop, t == null ? void 0 : t.className, C) },
          {
            children: [
              t &&
                w.exports.jsx(
                  Pt,
                  Object.assign(
                    {
                      className: B(t.level === 0 ? R.firstCol : R.centerCol, {
                        firstCenterCol: i,
                      }),
                      firstCenterCol: i,
                      data: t,
                      isLeaf: n.length <= 1,
                      expand: d,
                      onExpand: p,
                    },
                    { children: t.name },
                  ),
                ),
              v
                ? w.exports.jsx(
                    'div',
                    Object.assign(
                      { className: B(R.authCol, C) },
                      {
                        children: n.map((b) =>
                          w.exports.jsx(
                            Pt,
                            Object.assign(
                              { data: b, isLeaf: !0 },
                              { children: b.name },
                            ),
                            b.id,
                          ),
                        ),
                      },
                    ),
                  )
                : w.exports.jsxs(
                    'div',
                    Object.assign(
                      { className: B(R.lastCol) },
                      {
                        children: [
                          n.map((b, S) =>
                            w.exports.jsx(
                              un,
                              {
                                data: b,
                                list: b.childList,
                                firstCenterCol: S === 0,
                                expand: d,
                                setExpand: p,
                              },
                              b.id,
                            ),
                          ),
                          t &&
                            n.length === 0 &&
                            w.exports.jsx(
                              'div',
                              Object.assign(
                                { className: B(R.borderTop) },
                                {
                                  children: Array.from({
                                    length: s - t.level,
                                  }).map((b, S) =>
                                    w.exports.jsx(
                                      'div',
                                      {
                                        className: B(
                                          S === s - t.level - 1
                                            ? R.authCol
                                            : R.centerCol,
                                        ),
                                      },
                                      S,
                                    ),
                                  ),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                  ),
            ],
          },
        ),
        t == null ? void 0 : t.id,
      )
    );
  },
  Gu = (e) => {
    const { data: r } = e;
    return w.exports.jsx(
      'div',
      Object.assign(
        { className: R.row },
        { children: w.exports.jsx(un, { data: null, list: [r] }) },
      ),
    );
  },
  Vu = (e) => {
    const { list: r = [], columns: t } = e;
    return w.exports.jsx(
      'div',
      Object.assign(
        { className: B('tableBody', R.tableBody) },
        { children: r.map((n) => w.exports.jsx(Gu, { data: n }, n.id)) },
      ),
    );
  };
let _e = {};
function dn(e, ...r) {
  r.forEach((t) => {
    var n;
    for (const i in t) {
      const o = t[i];
      o !== null &&
        (typeof o != 'object'
          ? (e[i] = o)
          : ((e[i] = (n = e[i]) != null ? n : {}), dn(e[i], o)));
    }
  });
}
var A, Z, L, re;
const $r = class {
  constructor(r, t) {
    he(this, A, !1);
    he(this, Z, !1);
    he(this, L, !1);
    he(this, re, !1);
    z(this, 'id');
    z(this, 'pId');
    z(this, 'level');
    z(this, 'options');
    z(this, 'name');
    z(this, 'childList');
    z(this, 'parent');
    z(this, 'className');
    z(this, 'map');
    (this.options = Object.assign({}, r)),
      (this.name = r.name),
      (this.className = r.className),
      (this.id = r.id),
      (this.pId = r.pId),
      (this.parent = t),
      (this.level = t == null ? 0 : t.level + 1),
      (this.map = t == null ? { [this.id]: this } : t.map),
      (this.childList = r.childList.map((n) => {
        const i = new $r(n, this);
        return (
          this.map[i.id] != null && console.warn(`the same id. id: ${i.id}`),
          (this.map[i.id] = i),
          i
        );
      }));
  }
  isRoot() {
    return this.level === 0;
  }
  get checked() {
    return I(this, A);
  }
  get indeterminate() {
    return I(this, L);
  }
  diff() {
    let r = _e[this.id];
    return (
      I(this, Z) !== I(this, A) &&
        ((r = r != null ? r : {}),
        (r.checked = I(this, A)),
        I(this, A) && (r.indeterminate = !1)),
      I(this, re) !== I(this, L) &&
        ((r = r != null ? r : {}), (r.indeterminate = I(this, L))),
      r && (_e[this.id] = r),
      r
    );
  }
  setChecked(r, t) {
    return (
      E(this, Z, I(this, A)),
      E(this, A, r),
      r && this.setIndeterminate(!1, !0),
      this.diff() && this.parent && !t && this.calcParentStatus(),
      r
        ? this.each((n) => {
            n.setIndeterminate(!1, !0), n.setChecked(!0, !0);
          })
        : this.indeterminate ||
          this.each((n) => {
            n.setIndeterminate(!1, !0), n.setChecked(!1, !0);
          }),
      this
    );
  }
  setIndeterminate(r, t) {
    return (
      E(this, re, I(this, L)),
      E(this, L, r),
      r &&
        !t &&
        (E(this, Z, I(this, A)),
        E(this, A, !1),
        this.parent && this.parent.setIndeterminate(!0)),
      t || this.diff(),
      this
    );
  }
  setCheckedByIdReturnDiff(r, t) {
    _e = {};
    const n = this.map[r != null ? r : this.id];
    if (n == null) return {};
    n.setChecked(t != null ? t : !0);
    const i = Object.assign({}, _e);
    return (_e = {}), i;
  }
  selectKeys(r) {
    const t = this.clean();
    return (
      r.forEach((n) => {
        dn(t, this.setCheckedByIdReturnDiff(n));
      }),
      t
    );
  }
  getSelectKeys() {
    const r = [];
    return (
      Object.values(this.map).forEach((t) => {
        t.checked && r.push(t.id);
      }),
      r
    );
  }
  calcParentStatus() {
    const { parent: r } = this;
    if (r == null) return this;
    const { childList: t } = r,
      { length: n } = t;
    if (n <= 0) return this;
    E(r, Z, I(r, A)), E(r, re, I(r, L));
    const i = t.filter((c) => c.checked).length;
    return (
      i === n
        ? (E(r, A, !0), E(r, L, !1))
        : i > 0
        ? (r.setIndeterminate(!0), E(r, A, !1))
        : (E(r, L, !1), E(r, A, !1)),
      r.diff() && !r.indeterminate && r.calcParentStatus(),
      this
    );
  }
  clean() {
    const r = {};
    return (
      Object.values(this.map).forEach((t) => {
        let n = r[t.id];
        t.checked && ((n = n != null ? n : {}), (n.checked = !1)),
          t.indeterminate && ((n = n != null ? n : {}), (n.indeterminate = !1)),
          n && (r[t.id] = n),
          E(t, Z, E(t, A, !1)),
          E(t, re, E(t, L, !1));
      }),
      r
    );
  }
  each(r) {
    return (
      this.childList.forEach((t, n) => {
        r(t, this, n);
      }),
      this
    );
  }
  eachDeep(r) {
    return (
      this.childList.forEach((t, n) => {
        r(t, this, n), t.eachDeep(r);
      }),
      this
    );
  }
  eachDeepAfter(r) {
    return (
      this.childList.forEach((t, n) => {
        t.eachDeep(r), r(t, this, n);
      }),
      this
    );
  }
};
let br = $r;
(A = new WeakMap()),
  (Z = new WeakMap()),
  (L = new WeakMap()),
  (re = new WeakMap());
const qu = (e) => {
  const {
      value: r,
      dataSource: t,
      columns: n,
      loading: i = !1,
      defaultSelectedKeys: o = [],
      onChange: c,
    } = e,
    s = Zr([]),
    f = Zr(null),
    [v, d] = Ce(0),
    p = J(() => {
      const g = tr(
          Array.from({ length: n == null ? void 0 : n.length }).map(() => ({
            title: 'default title',
          })),
          Jf,
        ),
        O = n ? g.slice(0, n.length) : g;
      return tr([], O, n);
    }, [n]),
    C = J(() => p.length - 1, [p]),
    b = J(() => {
      const g = tr([], t);
      return (
        Zt(g, (O, M, P) => {
          (O.childList = O.childList || []), (O.level = P), (O.parent = M);
        }),
        g.map((O) => new br(O))
      );
    }, [t]),
    S = J(() => ({}), [b]),
    U = xe(
      (g) => {
        for (const O in g) {
          const M = S[O],
            P = g[O];
          if (M == null) return;
          for (const X in P) M[X](P[X]);
        }
      },
      [S],
    ),
    W = xe(
      (g) => {
        !Array.isArray(g) ||
          b.forEach((O) => {
            const M = O.selectKeys(g);
            U(M);
          });
      },
      [b, U],
    ),
    F = xe(() => {
      const g = [];
      b.forEach((O) => {
        g.push(...O.getSelectKeys());
      }),
        (s.current = g),
        Oe(c, g);
    }, [c, b]);
  return (
    te(() => {
      r || W(o);
    }, [b, W]),
    te(() => {
      i || r == null || r === s.current || W(r);
    }, [b, W, r, i]),
    te(() => {
      var g;
      if (i) return;
      const O =
        (g = f.current) === null || g === void 0
          ? void 0
          : g.querySelector(`.${R.tableItem}:last-child`);
      O && d(O == null ? void 0 : O.getBoundingClientRect().width);
    }, [b, i]),
    w.exports.jsx(
      Vn,
      Object.assign(
        { spinning: i },
        {
          children: w.exports.jsx(
            'div',
            Object.assign(
              { ref: f, className: R.permissionContainer },
              {
                children: w.exports.jsxs(
                  If,
                  Object.assign(
                    {
                      value: {
                        columns: p,
                        onChange: F,
                        maxLevel: C,
                        dataSource: b,
                        dispatchMap: S,
                        dispatchWithDiff: U,
                        authWidth: v,
                      },
                    },
                    {
                      children: [
                        w.exports.jsx(Xf, { columns: p }),
                        i
                          ? w.exports.jsx(zn, { description: !0 })
                          : w.exports.jsx(Vu, { columns: p, list: b }),
                      ],
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    )
  );
};
export { qu as default };
