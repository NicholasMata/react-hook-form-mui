try {
  var Se = 'actions',
    L = 'storybook/actions',
    Ce = `${L}/panel`,
    V = `${L}/action-event`,
    te = `${L}/action-clear`
  var a = __REACT__,
    {
      Children: we,
      Component: xe,
      Fragment: Ne,
      Profiler: qr,
      PureComponent: Xr,
      StrictMode: Zr,
      Suspense: Kr,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Qr,
      cloneElement: en,
      createContext: $,
      createElement: tn,
      createFactory: rn,
      createRef: nn,
      forwardRef: an,
      isValidElement: on,
      lazy: sn,
      memo: H,
      useCallback: S,
      useContext: Y,
      useDebugValue: ln,
      useEffect: un,
      useImperativeHandle: cn,
      useLayoutEffect: Le,
      useMemo: Ie,
      useReducer: pn,
      useRef: fn,
      useState: I,
      version: dn,
    } = __REACT__
  var En = __STORYBOOKAPI__,
    {
      ActiveTabs: yn,
      Consumer: On,
      ManagerContext: vn,
      Provider: Tn,
      addons: re,
      combineParameters: _n,
      controlOrMetaKey: Rn,
      controlOrMetaSymbol: An,
      eventMatchesShortcut: Sn,
      eventToShortcut: Cn,
      isMacLike: wn,
      isShortcutTaken: xn,
      keyToSymbol: Nn,
      merge: Ln,
      mockChannel: In,
      optionOrAltSymbol: Dn,
      shortcutMatchesShortcut: Mn,
      shortcutToHumanString: Pn,
      types: De,
      useAddonState: Me,
      useArgTypes: Bn,
      useArgs: Fn,
      useChannel: Pe,
      useGlobalTypes: zn,
      useGlobals: Hn,
      useParameter: jn,
      useSharedState: Un,
      useStoryPrepared: kn,
      useStorybookApi: Gn,
      useStorybookState: Wn,
    } = __STORYBOOKAPI__
  var qn = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: Xn,
      CONFIG_ERROR: Zn,
      CURRENT_STORY_WAS_SET: Kn,
      DOCS_PREPARED: Qn,
      DOCS_RENDERED: ea,
      FORCE_REMOUNT: ta,
      FORCE_RE_RENDER: ra,
      GLOBALS_UPDATED: na,
      IGNORED_EXCEPTION: aa,
      NAVIGATE_URL: oa,
      PLAY_FUNCTION_THREW_EXCEPTION: ia,
      PRELOAD_ENTRIES: sa,
      PREVIEW_BUILDER_PROGRESS: la,
      PREVIEW_KEYDOWN: ua,
      REGISTER_SUBSCRIPTION: ca,
      REQUEST_WHATS_NEW_DATA: pa,
      RESET_STORY_ARGS: fa,
      RESULT_WHATS_NEW_DATA: da,
      SELECT_STORY: ma,
      SET_CONFIG: ba,
      SET_CURRENT_STORY: ga,
      SET_GLOBALS: ha,
      SET_INDEX: Ea,
      SET_STORIES: ya,
      SET_WHATS_NEW_CACHE: Oa,
      SHARED_STATE_CHANGED: va,
      SHARED_STATE_SET: Ta,
      STORIES_COLLAPSE_ALL: _a,
      STORIES_EXPAND_ALL: Ra,
      STORY_ARGS_UPDATED: Aa,
      STORY_CHANGED: J,
      STORY_ERRORED: Sa,
      STORY_INDEX_INVALIDATED: Ca,
      STORY_MISSING: wa,
      STORY_PREPARED: xa,
      STORY_RENDERED: Na,
      STORY_RENDER_PHASE_CHANGED: La,
      STORY_SPECIFIED: Ia,
      STORY_THREW_EXCEPTION: Da,
      STORY_UNCHANGED: Ma,
      TELEMETRY_ERROR: Pa,
      TOGGLE_WHATS_NEW_NOTIFICATIONS: Ba,
      UPDATE_GLOBALS: Fa,
      UPDATE_QUERY_PARAMS: za,
      UPDATE_STORY_ARGS: Ha,
    } = __STORYBOOKCOREEVENTS__
  var Wa = __STORYBOOKCOMPONENTS__,
    {
      A: Va,
      ActionBar: Be,
      AddonPanel: $a,
      Badge: Fe,
      Bar: Ya,
      Blockquote: Ja,
      Button: qa,
      ClipboardCode: Xa,
      Code: Za,
      DL: Ka,
      Div: Qa,
      DocumentWrapper: eo,
      ErrorFormatter: to,
      FlexBar: ro,
      Form: no,
      H1: ao,
      H2: oo,
      H3: io,
      H4: so,
      H5: lo,
      H6: uo,
      HR: co,
      IconButton: po,
      IconButtonSkeleton: fo,
      Icons: mo,
      Img: bo,
      LI: go,
      Link: ho,
      ListItem: Eo,
      Loader: yo,
      OL: Oo,
      P: vo,
      Placeholder: To,
      Pre: _o,
      ResetWrapper: Ro,
      ScrollArea: ze,
      Separator: Ao,
      Spaced: He,
      Span: So,
      StorybookIcon: Co,
      StorybookLogo: wo,
      Symbols: xo,
      SyntaxHighlighter: No,
      TT: Lo,
      TabBar: Io,
      TabButton: Do,
      TabWrapper: Mo,
      Table: Po,
      Tabs: Bo,
      TabsState: Fo,
      TooltipLinkList: zo,
      TooltipMessage: Ho,
      TooltipNote: jo,
      UL: Uo,
      WithTooltip: ko,
      WithTooltipPure: Go,
      Zoom: Wo,
      codeCommon: Vo,
      components: $o,
      createCopyToClipboardFunction: Yo,
      getStoryHref: Jo,
      icons: qo,
      interleaveSeparators: Xo,
      nameSpaceClassNames: Zo,
      resetComponents: Ko,
      withReset: Qo,
    } = __STORYBOOKCOMPONENTS__
  var je = Object.prototype.hasOwnProperty
  function Ue(e, t, r) {
    for (r of e.keys()) if (D(r, t)) return r
  }
  function D(e, t) {
    var r, n, o
    if (e === t) return !0
    if (e && t && (r = e.constructor) === t.constructor) {
      if (r === Date) return e.getTime() === t.getTime()
      if (r === RegExp) return e.toString() === t.toString()
      if (r === Array) {
        if ((n = e.length) === t.length) for (; n-- && D(e[n], t[n]); );
        return n === -1
      }
      if (r === Set) {
        if (e.size !== t.size) return !1
        for (n of e)
          if (
            ((o = n),
            (o && typeof o == 'object' && ((o = Ue(t, o)), !o)) || !t.has(o))
          )
            return !1
        return !0
      }
      if (r === Map) {
        if (e.size !== t.size) return !1
        for (n of e)
          if (
            ((o = n[0]),
            (o && typeof o == 'object' && ((o = Ue(t, o)), !o)) ||
              !D(n[1], t.get(o)))
          )
            return !1
        return !0
      }
      if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t))
      else if (r === DataView) {
        if ((n = e.byteLength) === t.byteLength)
          for (; n-- && e.getInt8(n) === t.getInt8(n); );
        return n === -1
      }
      if (ArrayBuffer.isView(e)) {
        if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
        return n === -1
      }
      if (!r || typeof e == 'object') {
        n = 0
        for (r in e)
          if (
            (je.call(e, r) && ++n && !je.call(t, r)) ||
            !(r in t) ||
            !D(e[r], t[r])
          )
            return !1
        return Object.keys(t).length === n
      }
    }
    return e !== e && t !== t
  }
  var li = __STORYBOOKTHEMING__,
    {
      CacheProvider: ui,
      ClassNames: ci,
      Global: pi,
      ThemeProvider: fi,
      background: di,
      color: mi,
      convert: bi,
      create: gi,
      createCache: hi,
      createGlobal: Ei,
      createReset: yi,
      css: Oi,
      darken: vi,
      ensure: Ti,
      ignoreSsrWarning: _i,
      isPropValid: Ri,
      jsx: Ai,
      keyframes: Si,
      lighten: Ci,
      styled: j,
      themes: wi,
      typography: xi,
      useTheme: Ni,
      withTheme: ke,
    } = __STORYBOOKTHEMING__
  var ct = Object.create,
    se = Object.defineProperty,
    pt = Object.getOwnPropertyDescriptor,
    Ye = Object.getOwnPropertyNames,
    ft = Object.getPrototypeOf,
    dt = Object.prototype.hasOwnProperty,
    le = (e, t) =>
      function () {
        return t || (0, e[Ye(e)[0]])((t = {exports: {}}).exports, t), t.exports
      },
    mt = (e, t) => {
      for (var r in t) se(e, r, {get: t[r], enumerable: !0})
    },
    bt = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Ye(t))
          !dt.call(e, o) &&
            o !== r &&
            se(e, o, {
              get: () => t[o],
              enumerable: !(n = pt(t, o)) || n.enumerable,
            })
      return e
    },
    gt = (e, t, r) => (
      (r = e != null ? ct(ft(e)) : {}),
      bt(
        t || !e || !e.__esModule
          ? se(r, 'default', {value: e, enumerable: !0})
          : r,
        e
      )
    ),
    ht = le({
      'node_modules/is-object/index.js'(e, t) {
        'use strict'
        t.exports = function (n) {
          return typeof n == 'object' && n !== null
        }
      },
    }),
    Et = le({
      'node_modules/is-window/index.js'(e, t) {
        'use strict'
        t.exports = function (r) {
          if (r == null) return !1
          var n = Object(r)
          return n === n.window
        }
      },
    }),
    yt = le({
      'node_modules/is-dom/index.js'(e, t) {
        var r = ht(),
          n = Et()
        function o(i) {
          return !r(i) || !n(window) || typeof window.Node != 'function'
            ? !1
            : typeof i.nodeType == 'number' && typeof i.nodeName == 'string'
        }
        t.exports = o
      },
    }),
    Z = {}
  mt(Z, {chromeDark: () => Ot, chromeLight: () => vt})
  var Ot = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
      BASE_COLOR: 'rgb(213, 213, 213)',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
      HTML_TAG_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
      HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: 'rgb(145, 145, 145)',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
      TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
      TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
      TABLE_SORT_ICON_COLOR: 'black',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    vt = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'white',
      BASE_COLOR: 'black',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
      HTML_TAG_COLOR: 'rgb(168, 148, 166)',
      HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
      HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: '#6e6e6e',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: '#aaa',
      TABLE_TH_BACKGROUND_COLOR: '#eee',
      TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
      TABLE_SORT_ICON_COLOR: '#6e6e6e',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    Je = $([{}, () => {}]),
    ne = {
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      OUserSelect: 'none',
      userSelect: 'none',
    },
    q = (e) => ({
      DOMNodePreview: {
        htmlOpenTag: {
          base: {color: e.HTML_TAG_COLOR},
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
          htmlAttributeName: {color: e.HTML_ATTRIBUTE_NAME_COLOR},
          htmlAttributeValue: {color: e.HTML_ATTRIBUTE_VALUE_COLOR},
        },
        htmlCloseTag: {
          base: {color: e.HTML_TAG_COLOR},
          offsetLeft: {marginLeft: -e.TREENODE_PADDING_LEFT},
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
        },
        htmlComment: {color: e.HTML_COMMENT_COLOR},
        htmlDoctype: {color: e.HTML_DOCTYPE_COLOR},
      },
      ObjectPreview: {
        objectDescription: {fontStyle: 'italic'},
        preview: {fontStyle: 'italic'},
        arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
        objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
      },
      ObjectName: {base: {color: e.OBJECT_NAME_COLOR}, dimmed: {opacity: 0.6}},
      ObjectValue: {
        objectValueNull: {color: e.OBJECT_VALUE_NULL_COLOR},
        objectValueUndefined: {color: e.OBJECT_VALUE_UNDEFINED_COLOR},
        objectValueRegExp: {color: e.OBJECT_VALUE_REGEXP_COLOR},
        objectValueString: {color: e.OBJECT_VALUE_STRING_COLOR},
        objectValueSymbol: {color: e.OBJECT_VALUE_SYMBOL_COLOR},
        objectValueNumber: {color: e.OBJECT_VALUE_NUMBER_COLOR},
        objectValueBoolean: {color: e.OBJECT_VALUE_BOOLEAN_COLOR},
        objectValueFunctionPrefix: {
          color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
          fontStyle: 'italic',
        },
        objectValueFunctionName: {fontStyle: 'italic'},
      },
      TreeView: {
        treeViewOutline: {padding: 0, margin: 0, listStyleType: 'none'},
      },
      TreeNode: {
        treeNodeBase: {
          color: e.BASE_COLOR,
          backgroundColor: e.BASE_BACKGROUND_COLOR,
          lineHeight: e.TREENODE_LINE_HEIGHT,
          cursor: 'default',
          boxSizing: 'border-box',
          listStyle: 'none',
          fontFamily: e.TREENODE_FONT_FAMILY,
          fontSize: e.TREENODE_FONT_SIZE,
        },
        treeNodePreviewContainer: {},
        treeNodePlaceholder: {
          whiteSpace: 'pre',
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...ne,
        },
        treeNodeArrow: {
          base: {
            color: e.ARROW_COLOR,
            display: 'inline-block',
            fontSize: e.ARROW_FONT_SIZE,
            marginRight: e.ARROW_MARGIN_RIGHT,
            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
              ? {transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s`}
              : {}),
            ...ne,
          },
          expanded: {
            WebkitTransform: 'rotateZ(90deg)',
            MozTransform: 'rotateZ(90deg)',
            transform: 'rotateZ(90deg)',
          },
          collapsed: {
            WebkitTransform: 'rotateZ(0deg)',
            MozTransform: 'rotateZ(0deg)',
            transform: 'rotateZ(0deg)',
          },
        },
        treeNodeChildNodesContainer: {
          margin: 0,
          paddingLeft: e.TREENODE_PADDING_LEFT,
        },
      },
      TableInspector: {
        base: {
          color: e.BASE_COLOR,
          position: 'relative',
          border: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontFamily: e.BASE_FONT_FAMILY,
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
          boxSizing: 'border-box',
          cursor: 'default',
        },
      },
      TableInspectorHeaderContainer: {
        base: {top: 0, height: '17px', left: 0, right: 0, overflowX: 'hidden'},
        table: {
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          height: '100%',
          width: '100%',
          margin: 0,
        },
      },
      TableInspectorDataContainer: {
        tr: {display: 'table-row'},
        td: {
          boxSizing: 'border-box',
          border: 'none',
          height: '16px',
          verticalAlign: 'top',
          padding: '1px 4px',
          WebkitUserSelect: 'text',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
        },
        div: {
          position: 'static',
          top: '17px',
          bottom: 0,
          overflowY: 'overlay',
          transform: 'translateZ(0)',
          left: 0,
          right: 0,
          overflowX: 'hidden',
        },
        table: {
          positon: 'static',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          borderTop: '0 none transparent',
          margin: 0,
          backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
          backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          width: '100%',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorTH: {
        base: {
          position: 'relative',
          height: 'auto',
          textAlign: 'left',
          backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
          borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontWeight: 'normal',
          verticalAlign: 'middle',
          padding: '0 4px',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
          ':hover': {backgroundColor: e.TABLE_TH_HOVER_COLOR},
        },
        div: {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorLeftBorder: {
        none: {borderLeft: 'none'},
        solid: {borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}`},
      },
      TableInspectorSortIcon: {
        display: 'block',
        marginRight: 3,
        width: 8,
        height: 7,
        marginTop: -7,
        color: e.TABLE_SORT_ICON_COLOR,
        fontSize: 12,
        ...ne,
      },
    }),
    ae = 'chromeLight',
    qe = $(q(Z[ae])),
    _ = (e) => Y(qe)[e],
    ue =
      (e) =>
      ({theme: r = ae, ...n}) => {
        let o = Ie(() => {
          switch (Object.prototype.toString.call(r)) {
            case '[object String]':
              return q(Z[r])
            case '[object Object]':
              return q(r)
            default:
              return q(Z[ae])
          }
        }, [r])
        return a.createElement(
          qe.Provider,
          {value: o},
          a.createElement(e, {...n})
        )
      },
    Tt = ({expanded: e, styles: t}) =>
      a.createElement(
        'span',
        {style: {...t.base, ...(e ? t.expanded : t.collapsed)}},
        '\u25B6'
      ),
    _t = H((e) => {
      e = {
        expanded: !0,
        nodeRenderer: ({name: p}) => a.createElement('span', null, p),
        onClick: () => {},
        shouldShowArrow: !1,
        shouldShowPlaceholder: !0,
        ...e,
      }
      let {
          expanded: t,
          onClick: r,
          children: n,
          nodeRenderer: o,
          title: i,
          shouldShowArrow: u,
          shouldShowPlaceholder: s,
        } = e,
        l = _('TreeNode'),
        c = o
      return a.createElement(
        'li',
        {'aria-expanded': t, role: 'treeitem', style: l.treeNodeBase, title: i},
        a.createElement(
          'div',
          {style: l.treeNodePreviewContainer, onClick: r},
          u || we.count(n) > 0
            ? a.createElement(Tt, {expanded: t, styles: l.treeNodeArrow})
            : s &&
                a.createElement('span', {style: l.treeNodePlaceholder}, '\xA0'),
          a.createElement(c, {...e})
        ),
        a.createElement(
          'ol',
          {role: 'group', style: l.treeNodeChildNodesContainer},
          t ? n : void 0
        )
      )
    }),
    K = '$',
    Ge = '*'
  function X(e, t) {
    return !t(e).next().done
  }
  var Rt = (e) =>
      Array.from({length: e}, (t, r) =>
        [K].concat(Array.from({length: r}, () => '*')).join('.')
      ),
    At = (e, t, r, n, o) => {
      let i = []
          .concat(Rt(n))
          .concat(r)
          .filter((s) => typeof s == 'string'),
        u = []
      return (
        i.forEach((s) => {
          let l = s.split('.'),
            c = (p, d, f) => {
              if (f === l.length) {
                u.push(d)
                return
              }
              let E = l[f]
              if (f === 0) X(p, t) && (E === K || E === Ge) && c(p, K, f + 1)
              else if (E === Ge)
                for (let {name: h, data: y} of t(p))
                  X(y, t) && c(y, `${d}.${h}`, f + 1)
              else {
                let h = p[E]
                X(h, t) && c(h, `${d}.${E}`, f + 1)
              }
            }
          c(e, '', 0)
        }),
        u.reduce((s, l) => ((s[l] = !0), s), {...o})
      )
    },
    Xe = H((e) => {
      let {data: t, dataIterator: r, path: n, depth: o, nodeRenderer: i} = e,
        [u, s] = Y(Je),
        l = X(t, r),
        c = !!u[n],
        p = S(() => l && s((d) => ({...d, [n]: !c})), [l, s, n, c])
      return a.createElement(
        _t,
        {
          expanded: c,
          onClick: p,
          shouldShowArrow: l,
          shouldShowPlaceholder: o > 0,
          nodeRenderer: i,
          ...e,
        },
        c
          ? [...r(t)].map(({name: d, data: f, ...E}) =>
              a.createElement(Xe, {
                name: d,
                data: f,
                depth: o + 1,
                path: `${n}.${d}`,
                key: d,
                dataIterator: r,
                nodeRenderer: i,
                ...E,
              })
            )
          : null
      )
    }),
    Ze = H(
      ({
        name: e,
        data: t,
        dataIterator: r,
        nodeRenderer: n,
        expandPaths: o,
        expandLevel: i,
      }) => {
        let u = _('TreeView'),
          s = I({}),
          [, l] = s
        return (
          Le(() => l((c) => At(t, r, o, i, c)), [t, r, o, i]),
          a.createElement(
            Je.Provider,
            {value: s},
            a.createElement(
              'ol',
              {role: 'tree', style: u.treeViewOutline},
              a.createElement(Xe, {
                name: e,
                data: t,
                dataIterator: r,
                depth: 0,
                path: K,
                nodeRenderer: n,
              })
            )
          )
        )
      }
    ),
    ce = ({name: e, dimmed: t = !1, styles: r = {}}) => {
      let n = _('ObjectName'),
        o = {...n.base, ...(t ? n.dimmed : {}), ...r}
      return a.createElement('span', {style: o}, e)
    },
    U = ({object: e, styles: t}) => {
      let r = _('ObjectValue'),
        n = (o) => ({...r[o], ...t})
      switch (typeof e) {
        case 'bigint':
          return a.createElement(
            'span',
            {style: n('objectValueNumber')},
            String(e),
            'n'
          )
        case 'number':
          return a.createElement(
            'span',
            {style: n('objectValueNumber')},
            String(e)
          )
        case 'string':
          return a.createElement(
            'span',
            {style: n('objectValueString')},
            '"',
            e,
            '"'
          )
        case 'boolean':
          return a.createElement(
            'span',
            {style: n('objectValueBoolean')},
            String(e)
          )
        case 'undefined':
          return a.createElement(
            'span',
            {style: n('objectValueUndefined')},
            'undefined'
          )
        case 'object':
          return e === null
            ? a.createElement('span', {style: n('objectValueNull')}, 'null')
            : e instanceof Date
            ? a.createElement('span', null, e.toString())
            : e instanceof RegExp
            ? a.createElement(
                'span',
                {style: n('objectValueRegExp')},
                e.toString()
              )
            : Array.isArray(e)
            ? a.createElement('span', null, `Array(${e.length})`)
            : e.constructor
            ? typeof e.constructor.isBuffer == 'function' &&
              e.constructor.isBuffer(e)
              ? a.createElement('span', null, `Buffer[${e.length}]`)
              : a.createElement('span', null, e.constructor.name)
            : a.createElement('span', null, 'Object')
        case 'function':
          return a.createElement(
            'span',
            null,
            a.createElement(
              'span',
              {style: n('objectValueFunctionPrefix')},
              '\u0192\xA0'
            ),
            a.createElement(
              'span',
              {style: n('objectValueFunctionName')},
              e.name,
              '()'
            )
          )
        case 'symbol':
          return a.createElement(
            'span',
            {style: n('objectValueSymbol')},
            e.toString()
          )
        default:
          return a.createElement('span', null)
      }
    },
    Ke = Object.prototype.hasOwnProperty,
    St = Object.prototype.propertyIsEnumerable
  function oe(e, t) {
    let r = Object.getOwnPropertyDescriptor(e, t)
    if (r.get)
      try {
        return r.get()
      } catch {
        return r.get
      }
    return e[t]
  }
  function We(e, t) {
    return e.length === 0
      ? []
      : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]])
  }
  var ie = ({data: e}) => {
      let t = _('ObjectPreview'),
        r = e
      if (
        typeof r != 'object' ||
        r === null ||
        r instanceof Date ||
        r instanceof RegExp
      )
        return a.createElement(U, {object: r})
      if (Array.isArray(r)) {
        let n = t.arrayMaxProperties,
          o = r
            .slice(0, n)
            .map((u, s) => a.createElement(U, {key: s, object: u}))
        r.length > n &&
          o.push(a.createElement('span', {key: 'ellipsis'}, '\u2026'))
        let i = r.length
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            {style: t.objectDescription},
            i === 0 ? '' : `(${i})\xA0`
          ),
          a.createElement('span', {style: t.preview}, '[', We(o, ', '), ']')
        )
      } else {
        let n = t.objectMaxProperties,
          o = []
        for (let u in r)
          if (Ke.call(r, u)) {
            let s
            o.length === n - 1 &&
              Object.keys(r).length > n &&
              (s = a.createElement('span', {key: 'ellipsis'}, '\u2026'))
            let l = oe(r, u)
            if (
              (o.push(
                a.createElement(
                  'span',
                  {key: u},
                  a.createElement(ce, {name: u || '""'}),
                  ':\xA0',
                  a.createElement(U, {object: l}),
                  s
                )
              ),
              s)
            )
              break
          }
        let i = r.constructor ? r.constructor.name : 'Object'
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            {style: t.objectDescription},
            i === 'Object' ? '' : `${i} `
          ),
          a.createElement('span', {style: t.preview}, '{', We(o, ', '), '}')
        )
      }
    },
    Ct = ({name: e, data: t}) =>
      typeof e == 'string'
        ? a.createElement(
            'span',
            null,
            a.createElement(ce, {name: e}),
            a.createElement('span', null, ': '),
            a.createElement(ie, {data: t})
          )
        : a.createElement(ie, {data: t}),
    wt = ({name: e, data: t, isNonenumerable: r = !1}) => {
      let n = t
      return a.createElement(
        'span',
        null,
        typeof e == 'string'
          ? a.createElement(ce, {name: e, dimmed: r})
          : a.createElement(ie, {data: e}),
        a.createElement('span', null, ': '),
        a.createElement(U, {object: n})
      )
    },
    xt = (e, t) =>
      function* (n) {
        if (!((typeof n == 'object' && n !== null) || typeof n == 'function'))
          return
        let i = Array.isArray(n)
        if (!i && n[Symbol.iterator]) {
          let u = 0
          for (let s of n) {
            if (Array.isArray(s) && s.length === 2) {
              let [l, c] = s
              yield {name: l, data: c}
            } else yield {name: u.toString(), data: s}
            u++
          }
        } else {
          let u = Object.getOwnPropertyNames(n)
          t === !0 && !i ? u.sort() : typeof t == 'function' && u.sort(t)
          for (let s of u)
            if (St.call(n, s)) {
              let l = oe(n, s)
              yield {name: s || '""', data: l}
            } else if (e) {
              let l
              try {
                l = oe(n, s)
              } catch {}
              l !== void 0 && (yield {name: s, data: l, isNonenumerable: !0})
            }
          e &&
            n !== Object.prototype &&
            (yield {
              name: '__proto__',
              data: Object.getPrototypeOf(n),
              isNonenumerable: !0,
            })
        }
      },
    Nt = ({depth: e, name: t, data: r, isNonenumerable: n}) =>
      e === 0
        ? a.createElement(Ct, {name: t, data: r})
        : a.createElement(wt, {name: t, data: r, isNonenumerable: n}),
    Lt = ({
      showNonenumerable: e = !1,
      sortObjectKeys: t,
      nodeRenderer: r,
      ...n
    }) => {
      let o = xt(e, t),
        i = r || Nt
      return a.createElement(Ze, {nodeRenderer: i, dataIterator: o, ...n})
    },
    It = ue(Lt)
  function Dt(e) {
    if (typeof e == 'object') {
      let t = []
      if (Array.isArray(e)) {
        let n = e.length
        t = [...Array(n).keys()]
      } else e !== null && (t = Object.keys(e))
      let r = t.reduce((n, o) => {
        let i = e[o]
        return (
          typeof i == 'object' &&
            i !== null &&
            Object.keys(i).reduce((s, l) => (s.includes(l) || s.push(l), s), n),
          n
        )
      }, [])
      return {rowHeaders: t, colHeaders: r}
    }
  }
  var Mt = ({rows: e, columns: t, rowsData: r}) => {
      let n = _('TableInspectorDataContainer'),
        o = _('TableInspectorLeftBorder')
      return a.createElement(
        'div',
        {style: n.div},
        a.createElement(
          'table',
          {style: n.table},
          a.createElement('colgroup', null),
          a.createElement(
            'tbody',
            null,
            e.map((i, u) =>
              a.createElement(
                'tr',
                {key: i, style: n.tr},
                a.createElement('td', {style: {...n.td, ...o.none}}, i),
                t.map((s) => {
                  let l = r[u]
                  return typeof l == 'object' && l !== null && Ke.call(l, s)
                    ? a.createElement(
                        'td',
                        {key: s, style: {...n.td, ...o.solid}},
                        a.createElement(U, {object: l[s]})
                      )
                    : a.createElement('td', {
                        key: s,
                        style: {...n.td, ...o.solid},
                      })
                })
              )
            )
          )
        )
      )
    },
    Pt = (e) =>
      a.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            top: 1,
            right: 0,
            bottom: 1,
            display: 'flex',
            alignItems: 'center',
          },
        },
        e.children
      ),
    Bt = ({sortAscending: e}) => {
      let t = _('TableInspectorSortIcon'),
        r = e ? '\u25B2' : '\u25BC'
      return a.createElement('div', {style: t}, r)
    },
    Ve = ({
      sortAscending: e = !1,
      sorted: t = !1,
      onClick: r = void 0,
      borderStyle: n = {},
      children: o,
      ...i
    }) => {
      let u = _('TableInspectorTH'),
        [s, l] = I(!1),
        c = S(() => l(!0), []),
        p = S(() => l(!1), [])
      return a.createElement(
        'th',
        {
          ...i,
          style: {...u.base, ...n, ...(s ? u.base[':hover'] : {})},
          onMouseEnter: c,
          onMouseLeave: p,
          onClick: r,
        },
        a.createElement('div', {style: u.div}, o),
        t && a.createElement(Pt, null, a.createElement(Bt, {sortAscending: e}))
      )
    },
    Ft = ({
      indexColumnText: e = '(index)',
      columns: t = [],
      sorted: r,
      sortIndexColumn: n,
      sortColumn: o,
      sortAscending: i,
      onTHClick: u,
      onIndexTHClick: s,
    }) => {
      let l = _('TableInspectorHeaderContainer'),
        c = _('TableInspectorLeftBorder')
      return a.createElement(
        'div',
        {style: l.base},
        a.createElement(
          'table',
          {style: l.table},
          a.createElement(
            'tbody',
            null,
            a.createElement(
              'tr',
              null,
              a.createElement(
                Ve,
                {
                  borderStyle: c.none,
                  sorted: r && n,
                  sortAscending: i,
                  onClick: s,
                },
                e
              ),
              t.map((p) =>
                a.createElement(
                  Ve,
                  {
                    borderStyle: c.solid,
                    key: p,
                    sorted: r && o === p,
                    sortAscending: i,
                    onClick: u.bind(null, p),
                  },
                  p
                )
              )
            )
          )
        )
      )
    },
    zt = ({data: e, columns: t}) => {
      let r = _('TableInspector'),
        [{sorted: n, sortIndexColumn: o, sortColumn: i, sortAscending: u}, s] =
          I({
            sorted: !1,
            sortIndexColumn: !1,
            sortColumn: void 0,
            sortAscending: !1,
          }),
        l = S(() => {
          s(({sortIndexColumn: h, sortAscending: y}) => ({
            sorted: !0,
            sortIndexColumn: !0,
            sortColumn: void 0,
            sortAscending: h ? !y : !0,
          }))
        }, []),
        c = S((h) => {
          s(({sortColumn: y, sortAscending: O}) => ({
            sorted: !0,
            sortIndexColumn: !1,
            sortColumn: h,
            sortAscending: h === y ? !O : !0,
          }))
        }, [])
      if (typeof e != 'object' || e === null)
        return a.createElement('div', null)
      let {rowHeaders: p, colHeaders: d} = Dt(e)
      t !== void 0 && (d = t)
      let f = p.map((h) => e[h]),
        E
      if (
        (i !== void 0
          ? (E = f.map((h, y) =>
              typeof h == 'object' && h !== null ? [h[i], y] : [void 0, y]
            ))
          : o && (E = p.map((h, y) => [p[y], y])),
        E !== void 0)
      ) {
        let h = (O, N) => (lt, ut) => {
            let Oe = O(lt),
              ve = O(ut),
              Te = typeof Oe,
              _e = typeof ve,
              Re = (z, Ae) => (z < Ae ? -1 : z > Ae ? 1 : 0),
              F
            if (Te === _e) F = Re(Oe, ve)
            else {
              let z = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6,
              }
              F = Re(z[Te], z[_e])
            }
            return N || (F = -F), F
          },
          y = E.sort(h((O) => O[0], u)).map((O) => O[1])
        ;(p = y.map((O) => p[O])), (f = y.map((O) => f[O]))
      }
      return a.createElement(
        'div',
        {style: r.base},
        a.createElement(Ft, {
          columns: d,
          sorted: n,
          sortIndexColumn: o,
          sortColumn: i,
          sortAscending: u,
          onTHClick: c,
          onIndexTHClick: l,
        }),
        a.createElement(Mt, {rows: p, columns: d, rowsData: f})
      )
    },
    Ht = ue(zt),
    jt = 80,
    Qe = (e) =>
      e.childNodes.length === 0 ||
      (e.childNodes.length === 1 &&
        e.childNodes[0].nodeType === Node.TEXT_NODE &&
        e.textContent.length < jt),
    Ut = ({tagName: e, attributes: t, styles: r}) =>
      a.createElement(
        'span',
        {style: r.base},
        '<',
        a.createElement('span', {style: r.tagName}, e),
        (() => {
          if (t) {
            let n = []
            for (let o = 0; o < t.length; o++) {
              let i = t[o]
              n.push(
                a.createElement(
                  'span',
                  {key: o},
                  ' ',
                  a.createElement('span', {style: r.htmlAttributeName}, i.name),
                  '="',
                  a.createElement(
                    'span',
                    {style: r.htmlAttributeValue},
                    i.value
                  ),
                  '"'
                )
              )
            }
            return n
          }
        })(),
        '>'
      ),
    $e = ({tagName: e, isChildNode: t = !1, styles: r}) =>
      a.createElement(
        'span',
        {style: Object.assign({}, r.base, t && r.offsetLeft)},
        '</',
        a.createElement('span', {style: r.tagName}, e),
        '>'
      ),
    kt = {
      1: 'ELEMENT_NODE',
      3: 'TEXT_NODE',
      7: 'PROCESSING_INSTRUCTION_NODE',
      8: 'COMMENT_NODE',
      9: 'DOCUMENT_NODE',
      10: 'DOCUMENT_TYPE_NODE',
      11: 'DOCUMENT_FRAGMENT_NODE',
    },
    Gt = ({isCloseTag: e, data: t, expanded: r}) => {
      let n = _('DOMNodePreview')
      if (e)
        return a.createElement($e, {
          styles: n.htmlCloseTag,
          isChildNode: !0,
          tagName: t.tagName,
        })
      switch (t.nodeType) {
        case Node.ELEMENT_NODE:
          return a.createElement(
            'span',
            null,
            a.createElement(Ut, {
              tagName: t.tagName,
              attributes: t.attributes,
              styles: n.htmlOpenTag,
            }),
            Qe(t) ? t.textContent : !r && '\u2026',
            !r &&
              a.createElement($e, {tagName: t.tagName, styles: n.htmlCloseTag})
          )
        case Node.TEXT_NODE:
          return a.createElement('span', null, t.textContent)
        case Node.CDATA_SECTION_NODE:
          return a.createElement(
            'span',
            null,
            '<![CDATA[' + t.textContent + ']]>'
          )
        case Node.COMMENT_NODE:
          return a.createElement(
            'span',
            {style: n.htmlComment},
            '<!--',
            t.textContent,
            '-->'
          )
        case Node.PROCESSING_INSTRUCTION_NODE:
          return a.createElement('span', null, t.nodeName)
        case Node.DOCUMENT_TYPE_NODE:
          return a.createElement(
            'span',
            {style: n.htmlDoctype},
            '<!DOCTYPE ',
            t.name,
            t.publicId ? ` PUBLIC "${t.publicId}"` : '',
            !t.publicId && t.systemId ? ' SYSTEM' : '',
            t.systemId ? ` "${t.systemId}"` : '',
            '>'
          )
        case Node.DOCUMENT_NODE:
          return a.createElement('span', null, t.nodeName)
        case Node.DOCUMENT_FRAGMENT_NODE:
          return a.createElement('span', null, t.nodeName)
        default:
          return a.createElement('span', null, kt[t.nodeType])
      }
    },
    Wt = function* (e) {
      if (e && e.childNodes) {
        if (Qe(e)) return
        for (let r = 0; r < e.childNodes.length; r++) {
          let n = e.childNodes[r]
          ;(n.nodeType === Node.TEXT_NODE &&
            n.textContent.trim().length === 0) ||
            (yield {name: `${n.tagName}[${r}]`, data: n})
        }
        e.tagName &&
          (yield {
            name: 'CLOSE_TAG',
            data: {tagName: e.tagName},
            isCloseTag: !0,
          })
      }
    },
    Vt = (e) => a.createElement(Ze, {nodeRenderer: Gt, dataIterator: Wt, ...e}),
    $t = ue(Vt),
    Yt = gt(yt()),
    et = ({table: e = !1, data: t, ...r}) =>
      e
        ? a.createElement(Ht, {data: t, ...r})
        : (0, Yt.default)(t)
        ? a.createElement($t, {data: t, ...r})
        : a.createElement(It, {data: t, ...r})
  function v() {
    return (
      (v = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      v.apply(this, arguments)
    )
  }
  function pe(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function A(e, t) {
    return (
      (A = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, o) {
            return (n.__proto__ = o), n
          }),
      A(e, t)
    )
  }
  function fe(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      A(e, t)
  }
  function k(e) {
    return (
      (k = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r)
          }),
      k(e)
    )
  }
  function de(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  }
  function me() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function M(e, t, r) {
    return (
      me()
        ? (M = Reflect.construct.bind())
        : (M = function (o, i, u) {
            var s = [null]
            s.push.apply(s, i)
            var l = Function.bind.apply(o, s),
              c = new l()
            return u && A(c, u.prototype), c
          }),
      M.apply(null, arguments)
    )
  }
  function G(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (G = function (n) {
        if (n === null || !de(n)) return n
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n)
          t.set(n, o)
        }
        function o() {
          return M(n, arguments, k(this).constructor)
        }
        return (
          (o.prototype = Object.create(n.prototype, {
            constructor: {
              value: o,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          A(o, n)
        )
      }),
      G(e)
    )
  }
  var T = (function (e) {
    fe(t, e)
    function t(r) {
      var n
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this
      else for (var o, i, u; u < o; u++);
      return pe(n)
    }
    return t
  })(G(Error))
  function tt(e, t) {
    return e.substr(-t.length) === t
  }
  var Jt = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  function rt(e) {
    if (typeof e != 'string') return e
    var t = e.match(Jt)
    return t ? parseFloat(e) : e
  }
  var qt = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px')
        var o = r,
          i = n
        if (typeof r == 'string') {
          if (!tt(r, 'px')) throw new T(69, t, r)
          o = rt(r)
        }
        if (typeof n == 'string') {
          if (!tt(n, 'px')) throw new T(70, t, n)
          i = rt(n)
        }
        if (typeof o == 'string') throw new T(71, r, t)
        if (typeof i == 'string') throw new T(72, n, t)
        return '' + o / i + t
      }
    },
    at = qt,
    tl = at('em')
  var rl = at('rem')
  function be(e) {
    return Math.round(e * 255)
  }
  function Xt(e, t, r) {
    return be(e) + ',' + be(t) + ',' + be(r)
  }
  function W(e, t, r, n) {
    if ((n === void 0 && (n = Xt), t === 0)) return n(r, r, r)
    var o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * t,
      u = i * (1 - Math.abs((o % 2) - 1)),
      s = 0,
      l = 0,
      c = 0
    o >= 0 && o < 1
      ? ((s = i), (l = u))
      : o >= 1 && o < 2
      ? ((s = u), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (c = u))
      : o >= 3 && o < 4
      ? ((l = u), (c = i))
      : o >= 4 && o < 5
      ? ((s = u), (c = i))
      : o >= 5 && o < 6 && ((s = i), (c = u))
    var p = r - i / 2,
      d = s + p,
      f = l + p,
      E = c + p
    return n(d, f, E)
  }
  var nt = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  }
  function Zt(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return nt[t] ? '#' + nt[t] : e
  }
  var Kt = /^#[a-fA-F0-9]{6}$/,
    Qt = /^#[a-fA-F0-9]{8}$/,
    er = /^#[a-fA-F0-9]{3}$/,
    tr = /^#[a-fA-F0-9]{4}$/,
    ge = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    rr =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    nr =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    ar =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function P(e) {
    if (typeof e != 'string') throw new T(3)
    var t = Zt(e)
    if (t.match(Kt))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      }
    if (t.match(Qt)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      }
    }
    if (t.match(er))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      }
    if (t.match(tr)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      }
    }
    var o = ge.exec(t)
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
      }
    var i = rr.exec(t.substring(0, 50))
    if (i)
      return {
        red: parseInt('' + i[1], 10),
        green: parseInt('' + i[2], 10),
        blue: parseInt('' + i[3], 10),
        alpha:
          parseFloat('' + i[4]) > 1
            ? parseFloat('' + i[4]) / 100
            : parseFloat('' + i[4]),
      }
    var u = nr.exec(t)
    if (u) {
      var s = parseInt('' + u[1], 10),
        l = parseInt('' + u[2], 10) / 100,
        c = parseInt('' + u[3], 10) / 100,
        p = 'rgb(' + W(s, l, c) + ')',
        d = ge.exec(p)
      if (!d) throw new T(4, t, p)
      return {
        red: parseInt('' + d[1], 10),
        green: parseInt('' + d[2], 10),
        blue: parseInt('' + d[3], 10),
      }
    }
    var f = ar.exec(t.substring(0, 50))
    if (f) {
      var E = parseInt('' + f[1], 10),
        h = parseInt('' + f[2], 10) / 100,
        y = parseInt('' + f[3], 10) / 100,
        O = 'rgb(' + W(E, h, y) + ')',
        N = ge.exec(O)
      if (!N) throw new T(4, t, O)
      return {
        red: parseInt('' + N[1], 10),
        green: parseInt('' + N[2], 10),
        blue: parseInt('' + N[3], 10),
        alpha:
          parseFloat('' + f[4]) > 1
            ? parseFloat('' + f[4]) / 100
            : parseFloat('' + f[4]),
      }
    }
    throw new T(5)
  }
  function or(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      o = Math.max(t, r, n),
      i = Math.min(t, r, n),
      u = (o + i) / 2
    if (o === i)
      return e.alpha !== void 0
        ? {hue: 0, saturation: 0, lightness: u, alpha: e.alpha}
        : {hue: 0, saturation: 0, lightness: u}
    var s,
      l = o - i,
      c = u > 0.5 ? l / (2 - o - i) : l / (o + i)
    switch (o) {
      case t:
        s = (r - n) / l + (r < n ? 6 : 0)
        break
      case r:
        s = (n - t) / l + 2
        break
      default:
        s = (t - r) / l + 4
        break
    }
    return (
      (s *= 60),
      e.alpha !== void 0
        ? {hue: s, saturation: c, lightness: u, alpha: e.alpha}
        : {hue: s, saturation: c, lightness: u}
    )
  }
  function C(e) {
    return or(P(e))
  }
  var ir = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t
    },
    Ee = ir
  function x(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function he(e) {
    return x(Math.round(e * 255))
  }
  function sr(e, t, r) {
    return Ee('#' + he(e) + he(t) + he(r))
  }
  function Q(e, t, r) {
    return W(e, t, r, sr)
  }
  function lr(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Q(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Q(e.hue, e.saturation, e.lightness)
    throw new T(1)
  }
  function ur(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? Q(e, t, r) : 'rgba(' + W(e, t, r) + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Q(e.hue, e.saturation, e.lightness)
        : 'rgba(' + W(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new T(2)
  }
  function ye(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Ee('#' + x(e) + x(t) + x(r))
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Ee('#' + x(e.red) + x(e.green) + x(e.blue))
    throw new T(6)
  }
  function ee(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var o = P(e)
      return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? ye(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? ye(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new T(7)
  }
  var cr = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    pr = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      )
    },
    fr = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    dr = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      )
    }
  function w(e) {
    if (typeof e != 'object') throw new T(8)
    if (pr(e)) return ee(e)
    if (cr(e)) return ye(e)
    if (dr(e)) return ur(e)
    if (fr(e)) return lr(e)
    throw new T(8)
  }
  function ot(e, t, r) {
    return function () {
      var o = r.concat(Array.prototype.slice.call(arguments))
      return o.length >= t ? e.apply(this, o) : ot(e, t, o)
    }
  }
  function R(e) {
    return ot(e, e.length, [])
  }
  function mr(e, t) {
    if (t === 'transparent') return t
    var r = C(t)
    return w(v({}, r, {hue: r.hue + parseFloat(e)}))
  }
  var nl = R(mr)
  function B(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function br(e, t) {
    if (t === 'transparent') return t
    var r = C(t)
    return w(v({}, r, {lightness: B(0, 1, r.lightness - parseFloat(e))}))
  }
  var al = R(br)
  function gr(e, t) {
    if (t === 'transparent') return t
    var r = C(t)
    return w(v({}, r, {saturation: B(0, 1, r.saturation - parseFloat(e))}))
  }
  var ol = R(gr)
  function hr(e, t) {
    if (t === 'transparent') return t
    var r = C(t)
    return w(v({}, r, {lightness: B(0, 1, r.lightness + parseFloat(e))}))
  }
  var il = R(hr)
  function Er(e, t, r) {
    if (t === 'transparent') return r
    if (r === 'transparent') return t
    if (e === 0) return r
    var n = P(t),
      o = v({}, n, {alpha: typeof n.alpha == 'number' ? n.alpha : 1}),
      i = P(r),
      u = v({}, i, {alpha: typeof i.alpha == 'number' ? i.alpha : 1}),
      s = o.alpha - u.alpha,
      l = parseFloat(e) * 2 - 1,
      c = l * s === -1 ? l : l + s,
      p = 1 + l * s,
      d = (c / p + 1) / 2,
      f = 1 - d,
      E = {
        red: Math.floor(o.red * d + u.red * f),
        green: Math.floor(o.green * d + u.green * f),
        blue: Math.floor(o.blue * d + u.blue * f),
        alpha: o.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e)),
      }
    return ee(E)
  }
  var yr = R(Er),
    it = yr
  function Or(e, t) {
    if (t === 'transparent') return t
    var r = P(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, {alpha: B(0, 1, (n * 100 + parseFloat(e) * 100) / 100)})
    return ee(o)
  }
  var vr = R(Or),
    st = vr
  function Tr(e, t) {
    if (t === 'transparent') return t
    var r = C(t)
    return w(v({}, r, {saturation: B(0, 1, r.saturation + parseFloat(e))}))
  }
  var sl = R(Tr)
  function _r(e, t) {
    return t === 'transparent' ? t : w(v({}, C(t), {hue: parseFloat(e)}))
  }
  var ll = R(_r)
  function Rr(e, t) {
    return t === 'transparent' ? t : w(v({}, C(t), {lightness: parseFloat(e)}))
  }
  var ul = R(Rr)
  function Ar(e, t) {
    return t === 'transparent' ? t : w(v({}, C(t), {saturation: parseFloat(e)}))
  }
  var cl = R(Ar)
  function Sr(e, t) {
    return t === 'transparent' ? t : it(parseFloat(e), 'rgb(0, 0, 0)', t)
  }
  var pl = R(Sr)
  function Cr(e, t) {
    return t === 'transparent' ? t : it(parseFloat(e), 'rgb(255, 255, 255)', t)
  }
  var fl = R(Cr)
  function wr(e, t) {
    if (t === 'transparent') return t
    var r = P(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, {
        alpha: B(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      })
    return ee(o)
  }
  var dl = R(wr)
  var xr = j.div({
      display: 'flex',
      padding: 0,
      borderLeft: '5px solid transparent',
      borderBottom: '1px solid transparent',
      transition: 'all 0.1s',
      alignItems: 'flex-start',
      whiteSpace: 'pre',
    }),
    Nr = j.div(({theme: e}) => ({
      backgroundColor: st(0.5, e.appBorderColor),
      color: e.color.inverseText,
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: 1,
      padding: '1px 5px',
      borderRadius: 20,
      margin: '2px 0px',
    })),
    Lr = j.div({flex: 1, padding: '0 0 0 5px'}),
    Ir = ({children: e, className: t}) =>
      a.createElement(ze, {horizontal: !0, vertical: !0, className: t}, e),
    Dr = j(Ir)({margin: 0, padding: '10px 5px 20px'}),
    Mr = ke(({theme: e, ...t}) =>
      a.createElement(et, {
        theme: e.addonActionsTheme || 'chromeLight',
        table: !1,
        ...t,
      })
    ),
    Pr = ({actions: e, onClear: t}) =>
      a.createElement(
        Ne,
        null,
        a.createElement(
          Dr,
          null,
          e.map((r) =>
            a.createElement(
              xr,
              {key: r.id},
              r.count > 1 && a.createElement(Nr, null, r.count),
              a.createElement(
                Lr,
                null,
                a.createElement(Mr, {
                  sortObjectKeys: !0,
                  showNonenumerable: !1,
                  name: r.data.name,
                  data: r.data.args || r.data,
                })
              )
            )
          )
        ),
        a.createElement(Be, {actionItems: [{title: 'Clear', onClick: t}]})
      ),
    Br = (e, t) => {
      try {
        return D(e, t)
      } catch {
        return !1
      }
    },
    Fr = class extends xe {
      constructor(e) {
        super(e),
          (this.handleStoryChange = () => {
            let {actions: t} = this.state
            t.length > 0 &&
              t[0].options.clearOnStoryChange &&
              this.clearActions()
          }),
          (this.addAction = (t) => {
            this.setState((r) => {
              let n = [...r.actions],
                o = n.length && n[0]
              return (
                o && Br(o.data, t.data)
                  ? o.count++
                  : ((t.count = 1), n.unshift(t)),
                {actions: n.slice(0, t.options.limit)}
              )
            })
          }),
          (this.clearActions = () => {
            let {api: t} = this.props
            t.emit(te), this.setState({actions: []})
          }),
          (this.mounted = !1),
          (this.state = {actions: []})
      }
      componentDidMount() {
        this.mounted = !0
        let {api: e} = this.props
        e.on(V, this.addAction), e.on(J, this.handleStoryChange)
      }
      componentWillUnmount() {
        this.mounted = !1
        let {api: e} = this.props
        e.off(J, this.handleStoryChange), e.off(V, this.addAction)
      }
      render() {
        let {actions: e = []} = this.state,
          {active: t} = this.props,
          r = {actions: e, onClear: this.clearActions}
        return t ? a.createElement(Pr, {...r}) : null
      }
    }
  function zr() {
    let [{count: e}, t] = Me(L, {count: 0})
    return (
      Pe({
        [V]: () => {
          t((r) => ({...r, count: r.count + 1}))
        },
        [J]: () => {
          t((r) => ({...r, count: 0}))
        },
        [te]: () => {
          t((r) => ({...r, count: 0}))
        },
      }),
      a.createElement(
        'div',
        null,
        a.createElement(
          He,
          {col: 1},
          a.createElement(
            'span',
            {style: {display: 'inline-block', verticalAlign: 'middle'}},
            'Actions'
          ),
          e === 0 ? '' : a.createElement(Fe, {status: 'neutral'}, e)
        )
      )
    )
  }
  re.register(L, (e) => {
    re.add(Ce, {
      title: zr,
      type: De.PANEL,
      render: ({active: t}) => a.createElement(Fr, {api: e, active: !!t}),
      paramKey: Se,
    })
  })
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
