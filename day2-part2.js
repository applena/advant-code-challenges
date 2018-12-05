// --- Part Two ---
// Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

// The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

// abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

// What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

let arr = ['revtoubfniyhzsgxdowjwkqglp', 'revtcgbfniyhzsvxdomjwkqmlp', 'cevtcubfniyhqsgxdoakwkqmlp', 'revtcubfniyhzsgxdtavwkqmep', 'reutcuboniyhzmgxdoajwkqmlp', 'revtcubfniyhzsgxxqajmkqmlp', 'rwvtcvbfniyhzsgxdozjwkqmlp', 'qevtcbbfniyhzsgxdoljwkqmlp', 'rnvtcmbfniyhzsuxdoajwkqmlp', 'revtcubfsiyhzsgxdaaewkqmlp', 'revtcubfpiyhesgxhoajwkqmlp', 'revtcubfnivhzsuxdoljwkqmlp', 'retpcubwniyhzsgxdoajwkqmlp', 'revrcubfniyhzsgxdyajhkqmlp', 'revtcbbfniyhzsixdoajwvqmlp', 'revtcubfniyhzsgxdoanmkqmpp', 'jevtoubfnuyhzsgxdoajwkqmlp', 'rpwtcubfniehzsgxdoajwkqmlp', 'revhcubfniyhnsgxdoajwkxmlp', 'revtcubfniyhzswxdodjwkqvlp', 'reotcubfciyhzsgxdnajwkqmlp', 'revtcubfniyhzsgxdbatwsqmlp', 'rlvbcubfniyhzssxdoajwkqmlp', 'rentcubfnyyhzsgxdozjwkqmlp', 'revtcuufniyhasgxdohjwkqmlp', 'jevtcubfniyhxsgxdoajwkqwlp', 'ravtcubfnryhzfgxdoajwkqmlp', 'reltcubfnvyhzsgxdoajwkumlp', 'revtrubfnschzsgxdoajwkqmlp', 'uevtcubanichzsgxdoajwkqmlp', 'revtcubfniyhzdpxdoajwwqmlp', 'revtcubfhiyhzsgxdoajgkqplp', 'revtcubfniyxzygxdoajwkqmld', 'revtcunfniyfzsgxdoajwkqwlp', 'reqtcubfniyhzsgxdoajwfqmlj', 'revtcubfniyhzagedaajwkqmlp', 'revthuefniyhzsgxroajwkqmlp', 'revtcrbfodyhzsgxdoajwkqmlp', 'revtcubfniyhxsgxdlajwuqmlp', 'revtrubfnirhzsgxdokjwkqmlp', 'revtiubfniyhzagudoajwkqmlp', 'jevtcubfniyhusgxsoajwkqmlp', 'reetcubfniyhzsgxdoajvmqmlp', 'pestcubfniyhzsgxdoajwkqglp', 'revtcubfniyhzsgxdoiowkqalp', 'revscubfniyhzsgxdoajwkoplp', 'revtcubfnoyhzsgxdlajwkymlp', 'rkvtcubfniyhzsgxdoajzkqhlp', 'revtuubfniyhzsgxdojjwkqglp', 'revtcubmniyhzsgydoajwkzmlp', 'revtcybfnijhzsgxvoajwkqmlp', 'rxftcubfnkyhzsgxdoajwkqmlp', 'gertcubfniyhzsgxjoajwkqmlp', 'revtcabfniygzdgxdoajwkqmlp', 'levgcubfniyhzsgxdoalwkqmlp', 'revtcubfniyhzslxdofjwkqxlp', 'revtcybwniyhzsgxdoajwkqmlx', 'devtcubpniyhzsgqdoajwkqmlp', 'pevtcjbfniyhzsbxdoajwkqmlp', 'revtcubfeiehzsgxdoafwkqmlp', 'revwcubfniyhzsgxdoawekqmlp', 'revtcubfniyussgxdoawwkqmlp', 'revtcuafnczhzsgxdoajwkqmlp', 'revtaubfniyhusgxdoajwkqilp', 'revtcubfnidhzxgxdoajwkqmlt', 'revtcubfniyhzsexdmajwnqmlp', 'revtcubfnhyhzsgxdwxjwkqmlp', 'revtalbfniyhzsgxdoajwbqmlp', 'revtcubfniyazsgxdoajwkqcvp', 'rcvtcubfniyhzwgxdoajwkqmsp', 'revthubfniyhzxgxdoalwkqmlp', 'revtcubfniyazsoxgoajwkqmlp', 'revtcubkriyhzsgtdoajwkqmlp', 'revtcubfniyhzsgxgeajwgqmlp', 'heftcubfniypzsgxdoajwkqmlp', 'revtclbfniyhzsgxdowjnkqmlp', 'revtcubfnifhzsgxdoamwkqmhp', 'revncubfniyhzsgxdoxjwiqmlp', 'reitcurfniyhzsgxdoajwkrmlp', 'revtfmbfniyhzsgxdoajwkqmbp', 'revtcubfniahzsgxdoajwkqhtp', 'rejtcubfhiyhzsgxdoajwkqmfp', 'revtcuxfqiyhzsgxdoajwkqmlh', 'revtcuzfniwhzsgxdoajwkqmcp', 'revtcubfniyhzsmxdotjwkqmlx', 'revtcubfniyhzzgxmoajwkqulp', 'revtcuaffiyhzsgxdoajwkqmlj', 'revtcxbfniyhzsaxdoajwkqflp', 'revtjubfniyhzcrxdoajwkqmlp', 'revtcunfniyhzsgxdfajwoqmlp', 'revtcubfpiytzswxdoajwkqmlp', 'revtcubfniyhzsgxdorjwiqmtp', 'oevtcubfniyhzsgidoajwkqmlt', 'revccubzniyhztgxdoajwkqmlp', 'reircubfniwhzsgxdoajwkqmlp', 'revtcubfniyhzsgxhyajwkqvlp', 'revtcubfnpyhzsgxdoajwkvblp', 'revtduvfniyhzsixdoajwkqmlp', 'revtcebfniyhzsgydpajwkqmlp', 'revtcubftiyhzsgxwkajwkqmlp', 'revtcdbfniyuzsgxdoajlkqmlp', 'revtcubfnvydjsgxdoajwkqmlp', 'cevtcupfniypzsgxdoajwkqmlp', 'revtcubfniyhzsgoeonjwkqmlp', 'revtcsbfniyhzsgxdoyjwdqmlp', 'revtcubfriyhzugxdoakwkqmlp', 'revtcadfniohzsgxdoajwkqmlp', 'revrcubfniyhzsguxoajwkqmlp', 'ruvtcubfniyhzsxxdoahwkqmlp', 'aevtcubfniyhzsgcdoajwkqdlp', 'revtcubgniyhzwgxdoajpkqmlp', 'revtcubfniyhzegxdoajwkumsp', 'rlvtcubzniyhzsgxdoajwkqzlp', 'revtfubfniyhzxgbdoajwkqmlp', 'revtcubfniyszssxdoajwkymlp', 'revtcubfniyhzsgxdoarskzmlp', 'rewtcubfniyhzsgxdoajwkpmlh', 'revtcubbniyhzsfxdxajwkqmlp', 'yeitcubfniyhzsgxdrajwkqmlp', 'revtcubfniyhzsrxnoajwkemlp', 'revtcuefnqyhzsgxdoajwkqmbp', 'revtcubfniyhzsuxdoajwdqnlp', 'revtcujfnifhzsgxdoaswkqmlp', 'revtcuyfniyhzsgxdoaswklmlp', 'reeacubfniyhzsgxdoajwkqmfp', 'revtcubvniyhzsgxdoauwkqmls', 'revtpubkniyhzsgxdoajvkqmlp', 'revtcubfnpyhzsgxdoavnkqmlp', 'revtcobfnvyhzsfxdoajwkqmlp', 'gevtcubfniyhzsgxcoajwkqmld', 'rivtcubfniyhzqgxdpajwkqmlp', 'rettgubfngyhzsgxdoajwkqmlp', 'revtcuhfccyhzsgxdoajwkqmlp', 'rertarbfniyhzsgxdoajwkqmlp', 'rhftcybfniyhzsgxdoajwkqmlp', 'revtcvjfniyhzsgxboajwkqmlp', 'reetcubfnikhzsgxdoajwkqmsp', 'revtwubfniyhusgxdoajwkqelp', 'revtcdbfniyyzsgxdwajwkqmlp', 'revtcurfniyhzsgxduajwkqmtp', 'revtcuafneyhzsgxduajwkqmlp', 'rpvtcubfziyhzsgxdoajwkqmep', 'mevtcubfniyhzssxdoaywkqmlp', 'reptcubfniypzsgsdoajwkqmlp', 'revtcubfniyhnsgxdoajwcqelp', 'revtcutfniyhzsdxdoajwkqmlr', 'rpvtcuafniyhzsgxqoajwkqmlp', 'revncubfniyhzsgxdoajwkqkpp', 'rertcabfniyhzsgxdoejwkqmlp', 'revockbfniymzsgxdoajwkqmlp', 'revtsubfniyczsgxdoajwkqplp', 'revrcubpniyhzbgxdoajwkqmlp', 'revrculfniyhzsgxdoajwkrmlp', 'revtlubfniyhzsgxdiajhkqmlp', 'ravtcubfniyhzsgxdoajwftmlp', 'revtcunfxiyhzssxdoajwkqmlp', 'revscubfniypzsgxroajwkqmlp', 'mevtzubfniyhysgxdoajwkqmlp', 'reitcubfniyuzogxdoajwkqmlp', 'revycubfniyhwsgxdoajwkqmlg', 'revtcubfnyyhzsgxdoajwkomqp', 'zevtcutfniyhzsgxcoajwkqmlp', 'revtwubfniylzsgxdjajwkqmlp', 'oevtcubfniyhzsgxdoaowkzmlp', 'revtcubfniyhzsgxdxajwwqclp', 'revtcuafniyhzsgxdlacwkqmlp', 'revtcubfniyhzsgxdqrjlkqmlp', 'revmcubfnvyhzsgxduajwkqmlp', 'rgvvcubfniyhzxgxdoajwkqmlp', 'revtcubfniyhzsgxdoakwiqmlz', 'reztcubfniyhzsgxddajwnqmlp', 'revtcrbfnayhzsgxdoajwxqmlp', 'revtcuboncyxzsgxdoajwkqmlp', 'revtczbfniybxsgxdoajwkqmlp', 'yevtcubfniyhcsdxdoajwkqmlp', 'reztcmbfniyhzsgxcoajwkqmlp', 'restcubfliyhzsbxdoajwkqmlp', 'restcubkniyhzsgxdomjwkqmlp', 'reokhubfniyhzsgxdoajwkqmlp', 'rejtiubfniyhzsnxdoajwkqmlp', 'revtcubfuiyjzsgxdoajykqmlp', 'revscubfniyhzsixdoajwkqhlp', 'revtjuzfniyhzsgxdoajwkqilp', 'revtcubfziyhzsgxdoajhgqmlp', 'revtcubiniyhzsgldoacwkqmlp', 'revtcubfngyhisgxdoajwkqmkp', 'ruvtcubfniyhzsgxloajwkqplp', 'rtvtcubfniqbzsgxdoajwkqmlp', 'revtcubfniyhzegxdffjwkqmlp', 'revtcumsniyhzsgxdoajwkqmsp', 'rmvtcubfnhyhzsgxsoajwkqmlp', 'revtcbbfniyhzsgxdoajwkqzgp', 'rebtcjufniyhzsgxdoajwkqmlp', 'rephcubfniyhzvgxdoajwkqmlp', 'revtcpbfniyxzsgxdoajwkqmls', 'revjcubfniyizsgxdoajwkqmcp', 'revtcuqfniyhzsgxdoavwkqmdp', 'rettcubfniyhzsgxdoojwkqmbp', 'rkvtcubfmuyhzsgxdoajwkqmlp', 'revtcubcniyhzngxdoajlkqmlp', 'revxcubfpiyfzsgxdoajwkqmlp', 'revtcubfniyhzsgkkoajwklmlp', 'revtcubfniyhzsbxdoajwqqslp', 'zecycubfniyhzsgxdoajwkqmlp', 'revtcubfniyhzsggaoajwksmlp', 'revtcubffiyhzspxdoajwkqmmp', 'ruvtcubfniyhzsgxdoajwkamlu', 'revtcubfnmyhzsgxjoajwuqmlp', 'revtcubfniyhisgxdoajwkqjgp', 'revthubfniyhzsgxdoajwkeolp', 'ryvtgubfniyhzsgidoajwkqmlp', 'reitiubfniyhzsgxdoajwkqmbp', 'rektcubfniyhzsfxdoajpkqmlp', 'revbcubfniykzsgxdoajwkqwlp', 'revzyubfniyhzkgxdoajwkqmlp', 'ravtcubfniyhzsgxdoajwkhmap', 'revtcubfnfyhzsgxdvpjwkqmlp', 'rhvtcnbfnibhzsgxdoajwkqmlp', 'revtctbfniywzsgxroajwkqmlp', 'revtcubfniyhzsfmdoabwkqmlp', 'sevtcubfniynzsgxpoajwkqmlp', 'revtcnbfniyhzzgxdoajwzqmlp', 'revtcoofniyhzsgxdoajwkqmrp', 'revtcubfaiynysgxdoajwkqmlp', 'revtlubfniyizsnxdoajwkqmlp', 'revtcubfnwyzzsgxdoajwkqmzp', 'revtqubfjiyhzsgxdoajwkrmlp', 'revtaubfniyhpsgxdoajwkqilp', 'revncuufniwhzsgxdoajwkqmlp', 'revtcubfngyhisgxdoauwkqmlp', 'revtcubynqyhzdgxdoajwkqmlp', 'revtcubfniykzsgxdoyjwkqmla', 'revttubfniytzsghdoajwkqmlp', 'rerzcujfniyhzsgxdoajwkqmlp', 'revtcubtniydzsgxdoajwkpmlp', 'revecubfniyhzsvxsoajwkqmlp', 'revtcuvfniyhzsgsdaajwkqmlp', 'revtcubfniyxzsgxdoajtkzmlp', 'revtcukfxiyhzsgxdofjwkqmlp', 'revtcubfnayhzugxdqajwkqmlp', 'revtcbbfniyizsgxdoajwkqmop', 'revtcubfnzyhzsgxdoajwoqmpp', 'reitcnbfniyqzsgxdoajwkqmlp', 'rektcubfniyhzsgxdgijwkqmlp', 'revtcubfniyhpsaxdoajdkqmlp', 'ckvtcubfniyhzsgxeoajwkqmlp', 'revtcubfniyhzsgxdhajzknmlp', 'revscubfniyhrsgxdoajwwqmlp', 'revtcubfilyhzsgxdpajwkqmlp', 'fevtcubyniyhzsgxdoajwkqmpp'];

function boxId(arr){
  let count = 0;
  let answerArr = [];
  let finalArr = [];

  for(let i = 0; i < arr.length; i++) {
    console.log('------------------------');
    console.log('entering the FIRST loop with ', arr[i]);
    for(let j = 1; j < arr.length; j++){
      count = 0;
      for(let k = 0; k < arr[i].length; k++){
        console.log('entering the THIRD loop with ', arr[i][k], 'and', arr[j][k] )
        if(arr[i][k] !== arr[j][k]){
          count ++
        }
        if (count === 2){
          console.log('no match');
          break;
        }
      }

        if(count === 1){
          console.log('match', arr[i], arr[j])
          answerArr.push(arr[i], arr[j]);
          return answerArr;
        }


    }
  }

  for(let i = 0; i < arr[0].length; i++){
    if(arr[0][i] === arr[1][i]){
      finalArr.push(arr[0][i]);
    }
  }

  return finalArr.join('');
}

console.log(boxId(arr));