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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
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
  
  
  const v81 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:21:50:application',
    fs: ['at ./index.rsh:19:13:application call to [unknown function] (defined at: ./index.rsh:19:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v81, v84],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v81, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v87, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v86);
  ;
  const v118 = stdlib.safeMul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:42:24:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v86), {
    at: './index.rsh:27:25:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v94 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:28:48:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v86, v87, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v86, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'), v96);
      const v102 = stdlib.safeAdd(v87, v101);
      const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, '3'));
      const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, '2'));
      const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, '0'));
      const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v108 = v105 ? v106 : v107;
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v110 = v104 ? v109 : v108;
      const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '0')];
      const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '1')];
      const v113 = stdlib.safeMul(v111, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v85,
        tok: undefined /* Nothing */
        });
      const v118 = stdlib.safeMul(v112, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v87, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v86);
  ;
  const v118 = stdlib.safeMul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:42:24:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
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
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAEIAiYCAAEAIjUAMRhBAYYoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAALUjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/0k1BRc1/oAE1RUZFDT+FlCwNP+IAUM0A4EoW4EENP4JCIEDGDX9gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0iEk2AEAAAAAAAAAACAAAAAAAAAAA0/SUSTTX8sSKyATT8Ils0/wuyCCOyEDQDVwAgsgezsSKyATT8JFs0/wuyCCOyEDEAsgezQgBUSIGgjQaIALkiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAIkxADT/FlA0/hZQKUsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v154","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v156","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806109ac9081380391601f1980601f85011683019360018060401b0392848610848711176102e75781606092869260409889528339810103126102fd5783519261004984610302565b8051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176102e7578852600080935260049060ff8254166102d0577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a15180159081156102c4575b50156102ad5783513403610296578751966100ee88610302565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117610283578852835195861161027057600254908782811c92168015610266575b838310146102535750601f811161020c575b508093601f86116001146101a95750509183949184939461019e575b50501b916000199060031b1c1916176002555b5161068e908161031e8239f35b01519250388061017e565b600283528183209493928692918316915b888383106101f257505050106101d9575b505050811b01600255610191565b015160001960f88460031b161c191690553880806101cb565b8587015188559096019594850194879350908101906101ba565b60028352818320601f870160051c810191838810610249575b601f0160051c019087905b82811061023e575050610162565b848155018790610230565b9091508190610225565b634e487b7160e01b845260229052602483fd5b91607f1691610150565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b905060015414386100d4565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b038211176102e75760405256fe608060409080825260048036101561001f575b505050361561001d57005b005b60003560e01c918263137772741461010f57505080631e93b0f1146100f057806383230757146100d15763ab53f2c61461005a578080610012565b346100cc5760003660031901126100cc57600054610076610550565b908251928391825260208181840152835180928401526000935b8285106100b3575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610090565b600080fd5b50346100cc5760003660031901126100cc576020906001549051908152f35b50346100cc5760003660031901126100cc576020906003549051908152f35b8390816003193601126100cc576001600160401b039060208101828111828210176104d0578352600090528151926101468461051f565b803584526020840160248035825284519560a08701878110868211176104bc5786526000875285516101778161051f565b6000815260006020820152602088015285516101928161051f565b60008152600060208201528688015285516101ac8161051f565b6000815260006020820152606088015285516101c78161051f565b6000815260006020820152608088015260ff8454166104a7577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815283516020820152855189820152a160016000540361049257610228610550565b6060818051810103126100cc57865195606087019081118782101761047e5787526020810151906001600160a01b03821682036100cc576060918752878101516020880152015190868601918252518015908115610472575b501561045d57602085015134036104485751915183038381116104345782019283831161042157505081106100cc576003900683526000602084015152600292836020808301510152600183820151526001602084830151015283606082015152600060206060830151015280518481146000146104005750600080808060608501515b80608087015261032560018060a01b038851169151602089015190610617565b908282156103f7575bf1156103ec576000806103508194602080608085970151015191015190610617565b8181156103e3575b3390f1156103d95760008055600060015561037382546104e5565b80610383575b6020825160008152f35b601f811160011461039c57506000602092555b82610379565b826000526001601f6020600020920160051c820191015b8181106103cd575050600060209281848120915555610396565b600081556001016103b3565b513d6000823e3d90fd5b506108fc610358565b82513d6000823e3d90fd5b506108fc61032e565b6104135760008080806020850151610305565b600080808086850151610305565b601190634e487b7160e01b600052526000fd5b50634e487b7160e01b600090815260118452fd5b50845163100960cb60e01b8152600d81850152fd5b50845163100960cb60e01b8152600c81850152fd5b90506001541488610281565b83604187634e487b7160e01b600052526000fd5b50845163100960cb60e01b8152600b81850152fd5b50845163100960cb60e01b8152600a81850152fd5b82604186634e487b7160e01b600052526000fd5b604185634e487b7160e01b6000525260246000fd5b90600182811c92168015610515575b60208310146104ff57565b634e487b7160e01b600052602260045260246000fd5b91607f16916104f4565b604081019081106001600160401b0382111761053a57604052565b634e487b7160e01b600052604160045260246000fd5b604051906000600254610562816104e5565b8085526001918083169081156105f857506001146105a0575b5050829003601f01601f191682016001600160401b0381118382101761053a57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106105e45750505050830101388061057b565b8054888601830152930192849082016105cf565b919250506020925060ff191682850152151560051b830101388061057b565b6000929183918115918215610634575b5050156106315750565b80fd5b90809295506000190481118215151661066d5780820294610659578404143880610627565b634e487b7160e01b83526012600452602483fd5b634e487b7160e01b83526011600452602483fdfea164736f6c6343000810000a`,
  BytecodeLen: 2476,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:11:after expr stmt semicolon',
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
