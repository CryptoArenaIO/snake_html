/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7212:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4820:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4655:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7885:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6755:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2580:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(5829);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(886);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(3843);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(1841);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9528);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(8306);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(1407);
;// CONCATENATED MODULE: ./src/utils/wagmi.ts









// export const bsc = {
// 	id: 56,
// 	name: 'BSC',
// 	network: 'Bsc',
// 	// rpcUrls: {
// 	//   default: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	//   public: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	// },
// 	rpcUrls: {
// 		public: 'https://bsc-dataseed1.binance.org',
// 		default: 'https://bsc-dataseed1.binance.org',
// 	  },
// 	// rpcUrls: {
// 	// 	default: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	// 	public: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	//   },
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'BNB',
// 	  decimals: 18,
// 	},
// }

// export const bscTest = {
// 	id: 97,
// 	name: 'BSCTest',
// 	network: 'BSCTest',
// 	rpcUrls: {
// 	  default: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	  public: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	},
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'tBNB',
// 	  decimals: 18,
// 	},
// }

// const getNodeRealUrl = (networkName) => {
// 	let host = null

// 	switch (networkName) {
// 	  case 'homestead':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
// 		  host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
// 		}
// 		break
// 	  case 'rinkeby':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY) {
// 		  host = `eth-rinkeby.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY}`
// 		}
// 		break
// 	  case 'goerli':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
// 		  host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
// 		}
// 		break
// 	  default:
// 		host = null
// 	}

// 	if (!host) {
// 	  return null
// 	}

// 	const url = `https://${host}`
// 	return {
// 	  http: url,
// 	  webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
// 	}
// }

// export const { provider, chains } = configureChains(CHAINS, [
// 	publicProvider()
// ])

// export const { chains, provider } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	// [publicProvider()],
// 	[
// 		jsonRpcProvider({
// 			rpc: (chain) => {
// 				// if (chain.id === bsc.id) {
// 				// 	console.log('kkkk')
// 				// 	return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 				// }
// 			//   if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
// 			// 	// return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 			//   }
// 			//   return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default }
// 			},
// 		}),
// 	],
// )

// const CHAINS = [
// 	bsc,
// ]

// export const { provider, chains } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	[publicProvider()],
// )

var _configureChains = (0,chunk_GISSYJN5/* configureChains */.QB)([chains_dist/* bsc */.eG
  //   bscTestnet,
  ], [(0,providers_public/* publicProvider */.I)()]
  // [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()],
  ),
  provider = _configureChains.provider,
  chains = _configureChains.chains;

