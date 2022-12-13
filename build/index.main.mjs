// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v58 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:18:50:application',
    fs: ['at ./index.rsh:17:13:application call to [unknown function] (defined at: ./index.rsh:17:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v58],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
  ;
  const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, '4'), v67);
  const v71 = stdlib.safeAdd(v60, v70);
  const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v72), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
  ;
  const v65 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:24:48:application',
    fs: ['at ./index.rsh:23:11:application call to [unknown function] (defined at: ./index.rsh:23:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v65],
    evt_cnt: 1,
    funcNum: 1,
    lct: v61,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
      
      ;
      const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, '4'), v67);
      const v71 = stdlib.safeAdd(v60, v70);
      const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, '3'));
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
  ;
  const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, '4'), v67);
  const v71 = stdlib.safeAdd(v60, v70);
  const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v72), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByACAAEmAQAiNQAxGEEA2ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACcjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gATVFRkUNP8WULBCADNIgaCNBogAmCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v104","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v106","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6106bf60806001600160401b03601f1938849003601f81018216840190848210848311176102a757808591604097889485528339810103126102bd578351848101818110848211176102a7578552835181526020809401519084810191825243600355855190858201828110868211176102a7578752600080925260049260ff8454166102905760607f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f9189519033825284518a830152518a820152a1518015908115610284575b501561026d573461025657600194858255438655865192828285015281845287840184811087821117610243578852835195861161023057600254908782811c92168015610226575b838310146102135750601f81116101cc575b508093601f86116001146101695750509183949184939461015e575b50501b916000199060031b1c1916176002555b516103fc90816102c38239f35b01519250388061013e565b600283528183209493928692918316915b888383106101b25750505010610199575b505050811b01600255610151565b015160001960f88460031b161c1916905538808061018b565b85870151885590960195948501948793509081019061017a565b60028352818320601f870160051c810191838810610209575b601f0160051c019087905b8281106101fe575050610122565b8481550187906101f0565b90915081906101e5565b634e487b7160e01b845260229052602483fd5b91607f1691610110565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b905060015414386100c7565b875163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c918263137772741461010557505080631e93b0f1146100e757806383230757146100c95763ab53f2c61461005b5780610012565b346100c557816003193601126100c5578154610075610312565b91805193849283526020828185015284518093850152815b8381106100ae57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008d565b5080fd5b50346100c557816003193601126100c5576020906001549051908152f35b50346100c557816003193601126100c5576020906003549051908152f35b838591816003193601126102d4576020936001600160401b0391808601838111828210176102c1578452849052825191828401908111838210176102ae57835280358252848201602435815260ff8254166102975760607fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a763924918551903382528551898301525186820152a160019182855403610280576101a3610312565b868180518101031261027c57860151801515036102785751801590811561026d575b5015610256573461023f57508280558281556101e26002546102d8565b806101f0575b505051908152f35b601f8111600114610209575050816002555b83806101e8565b6002845281601f868620920160051c820191015b81811061023557505050818381208160025555610202565b848155820161021d565b602490600d84519163100960cb60e01b8352820152fd5b602490600c84519163100960cb60e01b8352820152fd5b9050825414866101c5565b8480fd5b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b835163100960cb60e01b8152600a81840152602490fd5b634e487b7160e01b855260418252602485fd5b634e487b7160e01b865260418352602486fd5b8280fd5b90600182811c92168015610308575b60208310146102f257565b634e487b7160e01b600052602260045260246000fd5b91607f16916102e7565b604051906000600254610324816102d8565b8085526001918083169081156103d05750600114610378575b5050829003601f01601f191682016001600160401b0381118382101761036257604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106103bc5750505050830101388061033d565b8054888601830152930192849082016103a7565b919250506020925060ff191682850152151560051b830101388061033d56fea164736f6c6343000810000a`,
  BytecodeLen: 1727,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
