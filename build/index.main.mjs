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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc1]
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v137 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v140 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:39:40:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v141 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:40:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v142 = stdlib.digest([ctc0, ctc0], [v141, v140]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v137, v142],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
      
      sim_r.txns.push({
        amt: v145,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v144, v145, v146, v154, v155, v141, v140],
    evt_cnt: 2,
    funcNum: 2,
    lct: v156,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
      
      ;
      const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, '4'), v155);
      const v171 = stdlib.safeAdd(v164, v170);
      const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, '3'));
      const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v177 = v174 ? v175 : v176;
      const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v179 = v173 ? v178 : v177;
      const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '0')];
      const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '1')];
      const v182 = stdlib.safeMul(v180, v145);
      sim_r.txns.push({
        kind: 'from',
        to: v144,
        tok: undefined /* Nothing */
        });
      const v187 = stdlib.safeMul(v181, v145);
      sim_r.txns.push({
        kind: 'from',
        to: v154,
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
    tys: [ctc3, ctc0, ctc1, ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
  ;
  const v167 = stdlib.addressEq(v144, v162);
  stdlib.assert(v167, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v168 = stdlib.digest([ctc0, ctc0], [v163, v164]);
  const v169 = stdlib.digestEq(v146, v168);
  stdlib.assert(v169, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, '4'), v155);
  const v171 = stdlib.safeAdd(v164, v170);
  const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, '3'));
  const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v177 = v174 ? v175 : v176;
  const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v179 = v173 ? v178 : v177;
  const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '0')];
  const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '1')];
  const v182 = stdlib.safeMul(v180, v145);
  ;
  const v187 = stdlib.safeMul(v181, v145);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v172), {
    at: './index.rsh:73:24:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:25:function exp)'],
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v145), {
    at: './index.rsh:49:25:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v153 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:50:48:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v144, v145, v146, v153],
    evt_cnt: 1,
    funcNum: 1,
    lct: v147,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v145, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
      
      sim_r.txns.push({
        amt: v145,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
  ;
  const v167 = stdlib.addressEq(v144, v162);
  stdlib.assert(v167, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v168 = stdlib.digest([ctc0, ctc0], [v163, v164]);
  const v169 = stdlib.digestEq(v146, v168);
  stdlib.assert(v169, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, '4'), v155);
  const v171 = stdlib.safeAdd(v164, v170);
  const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, '3'));
  const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v177 = v174 ? v175 : v176;
  const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v179 = v173 ? v178 : v177;
  const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '0')];
  const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, '1')];
  const v182 = stdlib.safeMul(v180, v145);
  ;
  const v187 = stdlib.safeMul(v181, v145);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v172), {
    at: './index.rsh:73:24:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:25:function exp)'],
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
  appApproval: `ByAFAAECCCAmAgEAACI1ADEYQQIKKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAE6SSQMQADVJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/SVbNfyABPMtCgw0/RZQNPwWULA0/zEAEkQ0A1coIDT9FjT8FlABEkQ0/IEENAOBaFsJCIEDGDX7gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPsiEk2AEAAAAAAAAAACAAAAAAAAAAA0+yQSTTX6sSKyATT6Ils0/guyCCOyEDT/sgezsSKyATT6JVs0/guyCCOyEDQDV0ggsgezQgCySCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFFzX8gATVFRkUNPwWULA0/ogA4jT/NP4WUDT9UDEAUDT8FlAoSwFXAHBnSCQ1ATIGNQJCAG9IgaCNBogAuCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIIDX+gAS03vNWNP8WUDT+ULA0/4gAiDEANP8WUDT+UChLAVcASGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v233","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v235","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T4","name":"v237","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000dcf9081380391601f1980601f85011683019360018060401b039284861084871117620003085781606092869260409889528339810103126200031e578351926200004e8462000323565b80518452602093858583015192868301938452015194868201958652436003558651918183018381108782111762000308578852600080935260049060ff825416620002f1577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a1518015908115620002e4575b5015620002cd5783513403620002b657875196620000fa8862000323565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117620002a357885283519586116200029057600254908782811c9216801562000285575b83831014620002725750601f811162000226575b508093601f8611600114620001be57505091839491849394620001b2575b50501b916000199060031b1c1916176002555b51610a8f9081620003408239f35b01519250388062000191565b600283528183209493928692918316915b888383106200020b5750505010620001f1575b505050811b01600255620001a4565b015160001960f88460031b161c19169055388080620001e2565b858701518855909601959485019487935090810190620001cf565b60028352818320601f870160051c81019183881062000267575b601f0160051c019087905b8281106200025b57505062000173565b8481550187906200024b565b909150819062000240565b634e487b7160e01b845260229052602483fd5b91607f16916200015f565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000dc565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003085760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c9081631377727414610553575080631e93b0f1146105355780638323075714610517578063ab53f2c6146104a35763c5ad55211461005e573861000f565b60603660031901126103e657600060405161007881610896565b52604051610085816108e2565b600435815260243560208201526044356040820152604051906100a7826108fd565b600082526040516100b7816108c7565b600081526000602082015260208301526040516100d3816108c7565b600081526000602082015260408301526040516100ef816108c7565b6000815260006020820152606083015260405161010b816108c7565b6000815260006020820152608083015260ff6004541661048a577f99d0576268bc0597b08348ce3a8c0a9c4dff75b1e20e1aad10265ffbaf6b08a96080604051338152835160208201526020840151604082015260408401516060820152a16002600054036104715761017c610918565b9060a0828051810103126103e65760a060405192610199846108fd565b6101a5602082016109cd565b845260408101516020850152606081015160408501526101c7608082016109cd565b60608501520151608083015280518015908115610465575b501561044c5734610433578151336001600160a01b039091160361041a576040820151602082015160408301516040519060208201928352604082015260408152610229816108e2565b5190200361040157604001516080820151600403600481116103eb578101908181116103eb5781106103e65760039006825260006020830151526002602080840151015260016040830151526001602060408401510152600260608301515260006020606084015101528151600281146000146103c45750600080808060608601515b8060808801526102cc60018060a01b0387511691516020880151906109f8565b908282156103bb575bf1156103a65760008080936103058294602080608060018060a01b036060850151169501510151910151906109f8565b908282156103b2575bf1156103a65760008055600060015561032860025461085c565b80610339575b602060405160008152f35b601f8111600114610351575060006002555b3861032e565b600260005261039690601f0160051c600080516020610a63833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6109e1565b600060208120816002555561034b565b6040513d6000823e3d90fd5b506108fc61030e565b506108fc6102d5565b6103d757600080808060208601516102ac565b600080808060408601516102ac565b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b905060015414386101df565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b346103e65760003660031901126103e6576000546104bf610918565b6040519182528160206040818301528251908160408401526000935b8285106104fe575050606092506000838284010152601f80199101168101030190f35b84810182015186860160600152938101938593506104db565b346103e65760003660031901126103e6576020600154604051908152f35b346103e65760003660031901126103e6576020600354604051908152f35b60403660031901126103e6578061056b600092610896565b52604051610578816108c7565b60043581526020908181019060248035835260ff60045416610846577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a763924606060405133815284518782015285516040820152a1600191826000540361082f576105df610918565b6060818051810103126103e6576040516105f8816108e2565b6106038783016109cd565b8152606060408301519288830193845201519260408201938452518015908115610824575b501561080c57815134036107f45760405192610643846108fd565b60008452878401966000885260408501906000825260608601926000845260808701956000875260018060a01b0380965116809852518a5251825233835251845260029788600055438855604051958a870152516040860152516060850152511660808301525160a082015260a0815260c081019160018060401b0392828110848211176107df5760405281519283116107cb57506106e2845461085c565b601f8111610790575b508490601f831160011461072d57928293918392600094610722575b50501b916000199060031b1c19161790555b60405160008152f35b015192508680610707565b90601f198316918560005283876000209360005b89888383106107795750505010610760575b505050811b019055610719565b015160001960f88460031b161c19169055848080610753565b868601518855909601959485019487935001610741565b6107bb908560005286600020601f850160051c8101918886106107c1575b601f0160051c01906109e1565b856106eb565b90915081906107ae565b634e487b7160e01b60009081526041600452fd5b50634e487b7160e01b60009081526041600452fd5b60405163100960cb60e01b8152600d60048201528490fd5b60405163100960cb60e01b8152600c60048201528490fd5b905085541488610628565b5060405163100960cb60e01b8152600b6004820152fd5b60405163100960cb60e01b8152600a6004820152fd5b90600182811c9216801561088c575b602083101461087657565b634e487b7160e01b600052602260045260246000fd5b91607f169161086b565b602081019081106001600160401b038211176108b157604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108b157604052565b606081019081106001600160401b038211176108b157604052565b60a081019081106001600160401b038211176108b157604052565b60405190600060025461092a8161085c565b8085526001918083169081156109ae5750600114610968575b5050829003601f01601f191682016001600160401b038111838210176108b157604052565b60026000908152602093509183600080516020610a638339815191525b83851061099a57505050508301013880610943565b805488860183015293019284908201610985565b919250506020925060ff191682850152151560051b8301013880610943565b51906001600160a01b03821682036103e657565b8181106109ec575050565b600081556001016109e1565b6000929183918115918215610a15575b505015610a125750565b80fd5b908092955060001904811182151516610a4e5780820294610a3a578404143880610a08565b634e487b7160e01b83526012600452602483fd5b634e487b7160e01b83526011600452602483fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 3535,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:70:11:after expr stmt semicolon',
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