var CHAIN_IDS = chains.map(function (c) {
  return c.id;
});
var isChainSupported = memoize_default()(function (chainId) {
  return CHAIN_IDS.includes(chainId);
});
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(2724);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(8431);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(5078);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 7 modules
var i18next = __webpack_require__(8028);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(1072);
;// CONCATENATED MODULE: ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(4130),
  },
  zhCN: {
    translation: __webpack_require__(6361),
  },
  zhTW: {
    translation: __webpack_require__(3600),
  },
  ptBR: {
    translation: __webpack_require__(3501),
  },
  frFR: {
    translation: __webpack_require__(216),
  },
  jaJP: {
    translation: __webpack_require__(8491),
  },
  koKR: {
    translation: __webpack_require__(9233),
  },
  trTR: {
    translation: __webpack_require__(6522),
  },
  viVN: {
    translation: __webpack_require__(995),
  },
  mlNP: {
    translation: __webpack_require__(4473),
  },
  tgAP: {
    translation: __webpack_require__(264),
  },
}
i18next/* default.use */.ZP.use(dist_es/* initReactI18next */.Db).init({
  resources,
  // fallbackLng: 'en',
  lng: "en",
  // debug: true,
  // interpolation: {
  //   escapeValue: false,
  // },
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(9730);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(5286);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(228);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(6265);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(8730);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(9307);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(3582);
;// CONCATENATED MODULE: ./src/hook/useSessionChainId.ts

var sessionChainIdAtom = (0,esm/* atom */.cn)(0);
var useSessionChainId = function useSessionChainId() {
  return useAtom(sessionChainIdAtom);
};
;// CONCATENATED MODULE: ./src/hook/useWallet.ts








// import { useRouter } from 'next/router'


function useConnectWallet() {
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  return connect;
}
function useGetOwnAddress() {
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  return {
    address,
    isConnected
  };
}
var queryChainIdAtom = (0,esm/* atom */.cn)(-1);
queryChainIdAtom.onMount = function (set) {
  var params = new URL(window.location.href).searchParams;
  var c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
;// CONCATENATED MODULE: ./public/images/logo.jpg
const logo_namespaceObject = __webpack_require__.p + "6e7e059a5361bd6369f0.jpg";
;// CONCATENATED MODULE: ./public/images/lanu.png
const lanu_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAhBJREFUSEu1lU2IjnEUxX+HkJpirEQyGCNEyUqaNTN2s8QgRT7Lhh2LsTMb5atImXws7cwMW8lKilAzyCSyIjUlZK6O7qPH6x2ed3j/q7f3uffc+z/n3PsXFU9EzARagHFJX6qkabKgiPC3zcBWoBNYXIodA+4CN4BhSVEPpy54RGwAzgHrKnT4EDgo6X5t7G/gEXEIOA1MB94B54FNwEbAHTrnHnAbOADMB74BRySdLRf4BTyBz2RAP9AH9AADwHugCxgC5gE7gZvACeBo5hwuF/gJnlSYR3e8V9KlFPE5sAjYJWkgIgx6BXgNtFvciNgDXMwbdBYU/QBP8R4kx/2SjuX/FvM6MAKslDQREdOAZ0AHsE2SRTXGqbyBNVhvkQtwX3cwOV4uaTwTbgHd5lbShYLPiNifWgxK2pKxtuloatAtaagAvwpsN3+STmbwDOAjMBtYKOltCXwB8Ab4BMyR9DVzjqdO1yT1FuCv0sdrJT3OwFXAE+CFpPZam0WEtVgGrJb0NHPWAI+AMUltStE+Z7K7nsjfS4FewIXtltpjYdsA3/plfrQe7t5nlsHnAh8qDEujIa3/0vkOYMkfO0+upsK5nWEtJuc8wZvqlkZ9vg+w7yv53JZsZEJtvRWVJjSp8Zqtslt2A5cr75bS5Hnd/m0r3vFUNrQVawr8/31eKtCcl6hUoDlvaL05n8rr/x2SzD46QBsjRgAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/lanu-m.png
const lanu_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAABFBJREFUSEuNlmmo1lUQh59pX6igAtv3BSIqqIgWqA+2UJpK2YahkG0EaWZpmZllRWrZBi1Em1bYRju0UB+CLG2DgrCwfY8iKypbnHhe5i//+9773tuBy33vuec9c2bmN89MMMjKzA2AYcBBwLHAgcBOwIbAH8CnwJvAs8BS4LuIcH/AFb3+kZn7A6eXkbWArYC/gZeAw4FXgOHA+sC3QJbRRRHhA/qtfsYyc13gfOAC4BtgDrALcBFwFvA58DBwArAzcCcwH1gBXAZsDSwAbo4IH7dm9TGWmZvWF8bXhZcDnnkLuAu4rgw/BRxXYfQRZwMHAKuBK4GTgfv9HBG/NNbWGCuPrgbGATOBeyJidWbqmXtHR8TyzNwD6BiLiBWZuTvwPPBQRMzITEM+AbgKeACY0XjYNnYhoDGXyTYU7wDPAa8DE8t4tzEvvwM4FDgG2AeYAhxSd82MiHl+7hgrMTwJPAY8U57tCawHbALcCjwO/ABsD9xW+fsa2AIYU3n+FfgHWA5cYzSAscDoiFgWJW9zcTBwVET8nJlKW7n7QvffLTW6r4AUgeJRAEpdNe5XETAiSyyBzNwMeKH2p2tsR+BFYGpEmIvOqkfcCGwJnANYcxrarcI2EfikDP4J3A78CExu11pmjqyUDNfYScAlwIiI+KplbPNS1KsRoefNI/rkrLWvKo+wNiPip9b+NsDTwFyN3Qf8Zcy7XmSozOOcLo97GRsBzAKOjwhD3DzO0N8kdTT2HrCoYzlCCjSHdihajIsI1TmUZ6LsQakSEZ+1zitCvR6vMeN8PfBoc6B+b1thlBrSoVmy0fycCXzR2t+1aCIQvuy660Rgmsb+Bb4HVnYdUAx654WGuVmWw3a138aR+5aFOOuDKUAyDWs8k23yrr288N5CUbdn8lA1enGz9Mzilh7dnllrHc/M2UJgXlfOLAkJPzYirLOhcrZvpaJXziY0alwFTBpAjdbdrIgQWUMZs9/NBkZFhGRpzvdR4ymllpFdh5o6ezkibvgfxiYDRw5SZ/P1THVJkCkRYfG1XyRBZON51Z0bgjQ5+7hFkFuA3wYgiPXnPR2C6KaEkIWycWW1G+tmKnAY8EbxUFXZmRs2qlL7lWy0n9kdFNvSiFhVbLT9LAMubqjvQWmxGHiiqL83sBGwcTVOqW8urD+pb8OUFOJodHWB3wF/PqgOr1ficIxgaPczq9yGZ7d9vxCjR4rkNS8bop8ZgVE1FNkb96qMKLAOW7s79bU15FwK3G0pZKZ96dTq1B/26NS2kcURMT0zvfOM6mdicFq/Tq3lmkGcO5yq5NwVwDrA21Wwc3vMIOcCTmOSQxifViPB7AFnkJYKVdykmq7MkTOIdFAsclLIPtI1XVkaH9WwZA6l/IJBp6s2qzJTNTZzo/xUGBa/VLFvOTdaVzZV8bR2zSsLHQG60Nf5s+eQWmG1LJyIHQ0c3ZqJWO81LBttPxJmyVAT8X/Q1OrUW8CXvwAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/wallet.png
const wallet_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAA1CAYAAADYrdBuAAAAAXNSR0IArs4c6QAABpNJREFUeF7tnXtsU1Ucx7/n9rF1a8te3cYegbjEGGMAQU00iJgYiRJJ+AMJDzEM4yNRfM+ohMQHicY//cN/RCESY0yMhkeAkCjGYWQwBopOBTZgY2Gs27q2621v773HnHPXtexBTCDZ6fo7yf643dZ+f5/zza+/c+95MEzTAoGyVbDZUjC2BODzAVQAcAPwT/c/9DoRuAkCcQAmgCGAXQTn7dB4aywW2TvVe7KJL/r9Zds1sNUcWHQTIuhficAtIcCBUwD/Ph6PfJj7huPG9fkq610ueycDVog/2LjcjU0rfWhq8iJY4YXH5wIYg+bVbokgehMikEvANmyAc6R1C9EhAxcuGNh1QMfXR0USBsBwyLJcWxKJcJ9zCaCqqiqQTFo/MWDJ/Xdo+GpHBaqbSoksEZhxAtfOx7GhZRDHuwAOtPt87uUDAwNxaVy/v3wPAzasW+bGZ5/UQityzbhgEkAEMgRGj13Cy59b+LZDfOtjTyw2/BQLllTeyzW7LTSHoXPfXHiDHiJGBJQioB+/jGS/jsUfF2NwFGC2dh8TgzEG9t7uFh9Wr69WSjCJIQKCgDCuNZzEwbMubNnjFiXDNhb0lx3hYI+c/66K6lryiZIEMsYNRzgWfFQsjHuYBfzlPQAaBn+pgydAZYKSPVfgojLGTRsc87YXi1FatzDuCIBgpK0BmpcGZQXuESXDzxiX2xz17xQLjVFh3CiAABlXyT4jUaLGbXNqXGnct7PG5dLCp+cRJCKgJAG9rQdWRJc3cuveKhIaUyLjknGV7C4SlSEwblwAdS3SuCDjkj+UJ6Cf6IUtMi6AuW96ybjK9xgJlAT0k1eyxn3DufNFGZfMoTwBvT3HuK+TcZXvMBLoENBPCeMmnVLhNTElnDIueSMPCOin+mCPjBn3VedZA5UKedBxhS4x2ZE1bu0rZNxC90PexJ8UGTfuZNzarWTcvOm4QhbKTRv6b5cBWz5uQO1WZwUOlQqF7Io8iD19OQLxk2m1L8q1D1wYNwHAN3KyEcxN68nyoC8LRqI1lEDq77DwqYyZWxxzX5LGlZNsnNlhJxqheci4BeMKlQMViyb7Ykj3RAA7K9QxrrzOGvf/TLLhlliJqXLEpC1vCdgcPGnCGknCHBgFN8ZW9+YGxIHaF5ypNSLjCk+z6Yxr62mYV+PykRtPW3nLhYTPAgIcqHlOpmBrfHA2qcYV6bo3CrM/Rll2FvT5bAhBlAq1zzu1w3jGnWhco3sI1pAzI4caEVCBgDTus/JbX2ZcOTjLLRVEWWB0DauglTQQgesIVDenpx+cGecGYcdThIwIKEegenPWuPI+bm7GTf5+Ve7jRI0IqEag+mljPONOWrqTEsalRgQUJBDaJCsB+eRssnHP9isomSQRASC00ZlsM7Vx/7pGjIiAkgRC6507XVMbt5OMq2SvkSiE1t3AuMY/A4SICChJoGqtuJcwTcY1/hUzcqgRAfUIVD05egPjnhtUTzEpIgJi9/w14oyT6TLuBTIuuURBAjZH1ZoJGXekrQFsbLdGo2tIQdUkqdAJiGU8oYmlwnXG7SbjFrpJVIxfGndixh1urYPL7+wSYlyiCTYqdlyha7ISJmrWybsKcrdGuT9u/74K+BoDkk3u4rRCh0Xxq0MgOZBC/Rb55Cy7dKf7Uw8qH6xzjNsjZjpSIwJqEYh0RtDUIjVJ48ozII41x3Dn5tvhCnjlygdqREAlArZuonN/H5btDjhnQGRO3dn1RBwPL/ag7PEmmGHnlgM1IqACAZ62ET/Zjx87TDQf8Dun7mTOOdu8MIl3H9DhCnpRuiAEd7mz8zM1IjCTBNJhHYk/wrDiaez41Ycvz8jjoraNnyxZ4uE4uDaK+oCzGM0dKkFRXaksHVixa3zPBUZ7L8xkP87azxZZVTTbsGCnbFjRFIy+UZhhZ1JNb0zDY98EoZvMOVlSvJg5y3dhjYkvVsYxp4hWP8xah+RhYCMphub9fpy55s6e5SviGDs9/SgDFjcGbXzwUAJLG+TaHmpEYEYJtPZ6sO3nEvRGtcmnpwtlPl9lvctl72TACnF9d42JR29L466QiYaAjWARh9harNRD2XhGe3KWfvhomsG0AZFdhUn/DLtxuMuD0/3ODuRgOGSa2jO6PnjFuZzQxGBNA1vNgUWzlBGFlUcEGNBhg/8Qj0fez5U9ybiZXwYCZatgs6VguAcc88FQLsZsoiTOo7hJav4QEPMVxYZhQwC7CM7bofHWWCyyd6oQ/gOyz7ElmaGpaQAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/components/header/index.jsx

var _templateObject;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */













var CustomStyle = styled_components_browser_esm/* default */.ZP.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t.header_container {\n\t\tdisplay: flex;\n\t\ttransition: all 0.3s ease 0s;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tposition: absolute;\n\t\ttop: 50px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 95%;\n\t\theight: 80px;\n\t\tz-index: 99;\n\t\tpadding: 30px 30px 38px;\n\t\tflex-direction: row;\n\t\t-webkit-box-pack: justify;\n\t\tjustify-content: space-between;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t}\n\t.header_left {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 80px;\n\t\ta {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.header_logo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\timg {\n\t\t\twidth: 200px;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n\t.header_nav {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 36px;\n\t}\n\t.header_navLink {\n\t\tdisplay: flex;\n\t\tpadding: 8px;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 6px;\n\t\tuser-select: none;\n\t\tflex-direction: row;\n\t\twhite-space: nowrap;\n\t\tfont-size: 15px;\n\t\tcolor: #fff;\n\t\ttext-shadow: 2px 0px 0px #25317A;\n\t\tfont-weight: bold;\n\t\t&:hover {\n\t\t\tcolor: #ffb400;\n\t\t}\n\t}\n\t.header_gameLink {\n\t\t&:hover {\n\t\t\tcolor: #ffb400;\n\t\t}\n\t\tspan {\n\t\t\ta {\n\t\t\t\tcolor: #616161;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ta {\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.header_more {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\t}\n\t\tsvg {\n\t\t\twidth: 10px;\n\t\t\tpath {\n\t\t\t\tfill: rgb(240, 220, 192);\n\t\t\t}\n\t\t}\n\t}\n\t.header_more_down {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\ttransform: rotate(180deg);\n\t}\n\t.header_out {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tbackground: rgb(199, 100, 61);\n\t\tbox-shadow: rgb(114, 64, 81) 0px 8px;\n\t\tposition: absolute;\n\t\tborder-radius: 0px 0px 16px 16px;\n\t\tz-index: 2;\n\t\ttop: 100%;\n\t\tleft: 0px;\n\t\tpadding: 16px;\n\t\tgap: 24px;\n\t}\n\t.header-right-flex {\n\t\tdisplay: flex;\n\t}\n\t.header-right-one {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\timg {\n\t\t\theight: 20px;\n\t\t\tmargin-right: 28px;\n\t\t}\n\t}\n\t.header-wallet {\n\t\tbackground: url(", ") no-repeat;\n\t\twidth: 174px;\n\t\theight: 53px;\n\t\tline-height: 53px;\n\t\ttext-align: center;\n\t\tcolor: #3E0E00;\n\t\tfont-weight: bold;\n\t\tfont-size: 14px;\n\t\ttransition: transform 0.2s ease 0s;\n\t\tmargin-left: 40px;\n\t\tcursor: pointer;\n\t}\n\n\n\t@media (max-width: 1700px) {\n\t\t.header_logo {\n\t\t\timg {\n\t\t\t\twidth: 200px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1650px) {\n\t\t.header_container {\n\t\t\twidth: 100%;\n\t\t\tmin-width: 1200px;\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.header_left {\n\t\t\tgap: 20px;\n\t\t}\n\t\t.header_nav {\n\t\t\tgap: 5px;\n\t\t}\n\t\t.header-right-one {\n\t\t\timg {\n\t\t\t\tmargin-right: 18px;\n\t\t\t}\n\t\t}\n\t\t.header-wallet {\n\t\t\tmargin-left: 20px\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.header_left {\n\t\t\tgap: 0px;\n\t\t}\n\t\t.header_nav {\n\t\t\tgap: 0px;\n\t\t}\n\t\t.header_navLink {\n\t\t\tpadding: 5px;\n\t\t\tfont-size: 13px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t\n\t}\n"])), wallet_namespaceObject);
function Header() {
  var _i18n$language, _i18n$language2, _i18n$language3, _i18n$language4;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var _useGetOwnAddress = useGetOwnAddress(),
    address = _useGetOwnAddress.address,
    isConnected = _useGetOwnAddress.isConnected;
  var connectWallet = useConnectWallet();
  var _useState = (0,react.useState)(false),
    moreShow = _useState[0],
    setMoreShow = _useState[1];
  var _useState2 = (0,react.useState)(false),
    menuMShow = _useState2[0],
    setMenuMShow = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    menuLanuShow = _useState3[0],
    setMenuLanuShow = _useState3[1];
  var handMouseEnter = function handMouseEnter() {
    setMoreShow(true);
  };
  var handMouseLeave = function handMouseLeave() {
    setMoreShow(false);
  };
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "cryptobit_nav_manu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_nav"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, "Home")), /*#__PURE__*/react.createElement("div", {
    className: "langu_conter header_gameLink"
  }, "Games", /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/cryptoSnake"
  }, "CryptoSnake")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, "CryptoBumb"))))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, "Clubs")), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, "Market")), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, "Defi")))), /*#__PURE__*/react.createElement("div", {
    className: "header-right-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-right-one"
  }, /*#__PURE__*/react.createElement("div", {
    className: "langu_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: lanu_namespaceObject,
    alt: ""
  }), ((_i18n$language = i18n.language) == null ? void 0 : _i18n$language.toUpperCase()) === 'EN' && 'English', ((_i18n$language2 = i18n.language) == null ? void 0 : _i18n$language2.toUpperCase()) === 'ZHTW' && '繁體中文', /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587"))))), /*#__PURE__*/react.createElement("div", {
    className: "header-wallet"
  }, isConnected ? /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : '') : /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet')))))), /*#__PURE__*/react.createElement("div", {
    className: "d-md-block d-lg-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-right"
  }, isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet')))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu mean-container mean-conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean-bar",
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, !menuMShow ? /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal"
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)) : /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal meanclose"
  }, "X"))))), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_nav"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Games'))), /*#__PURE__*/react.createElement("span", {
    className: "menu_m_lan"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, null, /*#__PURE__*/react.createElement("img", {
    src: lanu_m_namespaceObject,
    alt: "",
    className: "nav_menu_lan"
  }), ((_i18n$language3 = i18n.language) == null ? void 0 : _i18n$language3.toUpperCase()) === 'EN' && 'English', ((_i18n$language4 = i18n.language) == null ? void 0 : _i18n$language4.toUpperCase()) === 'ZHTW' && '繁體中文'), /*#__PURE__*/react.createElement("em", {
    className: "menu_flex_em"
  }, "+")), menuLanuShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_m_xzol",
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587"))))));
}
/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3964);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(9749);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(6544);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(8373);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(6793);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(7629);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(7509);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(7522);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(3374);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4043);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(2462);
;// CONCATENATED MODULE: ./src/hook/_isMobile.ts


