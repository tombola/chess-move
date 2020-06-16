# Chess Move

Play chess on a real board remotely. 

I like playing chess on a real board, playing it on a screen takes most of the charm away for me. During covid lockdown I played chess a few times with a friend by calling out the moves over a call (eg Knight to C3) and each replicating that on out physical board. This works really well, **except** when something goes wrong, namely you hear A instead of E, or move the wrong piece to the right square. We got around some of this by using the phonetic alphabet, but still ended up with some inexplicable mismatches between our boards, which lead to givinbg up on games because retracing our steps was complicated.

This simple react app is intended to communicate moves between two remote players, in the least screeny and obstructive way, so that can play a game, notice when someone has moved, backtrack if still mess something else, and hopefully forget about the details.

## The second why

This is a bit over engineered isn't it? Couldn't you have refined your move calling instead? Yes, but I wanted to learn react hooks, jest and react testing library.

Made with create react app, uses firebase to store and sync moves and game state, intended to be used as a PWA.