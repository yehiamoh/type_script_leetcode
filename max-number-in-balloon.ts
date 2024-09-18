function maxNumberOfBalloons(text: string): number {
   let ballonMap = new Map<String,Number>([
      ['b', 1],
      ['a', 1],
      ['l', 2],
      ['o', 2],
      ['n', 1]
    ]);

    let textHash = new Map();
    for(let x of text){
      textHash.set(x,(textHash.get(x)||0)+1);
    }
    if(!textHash.has('b')||!textHash.has('a')||!textHash.has('b')||!textHash.has('l')||!textHash.has('o')||!textHash.has('n')){
      return 0;
    }else{
      return Math.min(textHash.get('b'),textHash.get('a'),Math.floor(textHash.get('l')/2),Math.floor(textHash.get('o')/2),textHash.get('n'));
    }    
};