function _isMobile() {
  var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
// EXTERNAL MODULE: ./node_modules/.store/@tonconnect+ui@2.1.0/node_modules/@tonconnect/ui/lib/index.mjs + 2 modules
var lib = __webpack_require__(4047);
;// CONCATENATED MODULE: ./src/components/index/comm1.jsx













var comm1_templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function comm1_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






var comm1_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm1_templateObject || (comm1_templateObject = comm1_taggedTemplateLiteralLoose(["\n\tmargin-top: 200px;\n"])));
var tonConnectUI = new lib/* TonConnectUI */.HF({
  manifestUrl: 'https://queengame.io/tonconnect-manifest.json'
});
function Comm1() {
  var _useState = (0,react.useState)(''),
    address = _useState[0],
    setAddress = _useState[1];
  (0,react.useEffect)(function () {
    tonConnectUI.onStatusChange(function (walletInfo) {
      console.log("walletInfo===>", walletInfo);
      if (walletInfo && walletInfo.account) {
        setAddress(walletInfo.account.address);
      }
    });
  }, []);
  var handleConnect = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return tonConnectUI.connectWallet();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSendTx = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (address) {
              _context2.next = 3;
              break;
            }
            alert('请先连接钱包');
            return _context2.abrupt("return");
          case 3:
            _context2.next = 5;
            return tonConnectUI.sendTransaction({
              validUntil: Math.floor(Date.now() / 1000) + 60,
              messages: [{
                address: address,
                // 给自己打测试币
                amount: '10000000' // 0.01 TON
              }]
            });
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleSendTx() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, "home1", /*#__PURE__*/react.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/react.createElement("h1", null, "Telegram Wallet \u63A5\u5165 Demo"), /*#__PURE__*/react.createElement("button", {
    onClick: handleConnect
  }, "\u8FDE\u63A5\u94B1\u5305"), address && /*#__PURE__*/react.createElement("p", null, "\u5DF2\u8FDE\u63A5\u94B1\u5305\u5730\u5740: ", address)));
}
/* harmony default export */ const comm1 = (Comm1);
;// CONCATENATED MODULE: ./public/images/footer_bg.png
const footer_bg_namespaceObject = __webpack_require__.p + "049d2000f7d7b8dacf3c.png";
;// CONCATENATED MODULE: ./public/images/footer_github.png
const footer_github_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAA6FJREFUWEetl2vIZmMUhq9bzkohyjhmwhfJaQZNOeQw8kMzDplIEiPUiAyFHIpkaEwOP6ZGGdSEyOkHf8wYIUxiFDEhJFJOn+SUw637nWdPe55vv+873vdbP/fez7qevZ51r7UesYVm+xhgPjALOAjYFRDwHfAp8BbwkqQ3t9Blb/FAsx3gbcDhBTZsyfvA3cBTkv4e9HFfuO39gIeBk4fR+rx/D7hS0tv91nfCbZ8OrAJ2GxHcLPsLuEVSIjHFpsBtnwk8CewwJri9fEWJwr/th5vBbc8BXp5mcMNbIenyTrjt3YH1wIzWB58kcYAcw9H/IxJ/AGuBdcB1wI5l7c2S7mz8bPpz2znjCyrApo9tHw/cDxwMfF7k9SdgYBfgQGAv4HngRkmfxZft1a2kTfaf0MixBy8ajk7rHJgvKc56ZntbYCdJP3VFwfYMSd+039leDlzRevZhZCvpnwb+ApBEq+08SQn7yGY7yXZZ5eBCSauU3ZYw5q9qWyZp8cjkjdGKzlMd27ZO0rGBLwQe6gD8DBwq6esx4WcAL1Y+kieHBf4EsKADcJekm8YBt3Ll1SRa5euawN8FjuyAzJb0zjTBrwXurXz1zjxhbWu7l9jA3nXmjroR22cBz1Tr1waegrBd9SI1ObL5flRge53tecBzla/1gf/aqkDt9xOSNkwT/GJgZRc81Wr/Dsg8SdH/2GZ7KVBLdnX+PI3klA7CSkmXjEu2vRWQqjZR+Xo08HuA6zsgvxWdfzHOBmyfAzzd4WNR4CcBr/QBRGpz+9XyYZuyfUCZ7dIxN8tB4KjAtwbSOptzTwJGAc0U8zGwCFgjKRIcaqUBXQQs6TMNbZA00TSWq4H7ite0wHOBs4EHW0pIr0+EXgeerTdie+fSko8DTi3ttd9G03KXNPA0+4+AfcvXqXrp35cCD1QelkqakiO2UyteA2YPCc2PwExJk+1hIi21La07JN1aZHIVkK6XJJwlKRudYrbTOtNCB9liScvyQT3Dpf6mDsd+iDxS5WzPBPbI9CIpl4ROsx3JRrr97A3gxAwSXfBtgMeByCOWXrxQ0gdDs2xj7x6knC+BOe1+0TU6J7yPAOcXYOauLPwWiGSOkPR7n7D3g38FnFaX60E3lhvKNWn7FmgS2FNSpNh15l3wqGNBV4cceFezfUjpw3OBlMlfcvYD4LlaRaqx5MbtwPLmjOvdDr0oZkGZbpPJk10ya5za3qfUhjXAY5HToFz5D/OQW6M5HnxhAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./public/images/footer_twimg.png
const footer_twimg_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAAAXNSR0IArs4c6QAABB5JREFUSEutl2nIlVUUhZ/VbEVU9KOkedAsLafKFCsDwzT8148oygqywUgroky0lIqQyoomglDI/kaoDRZNNBllszYQgVGJCFY0mdWO9bHfj3Pv9773ftc6v+7wvmedvfbaa++jiHgaOJfmtRk4WdJPHZ5p/Csi9gPeAo4FVgPnKyIOAr4ADgS2A7sVO+wCCFghadZOgj4HTAM+BCZI2u4NiYgLgKeA94DJwK4JcCawJj9Pk/RCL8ARsRS4EfgBOEXSd36/DzSBVwHnAfMl3VX8/igwG/gWOEHSL4MBjohLgOXAn8AkSQ6ob5WghwAbgX2AUZI+z8P4+2fAEcBjkq7sBhoR4zOPuwOzJK0o3+kHTYBLgSeA9ZLGFdFOAV7O71MkvdoEHBGHAu8CDmKppJvan20BTeC1wFTgVkl3FsCPAI7yG+BESb+3bxYRewLvAKOB5yXVVkUd6GFJszdwqWzIw+ydNB8J3C9pbg2oxWhROjWnSfq5jpEBoAngiBzZemC8pMjfzwJeyY0mSnq7YGI+cAewLZX6dVMKakETwHlzySyQ5M0qlT8MXAV8CYyUtCMiZgLP5CNnS6oOVovbCfTopNNmMVqSFeyaNs2fAkcBzvlKYB2wL3CdpAe6qbsRNAGct/uAD4BxBc1mwEz8AWwFrNjHJV3RDbClTjuUgH3zdGChpCUFzQ8BV+d3l9NUSf/8X6DDkk778BhJnyQLQ/J3p2GJpIWDARxUpAlwM2Br/CiBKzWfAbwG/J15d667ro45Ld+OiPeBscAiSYsLmh8E5riLSBrTFbH03m4PR8TIVKlNY6ykj5OFvVLlprmlWfRcp+0vRIRLwmZxHGBA57dPOBHhdvg6sCObhftz4+qF3qr1VZvdJun2gmbX57VmQ9KE/wwaETaBW4AtHjeyRi0m02xxOVrTbgM5Brhekuu7dnWNNCIuBJ5M6iZLWhcRVrIV7fIxzVavgScBb6Rp2CJr/bebI1mNNnVHcbkk91pvbmt0VK7hxZIWFTQvsx06x5LsXANWJ+91E/aIMRRYJmleWwk5bz6QxdRE8zWS3CBaVlNr85jhZuy6fEmSm/qAFRHOm/3ZpuDeW6l5IvAm8BswQtKm8uUmUM80FwNfAadK+rEBtKzRFissDjTg0HWTg2eauwEP1wZ032xcEVFZYaVmz7fO+x6Zdw/Z/Xrwf+2D2fRizj1H0oudAAvxVI3do81JhZrdndylPLaY5u9bQCPi+LQ5XwNukHTvYAAzKo+pBjzcI4ukBcWB7nHdAs9KmtEPGhEH5NhoKpZL8ija04oIi82TpGl2w3fjN82+LbieRwAXSVpZXSuqecjzqqfxv3pCzIcjwnXsA/+alHp/H8K9d/8c2ob7AuV8XAb4nmFA39J2auUNzbZ4cIcN1v4LnUOw7T44WoAAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/footer_dianbao.png
const footer_dianbao_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAdCAYAAADPa766AAAAAXNSR0IArs4c6QAAAv5JREFUWEfFl0mIVFcUhr/fWYxTCyZpVERbESQ2uBAxJFnFlUPTggNEHFtFaZqEBMGNIIgDESHJRkVFERJBcFo4oILQwZUokk0CWYnDQhwQRJHkl1PcgtfVXV3vVdl6oRZ9+w7fOec/59wnPsKwPQJoBzYAXwG/6UNy2P4C2Ah8BzRl7n4z4CC2PwFWJID5VQx/MmAgtuely1cCo2t4/up7BbE9Prk93D+nQNh3vxcQ298k65cBI6sA3ABOAseBynvb6gax/SmwJil/Zj/WPwN+BC6lX2sfa5sLgdgeBCwEOoDFwNAa7j8DdAKjgCvA9D7WP5A0KReI7cnA+vSbkiP2D4Ftks7ZDg9cBj6rsu+spPaqILbD2rA6hBdeGJwDwMBhYLukF7a/Bi4AY/vZu0PSnl4gtmekuK8FQgd5xz/AJkk3Y4PtpcDv/Yi3fO63kq6VQFLJDcWH9ZEBuUKWTnoL/AzskvQ6nbcueWZIDSvCg02Snsv2cuBXYGJe0zPrbge8pLvlOds/AftyGvO3pFmxN0Ae9SOkamyvgJ3AQUn/JS+EF/enVM1r0ylJq8sg0Yi2Am05ga4DmyX9m/FCCPloqit5IWJdl6RfSiCZw6JGfAmEVqJFR8pmR6kwSTqWnbQdlfR0yrAiELF2gaRbPUAqT0hNqwwVGuiU9LgCYlxKz3hTFB0h8jFlgRfJjh4X2f48FaoizS17xh1Jc8sTdYHYbkkle1pRN2TWH5K0pVGQ88CSBiBia6R9CLw06vVIdxJ2Iyytku41CvIXMLsBiqhDIdRSDWrEIw+A5gxIlOqXcXhOuG5JPTKt3tCEReWX2P9AiC7eG1FPqj2Qs4xRkX/IThQGsT0cKDU3oAQh6Uj8kZ4Oe4Hva+hvlaQ/GgWJB070p4hvh6R4g/YYtiOjYj777ZJd05JtEXVpxHZ0y1B7QJyopgnbU1Oo4rMiO55KmlC5r57QxAfTeEn3awnT9rD0JOjKhOqipF41qDBIrcv7+r/t6OwHUqgWSfqzct07AyzrHzReIucAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/components/footer/index.jsx

