const _0x29602a=_0x4505;function _0x4505(_0x482dfa,_0x5bbf74){const _0x598568=_0x5985();return _0x4505=function(_0x45058a,_0x5f4568){_0x45058a=_0x45058a-0x1be;let _0x25ae17=_0x598568[_0x45058a];return _0x25ae17;},_0x4505(_0x482dfa,_0x5bbf74);}(function(_0x4230d8,_0x465618){const _0x362a70=_0x4505,_0x37c665=_0x4230d8();while(!![]){try{const _0x1add73=parseInt(_0x362a70(0x1cd))/0x1*(parseInt(_0x362a70(0x1cc))/0x2)+parseInt(_0x362a70(0x1d3))/0x3*(-parseInt(_0x362a70(0x1ca))/0x4)+parseInt(_0x362a70(0x1c2))/0x5*(parseInt(_0x362a70(0x1d7))/0x6)+-parseInt(_0x362a70(0x1ce))/0x7+parseInt(_0x362a70(0x1be))/0x8+-parseInt(_0x362a70(0x1bf))/0x9*(-parseInt(_0x362a70(0x1d6))/0xa)+parseInt(_0x362a70(0x1c0))/0xb*(-parseInt(_0x362a70(0x1d5))/0xc);if(_0x1add73===_0x465618)break;else _0x37c665['push'](_0x37c665['shift']());}catch(_0x556e07){_0x37c665['push'](_0x37c665['shift']());}}}(_0x5985,0x66b21));import _0x5c173e from'fs';let timeout=0xea60,poin=0x1f4,handler=async(_0x1e5785,{conn:_0xa88de4,usedPrefix:_0x111abb})=>{const _0x48579d=_0x4505;_0xa88de4[_0x48579d(0x1d1)]=_0xa88de4[_0x48579d(0x1d1)]?_0xa88de4['tekateki']:{};let _0x554c13=_0x1e5785[_0x48579d(0x1cf)];if(_0x554c13 in _0xa88de4[_0x48579d(0x1d1)]){_0xa88de4[_0x48579d(0x1d2)](_0x1e5785[_0x48579d(0x1cf)],'❐┃لم\x20يتم\x20الاجابة\x20علي\x20السؤال\x20بعد┃❌\x20❯',_0xa88de4[_0x48579d(0x1d1)][_0x554c13][0x0]);throw![];}let _0x5af87a=JSON['parse'](_0x5c173e['readFileSync']('./src/game/qoran.json')),_0x14641f=_0x5af87a[Math['floor'](Math['random']()*_0x5af87a[_0x48579d(0x1c3)])],_0x732d52=_0x14641f['response'],_0xeba806=_0x732d52['replace'](/[A-Za-z]/g,'_'),_0x263b98=(_0x48579d(0x1c1)+_0x14641f[_0x48579d(0x1d0)]+_0x48579d(0x1c8)+(timeout/0x3e8)['toFixed'](0x2)+'❫ثــانـيـة*\x0a\x0a*❍⤪┇ الــجـائــزة ⚡ ❪\x20'+poin+_0x48579d(0x1d4))['trim']();_0xa88de4['tekateki'][_0x554c13]=[await _0xa88de4[_0x48579d(0x1d2)](_0x1e5785[_0x48579d(0x1cf)],_0x263b98,_0x1e5785),_0x14641f,poin,setTimeout(async()=>{const _0x3d7f70=_0x48579d;if(_0xa88de4[_0x3d7f70(0x1d1)][_0x554c13])await _0xa88de4[_0x3d7f70(0x1d2)](_0x1e5785['chat'],'\x20*『𒀭خلص \x20الوقت ┇𒀭』*\x0a\x20*❍⤪┇الاجـابـة💧↫ \x20'+_0x14641f[_0x3d7f70(0x1c9)]+'┇*',_0xa88de4[_0x3d7f70(0x1d1)][_0x554c13][0x0]);delete _0xa88de4[_0x3d7f70(0x1d1)][_0x554c13];},timeout)];};function _0x5985(){const _0x307a46=['chat','question','tekateki','reply','489GiJQRS','\x20❫ نــقـطـه*\x0a\x0a*『𝑬𝑹𝑰𝑵\x20𝑩𝑶𝑻』*\x0a\x0a','13775304TjmIor','1730uUGViF','79176xiERTz','6269592WFsKjL','12438pvuUJO','11ZUfErF','\x0a\x0aⷮ\x20','160YXNJDo','length','command','help','acertijo','tags','*\x0a\x0a*❍⤪┇ الــوقــت ⌚ ❪\x20','response','5572pURiPk','game','4022twVdFI','302GSikEw','1797159FvRDDR'];_0x5985=function(){return _0x307a46;};return _0x5985();}handler[_0x29602a(0x1c5)]=[_0x29602a(0x1c6)],handler[_0x29602a(0x1c7)]=[_0x29602a(0x1cb)],handler[_0x29602a(0x1c4)]=/^(دينيه|دين)$/i;export default handler;