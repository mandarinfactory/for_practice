import {a1, a2} from './a.js'
/*  
1. 꼭 상대경로로 적어야함!!! --> 이 script파일 기준으로! 
2. 같은 파일내 element면 ,로만 구별해서 같이 쓸수있다!
3. 유효scope가 묶어있다면 import할수 없다!
*/
import foo from './b.js'

console.log(a1, a2);
foo();