var footer_templateObject;
function footer_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }







var footer_CustomStyle = styled_components_browser_esm/* default */.ZP.div(footer_templateObject || (footer_templateObject = footer_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat center;\n\tbackground-size: auto;\n\tcolor: #73798d;\n\t\n\t.footer_conter {\n\t\twidth: 60%;\n\t\theight: 100px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmargin: auto;\n\t\timg {\n\t\t\theight: 20px;\n\t\t\tmargin-right: 2rem;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.footer_mail {\n\t\t\tcolor: #fff;\n\t\t\tmargin-left: 15px;\n\t\t}\n\t}\n\t\n\n\t@media (max-width: 1400px) {\n\t\t.footer_conter {\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: none;\n\t\t.footer_conter {\n\t\t\tdisplay: block;\n\t\t\twidth: 90%;\n\t\t\theight: auto;\n\t\t\ttext-align: center;\n\t\t\tpadding: 30px 0;\n\t\t\timg {\n\t\t\t\tmargin: 0 20px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tpadding: 10px 0;\n\t\t\t}\n\t\t\t.footer_mail {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\t\t}\n\t}\n"])), footer_bg_namespaceObject);
var FootView = function FootView() {
  return /*#__PURE__*/React.createElement(footer_CustomStyle, null, /*#__PURE__*/React.createElement("div", {
    className: "footer_conter"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(NavLink, {
    to: "https://twitter.com/arena_phantom",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: footer_twimg,
    alt: ""
  })), /*#__PURE__*/React.createElement(NavLink, {
    to: "https://t.me/Phantom_Arena",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: footer_dianbao,
    alt: ""
  })), /*#__PURE__*/React.createElement("img", {
    src: footer_github,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2024. phantomarena.co All rights reserved.", /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@phantomarena.co",
    target: "_blank",
    className: "footer_mail"
  }, "support@phantomarena.co"))));
};
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (FootView)));
;// CONCATENATED MODULE: ./src/pages/index/index.jsx





function Index() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(comm1, null));
}
/* harmony default export */ const index = (Index);
;// CONCATENATED MODULE: ./public/images/game_bj.jpg
const game_bj_namespaceObject = __webpack_require__.p + "41ec34783bd2fd308635.jpg";
;// CONCATENATED MODULE: ./public/images/games_kuang.jpg
const games_kuang_namespaceObject = __webpack_require__.p + "a352d73157d4932b4fd4.jpg";
;// CONCATENATED MODULE: ./src/components/game/main.jsx

var main_templateObject;
function main_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */






