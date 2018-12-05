// --- Day 2: Inventory Management System ---
// You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

// Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

// "Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

// Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

// To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

// For example, if you see the following box IDs:

// abcdef contains no letters that appear exactly two or three times.
// bababc contains two a and three b, so it counts for both.
// abbcde contains two b, but no letter appears exactly three times.
// abcccd contains three c, but no letter appears exactly two times.
// aabcdd contains two a and two d, but it only counts once.
// abcdee contains two e.
// ababab contains three a and three b, but it only counts once.
// Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

// What is the checksum for your list of box IDs?


let arr = ['revtoubfniyhzsgxdowjwkqglp', 'revtcgbfniyhzsvxdomjwkqmlp', 'cevtcubfniyhqsgxdoakwkqmlp', 'revtcubfniyhzsgxdtavwkqmep', 'reutcuboniyhzmgxdoajwkqmlp', 'revtcubfniyhzsgxxqajmkqmlp', 'rwvtcvbfniyhzsgxdozjwkqmlp', 'qevtcbbfniyhzsgxdoljwkqmlp', 'rnvtcmbfniyhzsuxdoajwkqmlp', 'revtcubfsiyhzsgxdaaewkqmlp', 'revtcubfpiyhesgxhoajwkqmlp', 'revtcubfnivhzsuxdoljwkqmlp', 'retpcubwniyhzsgxdoajwkqmlp', 'revrcubfniyhzsgxdyajhkqmlp', 'revtcbbfniyhzsixdoajwvqmlp', 'revtcubfniyhzsgxdoanmkqmpp', 'jevtoubfnuyhzsgxdoajwkqmlp', 'rpwtcubfniehzsgxdoajwkqmlp', 'revhcubfniyhnsgxdoajwkxmlp', 'revtcubfniyhzswxdodjwkqvlp', 'reotcubfciyhzsgxdnajwkqmlp', 'revtcubfniyhzsgxdbatwsqmlp', 'rlvbcubfniyhzssxdoajwkqmlp', 'rentcubfnyyhzsgxdozjwkqmlp', 'revtcuufniyhasgxdohjwkqmlp', 'jevtcubfniyhxsgxdoajwkqwlp', 'ravtcubfnryhzfgxdoajwkqmlp', 'reltcubfnvyhzsgxdoajwkumlp', 'revtrubfnschzsgxdoajwkqmlp', 'uevtcubanichzsgxdoajwkqmlp', 'revtcubfniyhzdpxdoajwwqmlp', 'revtcubfhiyhzsgxdoajgkqplp', 'revtcubfniyxzygxdoajwkqmld', 'revtcunfniyfzsgxdoajwkqwlp', 'reqtcubfniyhzsgxdoajwfqmlj', 'revtcubfniyhzagedaajwkqmlp', 'revthuefniyhzsgxroajwkqmlp', 'revtcrbfodyhzsgxdoajwkqmlp', 'revtcubfniyhxsgxdlajwuqmlp', 'revtrubfnirhzsgxdokjwkqmlp', 'revtiubfniyhzagudoajwkqmlp', 'jevtcubfniyhusgxsoajwkqmlp', 'reetcubfniyhzsgxdoajvmqmlp', 'pestcubfniyhzsgxdoajwkqglp', 'revtcubfniyhzsgxdoiowkqalp', 'revscubfniyhzsgxdoajwkoplp', 'revtcubfnoyhzsgxdlajwkymlp', 'rkvtcubfniyhzsgxdoajzkqhlp', 'revtuubfniyhzsgxdojjwkqglp', 'revtcubmniyhzsgydoajwkzmlp', 'revtcybfnijhzsgxvoajwkqmlp', 'rxftcubfnkyhzsgxdoajwkqmlp', 'gertcubfniyhzsgxjoajwkqmlp', 'revtcabfniygzdgxdoajwkqmlp', 'levgcubfniyhzsgxdoalwkqmlp', 'revtcubfniyhzslxdofjwkqxlp', 'revtcybwniyhzsgxdoajwkqmlx', 'devtcubpniyhzsgqdoajwkqmlp', 'pevtcjbfniyhzsbxdoajwkqmlp', 'revtcubfeiehzsgxdoafwkqmlp', 'revwcubfniyhzsgxdoawekqmlp', 'revtcubfniyussgxdoawwkqmlp', 'revtcuafnczhzsgxdoajwkqmlp', 'revtaubfniyhusgxdoajwkqilp', 'revtcubfnidhzxgxdoajwkqmlt', 'revtcubfniyhzsexdmajwnqmlp', 'revtcubfnhyhzsgxdwxjwkqmlp', 'revtalbfniyhzsgxdoajwbqmlp', 'revtcubfniyazsgxdoajwkqcvp', 'rcvtcubfniyhzwgxdoajwkqmsp', 'revthubfniyhzxgxdoalwkqmlp', 'revtcubfniyazsoxgoajwkqmlp', 'revtcubkriyhzsgtdoajwkqmlp', 'revtcubfniyhzsgxgeajwgqmlp', 'heftcubfniypzsgxdoajwkqmlp', 'revtclbfniyhzsgxdowjnkqmlp', 'revtcubfnifhzsgxdoamwkqmhp', 'revncubfniyhzsgxdoxjwiqmlp', 'reitcurfniyhzsgxdoajwkrmlp', 'revtfmbfniyhzsgxdoajwkqmbp', 'revtcubfniahzsgxdoajwkqhtp', 'rejtcubfhiyhzsgxdoajwkqmfp', 'revtcuxfqiyhzsgxdoajwkqmlh', 'revtcuzfniwhzsgxdoajwkqmcp', 'revtcubfniyhzsmxdotjwkqmlx', 'revtcubfniyhzzgxmoajwkqulp', 'revtcuaffiyhzsgxdoajwkqmlj', 'revtcxbfniyhzsaxdoajwkqflp', 'revtjubfniyhzcrxdoajwkqmlp', 'revtcunfniyhzsgxdfajwoqmlp', 'revtcubfpiytzswxdoajwkqmlp', 'revtcubfniyhzsgxdorjwiqmtp', 'oevtcubfniyhzsgidoajwkqmlt', 'revccubzniyhztgxdoajwkqmlp', 'reircubfniwhzsgxdoajwkqmlp', 'revtcubfniyhzsgxhyajwkqvlp', 'revtcubfnpyhzsgxdoajwkvblp', 'revtduvfniyhzsixdoajwkqmlp', 'revtcebfniyhzsgydpajwkqmlp', 'revtcubftiyhzsgxwkajwkqmlp', 'revtcdbfniyuzsgxdoajlkqmlp', 'revtcubfnvydjsgxdoajwkqmlp', 'cevtcupfniypzsgxdoajwkqmlp', 'revtcubfniyhzsgoeonjwkqmlp', 'revtcsbfniyhzsgxdoyjwdqmlp', 'revtcubfriyhzugxdoakwkqmlp', 'revtcadfniohzsgxdoajwkqmlp', 'revrcubfniyhzsguxoajwkqmlp', 'ruvtcubfniyhzsxxdoahwkqmlp', 'aevtcubfniyhzsgcdoajwkqdlp', 'revtcubgniyhzwgxdoajpkqmlp', 'revtcubfniyhzegxdoajwkumsp', 'rlvtcubzniyhzsgxdoajwkqzlp', 'revtfubfniyhzxgbdoajwkqmlp', 'revtcubfniyszssxdoajwkymlp', 'revtcubfniyhzsgxdoarskzmlp', 'rewtcubfniyhzsgxdoajwkpmlh', 'revtcubbniyhzsfxdxajwkqmlp', 'yeitcubfniyhzsgxdrajwkqmlp', 'revtcubfniyhzsrxnoajwkemlp', 'revtcuefnqyhzsgxdoajwkqmbp', 'revtcubfniyhzsuxdoajwdqnlp', 'revtcujfnifhzsgxdoaswkqmlp', 'revtcuyfniyhzsgxdoaswklmlp', 'reeacubfniyhzsgxdoajwkqmfp', 'revtcubvniyhzsgxdoauwkqmls', 'revtpubkniyhzsgxdoajvkqmlp', 'revtcubfnpyhzsgxdoavnkqmlp', 'revtcobfnvyhzsfxdoajwkqmlp', 'gevtcubfniyhzsgxcoajwkqmld', 'rivtcubfniyhzqgxdpajwkqmlp', 'rettgubfngyhzsgxdoajwkqmlp', 'revtcuhfccyhzsgxdoajwkqmlp', 'rertarbfniyhzsgxdoajwkqmlp', 'rhftcybfniyhzsgxdoajwkqmlp', 'revtcvjfniyhzsgxboajwkqmlp', 'reetcubfnikhzsgxdoajwkqmsp', 'revtwubfniyhusgxdoajwkqelp', 'revtcdbfniyyzsgxdwajwkqmlp', 'revtcurfniyhzsgxduajwkqmtp', 'revtcuafneyhzsgxduajwkqmlp', 'rpvtcubfziyhzsgxdoajwkqmep', 'mevtcubfniyhzssxdoaywkqmlp', 'reptcubfniypzsgsdoajwkqmlp', 'revtcubfniyhnsgxdoajwcqelp', 'revtcutfniyhzsdxdoajwkqmlr', 'rpvtcuafniyhzsgxqoajwkqmlp', 'revncubfniyhzsgxdoajwkqkpp', 'rertcabfniyhzsgxdoejwkqmlp', 'revockbfniymzsgxdoajwkqmlp', 'revtsubfniyczsgxdoajwkqplp', 'revrcubpniyhzbgxdoajwkqmlp', 'revrculfniyhzsgxdoajwkrmlp', 'revtlubfniyhzsgxdiajhkqmlp', 'ravtcubfniyhzsgxdoajwftmlp', 'revtcunfxiyhzssxdoajwkqmlp', 'revscubfniypzsgxroajwkqmlp', 'mevtzubfniyhysgxdoajwkqmlp', 'reitcubfniyuzogxdoajwkqmlp', 'revycubfniyhwsgxdoajwkqmlg', 'revtcubfnyyhzsgxdoajwkomqp', 'zevtcutfniyhzsgxcoajwkqmlp', 'revtwubfniylzsgxdjajwkqmlp', 'oevtcubfniyhzsgxdoaowkzmlp', 'revtcubfniyhzsgxdxajwwqclp', 'revtcuafniyhzsgxdlacwkqmlp', 'revtcubfniyhzsgxdqrjlkqmlp', 'revmcubfnvyhzsgxduajwkqmlp', 'rgvvcubfniyhzxgxdoajwkqmlp', 'revtcubfniyhzsgxdoakwiqmlz', 'reztcubfniyhzsgxddajwnqmlp', 'revtcrbfnayhzsgxdoajwxqmlp', 'revtcuboncyxzsgxdoajwkqmlp', 'revtczbfniybxsgxdoajwkqmlp', 'yevtcubfniyhcsdxdoajwkqmlp', 'reztcmbfniyhzsgxcoajwkqmlp', 'restcubfliyhzsbxdoajwkqmlp', 'restcubkniyhzsgxdomjwkqmlp', 'reokhubfniyhzsgxdoajwkqmlp', 'rejtiubfniyhzsnxdoajwkqmlp', 'revtcubfuiyjzsgxdoajykqmlp', 'revscubfniyhzsixdoajwkqhlp', 'revtjuzfniyhzsgxdoajwkqilp', 'revtcubfziyhzsgxdoajhgqmlp', 'revtcubiniyhzsgldoacwkqmlp', 'revtcubfngyhisgxdoajwkqmkp', 'ruvtcubfniyhzsgxloajwkqplp', 'rtvtcubfniqbzsgxdoajwkqmlp', 'revtcubfniyhzegxdffjwkqmlp', 'revtcumsniyhzsgxdoajwkqmsp', 'rmvtcubfnhyhzsgxsoajwkqmlp', 'revtcbbfniyhzsgxdoajwkqzgp', 'rebtcjufniyhzsgxdoajwkqmlp', 'rephcubfniyhzvgxdoajwkqmlp', 'revtcpbfniyxzsgxdoajwkqmls', 'revjcubfniyizsgxdoajwkqmcp', 'revtcuqfniyhzsgxdoavwkqmdp', 'rettcubfniyhzsgxdoojwkqmbp', 'rkvtcubfmuyhzsgxdoajwkqmlp', 'revtcubcniyhzngxdoajlkqmlp', 'revxcubfpiyfzsgxdoajwkqmlp', 'revtcubfniyhzsgkkoajwklmlp', 'revtcubfniyhzsbxdoajwqqslp', 'zecycubfniyhzsgxdoajwkqmlp', 'revtcubfniyhzsggaoajwksmlp', 'revtcubffiyhzspxdoajwkqmmp', 'ruvtcubfniyhzsgxdoajwkamlu', 'revtcubfnmyhzsgxjoajwuqmlp', 'revtcubfniyhisgxdoajwkqjgp', 'revthubfniyhzsgxdoajwkeolp', 'ryvtgubfniyhzsgidoajwkqmlp', 'reitiubfniyhzsgxdoajwkqmbp', 'rektcubfniyhzsfxdoajpkqmlp', 'revbcubfniykzsgxdoajwkqwlp', 'revzyubfniyhzkgxdoajwkqmlp', 'ravtcubfniyhzsgxdoajwkhmap', 'revtcubfnfyhzsgxdvpjwkqmlp', 'rhvtcnbfnibhzsgxdoajwkqmlp', 'revtctbfniywzsgxroajwkqmlp', 'revtcubfniyhzsfmdoabwkqmlp', 'sevtcubfniynzsgxpoajwkqmlp', 'revtcnbfniyhzzgxdoajwzqmlp', 'revtcoofniyhzsgxdoajwkqmrp', 'revtcubfaiynysgxdoajwkqmlp', 'revtlubfniyizsnxdoajwkqmlp', 'revtcubfnwyzzsgxdoajwkqmzp', 'revtqubfjiyhzsgxdoajwkrmlp', 'revtaubfniyhpsgxdoajwkqilp', 'revncuufniwhzsgxdoajwkqmlp', 'revtcubfngyhisgxdoauwkqmlp', 'revtcubynqyhzdgxdoajwkqmlp', 'revtcubfniykzsgxdoyjwkqmla', 'revttubfniytzsghdoajwkqmlp', 'rerzcujfniyhzsgxdoajwkqmlp', 'revtcubtniydzsgxdoajwkpmlp', 'revecubfniyhzsvxsoajwkqmlp', 'revtcuvfniyhzsgsdaajwkqmlp', 'revtcubfniyxzsgxdoajtkzmlp', 'revtcukfxiyhzsgxdofjwkqmlp', 'revtcubfnayhzugxdqajwkqmlp', 'revtcbbfniyizsgxdoajwkqmop', 'revtcubfnzyhzsgxdoajwoqmpp', 'reitcnbfniyqzsgxdoajwkqmlp', 'rektcubfniyhzsgxdgijwkqmlp', 'revtcubfniyhpsaxdoajdkqmlp', 'ckvtcubfniyhzsgxeoajwkqmlp', 'revtcubfniyhzsgxdhajzknmlp', 'revscubfniyhrsgxdoajwwqmlp', 'revtcubfilyhzsgxdpajwkqmlp', 'fevtcubyniyhzsgxdoajwkqmpp'];

function checksum(arr) {
  let twoCountTruth = false;
  let threeCountTruth = false;
  let twoCount = 0;
  let threeCount = 0;
  let count = 0;
  //loop through the array
  for(let i = 0; i < arr.length; i++){
    console.log('BEGINNING THE OUTTER FOR LOOP');
    twoCountTruth = false;
    threeCountTruth = false;
    //split char into an array
    let charArr = arr[i].split('');
    //loop through the char in each term
      charArr.forEach(letter => {
        count = 0;

        for(let j = 0; j<charArr.length; j++){
          if(letter === charArr[j]){
            count++;
          }
        }

        if (count === 2){
          twoCountTruth = true;
          console.log('twoCount = ', twoCountTruth);
        }

        if (count === 3){
          threeCountTruth = true;
          console.log('threeCount = ', threeCountTruth);
        }
      })

      if (twoCountTruth){
        twoCount++;
        console.log('number of 2s = ', twoCount);
      }

      if (threeCountTruth) {
        threeCount++;
        console.log('number of 3s = ', threeCount)
      }
    console.log('ENDING THE OUTTER FOR LOOP')
  }
  return twoCount * threeCount;
}