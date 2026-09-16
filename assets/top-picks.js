/**
 * Top picks: Stake.us always first; then 3 or 4 others chosen at random each page load.
 */
(function () {
  var grid = document.getElementById("top-picks-grid");
  if (!grid) return;

  var PINNED = {
    name: "Stake.us",
    href: "/other/stake-us.html",
    blurb: "Free $25 on signup"
  };

  var POOL = [
    { name: "DraftKings Casino", href: "/nj/draftkings.html", blurb: "Play $5 → 1,000 Flex Spins (new casino players)" },
    { name: "FanDuel Casino", href: "/nj/fanduel.html", blurb: "100% deposit match + 50 free spins" },
    { name: "Hard Rock Bet", href: "/nj/hard-rock.html", blurb: "100% deposit match + 50 free spins" },
    { name: "Caesars Palace Online", href: "/nj/caesars.html", blurb: "Deposit/wager $50+ → bonus spins (refer-a-friend)" },
    { name: "BetMGM", href: "/nj/betmgm.html", blurb: "Up to a $100 bonus on deposit" },
    { name: "Fanatics Casino", href: "/nj/fanatics.html", blurb: "Deposit $10, get $30" },
    { name: "Shuffle.us", href: "/other/shuffle-us.html", blurb: "Free $25 on signup" },
    { name: "Wow Vegas", href: "/other/wowvegas.html", blurb: "Earn $20 upon signup and first deposit" },
    { name: "Bovada", href: "/other/bovada.html", blurb: "Bet $10, get $30" },
    { name: "Ignition Casino", href: "/other/ignition.html", blurb: "300% welcome deposit bonus" },
    { name: "Rainbet", href: "/other/rainbet.html", blurb: "Free $25 on signup" }
  ];

  function randInt(max) {
    if (window.crypto && crypto.getRandomValues) {
      var buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = randInt(i + 1);
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function cardHtml(item) {
    return (
      '<div class="card" style="margin:0">' +
      "<h3><a href=\"" + item.href + "\">" + item.name + "</a></h3>" +
      '<p class="small">' + item.blurb + "</p>" +
      '<p><a class="btn" href="' + item.href + '">View guide</a></p>' +
      "</div>"
    );
  }

  // Total 4 or 5 cards (Stake + 3 or 4 random)
  var total = randInt(2) === 0 ? 4 : 5;
  var extra = total - 1;
  var rest = shuffle(POOL).slice(0, extra);
  var picks = [PINNED].concat(rest);

  grid.innerHTML = picks.map(cardHtml).join("");
})();