var main_CustomStyle = styled_components_browser_esm/* default */.ZP.div(main_templateObject || (main_templateObject = main_taggedTemplateLiteralLoose(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t.header_container {\n\t\tdisplay: flex;\n\t\ttransition: all 0.3s ease 0s;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tposition: absolute;\n\t\ttop: 50px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 95%;\n\t\theight: 80px;\n\t\tz-index: 99;\n\t\tpadding: 30px 30px 38px;\n\t\tflex-direction: row;\n\t\t-webkit-box-pack: justify;\n\t\tjustify-content: space-between;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t}\n\t.header_left {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 56px;\n\t\ta {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.header_logo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\timg {\n\t\t\twidth: 200px;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n\t.games_conter {\n\t\tpadding-top: 200px;\n\t\tpadding-bottom: 50px;\n\t}\n\t.games_pro {\n\t\twidth: 1256px;\n\t\theight: 728px;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\t// display: flex;\n\t\t// justify-content: center;\n\t\t// align-items: center;\n\t}\n\n\n\t@media (max-width: 1700px) {\n\t\t.header_logo {\n\t\t\timg {\n\t\t\t\twidth: 200px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1650px) {\n\t\t.header_container {\n\t\t\twidth: 100%;\n\t\t\tmin-width: 1200px;\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.header_left {\n\t\t\tgap: 20px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.header_left {\n\t\t\tgap: 0px;\n\t\t}\n\t}\n\n"])), game_bj_namespaceObject, games_kuang_namespaceObject);
function Game() {
  // 使用鼠标移动事件触发函数
  var handleMouseOver = function handleMouseOver() {
    document.getElementById('myIframe').contentWindow.focus();
  };
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "cryptobit_nav_manu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  })))))), /*#__PURE__*/react.createElement("div", {
    className: "d-md-block d-lg-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "games_pro"
  }, /*#__PURE__*/react.createElement("iframe", {
    src: "https://card.moohoy.com/html5/battle/snake/webSeverTest1/web/index.html?debug=1&log=10000&address=halou",
    width: "1223px",
    height: "694px",
    scrolling: "no",
    style: {
      borderRadius: '20px',
      marginTop: '13px'
    },
    id: "myIframe",
    onMouseOver: handleMouseOver
  }))));
}
/* harmony default export */ const main = (Game);
;// CONCATENATED MODULE: ./src/pages/games/index.jsx



function Games() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const games = (Games);
;// CONCATENATED MODULE: ./src/pages/app.jsx











var metaMaskConnector = new metaMask/* MetaMaskConnector */.i({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */._({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var app_client = (0,wagmi_dist/* createClient */.eI)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  var _useState = (0,react.useState)(false),
    ready = _useState[0],
    setReady = _useState[1];
  (0,react.useEffect)(function () {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.eM, {
    client: app_client,
    className: "Index"
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/cryptoSnake",
    element: /*#__PURE__*/react.createElement(games, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(3852);
// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__(7885);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(7212);
// EXTERNAL MODULE: ./public/css/meanmenu.min.css
var meanmenu_min = __webpack_require__(4820);
// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__(4655);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(6755);
;// CONCATENATED MODULE: ./src/index.jsx









var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 1142:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4130:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connect Wallet","HOME":"HOME","Marketplace":"Marketplace","Games":"Games","Mystery Hatch":"Mystery Hatch","WhitePaper":"WhitePaper","LORE":"LORE","AXS":"AXS","News":"News","More":"More","Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!":"Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!","The Road of Strategy":"The Road of Strategy","The Road of":"The Road of","Strategy":"Strategy","Hone your skills, master strategy, and you will become the ruler.":"Hone your skills, master strategy, and you will become the ruler.","Journey of the Competition":"Journey of the Competition","Journey of the":"Journey of the","Competition":"Competition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.","The Road to the Peak":"The Road to the Peak","The Road to":"The Road to","the Peak":"the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.","This is an exhilarating blockchain PvP game.":"This is an exhilarating blockchain PvP game.","This is an exhilarating":"This is an exhilarating","blockchain PvP game.":"blockchain PvP game.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.","Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!":"Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!","Unique Skill Arena: NFT Adventure Journey":"Unique Skill Arena: NFT Adventure Journey","Unique Skill Arena:":"Unique Skill Arena:","NFT Adventure Journey":"NFT Adventure Journey","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.","The duration of each game is 3 minutes.":"The duration of each game is 3 minutes.","The top 15 players have the chance to win generous rewards.":"The top 15 players have the chance to win generous rewards.","There are 3 different arenas, each offering a unique Major Coin as a reward.":"There are 3 different arenas, each offering a unique Major Coin as a reward.","A maximum of 50 players can participate in the battle.":"A maximum of 50 players can participate in the battle.","Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.":"Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.","NFT Exhibition":"NFT Exhibition","Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs.":"Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs. ","All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.":"All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.","Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!":"Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).","NFT Trading Marketplace":"NFT Trading Marketplace","Spectral Creature":"Spectral Creature","Ghost Animals":"Ghost Animals","Ghost Bandit":"Ghost Bandit","Cute Ghost":"Cute Ghost","Arena Showcase":"Arena Showcase","BTC Special Event":"BTC Special Event","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!","ETH Special Event":"ETH Special Event","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!","TOX Special Event":"TOX Special Event","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!","Game Guild Showcase":"Game Guild Showcase","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.","Fierce Battle: Clash of Power":"Fierce Battle: Clash of Power","Phantom Egg":"Phantom Egg","Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?":"Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?","Remaining Time":"Remaining Time","Blind Box Rules":"Blind Box Rules","Holding the official authorized TGG guild license allows for collection.":"Holding the official authorized TGG guild license allows for collection.","Ghost War God Arena Mystery Eggs":"Ghost War God Arena Mystery Eggs","The price for one batch of 3,000 mystery eggs is 200 USDT.":"The price for one batch of 3,000 mystery eggs is 200 USDT.","The price for the second batch of 2,000 mystery eggs is 300 USDT.":"The price for the second batch of 2,000 mystery eggs is 300 USDT.","The price for the third batch of 2,000 mystery eggs is 400 USDT.":"The price for the third batch of 2,000 mystery eggs is 400 USDT.","The price for fourth batch of 2,000 mystery eggs is 600 USDT.":"The price for fourth batch of 2,000 mystery eggs is 600 USDT.","The price for five batch of 1,000 mystery eggs is 800 USDT.":"The price for five batch of 1,000 mystery eggs is 800 USDT.","Choose your phantom egg":"Choose your phantom egg","Mystery Hatch egg":"Mystery Hatch","Supporting Partners":"Supporting Partners","Balance：":"Balance：","Approve":"Approve","Payment":"Payment","Number":"Number","Input ID":"Enter ID","Input mint quantity":"Enter quantity to forge","Together you breed heroes":"Together you breed heroes","Operations Team":"Operations Team","Alan":"Alan","CEO Co-founder":"CEO Co-founder","CSO of INTOverse":"CSO of INTOverse","TikTok-authorized MCN Agency Leader":"TikTok-authorized MCN Agency Leader","Former COO of leading GameFi Axie":"Former COO of leading GameFi Axie","John Rose":"John Rose","Graduated from Stanford University":"Graduated from Stanford University","CMO":"CMO","Leading GameFi Core Team":"Leading GameFi Core Team","Rein Ceren":"Rein Ceren","CSPO":"CSPO","Ambassador for Overseas Market Promotion":"Ambassador for Overseas Market Promotion","GameFi Digital Marketing Expert":"GameFi Digital Marketing Expert","Vance":"Vance","CTO of Phantom Arena":"CTO of Phantom Arena","Graduated from the Computer Science Department at Stanford University":"Graduated from the Computer Science Department at Stanford University","Proficient in advanced Java programming language":"Proficient in advanced Java programming language","Currently serving as a top global gaming technology consultant":"Currently serving as a top global gaming technology consultant","My invitation link":"My invitation link","Copy":"Copy","Ended":"Ended","10,000 NFTs have ended.":"10,000 NFTs have ended.","The NFT price in the game store is 600 USDT.":"The NFT price in the game store is 600 USDT.","Coming soon":"Coming soon","Phantom Arena":"Phantom Arena","The Visionary Behind":"The Visionary Behind","Co-Founder / CEO of Phantom Arena":"Co-Founder / CEO of Phantom Arena","Co-Founder of Authorize Tik Tok MCN Agency,THE8":"Co-Founder of Authorize Tik Tok MCN Agency,THE8","Phantom Arena represents a pioneering platform in today\'s crypto landscape, designed to empower Web3 users worldwide. It serves as a comprehensive, ready-to-deploy ecosystem aimed at supporting projects facing challenges with utility and community engagement. Our goal is to establish a new standard within the GameFi sector and collaborate with crypto enthusiasts to enhance the overall quality of the crypto environment.":"Phantom Arena represents a pioneering platform in today\'s crypto landscape, designed to empower Web3 users worldwide. It serves as a comprehensive, ready-to-deploy ecosystem aimed at supporting projects facing challenges with utility and community engagement. Our goal is to establish a new standard within the GameFi sector and collaborate with crypto enthusiasts to enhance the overall quality of the crypto environment.","":""}');

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connecter le portefeuille","HOME":"Accueil","Marketplace":"Le marché","Games":"Jeux","LORE":"Connaissance","AXS":"AXS","News":"Message","More":"Plus de","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bienvenue dans l\'arène des dieux de la guerre des fantômes, où seuls les puissants peuvent être invaincus. Êtes - vous prêt pour une bataille féroce?","The Road of Strategy":"La voie stratégique","Hone your skills, master strategy, and you will become the ruler.":"Aiguisez vos compétences, maîtrisez la stratégie et vous deviendrez le dirigeant.","Journey of the Competition":"Voyage de compétition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Chaque match est une occasion de progresser vers la gloire et chaque bataille décisive est un pas vers la conquête du monde.","The Road to the Peak":"Le chemin du Sommet","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Vous seul pouvez vous tenir au sommet dans ce jeu rempli de richesses et d\'honneurs. On commence ？ Lutte pour l\'honneur et la richesse.","This is an exhilarating blockchain PvP game.":"C\'est un jeu de PVP de blockchain de mémoire exaltant","This is an exhilarating":"C\'est un jeu de PVP de","blockchain PvP game.":"blockchain de mémoire exaltant","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Il offre à jusqu\'à 50 joueurs la possibilité de se battre en temps réel dans des arènes marquées. Les joueurs se disputent les positions les plus élevées pour obtenir le classement le plus élevé et gagner des récompenses attrayantes.","Unique Skill Arena: NFT Adventure Journey":"Hippodrome: NFT Adventure tour","Unique Skill Arena:":"Hippodrome:","NFT Adventure Journey":"NFT Adventure tour","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Pour entrer dans ce jeu, les joueurs doivent obtenir des personnages NFT avec des compétences uniques et des billets d\'arène. Chaque match dure 3 minutes et les 15 meilleurs joueurs ont une chance de gagner de belles récompenses.","The duration of each game is 3 minutes.":"Chaque match dure 3 minutes.","The top 15 players have the chance to win generous rewards.":"Les joueurs dans le Top 15 ont une chance de gagner de belles récompenses.","NFT Exhibition":"Exposition NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Catégorie - fantômes morts - vivants, animaux fantômes, créatures fantômes, fantômes mignons. Tous les prix sont l\'équivalent de 200 USD en BTC, ETH et paiement Tox fixe (600 jetons).","NFT Trading Marketplace":"Le marché du Trading NFT","Ghost Creatures":"Créatures fantômes","Ghost Animals":"Animaux fantômes","Ghost Bandit":"Gangster fantôme","Cute Ghosts":"Le fantôme mignon","Arena Showcase":"Présentation de l\'arène","BTC Special Event":"Événements spéciaux BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Démystifiez bitcoin, Grimpez de nouveaux sommets et prenez la gloire sans fin! Découvrez par vous - même le charme du BTC et gagnez la victoire qui vous appartient!","ETH Special Event":"Événements spéciaux ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Assistez à la lumière éblouissante d\'ethereum, repoussez les limites et saisissez l\'occasion de réclamer de superbes récompenses! Embarquez pour le voyage ETH aujourd\'hui et créez votre propre légende!","TOX Special Event":"Événements spéciaux Tox","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Un événement spécial Tox rempli d\'éléments uniques attend votre participation! Devenez un pionnier, rivalisez pour des récompenses exclusives et embarquez dans une toute nouvelle aventure Tox!","Game Guild Showcase":"Affichage de guilde de jeu","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Les investisseurs ont la possibilité de travailler avec la Guilde du jeu. Ces guildes offrent aux joueurs professionnels de représenter les propriétaires de NFT dans les tournois, ajoutant ainsi leurs chances de gagner des récompenses. Les joueurs atteignent le Sommet de la richesse et de la gloire à travers la course. Les investisseurs qui travaillent avec des guildes peuvent faire des profits sans effort.","":""}');

/***/ }),

/***/ 8491:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"ウォレットの接続","HOME":"トップページ","Marketplace":"市場","Games":"ゲーム","LORE":"知識","AXS":"AXS","News":"メッセージ","More":"より多くの","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"鬼戦神競技場へようこそ。ここには強者だけが負けない。激しい戦いに参加する準備はできていますか。","The Road of Strategy":"戦略の道","Hone your skills, master strategy, and you will become the ruler.":"あなたのスキルを磨き、戦略を身につければ、あなたは支配者になります。","Journey of the Competition":"レースの旅","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"どの試合も輝かしいチャンスであり、どの決戦も世界征服の一歩である。","The Road to the Peak":"頂上への道","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"富と栄誉に満ちたこのゲームでは、あなただけが頂点に立つことができます。始めましょう！栄誉と富のために戦う。","This is an exhilarating blockchain PvP game.":"これはエキサイティングなメモリブロックチェーンPvPゲームです","This is an exhilarating":"これはエキサイティングなメモ","blockchain PvP game.":"リブロックチェーンPvPゲームです","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"50人までのプレイヤーに、競技場内でリアルタイムで戦う機会を提供しています。プレイヤーは最高の位置を争って最高の順位を獲得し、魅力的な奨励金を獲得する。","Unique Skill Arena: NFT Adventure Journey":"スタント・アリーナ：NFTアドベンチャー・ツアー","Unique Skill Arena:":"スタント・アリーナ：","NFT Adventure Journey":"NFTアドベンチャー・ツアー","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"このゲームに入るには、プレイヤーは独自のスキルを持つNFTキャラクターと競技場のチケットを手に入れる必要があります。各試合の持続時間は3分で、上位15選手は手厚い奨励金を獲得する機会がある。","The duration of each game is 3 minutes.":"1試合あたりの持続時間は3分。","The top 15 players have the chance to win generous rewards.":"上位15人のプレイヤーは、手厚い報酬を得ることができます。","NFT Exhibition":"NFT展示","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"カテゴリ-幽霊、鬼動物、鬼生物、かわいい鬼。すべての価格は200ドル相当のBTC、ETH、固定TOX支払い（600トークン）です。","NFT Trading Marketplace":"NFT取引市場","Ghost Creatures":"幽霊生物","Ghost Animals":"ゆうれい動物","Ghost Bandit":"幽霊匪賊","Cute Ghosts":"かわいい幽霊","Arena Showcase":"競技場の展示","BTC Special Event":"BTCスペシャルイベント","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ビットコインの神秘のベールをはがし、新たな高さに登り、果てしない栄光を奪う！BTCの魅力を身をもって体験して、あなたの勝利を勝ち取ります！","ETH Special Event":"ETHスペシャルイベント","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"エーテル坊のまぶしい光を見て、限界に挑戦して、チャンスをつかんで手厚い奨励金を受け取る！すぐにETHの旅に出て、自分だけの伝奇をつくろう！","TOX Special Event":"TOXスペシャルイベント","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"ユニークな要素満載のTOXスペシャルイベントにご参加お待ちしております！パイオニアとなり、独占特典を奪い合い、新たなTOXアドベンチャーをスタート！","Game Guild Showcase":"ゲームギルド展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投資家はゲーム組合と協力する機会がある。これらのギルドは、NFT所有者を代表して試合中にプロゲーマーに報酬を与える機会を新たに提供します。プレイヤーたちは試合を通じて富と栄光の頂点に登った。組合と協力している投資家は、簡単に利益を得ることができます。","":""}');

/***/ }),

/***/ 9233:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"지갑 연결","HOME":"첫 페이지","Marketplace":"시장","Games":"게임","LORE":"지식","AXS":"AXS","News":"메시지","More":"더 많은","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"귀전신 경기장에 오신 것을 환영합니다. 이곳은 강자만이 패하지 않을 수 있습니다.당신은 격렬한 전투에 참가할 준비가 되었습니까?","The Road of Strategy":"전략의 길","Hone your skills, master strategy, and you will become the ruler.":"기술을 연마하고 전략을 익히면 통치자가 될 것이다.","Journey of the Competition":"경기 여행","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"매 경기는 모두 휘황한 기회로 나아가고 매 결전은 모두 세계를 정복하는 한걸음이다.","The Road to the Peak":"정상길","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"부와 명예로 가득 찬 이 게임에서 오직 너만이 정상에 설 수 있다.갑시다!명예와 부를 위해 싸우다.","This is an exhilarating blockchain PvP game.":"메모리 블록 체인 PvP 게임입니다.","This is an exhilarating":"메모리 블록 체인","blockchain PvP game.":"PvP 게임입니다.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"최대 50명의 플레이어에게 표시된 경기장 내에서 실시간 전투를 할 수 있는 기회를 제공한다.유저는 최고 위치를 쟁탈하여 최고 랭킹을 획득하고 매혹적인 보상을 획득합니다.","Unique Skill Arena: NFT Adventure Journey":"묘기 경기장: NFT 모험 여행","Unique Skill Arena:":"묘기 경기장:","NFT Adventure Journey":"NFT 모험 여행","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"이 게임에 들어가려면 독특한 스킬을 가진 NFT 캐릭터와 경기장 입장권을 획득해야 한다.매 경기 지속 시간은 3분이며, 상위 15명의 선수는 푸짐한 보상을 받을 기회가 있다.","The duration of each game is 3 minutes.":"매 경기 지속 시간은 3분이다.","The top 15 players have the chance to win generous rewards.":"상위 15위 유저는 풍부한 보상을 획득할 기회가 있습니다.","NFT Exhibition":"NFT 전시회","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"카테고리 - 귀신 망혼, 귀신 동물, 귀신 생물, 귀여운 귀신.모든 가격은 200달러와 같은 BTC, ETH 및 고정 TOX 지불 (600토큰) 입니다.","NFT Trading Marketplace":"NFT 거래 시장","Ghost Creatures":"유령 생물","Ghost Animals":"유령동물","Ghost Bandit":"유령도적","Cute Ghosts":"귀여운 유령","Arena Showcase":"경기장 전시","BTC Special Event":"BTC 스페셜 이벤트","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"비트코인의 신비한 베일을 벗고 새로운 높이에 올라 끝없는 영광을 쟁취하자!BTC의 매력을 직접 체험하고 당신만의 승리를 쟁취하세요!","ETH Special Event":"ETH 특별 이벤트","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"이더리움의 눈부신 빛을 목격하고, 극한에 도전하고, 기회를 포착하여 풍부한 보상을 수령하세요!지금 ETH 여행에 올라 나만의 전설을 만들어라!","TOX Special Event":"TOX 특별 이벤트","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"유니크한 요소가 가득한 TOX 특별 이벤트 참여를 기다리고 있습니다!선봉이 되어 독점 보상을 쟁탈하고 새로운 TOX 모험을 시작합니다!","Game Guild Showcase":"게임 길드 전시","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"투자자는 게임 길드와 합작할 기회가 있다.이들 길드는 프로게이머가 경기에서 NFT 소유자를 대표해 보상을 받을 수 있는 기회를 추가한다.플레이어들은 경기를 통해 부와 영광의 정상에 올랐다.길드와 합작한 투자자는 조금도 힘들이지 않고 이윤을 얻을 수 있다.","":""}');

/***/ }),

/***/ 4473:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Sambungkan dompet","HOME":"halaman rumah","Marketplace":"pasar","Games":"permainan","LORE":"pengetahuan","AXS":"AXS","News":"berita","More":"Lebih","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Selamat datang ke Arena Roh Tuhan, di mana hanya orang kuat yang boleh kekal tidak dipenuhi. Adakah anda bersedia untuk berpartisipasi dalam pertempuran yang kejam?","The Road of Strategy":"Jalan strategik","Hone your skills, master strategy, and you will become the ruler.":"Menghormati kemampuan and a, strategi master, dan anda akan menjadi pemerintah.","Journey of the Competition":"Perlawanan","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Setiap permainan adalah peluang untuk bergerak ke arah kemuliaan, dan setiap pertempuran yang menentukan adalah langkah ke arah mengalahkan dunia.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Dalam permainan ini penuh kekayaan dan kehormatan, hanya anda boleh berdiri di atas. Mari kita mulakan! Berjuang untuk kehormatan dan kekayaan.","This is an exhilarating blockchain PvP game.":"Ini adalah permainan PvP blockchain ingatan yang menarik","This is an exhilarating":"Ini adalah permainan PvP","blockchain PvP game.":"blockchain ingatan yang menarik","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ia menyediakan sehingga 50 pemain peluang untuk terlibat dalam pertempuran masa sebenar dalam arena yang ditentukan. Pemain bersaing untuk kedudukan tertinggi untuk mencapai peringkat tertinggi dan menang hadiah menarik.","Unique Skill Arena: NFT Adventure Journey":"Arena Stunt: Perjalanan Adventure NFT","Unique Skill Arena:":"Arena Stunt:","NFT Adventure Journey":"Perjalanan Adventure NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Untuk memasuki permainan ini, pemain perlu mendapatkan aksara NFT dengan kemahiran unik dan tiket arena. Selama setiap permainan adalah 3 minit, dan 15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","The duration of each game is 3 minutes.":"Waktu setiap permainan ialah 3 minit.","The top 15 players have the chance to win generous rewards.":"15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","NFT Exhibition":"Eksport NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Kategori - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Semua harga sama dengan $200 dalam BTC, ETH, dan pembayaran TOX tetap (600 token).","NFT Trading Marketplace":"Pasar perdagangan NFT","Ghost Creatures":"Cipta Spektral","Ghost Animals":"Hewan hantu","Ghost Bandit":"Ghost Bandit","Cute Ghosts":"Hantu Manis","Arena Showcase":"Paparan Arena","BTC Special Event":"Peristiwa Khas BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Buka tutup misteri Bitcoin, mendaki tinggi baru, dan menuntut kemuliaan yang tak berakhir! Mengalami sihir BTC tangan pertama dan memenangkan kemenangan anda sendiri!","ETH Special Event":"Peristiwa istimewa ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Saksikanlah cahaya Ethereum yang terang, cabarlah batas-batas kamu, dan ambillah peluang untuk menerima pahala yang mulia! Masuklah ke dalam perjalanan ETH segera dan ciptakan legenda anda sendiri!","TOX Special Event":"Peristiwa Khas TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Peristiwa istimewa TOX penuh dengan unsur unik menunggu ketertarikan anda! Jadilah pemimpin, bersaing untuk hadiah eksklusif, dan mulakan petualangan baru TOX!","Game Guild Showcase":"Paparan Guild Permainan","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Pelayan mempunyai peluang untuk bekerja sama dengan gol permainan. Gild ini memberikan pemain profesional peluang untuk mewakili pemilik NFT dalam pertandingan dan meningkatkan peluang mereka untuk menang hadiah. Pemain mencapai puncak kekayaan dan kemuliaan melalui pertandingan. Para pelabur yang bekerja sama dengan tipu daya boleh mendapatkan keuntungan tanpa usaha.","":""}');

/***/ }),

/***/ 3501:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ligar à Carteira","HOME":"Página inicial","Marketplace":"mercado","Games":"jogo","LORE":"conhecimento","AXS":"AXS","News":"notícias","More":"Mais","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bem-vindo à Ghost God Arena, onde apenas os fortes podem permanecer invictos. Você está pronto para participar da batalha feroz?","The Road of Strategy":"A via estratégica","Hone your skills, master strategy, and you will become the ruler.":"Aprimore suas habilidades, domine estratégias e você se tornará um governante.","Journey of the Competition":"Tour de Competição","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Cada jogo é uma oportunidade para avançar em direção à glória, e cada batalha decisiva é um passo para conquistar o mundo.","The Road to the Peak":"O Caminho para o Pico","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Neste jogo cheio de riqueza e honra, só você pode ficar no topo. Vamos começar! Lutar por honra e riqueza.","This is an exhilarating blockchain PvP game.":"Este é um emocionante jogo PvP blockchain de memória","This is an exhilarating":"Este é um emocionante jogo ","blockchain PvP game.":"PvP blockchain de memória","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ele oferece a até 50 jogadores a oportunidade de se envolver em batalhas em tempo real dentro de arenas designadas. Os jogadores competem pela posição mais alta para alcançar a classificação mais alta e ganhar recompensas atraentes.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Adventure Journey","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Adventure Journey","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Para entrar neste jogo, os jogadores precisam obter personagens NFT com habilidades únicas e ingressos de arena. A duração de cada jogo é de 3 minutos, e os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","The duration of each game is 3 minutes.":"A duração de cada jogo é de 3 minutos.","The top 15 players have the chance to win generous rewards.":"Os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","NFT Exhibition":"Exposição NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Categoria - Fantasma Morto-vivo, Animais Fantasmas, Criaturas Fantasmas, Fantasmas Bonitos. Todos os preços são equivalentes a $200 em BTC, ETH e pagamentos TOX fixos (600 tokens).","NFT Trading Marketplace":"Mercado de negociação NFT","Ghost Creatures":"Criatura Espectral","Ghost Animals":"Animais fantasmas","Ghost Bandit":"Bandido Fantasma","Cute Ghosts":"Fantasma Bonito","Arena Showcase":"Exposição da Arena","BTC Special Event":"Evento Especial BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Descubra o misterioso véu do Bitcoin, suba novas alturas e reclame glória infinita! Experimente o charme do BTC em primeira mão e ganhe sua própria vitória!","ETH Special Event":"Evento Especial ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Testemunhe a luz deslumbrante do Ethereum, desafie seus limites e aproveite a oportunidade de receber recompensas generosas! Embarque na jornada ETH imediatamente e crie sua própria lenda!","TOX Special Event":"Evento Especial TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"O evento especial TOX cheio de elementos únicos aguarda sua participação! Seja um pioneiro, compita por recompensas exclusivas e embarque em uma nova aventura TOX!","Game Guild Showcase":"Exposição da Guilda do Jogo","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Os investidores têm a oportunidade de colaborar com guildas de jogos. Essas guildas oferecem aos jogadores profissionais a oportunidade de representar os proprietários de NFT em competições e aumentar suas chances de ganhar recompensas. Os jogadores alcançam o auge da riqueza e glória através de competições. Investidores que colaboram com guildas podem facilmente ganhar lucros.","":""}');

/***/ }),

/***/ 264:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"เชื่อมต่อกระเป๋าสตางค์","HOME":"หน้าหลัก","Marketplace":"ตลาด","Games":"เกม","LORE":"ความรู้","AXS":"AXS","News":"ข้อความ","More":"มากกว่า","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"ขอต้อนรับเข้าสู่สนาม Ghost Wars Arena ซึ่งมีเพียงผู้แข็งแกร่งเท่านั้นที่จะไร้พ่าย คุณพร้อมหรือยังสำหรับการต่อสู้ที่รุนแรง?","The Road of Strategy":"เส้นทางยุทธศาสตร์","Hone your skills, master strategy, and you will become the ruler.":"ฝึกฝนทักษะ ฝึกฝนกลยุทธ์ แล้วคุณจะเป็นผู้ปกครอง","Journey of the Competition":"ทัวร์นาเมนต์","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"ทุกการแข่งขันเป็นโอกาสที่จะก้าวไปสู่ความรุ่งโรจน์ และทุกการต่อสู้ที่เด็ดขาดคือก้าวสู่การพิชิตโลก","The Road to the Peak":"เส้นทางสู่จุดสูงสุด","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"ในเกมที่เต็มไปด้วยความมั่งคั่งและเกียรติยศมีเพียงคุณเท่านั้นที่สามารถยืนอยู่บนจุดสูงสุด เริ่มกันเลย! สู้เพื่อเกียรติยศและโชคลาภ","This is an exhilarating blockchain PvP game.":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก Chain PvP เกม","This is an exhilarating":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก","blockchain PvP game.":"Chain PvP เกม","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"โดยจะเปิดโอกาสให้ผู้เล่นมากถึง 50 คนได้ทำการต่อสู้แบบเรียลไทม์ภายในสังเวียนที่ทำเครื่องหมายไว้ ผู้เล่นแข่งขันเพื่อชิงตำแหน่งสูงสุดเพื่อให้ได้อันดับสูงสุดและได้รับรางวัลที่น่าสนใจ","Unique Skill Arena: NFT Adventure Journey":"สนามกีฬาผาดโผน: การผจญภัย NFT","Unique Skill Arena:":"สนามกีฬาผาดโผน:","NFT Adventure Journey":"การผจญภัย NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"ในการเข้าสู่เกมนี้ผู้เล่นจะต้องได้รับตัวละคร NFT ที่มีทักษะเฉพาะตัวและตั๋วลานประลอง โดยแต่ละแมตช์ใช้เวลา 3 นาที,สำหรับผู้เล่น 15 อันดับแรก มีโอกาสลุ้นรางวัลมากมาย","The duration of each game is 3 minutes.":"โดยแต่ละเกมใช้เวลาแข่งขัน 3 นาที","The top 15 players have the chance to win generous rewards.":"ผู้เล่น 15 อันดับแรกมีโอกาสลุ้นรางวัลมากมาย","NFT Exhibition":"นิทรรศการ NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"หมวดหมู่ - ผีผี, สัตว์ผี, สัตว์ผี, ผีน่ารัก ราคาทั้งหมดอยู่ใน BTC, ETH และ Fixed TOX Payment (600 Token) เท่ากับ $ 200","NFT Trading Marketplace":"ตลาดเทรด NFT","Ghost Creatures":"สัตว์ผี","Ghost Animals":"สัตว์ผี","Ghost Bandit":"โจรผี","Cute Ghosts":"ผีน่ารัก","Arena Showcase":"อารีน่า ดิสเพลย์","BTC Special Event":"BTC กิจกรรมพิเศษ","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ค้นพบความลึกลับของ Bitcoin และปีนขึ้นไปสู่ความสูงใหม่และคว้าเกียรติยศไม่รู้จบ! สัมผัสเสน่ห์ของ BTC ด้วยตัวคุณเองและชนะที่เป็นของคุณ!","ETH Special Event":"กิจกรรมพิเศษ ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"ร่วมเป็นสักขีพยานประกายของ Ethereum ท้าทายขีด จำกัด และคว้าโอกาสในการรับรางวัลมากมาย! เริ่มต้นการเดินทาง ETH วันนี้และสร้างตำนานของคุณเอง!","TOX Special Event":"กิจกรรมพิเศษของ TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"กิจกรรมพิเศษของ TOX ที่เต็มไปด้วยองค์ประกอบที่เป็นเอกลักษณ์รอคุณอยู่! ร่วมเป็นผู้บุกเบิกเพื่อชิงรางวัลพิเศษและเริ่มต้นการผจญภัยใหม่ของ TOX!","Game Guild Showcase":"แสดงกิลด์เกม","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"นักลงทุนมีโอกาสร่วมงานกับกิลด์เกม กิลด์เหล่านี้เสนอให้ผู้เล่นมืออาชีพเป็นตัวแทนของเจ้าของ NFT ในการแข่งขันและเพิ่มโอกาสในการได้รับรางวัลของพวกเขา ผู้เล่นก้าวขึ้นสู่จุดสูงสุดของความมั่งคั่งและความรุ่งเรืองผ่านการแข่งขัน นักลงทุนที่ร่วมงานกับกิลด์จะได้รับผลกำไรอย่างง่ายดาย","":""}');

/***/ }),

/***/ 6522:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Cüzdanı bağla","HOME":"ev sayfası","Marketplace":"pazar","Games":"oyun","LORE":"Bilim","AXS":"AXS","News":"haberler","More":"Daha fazla","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Ruh Tanrı Arena\'ya hoş geldiniz. Sadece güçlü olanlar yenmez kalabilir. Acı savaşta katılmaya hazır mısın?","The Road of Strategy":"Stratejik yol","Hone your skills, master strategy, and you will become the ruler.":"Yeteneklerini tatlın, efendi stratejilerini ve sen bir hükümdar olacaksın.","Journey of the Competition":"Competition Tour","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Her oyun büyüklüğüne doğru ilerleme fırsatıdır, ve her kararlı savaş dünyayı kazanmaya doğru bir adım.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Bu oyunda zengin ve onurla dolu, sadece üstünde durabilirsin. Başlayalım! Onur ve zengin için savaş.","This is an exhilarating blockchain PvP game.":"Bu heyecanlı bir hafıza blok zinciri PvP oyunu.","This is an exhilarating":"Bu heyecanlı bir hafıza","blockchain PvP game.":"blok zinciri PvP oyunu.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Bu, belirlenmiş alanlarda gerçek zamanlı savaşlara katılmak için 50 oyuncu fırsatı sağlıyor. Oyuncular en yüksek pozisyon için en yüksek derece ulaşmak ve ödülleri tamamlamak için yarışıyorlar.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Macera Yolculuğu","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Macera Yolculuğu","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Bu oyuna girmek için oyuncuları eşsiz yetenekler ve arena biletleri ile NFT karakterlerini almalılar. Her oyunun uzunluğu 3 dakika ve en üst 15 oyuncusu cömertli ödüllendirme şansı var.","The duration of each game is 3 minutes.":"Her oyunun uzunluğu 3 dakika.","The top 15 players have the chance to win generous rewards.":"En üst 15 oyuncusu cömertli ödülleri kazanma şansı var.","NFT Exhibition":"NFT İzleme","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Category - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Tüm fiyatlar BTC, ETH ve düzenli TOX ödemeleri (600 token) için 200 dolara eşit.","NFT Trading Marketplace":"NFT ticaret pazarı","Ghost Creatures":"Spektral Oluşturucu","Ghost Animals":"Hayalet hayvanları","Ghost Bandit":"Hayalet BandiName","Cute Ghosts":"Cute Ghost","Arena Showcase":"Arena Görüntüsü","BTC Special Event":"BTC Özel Olay","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Bitcoin\'in gizemli örtünü kapatın, yeni yükseklere tırmanın ve sonsuz şerefi iddia edin! BTC\'in ilk elini deneyin ve kendi zaferini kazanın!","ETH Special Event":"ETH özel olay","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Ethereum\'un parlak ışığına tanık olun, sınırlarınızı dövün ve cömertli ödülleri almak için fırsatı alın! ETH yolculuğuna hemen götürün ve kendi efsanesini yaratın!","TOX Special Event":"Özel olay","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"TOX özel olay eşsiz elementlerle dolu sizin katılmanızı bekliyor! Piyoner ol, özel ödüller için yarışın ve yeni bir TOX macerasına başla!","Game Guild Showcase":"Oyun Guild Gösterisi","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Yatırımcıların oyun oyunları ile işbirliği yapabileceği fırsatı var. Bu yönetimler, profesyonel oyuncuları, NFT sahiplerini yarışmalarda temsil etmek ve kazanma şanslarını arttırmak için fırsat sağlıyor. Oyuncular yarışmalar üzerinden zenginlik ve büyüklüğün çevresine ulaşır. Gildlerle işbirliği yapan yatırımcılar zararları çaresiz kazanabilir.","":""}');

/***/ }),

/***/ 995:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ví kết nối","HOME":"Trang chủ","Marketplace":"Thị trường","Games":"Trò chơi","LORE":"Kiến thức","AXS":"AXS","News":"Thông điệp","More":"Thêm","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Hoan nghênh đi vào đấu trường Quỷ Chiến Thần, nơi này chỉ có cường giả mới có thể bất bại. Bạn đã sẵn sàng cho một trận chiến khốc liệt?","The Road of Strategy":"Con đường chiến lược","Hone your skills, master strategy, and you will become the ruler.":"Rèn luyện kỹ năng của bạn, làm chủ chiến lược và bạn sẽ trở thành người cai trị.","Journey of the Competition":"Tour du lịch","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Mỗi trận đấu là một cơ hội để tiến tới vinh quang và mỗi trận đấu quyết định là một bước để chinh phục thế giới.","The Road to the Peak":"Đường đến Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Trong trò chơi giàu có và danh dự này, chỉ có bạn mới có thể đứng trên đỉnh. Bắt đầu! Chiến đấu vì danh dự và sự giàu có.","This is an exhilarating blockchain PvP game.":"Đây là một trò chơi PvP blockchain bộ nhớ thú vị","This is an exhilarating":"Đây là một loại phấn khích.","blockchain PvP game.":"Trò chơi PvP blockchain bộ nhớ.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Nó cung cấp cho tối đa 50 người chơi cơ hội chiến đấu trong thời gian thực trong một đấu trường được đánh dấu. Người chơi cạnh tranh cho vị trí cao nhất để có được thứ hạng cao nhất và giành được phần thưởng hấp dẫn.","Unique Skill Arena: NFT Adventure Journey":"Trò chơi trực tuyến: NFT Adventure","Unique Skill Arena:":"Trò chơi trực tuyến:","NFT Adventure Journey":"NFT Adventure","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Để tham gia trò chơi này, người chơi cần có được các nhân vật NFT và vé vào đấu trường với các kỹ năng độc đáo. Mỗi trận đấu kéo dài 3 phút và 15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","The duration of each game is 3 minutes.":"Mỗi trận đấu kéo dài 3 phút.","The top 15 players have the chance to win generous rewards.":"15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","NFT Exhibition":"Triển lãm NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Thể loại - Hồn ma, Động vật ma, Sinh vật ma, Bóng ma dễ thương. Tất cả các khoản thanh toán BTC, ETH và TOX cố định (600 token) với giá tương đương 200 USD.","NFT Trading Marketplace":"Thị trường giao dịch NFT","Ghost Creatures":"Sinh vật ma","Ghost Animals":"Động vật ma","Ghost Bandit":"Băng đảng ma","Cute Ghosts":"Bóng ma dễ thương","Arena Showcase":"Hiển thị Arena","BTC Special Event":"Sự kiện đặc biệt BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Khám phá những bí ẩn của Bitcoin và leo lên những tầm cao mới để giành lấy vinh quang vô tận! Trải nghiệm sự quyến rũ của BTC và giành chiến thắng thuộc về bạn!","ETH Special Event":"Sự kiện đặc biệt ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Chứng kiến ánh sáng rực rỡ của Ethereum, thách thức giới hạn và nắm bắt cơ hội để nhận phần thưởng lớn! Bắt tay vào hành trình ETH ngay bây giờ và tạo ra huyền thoại của riêng bạn!","TOX Special Event":"TOX Sự kiện đặc biệt","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Sự kiện đặc biệt của TOX với đầy đủ các yếu tố độc đáo đang chờ bạn tham gia! Trở thành người tiên phong, cạnh tranh cho phần thưởng độc quyền và bắt đầu một cuộc phiêu lưu TOX hoàn toàn mới!","Game Guild Showcase":"Giới thiệu game Guild","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Các nhà đầu tư có cơ hội hợp tác với guild game. Các guild này cung cấp cho người chơi chuyên nghiệp đại diện cho các chủ sở hữu NFT trong các giải đấu, thêm cơ hội giành phần thưởng của họ. Người chơi đạt đến đỉnh cao của sự giàu có và vinh quang thông qua các trò chơi. Các nhà đầu tư làm việc với guild có thể kiếm được lợi nhuận mà không gặp khó khăn.","":""}');

/***/ }),

/***/ 6361:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"连接钱包","HOME":"首页","Marketplace":"市场","Games":"游戏","LORE":"知识","AXS":"AXS","News":"消息","More":"更多的","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"欢迎来到鬼战神竞技场，这里只有强者才能不败。你准备好参加激烈的战斗了吗？","The Road of Strategy":"战略之路","Hone your skills, master strategy, and you will become the ruler.":"磨练你的技能，掌握策略，你就会成为统治者。","Journey of the Competition":"比赛之旅","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"每一场比赛都是迈向辉煌的机会，每一场决战都是征服世界的一步。","The Road to the Peak":"顶峰之路","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"在这个充满财富和荣誉的游戏中，只有你才能站在顶峰。开始吧！为荣誉和财富而战。","This is an exhilarating blockchain PvP game.":"这是一款令人振奋的区块链PvP游戏","This is an exhilarating":"这是一款令人振奋的","blockchain PvP game.":"区块链PvP游戏。","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"它为多达50名玩家提供了在选定竞技场内进行实时战斗的机会。玩家争夺最高位置以获得最高排名并赢得诱人的奖励。","Unique Skill Arena: NFT Adventure Journey":"绝技竞技场：NFT冒险之旅","Unique Skill Arena:":"绝技竞技场：","NFT Adventure Journey":"NFT冒险之旅","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"要进入这个游戏，玩家需要获得具有独特技能的NFT角色和竞技场门票。每场比赛持续时间为3分钟，前15名选手有机会赢得丰厚的奖励。","The duration of each game is 3 minutes.":"每场比赛持续时间为3分钟。","The top 15 players have the chance to win generous rewards.":"排名前15的玩家有机会赢得丰厚的奖励。","NFT Exhibition":"NFT展览","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"类别-鬼亡魂，鬼动物，鬼生物，可爱的鬼。所有价格均为200美元等值的BTC、ETH和固定TOX支付（600代币）。","NFT Trading Marketplace":"NFT交易市场","Ghost Creatures":"幽灵生物","Ghost Animals":"幽灵动物","Ghost Bandit":"幽灵匪徒","Cute Ghosts":"可爱幽灵","Arena Showcase":"竞技场展示","BTC Special Event":"BTC特别活动","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"揭开比特币的神秘面纱，攀登新的高度，夺取无尽的荣耀！亲身体验BTC的魅力，赢得属于你的胜利！","ETH Special Event":"ETH特别活动","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"见证以太坊耀眼的光芒，挑战极限，抓住机会领取丰厚奖励！立即踏上ETH之旅，创造属于自己的传奇！","TOX Special Event":"TOX特别活动","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"充满独特元素的TOX特别活动恭候您的参与！成为先锋，争夺独家奖励，开始全新的TOX冒险！","Game Guild Showcase":"游戏公会展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投资者有机会与游戏公会合作。这些公会提供职业玩家在比赛中代表NFT所有者，增加他们赢得奖励的机会。玩家们通过比赛登上财富和荣耀的顶峰。与公会合作的投资者可以毫不费力地获得利润。","":""}');

/***/ }),

/***/ 3600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"連接錢包","HOME":"首頁","Marketplace":"交易市場","Games":"遊戲","Mystery Hatch":"神秘孵化","WhitePaper":"白皮書","LORE":"知識","AXS":"AXS","News":"消息","More":"更多","Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!":"踏入幽靈競技場：3分鐘，50名玩家，無盡的刺激。選擇你的身份，擁抱混亂。無論勝敗，榮耀和獎勵都等著你！","The Road of Strategy":"戰略之路","The Road of":"The Road of","Strategy":"Strategy","Hone your skills, master strategy, and you will become the ruler.":"鍛煉你的技能，掌握戰略，你將成為統治者。","Journey of the Competition":"競技之旅","Journey of the":"Journey of the","Competition":"Competition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"每場比賽都是邁向榮耀的機會，每次對決都是征服世界的一步。","The Road to the Peak":"登峰之路","The Road to":"The Road to","the Peak":"the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"在這個充满财富和榮譽的遊戲中，只有你能夠屹立於巔峰。讓我們開始吧！為榮耀和財富而戰。","This is an exhilarating blockchain PvP game.":"這是一款激動人心的區塊鏈PvP遊戲。","This is an exhilarating":"這是一款令人振奮的","blockchain PvP game.":"區塊鏈PvP遊戲。","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"它為高達50名玩家提供了在所選競技場內進行實時戰鬥的機會。玩家們爭奪至高無上的地位，以達到頂級排名並贏取誘人的獎勵。","Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!":"踏入幽靈競技場：只需3分鐘體驗刺激！ 無論輸贏，都有豐厚獎品等著你。 立即開始你的旅程，讓激情驅使你前行！","Unique Skill Arena: NFT Adventure Journey":"獨特技能競技場：NFT冒險之旅","Unique Skill Arena:":"絕技競技場：","NFT Adventure Journey":"NFT冒險之旅","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"進入此遊戲，玩家需要擁有具有獨特技能的NFT角色和競技場門票。每場比賽持續3分鐘，前15名玩家有機會贏得豐厚的獎勵。","The duration of each game is 3 minutes.":"每場比賽持續時間3分鐘。","The top 15 players have the chance to win generous rewards.":"前15名玩家有機會贏得豐厚的獎勵。","There are 3 different arenas, each offering a unique Major Coin as a reward.":"有3個不同的競技場，每個競技場都提供一種獨特的主要代幣作為獎勵。","A maximum of 50 players can participate in the battle.":"最多可以有50名玩家參與戰鬥。","Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.":"失敗的玩家將獲得強化NFT作為獎勵，提高他們在下一場比賽中獲勝的機會。","NFT Exhibition":"NFT展覽","Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs.":"歡迎來到我們獨家NFT系列的第一階段，包括四類獨特的物種族群：Spiros、Tauros、Baddos 和 Dinoo Clan。每類物種族群由六個獨特的NFT代表。","All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.":"預售中的所有NFT定價為200美元，以BTC、ETH、TOX支付。有關詳細的購買信息，請聯繫我們的授權經銷商。","Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!":"不要錯失這個絕佳的機會，收藏一件源自這些引人入勝的族群的數字藝術品！","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"類別-鬼亡魂，鬼動物，鬼生物，可愛的鬼。 所有價格均為200美元等值的BTC、ETH和固定TOX支付（600代幣）。","NFT Trading Marketplace":"NFT交易市場","Ghost Creatures":"幽靈生物","Ghost Animals":"幽靈動物","Ghost Bandit":"幽靈匪徒","Cute Ghosts":"可愛幽靈","Arena Showcase":"競技場展示","BTC Special Event":"BTC特別活動","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"揭開比特幣的神秘面紗，攀登新的巔峰，奪取無盡的榮耀！親身體驗BTC的魅力，贏得屬於您的勝利！","ETH Special Event":"ETH特別活動","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"見證以太坊的耀眼光芒，挑戰極限，抓住機會獲得豐厚的獎勵！立即開啟ETH之旅，創造屬於您自己的傳奇！","TOX Special Event":"TOX特別活動","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"融合獨特元素的TOX特別活動等待您的參與！成為先驅，爭取獨家獎勵，開啟嶄新的TOX冒險！","Game Guild Showcase":"遊戲公會展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投資者有機會與遊戲公會合作。這些公會提供職業玩家代表NFT擁有者參加比賽，增加他們贏取獎勵的機會。玩家通過比賽攀升到財富和榮耀的巔峰。投資者透過與公會的合作，輕鬆獲得豐厚的回報。","Fierce Battle: Clash of Power":"激烈戰鬥：力量之爭","Phantom Egg":"幽靈蛋","Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?":"準備揭開神秘面紗了嗎？ 點擊“神秘孵化”按鈕來鑄造您的NFT！ 每次購買都以數位蛋的形式呈現，裡麵包含一個等待揭曉的驚喜。 您的NFT的物種和特徵將保持秘密，直到蛋孵化為止。 在四個家族中的一個中，體驗發現的刺激：Spiros、Tauros、Baddos、或Dinoo、。 您的蛋會揭示出什麼呢？","Remaining Time":"剩餘時間","Blind Box Rules":"盲盒規格","Holding the official authorized TGG guild license allows for collection.":"擁有官方授權的 TGG 公會牌照者可領取。","Ghost War God Arena Mystery Eggs":"幽靈戰神競技場彩蛋。","The price for one batch of 3,000 mystery eggs is 200 USDT.":"第一期 3,000 個，售價為 200 美元。","The price for the second batch of 2,000 mystery eggs is 300 USDT.":"第二期 2,000 個，售價為 300 美元。","The price for the third batch of 2,000 mystery eggs is 400 USDT.":"第三期 2,000 個，售價為 400 美元。","The price for fourth batch of 2,000 mystery eggs is 600 USDT.":"第四期 2,000 個，售價為 600 美元。","The price for five batch of 1,000 mystery eggs is 800 USDT.":"第五期 1,000 個，售價為 800 美元。","Choose your phantom egg":"選擇你的幽靈蛋","Mystery Hatch egg":"孵化幽靈蛋","Supporting Partners":"戰略合作","Balance：":"餘額：","Approve":"授权","Payment":"支付方式","Number":"數量","Input ID":"輸入ID","Input mint quantity":"輸入鑄造數量","Together you breed heroes":"您共孵化英雄","Operations Team":"运营团队","Alan":"Alan","CEO Co-founder":"CEO联合创始人","CSO of INTOverse":"INTOverse首席战略官","TikTok-authorized MCN Agency Leader":"TikTok授权MCN机构领袖","Former COO of leading GameFi Axie":"曾担任头部GameFiAxie COO","John Rose":"John Rose","Graduated from Stanford University":"毕业于斯坦福大学","CMO":"首席营销官","Leading GameFi Core Team":"头部GameFi核心团队","Rein Ceren":"Rein Ceren","CSPO":"首席战略合作伙伴","Ambassador for Overseas Market Promotion":"海外市场推广大使","GameFi Digital Marketing Expert":"GameFi数字营销专家","Vance":"Vance","CTO of Phantom Arena":"Phantom Arena首席CTO","Graduated from the Computer Science Department at Stanford University":"毕业于斯坦福计算机系","Proficient in advanced Java programming language":"精通Java高级语言编程","Currently serving as a top global gaming technology consultant":"目前担任全球头部游戏技术顾问","My invitation link":"我的邀请链接","Copy":"复制","Ended":"已結束","10,000 NFTs have ended.":"10000只NFT已結束","The NFT price in the game store is 600 USDT.":"遊戲商店NFT價格600USDT","Coming soon":"即將到來","The Visionary Behind Phantom Arena":"Phantom Arena的領航者","The Visionary Behind":"的領航者","Co-Founder / CEO of Phantom Arena":"Phantom Arena的聯合創始人/CEO","Co-Founder of Authorize Tik Tok MCN Agency,THE8":"授权Tik Tok MCN機构THE8的聯合創始人","Phantom Arena represents a pioneering platform in today\'s crypto landscape, designed to empower Web3 users worldwide. It serves as a comprehensive, ready-to-deploy ecosystem aimed at supporting projects facing challenges with utility and community engagement. Our goal is to establish a new standard within the GameFi sector and collaborate with crypto enthusiasts to enhance the overall quality of the crypto environment.":"Phantom Arena代表了当今加密货币领域的先锋平台，旨在赋能全球的Web3用户。它作为一个全面的、即插即用的生态系统，旨在支持面临实用性和社区参与挑战的项目。我们的目标是在GameFi领域树立新的标准，并与加密货币爱好者合作，提升加密环境的整体质量。","":""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgames"] = self["webpackChunkgames"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [10], () => (__webpack_require__(2580)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;